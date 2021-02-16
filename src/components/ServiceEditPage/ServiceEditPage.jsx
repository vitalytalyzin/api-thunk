import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  changeServiceInfo,
  editServiceFailure,
  editServiceRequest,
  editServiceSuccess,
} from '../../actions/actionCreators';
import styled from './ServiceEditPage.module.css';

const ServiceEditPage = (props) => {
  const { match: { params } } = props;
  const dispatch = useDispatch();
  const { isLoading, error, serviceInfo } = useSelector(({ serviceEdit }) => serviceEdit);

  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      dispatch(editServiceRequest());

      await fetch(`${process.env.REACT_APP_API_URL}/${params.id}`)
        .then(response => response.json())
        .then(data => dispatch(editServiceSuccess(data)))
        .catch(error => dispatch(editServiceFailure(error)));
    };

    getData();
  }, [dispatch, params.id]);

  if (error) {
    return <div>Произошла ошибка</div>;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeServiceInfo(name, value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(editServiceRequest());

    await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceInfo),
    })
      .then(response => {
        if (response.ok) {
          history.push('/');
        }
      })
      .catch(error => dispatch(editServiceFailure(error)));
  };

  const handleClose = () => history.push('/');

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <fieldset disabled={isLoading} className={styled.formInner}>
        <label className={styled.label}>
          Название
          <input
            name="name"
            onChange={handleChange}
            value={serviceInfo.name}
          />
        </label>
        <label className={styled.label}>
          Стоимость
          <input
            name="price"
            onChange={handleChange}
            value={serviceInfo.price}
          />
        </label>
        <label className={styled.label}>
          Описание
          <input
            name="content"
            onChange={handleChange}
            value={serviceInfo.content}
          />
        </label>
        <button onClick={() => handleClose()}>Отмена</button>
        {isLoading ? (<button>...Минуточку</button>) : (<button>Сохранить</button>)}
      </fieldset>
    </form>
  );
};

export default ServiceEditPage;
