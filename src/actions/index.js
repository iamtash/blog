import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const getPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(getPosts())

    // const userIds = _.uniq(_.map(getState().posts, 'userId')) // _.map returns a list of all the userIds, and then _.uniq returns a list of unique userIds
    // userIds.forEach(id => dispatch(getUser(id)))

    // lodash refactor of lines 7-8
    _.chain(getState().posts)
        .map('userId') // getState().posts passed as first arg, only have to include second arg
        .uniq()
        .forEach(id => dispatch(getUser(id)))
        .value() // execute the above steps
}

export const getPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({ type: 'GET_POSTS', payload: response.data })
}

export const getUser = id => async dispatch => {

    const reponse = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'GET_USER', payload: reponse.data })
}

// use memoization to prevent overfetching the same user multiple times
/* 
export const getUser = id => dispatch => _fetchUser(id, dispatch)
const _fetchUser = _.memoize(async (id, dispatch) => {
    const reponse = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'GET_USER', payload: reponse.data })
})
*/