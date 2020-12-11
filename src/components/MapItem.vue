<template>
<div>
    <div id="mapid"></div>
</div>
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
      
      var myIcon = L.icon({
        //內部圖檔無法引用
        //iconUrl: 'src/assets/image/iconleaf-green.png',
        //iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
        iconUrl:'https://www.flaticon.com/svg/static/icons/svg/61/61637.svg',
        iconSize:     [50, 50], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
      //自定義marker icon test
      //L.marker([24.123958, 120.677193], {icon: myIcon}).addTo(openStreetMap);

      //在中興大學設一個標記
      //L.marker([24.123958, 120.677193]).addTo(openStreetMap);
      this.contents.forEach((item) => {
        //透過經緯度標記並點選後嗅出資訊
        L.marker([item.latitude, item.longitude], {icon: myIcon}).addTo(openStreetMap)
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