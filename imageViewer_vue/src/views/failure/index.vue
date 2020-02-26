<template>
  <div class="resultView">

    <section class="result-container">
      <img
        class="result-icon"
        src="../../assets/images/common_defeat.svg"
        alt
      />
      <p class="result-remark">{{ $route.query.result ? $route.query.result : "失败" }}</p>
      <p class="result-detail">{{ $route.query.detail }}</p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Failure',
};
</script>

<style lang="scss" scoped>
@import '../../styles/result_view.scss';
</style>
