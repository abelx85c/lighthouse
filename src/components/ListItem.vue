<template>
<div>
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

  <div class="full-screen">

    <div class="catass">
      <a href="#" class="catass-close">
        <img src="@/assets/image/icon/catass.png" alt="">
      </a>
    </div>
  </div>

</div>
</template>

<script>
console.log("@/component/ListItem.vue");

import $ from "jquery";

$(document).ready(()=>{
  
  $('.catass-close').click(()=>{
    $('.catass').animate({ 
      opacity: 0.4,
      right:'-100%',
    }, 1500); 
  })
})

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

<style lang="scss" scoped>

.full-screen {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:10;
  .catass {
    height:50%;
    width:50%; 
    padding: 0;
    position: absolute;
    right:50%;
    top:10%;
    .catass-close {
      position: absolute;
      text-decoration:none;
    }

  }
}




</style>