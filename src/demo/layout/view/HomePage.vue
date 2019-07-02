<template>
  <div class="home-box">
    <div class="header-bar">
      <el-button @click="toggleSideBar">toggle</el-button>
    </div>
    <div class="side-bar" :style="'width:' + model.page.sideWidth + 'px'">
      <ul>
        <li v-for="(item,index) in model.page.routers" :key="index">
          <router-link :to="item">{{item}}</router-link>
        </li>
      </ul>
    </div>
    <div class="tags-bar" :style="'margin-left:' + model.page.sideWidth + 'px'">

    </div>
    <div class="main-page" :style="'margin-left:' + model.page.sideWidth + 'px'">
        <img v-if="$route.path == '/'" :src="model.page.homeImg" alt="">
        <router-view>
        </router-view>
    </div>
    <page-loading :isLoading="$store.state.app.masking"></page-loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Service from '../service/HomeService';
import HomePage from '../model/HomePage';
import { CommonModel } from '@/demo/common/CommonModel';
import { PageLoading } from '@/demo/common/components';
@Component({
  components: {
    PageLoading,
  },
})
export default class Home extends Vue {
  private model: CommonModel<HomePage> = {
    $store: this.$store,
    $message: this.$message,
    page: {
        homeImg: require('@/assets/vue_mvc_designer.png'),
        sideWidth: 80,
        routers: ['/person_table', '/hello'],
    },
  };
  private service: Service = new Service(this.model);
  private toggleSideBar(): void {
    this.service.toggleSideBar();
  }
}
</script>

<style lang="scss" scoped>
.home-box {
  width: 100%;
  .header-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    width: 100%;
    background: gray;
  }
  .side-bar {
    position: fixed;
    margin-top: 80px; 
    top: 0;
    left: 0;
    bottom: 0;
    background:lightgray;
  }
  .tags-bar {
    position: fixed;
    margin-top: 80px;
    height: 50px;
    width: 100%;
    top: 0;
    left: 0;
    background: rgb(195, 223, 224);
  }
  .main-page {
    margin-top: 130px; 
    overflow: hidden;
    padding-right: 50px;
  }
  
}
</style>