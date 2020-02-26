<template lang="html">
  <div v-if="isShowLoading" class="loading-container">
    <div class="loading-box">
      <img class="loading-img" :src="require('@/assets/images/loading.png')">
      <span class="loading-txt">{{ content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowLoading: false,
      content: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
.loading-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background: #e5e5e5;
}
.loading-img {
  width: 70px;
  height: 70px;
  animation: rotating 1.5s linear infinite;
}
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
.loading-txt {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  color: #666;
}
</style>