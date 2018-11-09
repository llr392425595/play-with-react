import {combineReducers} from 'redux'
import comments from './comments'
import posts from './posts'
import counter from './counter'
import todos from "./todos";


const rootReducer = combineReducers({
  comments,
  posts,
  counter,
  todos
});

export default rootReducer
