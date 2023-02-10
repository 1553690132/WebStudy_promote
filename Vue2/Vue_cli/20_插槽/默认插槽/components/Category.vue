<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽等待组件进行填充 -->
    <slot>未传递具体结构时，显示这行文字</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
  color: #fff;
}

img {
  width: 100%;
}
</style>