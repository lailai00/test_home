import * as types from './mutation-types'

export default {
  drawChart ({commit}, data) {
    commit(types.DRAW_CHART, data)
  },
  setTitle ({commit}, data) {
    commit(types.SET_TITLE, data)
  },
  setEngine ({commit}, data) {
    commit(types.SET_ENGINE, data)
  },
  setJson ({commit}, data) {
    commit(types.SET_JSON, data)
  },
  initial ({commit}, data) {
    commit(types.INITIAL, data)
  },
  setGenre ({commit}, data) {
    commit(types.SET_GENRE, data)
  },
  changePalette ({commit}, data) {
    commit(types.CHANGE_PALETTE, data)
  }
}
