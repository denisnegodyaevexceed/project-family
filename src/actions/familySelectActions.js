import axios from 'axios'
import actions from '../constants/actionsType'


const getFamilyNames =() => {
    
        return function (dispatch) {
            dispatch({
                type: actions.GET_FAMILYNAMES_REQUEST,
            })
            const getNames = async () => {
                
                await axios('https://backend-family-budget.herokuapp.com/budget/all-familys').then((res) =>{
                        const {data} = res;
                        
                        console.log(data, 'dada')
                        dispatch({
                            type: actions.GET_FAMILYNAMES_SUCCESS,
                            payload: data,
                        })
                    }).catch((err) => {
                        dispatch({
                            type: actions.GET_FAMILYNAMES_ERROR,
                            error: true,
                            
                        })
                      });;
                 
            }
            getNames()
            
        }
    
    
}

const postFamilyId = ({budgetId, userId}, e, selectFamily) =>{
    return function (dispatch) {
        dispatch({
            type: actions.POST_FAMILYID_REQUEST,
        })
        async function signUp({budgetId, userId}, e, selectFamily) {
            e.preventDefault()
            try {
                await axios.post('https://backend-family-budget.herokuapp.com/user/request-in-family', {
                    budgetId,
                    userId
                })
                dispatch({
                    type: actions.POST_FAMILYID_SUCCESS,
                    payload: selectFamily,
                })
            } catch {
                dispatch({
                    type: actions.POST_FAMILYID_ERROR,
                     })
            }




        }
        signUp({budgetId, userId},  e, selectFamily)
    }
}

const allFamilySelectActions = {
    getFamilyNames,
    postFamilyId
}


export default allFamilySelectActions