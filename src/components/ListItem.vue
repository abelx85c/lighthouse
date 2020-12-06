<template>
  <!-- <ol>
    <li v-for="item in contents" :key="item.name">
      {{ item.name }}
      {{ item.address }}
      {{ item.phone }}
    </li>
  </ol> -->
  <v-list two-line>
    <template v-for="(item, index) in contents">
      <v-list-item :key="item.name">
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.address }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ item.phone }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="index < contents.length - 1" :key="index"></v-divider>
    </template>
  </v-list>
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