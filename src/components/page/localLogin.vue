<template>
  <div></div>
</template>

<script>
export default {
  mounted:function () {
    var authorUrl = this.$config.userAuthorizationUri;
    authorUrl = authorUrl + ('?' + this.$querystring.stringify({
      client_id:this.$config.clientId,
      response_type:this.$config.response_type,
      state:'123',
      redirect_uri:this.$config.redirect_uri, 
    }))
    window.location.href = authorUrl;
  }
}
</script>

<style>

</style>