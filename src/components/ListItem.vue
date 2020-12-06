<template>
  <ol>
    <li v-for="item in contents" :key="item.name">
      {{ item.name }}
    </li>
  </ol>
</template>

<script>
console.log("@/component/ListItem.vue");

export default {
  data: () => ({}),
  computed: {
    contents() {
      return this.$store.state.contents;
    },
  },
  mounted() {
    this.$store.dispatch("CONTENTS_READ");
  },
};
</script>