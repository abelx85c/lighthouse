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
  mounted() {
    // ...
    openStreetMap = L.map("mapid", {
      center: [25.042474, 121.513729],
      // 可以嘗試改變 zoom 的數值
      // 筆者嘗試後覺得 18 的縮放比例是較適當的查詢範圍
      zoom: 18,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
    }).addTo(openStreetMap);
  },
};
</script>

<style lang="scss" scoped>
#mapid {
  height: 700px;
}
</style>