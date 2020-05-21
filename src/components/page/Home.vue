<template>
    <div class="wrapper">
        <v-head></v-head>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-dashboard></v-dashboard>
        </div>
    </div>
</template>

<script>
    import vHead from '../common/Header.vue';
    import bus from '../../utils/bus';
    import vDashboard from './dashboard.vue'

    export default {
        data() {
            return {
                collapse: false
            };
        },
        components: {
            vHead,
            vDashboard
        },
        created() {
            // window.location.href = 'http://120.78.186.60:8087/oauth/authorize?client_id=erp_v&redirect_uri=http://192.168.137.98:8080&response_type=code&state=123'
            bus.$on('collapse-content', msg => {
                this.collapse = msg;
            });
        },

    };
</script>