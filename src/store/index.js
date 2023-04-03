import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      status: true
    }
  },
  getters: {
    phoneHidden(state) {
      return state.count
    }
  },
  actions: {


  }
})
// import { defineStore } from 'pinia'

// const useStore = defineStore('storeId', {
//   // 推荐使用 完整类型推断的箭头函数
//   state: () => {
//     return {
//       // 所有这些属性都将自动推断其类型
//       counter: 0,
//       name: 'Eduardo',
//       isAdmin: true,
//     }
//   },
// })


export const myFile = async id => {

}

export const getMyFile = (id) => {
  if (id) {
    const list = []
    myFile.file(id).then(res => {
      if (!res.att) return list
      list.push = ('xx')
      //push
      return list
    })
  }
  return 'id不能为空'
}
