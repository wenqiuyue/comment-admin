<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import type from './commons/type';
export default {
  mounted(){
    this.getSite();
  },
  methods:{
    /**
     * 获取site信息
     */
    getSite(){
      let site = null;
      if (this.$route.query.SiteId) {
        site = this.$route.query.SiteId;
      } else {
        site = localStorage.getItem(type.SITEID);
      }
      this.$apiHttp.getWebSiteInfo({params:{id:site}}).then((resp)=>{
        if(resp.res==200){
          this.$store.dispatch("getSite", resp.data);
        }
      })
    }
  }
}
</script>

<style lang="less">
body,html{
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
