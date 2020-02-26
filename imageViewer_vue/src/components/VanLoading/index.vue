<template>
  <div v-show="ifShow" class="globalLoading">
    <div class="icon_wrap">
      <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
    </div>
  </div>
</template>

<script>
import * as loadingData from "@/assets/lottie/loading.json";
import * as rechargeData from "@/assets/lottie/rechargeData.json";

export default {
  name: "VanLoading",
  props: {
    ifShowLoading: {
      type: Boolean,
      default: false
    },
    effectType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      animationSpeed: 1,
      anim: {}
    };
  },
  computed: {
    defaultOptions() {
      return {
        animationData: this.effectType === 1 ? rechargeData : loadingData
      };
    },
    ifShow: {
      get() {
        return this.ifShowLoading;
      },
      set(val) {
        this.$emit("update:ifShowLoading", val);
      }
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>

<style lang="scss" scoped>
.globalLoading {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999 !important;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  .icon_wrap {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -300px 0 0 -200px;
  }
}
</style>
