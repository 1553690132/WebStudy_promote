<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h2>放大十倍为:{{ bigSum }}</h2>
    <h2>我在{{ school }},学习{{ subject }}</h2>
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
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      selectNum: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit("ADD", this.selectNum);
    },
    decrement() {
      this.$store.commit("DECREMENT", this.selectNum);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.selectNum);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.selectNum);
    },
  },
  computed: {
    // 手写计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    // 借助 mapState生成计算属性,从state中读取数据！(对象写法)
    // ...mapState({
    //   he: "sum",
    //   xuexiao: "school",
    //   xueke: "subject",
    // }),
    // (数组写法 同名时使用)
    ...mapState(["sum", "school", "subject"]),

    // 借助 mapGetters生成计算属性，从getters中读取数据
    // ...mapGetters({bigSum:'bigSum'}),
    ...mapGetters(["bigSum"]),
  },
  mounted() {},
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>

computed: {
  // 对象写法
  ...mapGetters({
    demo1:'demo1',
    demo2:'demo2'
  })
  // 数组写法(同名)
  ...mapGetters(['demo1', 'demo2'])
}