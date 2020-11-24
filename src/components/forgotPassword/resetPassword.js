import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import allResetPasswordActions from "../../actions/resetPasswordActions";
import { Redirect} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from "@material-ui/lab/Alert";
export default function ResetPassword() {
  const dispatch = useDispatch();
  const postResetPassword = useSelector((state) => state.resetPasswordReducer);
  const postForgotPassword = useSelector(
    (state) => state.forgotPasswordReducer
  );
  console.log(postResetPassword);
  const { id } = postForgotPassword;
  const { error, isFetching, password, confirmPassword } = postResetPassword;
  const validPassword = password.length > 7 || password.length === 0;
  const validConfirmPassword =
    password === confirmPassword && password.length === confirmPassword.length;
  if (id === "") {
    return <Redirect to="/signin" />;
  } else {
    return (
        <>{isFetching && <div className='loading'><CircularProgress className='loader' /></div>}
      <form
        onSubmit={(e) => {
          dispatch(
            allResetPasswordActions.postResetPassword({ password }, e, id)
          );
        }}
      >
        <TextField
          required
          value={password}
          error={!validPassword}
          helperText={!validPassword ? "Пароль сликшком короткий" : ""}
          label="Новый пароль"
          type="password"
          onChange={(e) => {
            dispatch(allResetPasswordActions.setResetPassword(e.target.value));
          }}
        />
        <TextField
          required
          value={confirmPassword}
          label="Повторите пароль"
          type="password"
          onChange={(e) => {
            dispatch(
              allResetPasswordActions.setResetConfirmPassword(e.target.value)
            );
          }}
          error={!validConfirmPassword}
          helperText={!validConfirmPassword ? "Пароли должны совпадать" : ""}
        />
        <Button
          type="submit"
          disabled={
            !(validPassword && validConfirmPassword) ||
            !(password && confirmPassword)
          }
        >
          Отправить
        </Button >
        {error && (
        <MuiAlert elevation={6} variant="filled" severity="error">
          Cервер не отвечает
        </MuiAlert>
      )}
      </form>
      </>
    );
  }
}
