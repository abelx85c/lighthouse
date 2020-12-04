<template>
  <v-container>
    <v-main>
      <ListItem />
      <router-view />
    </v-main>
  </v-container>
</template>

<script>
console.log("@/views/ListPage.vue");

import ListItem from "@/components/ListItem.vue";

export default {
  name: "",
  components: {
    ListItem,
  },
};
</script>