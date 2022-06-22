import axios from 'axios'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    setList(state, data) {
      state.list = data
    },
    addItem(state, data) {
      state.list.push(data)
    },
    deleteItem(state, id) {
      if (state.list.some((x) => x.id == id)) {
        state.list = state.list.filter((x) => x.id != id)
      }
    }
  },
  actions: {
    fetchList({ commit }) {
      axios.get('/src/db/types.json').then((res) => {
        commit('setList', res.data || [])
      })
    }
  },
  getters: {
    // _getListById: (state) => (id) => {
    //   return state.list.find((item) => item.id === id)
    // },
    _items: (state) => {
      return state.list
    }
  }
}
