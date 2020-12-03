<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
//console.log("測試env檔讀到什麼 " + process.env.VUE_APP_API);
console.log("@/APP.vue");
export default {
  name: "app",
};
</script>

<style>
</style>