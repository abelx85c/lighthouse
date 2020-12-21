<template>
  <div class="wrap">
    <center>
      <iframe id="myFrame" :src="url" frameborder="0" scrolling="yes"></iframe>
    </center>
  </div>
</template>


<script>
console.log("@/component/ResumeItem.vue");

export default {
  name: "ResumeItem",
  components: {},
  data() {
    return {
      url: "https://abelx85c.github.io/resume/",
    };
  },
  mounted() {
    /**
     * iframe-寬高自適應顯示
     */
    const oIframe = document.getElementById("myFrame");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = Number(deviceWidth) - 0 + "px"; //數字是頁面佈局寬度差值 50
    oIframe.style.height = Number(deviceHeight) - 0 + "px"; //數字是頁面佈局高度差 120
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  vertical-align: top;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  #myFrame {
    // top: 0;
    // left: 0;
    // float: left;
    // display: block;
  }
}
</style>