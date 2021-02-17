import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchServices,
  removeServiceItem,
} from '../../actions/actionCreators';

const ServiceList = () => {
  const { isLoading, items, error } = useSelector(({ serviceList }) => serviceList);
  const servicesToRemove = useSelector(({ serviceRemove }) => serviceRemove);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (isLoading) {
    return <div>...Думаем</div>;
  }

  if (error) {
    return <div>Что-то пошло не так</div>;
  }

  const handleRemove = async (id) => {
    await dispatch(removeServiceItem(id));
    await dispatch(fetchServices());
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} {item.price}
          {servicesToRemove.includes(item.id) ? (
            <span>...минуточку</span>
          ) : (
            <>
              <Link to={`/service/${item.id}`}>change</Link>
              <button onClick={() => handleRemove(item.id)}>✕</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
