import React, {Component} from 'react'
import styled from 'styled-components'

class PostBody extends Component {
  render() {
    const {currentComments, id, posts} = this.props;
    const post = posts.find(
      t => t.id === id
    );
    return (
      <Wrap>
        <Title>
          {post.title}
        </Title>
        <CommentNo>
          {currentComments.length} 评论
        </CommentNo>
      </Wrap>
    )
  }
}

export default PostBody

const Wrap = styled.div`
  background-color: #fff;
  width: 400px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .5);
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CommentNo = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-bottom: 2px solid deeppink;
`;

const Title = styled.div`
  text-align: center;
  font-size: 30px;
`;
