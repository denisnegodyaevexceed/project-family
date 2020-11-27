import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

export const Notifications = () => {
    const setSignIn = useSelector((state) => state.SignInReducer);

    console.log(14,setSignIn.admin)
    if (setSignIn.request.length === 0){
        return(
            <div>У вас нет уведомлений</div>
        )
    }else{
    return (
        <div className="form">
            {setSignIn.request.map((item, index) => (
              <div key={index}>
                <div className='user_not'>
                  <div className='item_user'>Пользователь, {item.fullName}</div>
                  <Button><div className='text'>Принять</div></Button>
                  <Button><div className='text'>Отклонить</div></Button>
                </div>
                
              </div>
            ))}
        </div>
    )
}
}

