import {combineReducers} from 'redux'
import comments from './comments'
import posts from './posts'
import counter from './counter'


const rootReducer = combineReducers({
  comments,
  posts,
  counter
});

export default rootReducer
