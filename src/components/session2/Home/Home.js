import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Home extends Component {
    render () {
        const { posts } = this.props
        const postList = posts.map(
          post => (
            <Link key={post.id} to={`/session2/post/${post.id}`}>
              {post.title}
            </Link>
          )
        )
        return (
          <div>
            {postList}
          </div>
        )}
  }

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home)