<template>
    <div class="wrapper">
        <v-head></v-head>
        <router-view></router-view>
    </div>
</template>

<script>
    import vHead from '../common/Header.vue';
    import bus from '../../utils/bus';

    export default {
        data() {
            return {
                collapse: false
            };
        },
        components: {
            vHead
        },
        created() {
            bus.$on('collapse-content', msg => {
                this.collapse = msg;
            });
        },

    };
</script>

<style>
    .wrapper {
      background-color: #f2f2f3;
    }
</style>