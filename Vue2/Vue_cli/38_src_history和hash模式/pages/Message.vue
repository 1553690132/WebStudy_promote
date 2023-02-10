<template>
  <ul>
    <li v-for="message in messageList" :key="message.id">
      <router-link
        :to="{
          name: 'detail',
          params: {
            id: message.id,
            title: message.title,
          },
        }"
      >
        {{ message.title }}
      </router-link>
      &nbsp;&nbsp;
      <button @click="pushShow(message)" class="btn btn-warning">
        push查看
      </button>
      <button @click="replaceShow(message)" class="btn btn-danger">
        replace查看
      </button>
    </li>
    <hr />
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(message) {
      this.$router.push({
        name: "detail",
        query: {
          id: message.id,
          title: message.title,
        },
      });
    },
    replaceShow(message) {
      this.$router.replace({
        name: "detail",
        query: {
          id: message.id,
          title: message.title,
        },
      });
    },
  },
};
</script>

<style>
</style>

