<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" to="/home/news" active-class="active"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            to="/home/message"
            active-class="active"
            >Message</router-link
          >
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>