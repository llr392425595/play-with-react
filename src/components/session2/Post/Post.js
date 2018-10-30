import React, {Component} from 'react'
import PostBody from '../Postbody/PostBody'
import CommentBox from '../CommentBox/CommentBox'
import styled from 'styled-components'
import {connect} from 'react-redux'

class Post extends Component {
  render() {
    const {comments, match, posts} = this.props;
    const {id: postId} = match.params;
    const currentComments = comments.filter(
      item => item.postId === postId
    );
    return (
      <Wrap>
        <Upper>
          <PostBody id={postId} posts={posts} currentComments={currentComments}/>
        </Upper>
        <Bottom>
          <CommentBox postId={postId} currentComments={currentComments}/>
        </Bottom>
      </Wrap>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  posts: state.posts
});
export default connect(mapStateToProps)(Post)

const Wrap = styled.div``;

const Upper = styled.div`
  display: flex;
  background: #00bcd4;
`;

const Bottom = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, .1)
`;
