<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
        @keyup.enter="getUsers"
      />&nbsp;<button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import pubsub from "pubsub-js";
import axios from "axios";
export default {
  name: "Searchs",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 请求前更新列表
    getUsers() {
      pubsub.publish("getList", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (response) => {
          pubsub.publish("getList", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          pubsub.publish("getList", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>