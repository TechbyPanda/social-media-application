import * as PostApi from '../api/PostRequest'

export const getTimelinePosts = (id) => async(dispatch) => {
  dispatch({type: "RETERIVING_START"})
  try {
    const {data} = await PostApi.getTimelinePosts(id);
    dispatch({type: "RETERIVING_SUCCESS", data: data})
  } catch (error) {
    dispatch({type: "RETERIVING_FAIL"})
    console.log(error)
  }
}