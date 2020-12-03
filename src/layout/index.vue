<template>
  <div id="app">
    <div>
      <BaseMain />
    </div>
  </div>
</template>

<script>
console.log("@/layout/index.vue");

//import BaseHeader from "@/layout/BaseHeader.vue";
// import BaseAside from "@/layout/BaseAside.vue";
import BaseMain from "@/layout/BaseMain.vue";
// import BaseFooter from "@/layout/BaseFooter.vue";

export default {
  name: "Layout",
  components: {
    //BaseHeader,
    // BaseAside,
    BaseMain,
    // BaseFooter,
  },
};
</script>

<style scoped>
#app {
  background-color: #000;
}
</style>