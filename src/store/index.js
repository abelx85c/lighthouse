import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  strict: true,
  state: {
    contents: []
  },
  mutations: {
    setContents(state, data) {
      // state.contens = data
      state.contents = data.map(item => {
        let temp = {
          name: item['據點名稱'],
          address: item['地址'],
          phone: item['連絡電話'],
          longitude: item['Y坐標'],//經度
          latitude: item['X坐標'],//緯度
        }
        //delete item['據點名稱']
        return temp
      })
    }
  },
  actions: {
    CONTENTS_READ: (context) => {
      return axios.get('https://datacenter.taichung.gov.tw/swagger/OpenData/bbddaa1a-68e2-4e9a-8a06-48fa59c85bce')
        .then((res) => {
          context.commit('setContents', res.data)
        })
    }
  },
  modules: {
  }
})