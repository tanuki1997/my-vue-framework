// export default fileName => {
//   return import('@views/' + fileName)
// }

export default file => () => import(`@/views/${file}`)

