<template>
  <div id="homePage">
    首页
    <VanLoading :if-show-loading.sync="ifShowLoading" />
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      ifShowLoading: false
    };
  },
  mounted() {
    this.$loading.show();
  }
};
</script>
<style lang="scss" scoped>
</style>