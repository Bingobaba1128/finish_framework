import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({

  state: {
    user: '',
    company: '',
    showCompany:false
  },

  getters: {
    
  },

  mutations: {
    addUserInfo(state,info) {
      state.user = info
    },
    getCompany(state){
      state.user.authorities.map( (item,index) => {
        if(item.parentId == '0'){
          window.console.log(item.displayName,index)
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
    getCompanyList(context){
      context.commit("getCompany")
    },
    showCompanyName(context) {
      context.commit("showComp")
      window.console.log('ooppppp')
    },
  }


})

export default store