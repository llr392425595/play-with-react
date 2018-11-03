import React, {Component} from 'react'
import styled from 'styled-components'
import store from '../../../store'
import shortid from 'shortid'

class CommentBox extends Component {
  state = {
    text: ''
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  };

  submitCmt = (e) => {
    e.preventDefault();
    const {text} = this.state;
    if (text === '') {
      return false
    }
    const {postId, addComment} = this.props;
    const comment = {id: shortid(), text, postId};
    store.dispatch(addComment(comment));
    this.setState({
      text: ''
    })
  };

  render() {
    const cmtForm = (
      <FormWrap>
        <Input
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Button onClick={this.submitCmt}>提交</Button>
      </FormWrap>
    );

    const reversedComments = [...this.props.currentComments].reverse();
    const cmtList = reversedComments.map(
      t => <div key={t.id}>{t.text}</div>
    );

    return (
      <Wrap>
        {cmtForm}
        <CmtList>
          {cmtList}
        </CmtList>
      </Wrap>
    )
  }
}

export default CommentBox

const Wrap = styled.div`
  width: 400px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .5);
  height: 300px;
  min-height: 300px;
`;
const FormWrap = styled.div`
  display: flex;
  padding: 10px;
`;
const Input = styled.input`
  flex-grow: 1;
  height: 30px;
  line-height: 30px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  :focus {
    outline: none;
    border-bottom: 1px solid deeppink;
  }
`;
const Button = styled.div`
  background-color: deeppink;
  margin-left: 10px;
  padding: 0 10px;
  border: none;
  line-height: 30px;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
  color: white;
`;
const CmtList = styled.div`
  padding: 10px;
  div {
    line-height: 30px;
  }
`;
