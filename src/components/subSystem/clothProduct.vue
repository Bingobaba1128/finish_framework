<template>
    <div>
    <iframe  
      v-bind:src="reportUrl"
      class="pc iframe" scrolling="auto" >
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
  },
  data() {
    return {
      reportUrl: 'http://120.78.186.60:8081/',
      searchTableHeight: 0,
      searchTableWidth: 0
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