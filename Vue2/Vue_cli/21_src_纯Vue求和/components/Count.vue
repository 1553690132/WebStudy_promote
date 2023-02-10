<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <select v-model.number="selectNum">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">延迟增加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 0,
      selectNum: 1,
    };
  },
  methods: {
    increment() {
      this.sum += this.selectNum;
    },
    decrement() {
      this.sum -= this.selectNum;
    },
    incrementOdd() {
      this.sum = this.sum % 2 ? this.sum + this.selectNum : this.sum;
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.selectNum;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>