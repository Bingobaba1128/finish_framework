<template>
    <div>
    <v-head></v-head>
    <iframe src="static/dist/index.html" class="pc iframe" scrolling="auto" >
    </iframe>
    </div>
</template>

<script>

import vHead from '../common/Header'

export default {
    components: {
        vHead
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