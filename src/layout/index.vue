<template>
  <div id="app">
    <v-container>
      <v-container>
        <BaseHeader />
      </v-container>
      <v-container>
        <v-main>
          <BaseMain />
        </v-main>
      </v-container>
    </v-container>
  </div>
</template>

<script>
console.log("@/layout/index.vue");

import BaseHeader from "@/layout/BaseHeader.vue";
//import BaseAside from "@/layout/BaseAside.vue";
import BaseMain from "@/layout/BaseMain.vue";
// import BaseFooter from "@/layout/BaseFooter.vue";

export default {
  name: "Layout",
  components: {
    BaseHeader,
    //BaseAside,
    BaseMain,
    // BaseFooter,
  },
};
</script>

<style scoped>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>