<template>
  <div id="root">
    <div>
      <Banner />
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <router-link
              to="/about"
              class="list-group-item"
              active-class="active"
              >About</router-link
            >
            <router-link
              to="/home"
              class="list-group-item"
              active-class="active"
              >Home</router-link
            >
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>

<style>
</style>