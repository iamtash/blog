import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

class PostList extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }
      
    render() {
        return <div>PostList</div>
    }
}

export default connect(null, { getPosts })(PostList)