<template>
  <div class="container">
    <Searchs />
    <List />
  </div>
</template>

<script>
import Searchs from "./components/Searchs.vue";
import List from "./components/List.vue";
export default {
  components: { Searchs, List },
};
</script>