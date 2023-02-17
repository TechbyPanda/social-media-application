import * as UserApi from '../api/UserRequest'

export const updateUser = (id, formData)=>async(dispatch)=> {
  dispatch({type: "UPDATING_START"})
  try {
    const {data} = await UserApi.updateUser(id, formData)
    dispatch({type: "UPDATING_SUCCESS", data: data})
  } catch (error) {
    dispatch({type: "UPDATING_FAIL"})
  }
}

export const followeUser = (id, data) => async(dispatch)=> {
  dispatch({type: 'FOLLOW_USER'})
  UserApi.followeUser(id, data)
}

export const unFolloweUser = (id, data) => async(dispatch)=> {
  dispatch({type: 'UNFOLLOW_USER'})
  UserApi.unFolloweUser(id, data)
}