<template>
  <div>
    <div class="wrap">
      <div class="list">
        <v-list>
          <template v-for="(item, index) in contents">
            <v-list-item :key="item.name">
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.address }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ item.phone }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider
              v-if="index < contents.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </div>
    </div>

    <div class="full-screen">
      <div class="catass">
        <img src="@/assets/image/icon/catass.png" alt="" />
        <a href="#" class="catass-close">X</a>
      </div>
    </div>
  </div>
</template>

<script>
console.log("@/component/ListItem.vue");

import $ from "jquery";

$(document).ready(() => {
  $(".catass-close").click(() => {
    $(".catass").animate(
      {
        right: "-100%",
      },
      1500
    );
  });
});

//處理cathand動畫
$(window).scroll(function () {
  var window_height = $(window).height();
  var window_scrollTop = $(window).scrollTop();
  var document_height = $(document).height();

  if (window_height + window_scrollTop == document_height) {
    $(".cathand").animate(
      {
        right: "0",
      },
      500
    );
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
.wrap {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .list {
  }
}

.full-screen {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  .catass {
    padding: 0;
    margin: 0;
    position: absolute;
    right: 0%;
    top: 0%;
    .catass-close {
      color: #f00;
      background-color: #000;
      position: absolute;
      top: 30%;
      right: 30%;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      text-decoration: none;
    }
  }
}
</style>