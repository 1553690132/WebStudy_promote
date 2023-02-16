<template>
  <div>
    <button @click="isShow = true">点击弹窗</button>
    <teleport to="body">
      <div class="mask" v-if="isShow">
        <div class="dialog">
          <h3>提醒</h3>
          <h4>内容</h4>
          <h4>内容</h4>
          <h4>内容</h4>
          <button @click="isShow = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.mask {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ghostwhite;
  border: 2px solid rgba(96, 155, 178, 0.7);
  border-radius: 6px;
}
</style>