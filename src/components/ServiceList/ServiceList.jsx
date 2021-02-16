import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchServicesSuccess, fetchServicesRequest, fetchServicesFailure,
} from '../../actions/actionCreators';

export const getData = async (dispatch) => {
  dispatch(fetchServicesRequest());

  await fetch(process.env.REACT_APP_API_URL)
    .then(response => response.json())
    .then(data => dispatch(fetchServicesSuccess(data)))
    .catch(error => dispatch(fetchServicesFailure(error)));
};

export const removeServiceItem = async (dispatch, id) => {
  await fetch(`${process.env.REACT_APP_API_URL}/${id}`, { method: 'DELETE' });
};

const ServiceList = () => {
  const { isLoading, items, error } = useSelector(({ serviceList }) => serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);


  if (isLoading) {
    return <div>...Думаем</div>;
  }

  if (error) {
    return <div>Что-то пошло не так</div>;
  }

  const handleRemove = async (id) => {
    await removeServiceItem(dispatch, id);
    await getData(dispatch);
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} {item.price}
          {isLoading

          }<Link to={`/service/${item.id}`}>change</Link>
          <button onClick={() => handleRemove(item.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
