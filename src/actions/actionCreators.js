import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  EDIT_SERVICE_REQUEST,
  FETCH_SERVICES_FAILURE,
  EDIT_SERVICE_SUCCESS,
  EDIT_SERVICE_FAILURE,
  CHANGE_SERVICE,
  REMOVE_SERVICE, SAVE_CHANGE_SERVICE,
} from './actionTypes';

export const fetchServicesRequest = () => ({ type: FETCH_SERVICES_REQUEST });
export const fetchServicesSuccess = (items) => ({ type: FETCH_SERVICES_SUCCESS, payload: { items } });
export const fetchServicesFailure = (error) => ({ type: FETCH_SERVICES_FAILURE, payload: { error } });

export const removeService = (id) => ({ type: REMOVE_SERVICE, payload: { id } });
export const saveChangeService = () => ({ type: SAVE_CHANGE_SERVICE });

export const editServiceRequest = () => ({ type: EDIT_SERVICE_REQUEST });
export const editServiceSuccess = (serviceInfo) => ({ type: EDIT_SERVICE_SUCCESS, payload: { serviceInfo } });
export const editServiceFailure = (error) => ({ type: EDIT_SERVICE_FAILURE, payload: { error } });
export const changeServiceInfo = (name, value) => ({ type: CHANGE_SERVICE, payload: { name, value } });

export const fetchServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());

  await fetch(process.env.REACT_APP_API_URL)
    .then(response => response.json())
    .then(data => dispatch(fetchServicesSuccess(data)))
    .catch(error => dispatch(fetchServicesFailure(error)));
};

export const removeServiceItem = (id) => async (dispatch) => {
  dispatch(removeService(id));
  await fetch(`${process.env.REACT_APP_API_URL}/${id}`, { method: 'DELETE' })
    .catch(error => dispatch(fetchServicesFailure(error)));
};

export const fetchService = (urlId) => async (dispatch) => {
  dispatch(editServiceRequest());

  await fetch(`${process.env.REACT_APP_API_URL}/${urlId}`)
    .then(response => response.json())
    .then(data => dispatch(editServiceSuccess(data)))
    .catch(error => dispatch(editServiceFailure(error)));
};

export const fetchChangeService = (history) => async (dispatch, getState) => {
  const { serviceEdit: { serviceInfo } } = getState();

  dispatch(saveChangeService());

  await fetch(process.env.REACT_APP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(serviceInfo),
  })
    .then(response => {
      if (response.ok) {
        history.push('/');
        dispatch(saveChangeService());
      }
    })
    .catch(error => dispatch(editServiceFailure(error)));
}
