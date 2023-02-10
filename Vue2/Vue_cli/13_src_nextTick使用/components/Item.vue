<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.down"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        @keyup.enter="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button @click="handleDelete(todo.id)" class="btn btn-danger">删除</button>
    <button
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
      class="btn btn-primary"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Item",
  // 接受todo对象
  props: ["todo"],
  methods: {
    handleCheck(id) {
      pubsub.publish("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm("确认删除?")) {
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点改变值
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (e.target.value.trim()) return alert("内容不能为空!");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
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