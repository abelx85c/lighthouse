<template>
  <div>
    <iframe id="myFrame" :src="src" frameborder="0" scrolling="yes"></iframe>
  </div>
</template>


<script>
console.log("@/component/ResumeItem.vue");

export default {
  name: "ResumeItem",
  components: {},
  data() {
    return {
      src: "https://abelx85c.github.io/resume/",
    };
  },
  mounted() {
    /**
     * iframe-寬高自適應顯示
     */
    const oIframe = document.getElementById("myFrame");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = Number(deviceWidth) - 50 + "px"; //數字是頁面佈局寬度差值 50
    oIframe.style.height = Number(deviceHeight) - 120 + "px"; //數字是頁面佈局高度差 120
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.myFrame {
  height: 100%;
  width: 100%;
}
</style>