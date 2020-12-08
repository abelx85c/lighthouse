<template>
  <v-container>
    <v-main>
      <ResumeItem />
      <router-view />
    </v-main>
  </v-container>
</template>

<script>
console.log("@/views/ResumePage.vue");

import ResumeItem from "@/components/ResumeItem.vue";
export default {
  name: "",
  components: {
    ResumeItem,
  },
};
</script>