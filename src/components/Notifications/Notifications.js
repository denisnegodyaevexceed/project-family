import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import allNotificationsActions from "../../actions/notificationsActions";
import allSpendingActions from "../../actions/spendingActions";



export const Notifications = () => {
  const dispatch = useDispatch();
  const setSignIn = useSelector((state) => state.SignInReducer);
  
  useEffect(()=>{
    const headers = {
      headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` },
  };
  dispatch(allSpendingActions.getTableList(setSignIn.userInfo._id, headers));
  },[dispatch,setSignIn.userInfo._id])
  
  
  if (setSignIn.request.length === 0) {
    return <div>У вас нет уведомлений</div>;
  } else {
    return (
      <div>
        <Typography variant="h6" id="tableTitle" component="div">
          У вас запросов: {setSignIn.request.length}
        </Typography>
        <div className="form">
          {setSignIn.request.map((item, index) => (
            <div key={index}>
              <div className="user_not">
                <div className="item_user">Пользователь, {item.fullName}</div>
                <Button
                  onClick={(e) =>
                    dispatch(
                      allNotificationsActions.postNotificationsConnect(
                        setSignIn.userInfo.budget,
                        item.userId,
                        true,
                        setSignIn.userInfo._id,
                        e
                      )
                    )
                  }
                >
                  <div className="text">Принять</div>
                </Button>
                <Button
                  onClick={(e) =>
                    dispatch(
                      allNotificationsActions.postNotificationsConnect(
                        setSignIn.userInfo.budget,
                        item.userId,
                        false,
                        setSignIn.userInfo._id,
                        e
                      )
                    )
                  }
                >
                  <div className="text">Отклонить</div>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
