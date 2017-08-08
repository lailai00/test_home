import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  totalTime: 0,
  list: [],
  anychart: {},
  highchart: {},
  echart: {},
  props: {},
  chart: null,
  engine: 'highchart',
  genre: 'bar',
  chartInfo: null,
  currentPalette: '',
  // currentSeriesCount:10,
  currentTheme: '',
  theme: 'defaultTheme|defaultPalette',
  palette: 'defaultPalette'
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
