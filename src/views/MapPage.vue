<template>
  <v-container>
    <v-main>
      <MapItem />
      <router-view />
    </v-main>
  </v-container>
</template>

<script>
console.log("@/views/MapPage.vue");

import MapItem from "@/components/MapItem.vue";

export default {
  name: "",
  components: {
    MapItem,
  },
};
</script>