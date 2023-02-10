<template>
  <div class="container">
    <Category title="美食">
      <template slot-scope="games">
        <ul>
          <li v-for="(item, index) in games.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category>
      <template scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category>
      <template scope="games">
        <h3 v-for="(item, index) in games.games" :key="index">{{ item }}</h3>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "../../src/components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container,
.links {
  display: flex;
  justify-content: space-around;
}
</style>
