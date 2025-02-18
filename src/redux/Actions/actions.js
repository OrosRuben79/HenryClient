import { POST_USER_CREATE, LOGIN_USER_JWT, DETAILS_DISH, GET_ALL_DISHES, POST_DISH_CREATE, GET_USER_WITH_JWT, FILTER, GET_LENGTH_CART, GET_USER_BY_ID, DELETE_USER, UPDATE_USER, LOGOUT } from './actionsTypes'
import axios from 'axios'
const URL = process.env.REACT_APP_URL || "http://localhost:3001/";

export function postUserCreate(payload) {
	return async function (dispatch) {
		try {
			const res = await axios.post(`http://localhost:3001/users`, payload)
			localStorage.setItem("token", res.data)
			return dispatch({ 
				type: POST_USER_CREATE, 
				payload: res 
			});
		} catch (error) {
			console.log("Error Redux action on post user create", error.response)
			return error.response
		}
	}
}

export const loginUserJWT = (data) => {
	return async (dispatch) => {
		try {
			const userJWT = await axios.post('http://localhost:3001/auth/login', data);
			localStorage.setItem("token", userJWT.data)
			return dispatch({
				type: LOGIN_USER_JWT
			})
		} catch (error) {
			console.log("Error Redux on login local", error.response)
			return error.response
		}
	}
}

export const getAllDishes = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${URL}foods`);
			return dispatch({
				type: GET_ALL_DISHES,
				payload: response
			})
		} catch (error) {
			console.log("Error Redux actions on get all dishes", error.message);
			return error
		}
	}
}
export const getFilterDishes = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${URL}foods`);
			console.log("response redux get filter dishes", response)
			return dispatch({
				type: FILTER,
				payload: response.data
			})
		} catch (error) {
			console.log("Error Redux actions on get all dishes", error.message);
			return error
		}
	}
}

export const detailsDish = (id) => {
	return async (dispatch) => {
		try {
			return dispatch({
				type: DETAILS_DISH,
				payload: id
			})
		} catch (error) {
			console.log("Error Redux actions on get details dish", error.message);
			return error
		}
	}
}

export function postDishCreate(payload) {
	return async function (dispatch) {
		try {
			const res = await axios.post(`http://localhost:3001/foods`, payload)
			dispatch({ type: POST_DISH_CREATE, payload: res.payload });
			return res
		} catch (error) {
			alert("Connection to /Post Dishes Failed. ERROR:" + error)
		}
	}
}

export const filtrar = (arr) => {
	return async dispatch => {
		return dispatch({ type: FILTER, payload: arr })
	}
}

export const validarUserJWT = (token) => {
	return async (dispatch) => {

		try {
			const user = await axios.post('http://localhost:3001/auth', token)
			return dispatch({
				type: GET_USER_WITH_JWT,
				payload: user.data.data
			})
			//console.log(user.data.data)
		} catch (error) {
			console.log(error)
		}
	}
}

export const getUserById = (id) => {
	return async dispatch => {
		try {
			const user = await axios.get(`${URL}auth/getUserById/${id}`)
			return dispatch({
				type: GET_USER_BY_ID,
				payload: user.data
			})
		} catch (error) {
			console.log("Error Redux action on get profile user by id", error)
		}
	}
}

export const getLengthCart = () => {
	return async dispatch => {
		const lengthCart = await JSON.parse(localStorage.getItem("dishes"));
		return dispatch({
			type: GET_LENGTH_CART,
			payload: lengthCart.length
		})

	}
}

export const deleteUser = (id) => {
	return async dispatch => {
		try {
			const deleteUser = await axios.delete(`${URL}users/${id}`)
			localStorage.removeItem("token")
			return dispatch({
				type: DELETE_USER,
				payload: deleteUser.data
			})
		} catch (error) {
			console.log("Error Redux action delete user", error);
			return error
		}
	}
}

export const updateUser = (id, data) => {
	return async dispatch => {
		try {
			const response = await axios.patch(`${URL}users/updateUser/${id}`, data)
			dispatch({
				type: UPDATE_USER,
				payload: response.data
			})
			return response
		} catch (error) {
			console.log("Error Redux action on update user", error.response);
			return error.response
		}
	}
}

export const logOut = () =>{
	return async dispatch => {
		dispatch({
			type: LOGOUT,
		})
	}
}