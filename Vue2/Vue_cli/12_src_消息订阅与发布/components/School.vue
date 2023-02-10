<template>
  <div class="demo">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      name: "哈师大",
      address: "哈尔滨",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log(data);
    },
  },
  mounted() {
    // 订阅消息
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    // 取消订阅
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: skyblue;
}
</style>

methods: {
  demo() {
    ...
  }
}

mounted() {
  this.pubId = pubsub.subscribe("消息名", this.demo)
},