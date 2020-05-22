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
    this.$token.deleteToken();
    var authorUrl = this.$config.userAuthorizationUri;
    authorUrl = authorUrl + ('?' + this.$querystring.stringify({
      client_id:this.$config.clientId,
      response_type:this.$config.response_type,
      state:this.$config.code,
      redirect_uri:this.$config.redirect_uri, 
    }))
    window.location.href = authorUrl; 
  }
}
</script>

<style>
</style>

