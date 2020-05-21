<template>
    <!-- 首页组件 -->
    
    <div style="width:98%; margin:15px auto">

        <!-- 第一部分 
                <el-row :gutter="10" type="flex" justify="center" style="margin:15px auto">
            <div class="datemanage"></div>
            <el-col :span="16" class="grid-content" style="height:350px">
                <el-row :gutter="10" type="flex" justify="center" >
                    <el-col :span="13">
                        <v-calendar></v-calendar>
                    </el-col>
                    
                    <el-col :span="11"><div class="grid-content ">
                        <p>在这里放置每日运势</p>
                    </div></el-col>
                </el-row>
                    

            </el-col>

            <el-col :span="8">
                <div class="grid-content">
                        <v-calendar></v-calendar>
                </div>
            </el-col>
        </el-row>
        -->
        <el-row :gutter="10" type="flex" justify="center" style="margin:15px auto">
            <div class="datemanage"></div>
            <el-col :span="16" class="grid-content" style="height:350px">
                <el-row style="width:90%">

                    <el-col :span="13">
                        <v-calendar></v-calendar>
                    </el-col>

                    <el-col :span="11">
                            <p style="padding-left:20px">在这里放置每日运势</p>
                    </el-col>
                </el-row>
                    

            </el-col>

            <el-col :span="8">
                <div class="grid-content">
                    
                </div>
            </el-col>
        </el-row>

        <!-- 这里使用Vue-cal插件 -->
        <!--
            <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="center" style="margin:10px auto">
            <el-col :span="16">
                <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="center" style="margin:10px auto">
                    <el-col :span="13">
                        <vue-cal class="vuecal--rounded-theme vuecal--green-theme"
                            xsmall
                            hide-view-selector
                            :time="false"
                            active-view="month"
                            :disable-views="['week']">
                        </vue-cal>
                    </el-col>
                    <el-col :span="11"><div class="grid-content "></div></el-col>
                </el-row>
                
            </el-col>
            <el-col :span="8"><div class="grid-content "></div></el-col>
        </el-row>
        -->

        <!-- 第二部分 -->
        <el-row :gutter="10" type="flex" justify="center" style="margin:15px auto">
            <el-col :span="24">
                <el-row :gutter="10" type="flex" justify="center" >
                    <el-col :span="24">
                            <v-message1></v-message1>           
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
                
    </div>
</template>

<script>
    import vCalendar from '../functionalComponent/calendar.vue'
    import vMessage1 from '../functionalComponent/tabMessage1.vue'

    // import VueCal from 'vue-cal'
    // import 'vue-cal/dist/vuecal.css'

    export default {
        components: {
            vCalendar,
            vMessage1
            //VueCal
        }
    };
</script>

<style>

.grid-content {
    background-color: #ffffff;
    border-radius: 4px;
    min-height: 150px;
    min-width: 100px;
    height:100%;
    justify-content:center;
    align-items:center;
    display:flex
}

.iframe {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: hidden;
}
</style>