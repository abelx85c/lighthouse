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
    //打API獲取資料
    this.$store.dispatch("CONTENTS_READ");

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

    //設置地圖釘選標記
    this.markMap();
  },

  methods: {
    markMap() {
      //在中興大學設一個標記
      //L.marker([24.123958, 120.677193]).addTo(openStreetMap);
      this.contents.forEach((item) => {
        //透過經緯度標記並點選後嗅出資訊
        L.marker([item.latitude, item.longitude]).addTo(openStreetMap)
          .bindPopup(`<p><strong style="font-size: 20px;">${item.name}</strong></p>
          地址: ${item.address}<br>
          電話: ${item.phone}<br>`);
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