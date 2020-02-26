import jsonPlaceholder from '../apis/jsonPlaceholder'

export const getPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({ type: 'GET_POSTS', payload: response })
}