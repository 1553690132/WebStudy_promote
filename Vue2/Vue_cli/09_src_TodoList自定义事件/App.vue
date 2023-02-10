<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo="addTodo" />
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <Footer
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearTodo="clearTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Header, List, Footer },
  data() {
    return {
      // 初始化从本地存储取值
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加todo
    addTodo(item) {
      this.todos.unshift(item);
    },
    // 勾选or取消todo
    checkTodo(id) {
      this.todos.forEach((e) => {
        if (e.id === id) e.down = !e.down;
      });
    },
    // 删除Todo
    deleteTodo(id) {
      this.todos = this.todos.filter((e) => {
        return e.id !== id;
      });
    },
    // 全选or全不选
    checkAllTodo(down) {
      this.todos.forEach((e) => {
        e.down = down;
      });
    },
    // 清除所有已完成的Todo
    clearTodo() {
      this.todos = this.todos.filter((e) => {
        return !e.down;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>