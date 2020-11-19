import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import signUpReducer from './authReducer'

export default combineReducers({
    tableReducer,
    signUpReducer
})


// import { combineReducers } from 'redux'
// import tableReducer from './tableReducer'
// import signUpReducer from './authReducer'


// const rootReducer = combineReducers({
//     tableReducer,
//     signUpReducer,
//    })

// export default rootReducer;