import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
  } from './types';
  import axios from 'axios';
//   import createHistory from 'history/createBrowserHistory';
//   const history = createHistory();
  
  export const loginUser = ({email, password}) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
      axios.defaults.crossDomain = true;
      axios.post('http://localhost:8000/api/v1/signin/', {
        email: email,
        password: password
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        //browserHistory.push('/feature');
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: response
        });
  
  
  
      })
      .catch(() => loginUserFail(dispatch));
  
    };
  };
  
  const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
  const loginUserSuccess = (dispatch, token) => {
    return (dispatch, token) => {
      history.push('/feature');
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: token
      });
      // dispatch(push("/feature"));
      // <Redirect to="/feature"/>
    };
  
  };
  
  export const logoutUser = () => {
    return {
      type: LOGOUT_USER,
    };
  };