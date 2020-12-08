<template>
  <div id="mapid"></div>
  <!-- <h1>@/components/MapItem</h1> -->
</template>

<script>
console.log("@/components/MapItem");

// L 代表 Leaflet
import L from "leaflet";

// 設定空物件
let openStreetMap = {};

export default {
  name: "MapItem",
  computed: {
    contents() {
      return this.$store.state.contents;
    },
  },
  mounted() {
    // ...
    openStreetMap = L.map("mapid", {
      //中心點設在中興大學
      center: [24.123958, 120.677193],
      //zoom縮放比例
      zoom: 11,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
    }).addTo(openStreetMap);

    this.$store.dispatch("CONTENTS_READ");
    this.markMap();
  },

  methods: {
    markMap() {
      //在中興大學設一個標記
      //L.marker([24.123958, 120.677193]).addTo(openStreetMap);
      this.contents.forEach((item) => {
        //透過經緯度疊加標記
        L.marker([item.latitude, item.longitude]).addTo(openStreetMap);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#mapid {
  height: 700px;
}
</style>