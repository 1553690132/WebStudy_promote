<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fa8014c086e061d95092c106d70f40ad162d9ca78&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669104453&t=5030ec856d4b3ebc4a259259efaeec3b"
      />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <ul>
        <li v-for="(item, index) in films" :key="index">{{ item }}</li>
      </ul>
    </Category>
  </div>
</template>

<script>
import Category from "../components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "龙虾", "牛排"],
      games: ["红色警戒", "英雄联盟", "原神", "超级玛丽"],
      films: ["《拆弹专家》", "《教父》", "《JOJO》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>