<template>
  <ul>
    <li v-for="message in messageList" :key="message.id">
      <!-- 跳转路由并携带query参数,to的字符串写法 -->
      <!-- <router-link
        :to="`/home/message/detail?id=${message.id}&title=${message.title}`"
      > -->
      <!-- 跳转路由并携带query参数,to的对象写法 -->
      <router-link
        :to="{
          name: 'detail',
          query: {
            id: message.id,
            title: message.title,
          },
        }"
      >
        {{ message.title }}
      </router-link>
      &nbsp;&nbsp;
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
};
</script>

<style>
</style>

