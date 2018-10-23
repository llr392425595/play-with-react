import React, { Component } from 'react'
import PostBody from '../Postbody/PostBody'
import CommentBox from '../CommentBox/CommentBox'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Post extends Component {
  render() {
    return (
      <Wrap>
        <Upper>
          <PostBody {...this.props}/>
        </Upper>
        <Bottom>
          <CommentBox {...this.props}/>
        </Bottom>
      </Wrap>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments
})
export default connect(mapStateToProps)(Post)

const Wrap = styled.div``

const Upper = styled.div`
  display: flex;
  background: #00bcd4;
`

const Bottom = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, .1)
`