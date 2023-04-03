import dayjs from 'dayjs'

const DEFAULT_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatTime(t, fmt) {
  return t ? dayjs(t).format(fmt || DEFAULT_TIME_FORMAT) : ''
}


export const addName = (name) => {
  return name + '222'
}



export default {

  addName
}
