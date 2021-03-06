const actions = {
    GET_TABLE_LIST_STARTED: "GET_TABLE_LIST_STARTED",
    GET_TABLE_LIST_SUCCESS: "GET_TABLE_LIST_SUCCESS",
    GET_TABLE_LIST_FAILURE: "GET_TABLE_LIST_FAILURE",

    SET_SIGNUP_EMAIL: "SET_SIGNUP_EMAIL",
    SET_SIGNUP_PASSWORD: "SET_SIGNUP_PASSWORD",
    SET_SIGNUP_CONFIRM_PASSWORD: "SET_SIGNUP_CONFIRM_PASSWORD",
    SET_SIGNUP_NAME: "SET_SIGNUP_NAME",
    SET_SIGNUP_ISREGISTER: "SET_SIGNUP_ISREGISTER",

    POST_SIGNUP_REQUEST: "POST_SIGNUP_REQUEST",
    POST_SIGNUP_SUCCESS: "POST_SIGNUP_SUCCESS",
    POST_SIGNUP_ERROR: "POST_SIGNUP_ERROR",

    POST_SIGNIN_REQUEST: "POST_SIGNIN_REQUEST",
    POST_SIGNIN_SUCCESS: "POST_SIGNIN_SUCCESS",
    POST_SIGNIN_ERROR: "POST_SIGNIN_ERROR",
    LOGOUT_USER: "LOGOUT_USER",
    CHECKED_TOKEN: "CHECKED_TOKEN",

    POST_NEW_SPENDING_STARTED: "POST_NEW_SPENDING_STARTED",
    POST_NEW_SPENDING_SUCCESS: "POST_NEW_SPENDING_SUCCESS",
    POST_NEW_SPENDING_FAILURE: "POST_NEW_SPENDING_FAILURE",

    PUT_EDIT_SPENDING_STARTED: "PUT_EDIT_SPENDING_STARTED",
    PUT_EDIT_SPENDING_SUCCESS: "PUT_EDIT_SPENDING_SUCCESS",
    PUT_EDIT_SPENDING_FAILURE: "PUT_EDIT_SPENDING_FAILURE",

    DEL_SPENDING_STARTED: "DEL_SPENDING_STARTED",
    DEL_SPENDING_SUCCESS: "DEL_SPENDING_SUCCESS",
    DEL_SPENDING_FAILURE: "DEL_SPENDING_FAILURE",

    SET_DATE_SPENDING: "SET_DATE_SPENDING",
    SET_NAME_SPENDING: "SET_NAME_SPENDING",
    SET_FAMILYNAME_SPENDING: 'SET_FAMILYNAME_SPENDING',
    SET_VALUE_SPENDING: "SET_VALUE_SPENDING",
    SET_IS_EDIT_SPENDING: "SET_IS_EDIT_SPENDING",
    SET_ID_SPENDING: "SET_ID_SPENDING",
    CLEAR_SPENDING_FORM: "CLEAR_SPENDING_FORM",
    SET_DELETE_SPENDINGS: "SET_DELETE_SPENDINGS",

    GET_SIGNIN_STARTED: "GET_SIGNIN_STARTED",
    GET_SIGNIN_SUCCESS: "GET_SIGNIN_SUCCESS",
    GET_SIGNIN_FAILURE: "GET_SIGNIN_FAILURE",

    SET_SIGNIN_EMAIL: "SET_SIGNIN_EMAIL",
    SET_SIGNIN_PASSWORD: "SET_SIGNIN_PASSWORD",

    SET_USER_SUCCES: 'SET_USER_SUCCES',
    SET_USER_ERROR: 'SET_USER_ERROR',

    SET_USER_BUDGET_ID: 'SET_USER_BUDGET_ID',

    GET_USER_STARTED: 'GET_USER_STARTED',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAILURE: 'GET_USER_FAILURE',
    FETCHING_SET_FALSE: 'FETCHING_SET_FALSE',


    POST_FORGOTPASSWORD_REQUEST: 'POST_FORGOTPASSWORD_REQUEST',
    POST_FORGOTPASSWORD_SUCCESS: 'POST_FORGOTPASSWORD_SUCCESS',
    POST_FORGOTPASSWORD_ERROR: 'POST_FORGOTPASSWORD_ERROR',

    SET_FORGOTPASSWORD_CLEAN: 'SET_FORGOTPASSWORD_CLEAN',

    SET_FORGOTPASSWORD_EMAIL: 'SET_FORGOTPASSWORD_EMAIL',

    POST_RESETPASSWORD_REQUEST: 'POST_RESETPASSWORD_REQUEST',
    POST_RESETPASSWORD_SUCCESS: 'POST_RESETPASSWORD_SUCCESS',
    POST_RESETPASSWORD_ERROR: 'POST_RESETPASSWORD_ERROR',

    SET_RESETPASSWORD_PASSWORD: 'SET_RESETPASSWORD_PASSWORD',
    SET_RESETCONFIRMPASSWORD_PASSWORD: 'SET_RESETCONFIRMPASSWORD_PASSWORD',

    POST_INVITE_STARTED: 'POST_INVITE_STARTED',
    POST_INVITE_SUCCESS: 'POST_INVITE_SUCCESS',
    POST_INVITE_FAILURE: 'POST_INVITE_FAILURE',
    CLEAR_INVITE_FORM: 'CLEAR_INVITE_FORM',

    GET_FAMILYNAMES_REQUEST: 'GET_FAMILYNAMES_REQUEST',
    GET_FAMILYNAMES_SUCCESS: 'GET_FAMILYNAMES_SUCCESS',
    GET_FAMILYNAMES_ERROR: 'GET_FAMILYNAMES_ERROR',

    POST_FAMILYID_REQUEST: 'POST_FAMILYID_REQUEST',
    POST_FAMILYID_SUCCESS: 'POST_FAMILYID_SUCCESS',
    POST_FAMILYID_ERROR: 'POST_FAMILYID_ERROR',

    POST_NOTIFICATIONS_REQUEST:'POST_NOTIFICATIONS_REQUEST',
    POST_NOTIFICATIONS_ERROR:'POST_NOTIFICATIONS_ERORR',
    POST_NOTIFICATIONS_SUCCESS:'POST_NOTIFICATIONS_SUCCESS',

};

export default actions;