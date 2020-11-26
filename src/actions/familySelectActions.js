import axios from 'axios'
import actions from '../constants/actionsType'


const getFamilyNames =() => {
    
        return function (dispatch) {
            dispatch({
                type: actions.GET_FAMILYNAMES_REQUEST,
            })
            const getNames = async () => {
                
                const response = await axios('https://backend-family-budget.herokuapp.com/budget/all-familys').then((res) =>{
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

const allFamilySelectActions = {
    getFamilyNames,
}

export default allFamilySelectActions