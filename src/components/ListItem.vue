<template>
<div>
  <v-list>
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

  <div class="cathand">
    <img src="@/assets/image/icon/cathand.png" alt="">
  </div>

</div>
</template>

<script>
console.log("@/component/ListItem.vue");

import $ from "jquery";

$(document).ready(()=>{
  
  $('.catass-close').click(()=>{
    $('.catass').animate({ 
      right:'-100%',
    }, 1500); 
  })
})


$(window).scroll(function(){
  var window_height = $( window ).height();
  var window_scrollTop = $(window).scrollTop();
  var document_height = $( document ).height();
  
  if(window_height + window_scrollTop == document_height){
    $('.cathand').animate({ 
      right:'0%',
    }, 500); 
  }

});

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
  margin:0;
  z-index:10;
  .catass {
    height:50%;
    width:50%; 
    padding: 0;
    margin:0;
    position: absolute;
    right:50%;
    top:10%;
    .catass-close {
      position: absolute;
      text-decoration:none;
    }

  }
}

.cathand {
    height:auto;
    width:50%; 
    padding: 0;
    margin:0;
    position: absolute;
    right:-100%;
    top:70%;
}

</style>