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
            bus.$on('collapse-content', msg => {
                this.collapse = msg;
            });
        },

    };
</script>