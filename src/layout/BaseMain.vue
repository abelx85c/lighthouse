<template>
  <v-container class="app-main">
    <v-main>
      <router-view />
    </v-main>
  </v-container>
</template>

<script>
console.log("@/layout/BaseMain.vue");

export default {
  name: "AppMain",
  computed: {},
};
</script>
