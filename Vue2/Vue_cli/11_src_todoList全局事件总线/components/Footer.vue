<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ complete }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["todos", "checkAllTodo", "clearTodo"],
  computed: {
    complete() {
      return this.todos.reduce(
        (pre, current) => (pre = current.down ? ++pre : pre),
        0
      );
    },
    total() {
      return this.todos.length;
    },
    isAll: {
      get() {
        return this.complete === this.total && this.total;
      },
      set(checked) {
        this.checkAllTodo(checked);
      },
    },
  },
  methods: {
    checkAll(event) {
      this.checkAllTodo(event.target.checked);
    },
    clearAll() {
      this.clearTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>