import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  EDIT_SERVICE_REQUEST,
  FETCH_SERVICES_FAILURE,
  EDIT_SERVICE_SUCCESS,
  EDIT_SERVICE_FAILURE, CHANGE_SERVICE,
} from './actionTypes';

export const fetchServicesRequest = () => ({ type: FETCH_SERVICES_REQUEST });
export const fetchServicesSuccess = (items) => ({ type: FETCH_SERVICES_SUCCESS, payload: { items } });
export const fetchServicesFailure = (error) => ({ type: FETCH_SERVICES_FAILURE, payload: { error } });

export const editServiceRequest = () => ({ type: EDIT_SERVICE_REQUEST });
export const editServiceSuccess = (serviceInfo) => ({ type: EDIT_SERVICE_SUCCESS, payload: { serviceInfo } });
export const editServiceFailure = (error) => ({ type: EDIT_SERVICE_FAILURE, payload: { error } });
export const changeServiceInfo = (name, value) => ({ type: CHANGE_SERVICE, payload: { name, value } });
