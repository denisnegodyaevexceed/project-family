import axios from "axios";
import actions from "../constants/actionsType";

const postNotificationsConnect = ( budgetId, userId, isJoin ,adminId, e) => {
  return function (dispatch) {
    dispatch({
      type: actions.POST_NOTIFICATIONS_REQUEST,
    });
    async function postNotifications(budgetId, userId, isJoin,adminId, e) {
      e.preventDefault();
      try {
        const { data: user } = await axios.post(
          "https://backend-family-budget.herokuapp.com/user/confirmation-to-family",
          {
            userId,
            isJoin,
            budgetId,
            adminId,
          }
        );
        
        dispatch({
          type: actions.POST_NOTIFICATIONS_SUCCESS,
          payload: user
        });
      } catch {
        dispatch({
          type: actions.POST_NOTIFICATIONS_ERROR,
        });
      }
    }
    postNotifications( budgetId, userId, isJoin ,adminId, e);
  };
};
const allNotificationsActions = {
postNotificationsConnect,

}
export default allNotificationsActions;
