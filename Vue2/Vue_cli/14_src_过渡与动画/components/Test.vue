<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="v1" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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

.v1-enter-active {
  animation: animate .5s;
}

.v1-leave-active {
  animation: animate .5s reverse;
}

@keyframes animate {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>