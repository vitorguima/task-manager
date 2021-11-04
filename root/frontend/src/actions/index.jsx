export const USER_LOGIN = 'USER_LOGIN';

export const USER_LOGOUT = 'USER_LOGOUT';

export const submitLogin = (newUserData) => ({
  type: USER_LOGIN,
  newUserData,
})

export const submitLogout = () => ({
  type: USER_LOGOUT,
})
