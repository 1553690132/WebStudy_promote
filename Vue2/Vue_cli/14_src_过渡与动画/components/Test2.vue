<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear>
      <h1 v-show="isShow" key="k1">你好啊！</h1>
      <h1 v-show="!isShow" key="k2">LWH！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  color: #fff;
  background-color: orange;
}

/* 进入起点 = 离开终点*/
.v-enter,
.v-leave-to {
  transform: translateX(-100%);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s linear;
}

/* 进入终点 = 离开起点 */
.v-enter-to,
.v-leave {
  transform: translateX(0);
}
</style>