//
const USER_INFO_KEY = 'user_info'

//
export function setUserInfSession (userInfo) {
  return sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
}

export function getUserInfSession () {
  return JSON.parse(sessionStorage.getItem(USER_INFO_KEY))
}

export function removeUserInfSession () {
  sessionStorage.removeItem(USER_INFO_KEY)
}
