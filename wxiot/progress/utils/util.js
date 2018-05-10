const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return  [hour, minute, second].map(formatNumber).join(':')
}
const formatDay2 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [ month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const year = date => {
  const year = date.getFullYear()
  return [year]
}
const month = date => {
  const month = date.getMonth() + 1
  return [month]
}
const day = date => {
  const day = date.getDate()
  return [day]
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatDay2:formatDay2,
  year:year,
  month:month,
  day:day
}
