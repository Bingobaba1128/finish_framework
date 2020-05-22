import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({

  state: {
    user: '',
    company: '',
    showCompany:true,
    companyDetail:[]
  },

  getters: {

  },

  mutations: {
    addUserInfo(state,info) {
      state.user = info;
      state.user.authorities.map( (item) => {
        if(item.parentId == '0'){
          state.companyDetail.push(item)
        }
      })
    },

    showComp(state){
      state.showCompany = true
    } 
  },

  actions: {
    addUser (context,info){
      context.commit("addUserInfo",info)
    },
    showCompanyName(context) {
      context.commit("showComp")
    },

  }


})

export default store