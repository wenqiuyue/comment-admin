<template>
  <el-container class="container">
    <el-aside class="aside" :style="`width:${isCollapse ? 54 : 200}px`">
      <div class="logo" :style="`width:${isCollapse ? 54 : 200}px`">
        <el-image
          :class="isCollapse ? 'collapse_img' : 'collapse_n_img'"
          :src="require('../../assets/img/logo.png')"
          fit="scale-down"
        >
        </el-image>
      </div>
      <el-menu
        background-color="#304156"
        text-color="#bfcbd9"
        :default-active="path"
        :collapse="isCollapse"
        unique-opened
        router
      >
        <el-menu-item index="/Verification" class="menu_item" v-if="true">
          <svg-icon value="icon-shouye1" :size="1.1"></svg-icon>
          <span slot="title">Profile verification</span>
        </el-menu-item>
        <div v-if="false">
          <el-menu-item index="/home" class="menu_item">
            <svg-icon value="icon-shouye1" :size="1.1"></svg-icon>
            <span slot="title">Home</span>
          </el-menu-item>
          <el-menu-item index="/analystics" class="menu_item">
            <svg-icon value="icon-shuju1" :size="1.1"></svg-icon>
            <span slot="title">Analystics</span>
          </el-menu-item>
          <el-menu-item index="/reviews" class="menu_item">
            <svg-icon
              value="icon-pinglun"
              :size="1.2"
            ></svg-icon>
            <span slot="title">Reviews</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-aside>
    <el-container class="right_container">
      <el-header class="header">
        <div class="header_left">
          <span class="h_l_icon" @click="isCollapse = !isCollapse">
            <svg-icon
              :value="isCollapse ? 'icon-zhedie2' : 'icon-shouqi'"
              :size="1.2"
            ></svg-icon>
          </span>
          <div v-if="path=='/Verification'">baidu.com</div>
          <el-breadcrumb separator="/" v-else>
            <el-breadcrumb-item
              v-for="item in levelList"
              :key="item.path"
              v-if="item.meta.title"
              :to="item.redirect || item.path"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <div class="header_right">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar
                size="large"
                :src="require('../../assets/img/user-admin.png')"
              ></el-avatar>
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item disabled>admin</el-dropdown-item>
              <el-dropdown-item divided command="1">Set Up</el-dropdown-item>
              <el-dropdown-item command="2">Change Password</el-dropdown-item>
              <el-dropdown-item divided command="6">Log out</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import type from "../../commons/type";
export default {
  data() {
    return {
      isCollapse: false, //侧边栏是否收缩
      levelList: null, //面包屑
      user: null, //用户信息
      path:null, //当前路由
    };
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb();
      this.path=to.fullPath;
    },
  },
  mounted() {
    this.getBreadcrumb();
  },
  created() {
    this.user = JSON.parse(localStorage.getItem(type.USER));
    this.path = this.$route.fullPath;
  },
  methods: {
    /**
     * 头部下拉菜单
     */
    handleCommand(com) {
      if (com == 6) {
        this.$store.dispatch("logout");
        this.$router.replace({
          path: "/",
        });
      }else if(com == 2){
        this.$refs.passwordset.openDialog();
      } else if (com == 3) {
        this.$refs.aliapiset.openDialog();
      } else if(com == 4){
        this.$router.push('/home');
      }else if(com == 1){
        this.$refs.setup.openDialog();
      }
    },
    /**
     * 面包屑
     */
    getBreadcrumb() {
      if(this.path=='/Verification'){
        return;
      }else{
        let matched = this.$route.matched.filter((item) => item.meta.title);
        this.levelList = matched;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  .aside {
    background-color: #304156;
    .el-menu {
      border: none;
    }
    .logo {
      width: 100%;
      height: 60px;
      padding: 10px 0;
      line-height: 50px;
      background: #2b2f3a;
      text-align: center;
      .collapse_n_img {
        height: 100%;
        width: 100%;
        /deep/img {
          height: 100%;
        }
      }
      .collapse_img {
        height: 100%;
        width: 100%;
        /deep/img {
          height: auto;
          width: 100%;
          vertical-align: middle;
        }
      }
    }
    .menu_item {
      svg {
        margin-right: 8px;
      }
    }
  }
  .right_container {
    .header {
      height: 50px !important;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-left: 0;
      .header_left {
        height: 100%;
        line-height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .h_l_icon {
          padding: 0 15px;
          height: 100%;
          display: block;
          line-height: 59px;
          cursor: pointer;
          &:hover {
            background: #f9f9f9;
          }
        }
      }
      .header_right {
        .el-dropdown-link {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .main {
      padding: 0;
    }
  }
}
</style>
