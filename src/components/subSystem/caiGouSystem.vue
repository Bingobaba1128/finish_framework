<template>
    <div>
    <!-- <iframe src="static/hr_sys/index.html"  -->
    <iframe  
    v-bind:src="reportUrl"
    class="pc iframe" 
    scrolling="auto" 
    ref="framePage"
    @load="deliverToken">
    </iframe>
    </div>
</template>

<script>
export default {
  
  methods: {
    widthHeight() {
      this.searchTableHeight = window.innerHeight -146;
      this.searchTableWidth = window.innerWidth - 280
    },
     deliverToken () { 
       this.$refs.framePage.contentWindow.postMessage({type: 'token', data:this.$token.loadToken()}, '*')
    }

  },
  data() {
    return {
      // reportUrl: 'http://120.78.186.60:8097',
      // http://localhost:8097/
      reportUrl: 'http://localhost:8097/',
      searchTableHeight: 0,
      searchTableWidth: 0,
      token: '',
      isChildReady: false
    }
  },

  mounted() {
    window.onresize = () => {
      this.widthHeight(); // 自适应高宽度
    };
    this.$nextTick(function () {
      this.widthHeight();
    });
  },
  beforeMount() {
        addEventListener('message', function (evt) {
            if (evt.data.type !== 'childStatus') { return }
            this.isChildReady = evt.data.data
        })
    },
    watch: {
        isChildReady(isReady) {
            if (!isReady) { return }
            this.deliverToken()
        }
    }
}
</script>

<style>
.iframe {
    position: absolute;
    left: 0;
    right: 0;
    top: 70px !important;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: hidden;
}
</style>