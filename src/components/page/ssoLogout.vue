<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'ssologout',
  data () {
    return {
    }
  },
  methods:{
  },
  mounted:function () { 
    if(this.$token.loadToken().access_token !== "null"){      
      this.$token.deleteToken();
      window.location.href = "http://120.78.186.60:8087/logout"; 

    } 
    else {
      var authorUrl = this.$config.userAuthorizationUri;
      authorUrl = authorUrl + ('?' + this.$querystring.stringify({
        client_id:this.$config.clientId,
        response_type:this.$config.response_type,
        state:'123',
        redirect_uri:this.$config.redirect_uri, 
      }))
      window.location.href = authorUrl
    }
    
  }
}
</script>

<style>
</style>

