import {combineReducers} from 'redux'
import comments from './comments'
import posts from './posts'
import counter from './counter'
import todos from "./todos";
import filterMethod from "./todoFilter";


const rootReducer = combineReducers({
  comments,
  posts,
  counter,
  todos,
  filterMethod
});

export default rootReducer
