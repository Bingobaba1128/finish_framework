<template>
  <div style="margin:15px 10px">
    <div id="weather-view-he"></div>
  </div>

</template>

<script>
export default {
  name: 'BIWeather.vue',
  created () {
    window.WIDGET = { ID: 'A7RF4cDTcL' };
    (function (d) {
      var cs = d.createElement('link')
      cs.rel = 'stylesheet'
      cs.href = 'https://apip.weatherdt.com/view/static/js/r.css?v=1111'
      var s = d.createElement('script')
      s.src = 'https://apip.weatherdt.com/view/static/js/r.js?v=1111'
      var sn = d.getElementsByTagName('script')[0]
      sn.parentNode.insertBefore(cs, sn)
      sn.parentNode.insertBefore(s, sn)
    })(document)
  }
}
</script>

<style>
  .wv-nb-row{
    display: none;
  }
</style>
