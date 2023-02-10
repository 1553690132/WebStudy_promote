<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.down"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button @click="handleDelete(todo.id)" class="btn btn-danger">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  // 接受todo对象
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    handleCheck(id) {
      // 改变对应down值
      this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm("确认删除?")) {
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  transition: all 0.3s linear;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>