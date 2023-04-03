export function getData(data) {
  let map = new Map()
  data.forEach(e => {
    let day = e.passTime.split(' ')
    map.set(e.userId + day[0], e)
  })
  return [...map.values()]

}
