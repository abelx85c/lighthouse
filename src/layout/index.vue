<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-system-bar color="deep-purple darken-3"></v-system-bar>

        <v-app-bar color="deep-purple accent-4" dark prominent>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>My files</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-filter</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute left temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-app-bar color="cyan" te>
                <v-list-item-group color="white">
                  <v-list-item-content>
                    <v-list-item-title class="title"
                      >Web Demo</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >Vue Cli + Vuetify</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item-group>
              </v-app-bar>

              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-title>就業服務處清單</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>就業服務處地圖</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>關於作者</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>資料來源</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-container>

      <v-container>
        <div class="main">
          <v-main>
            <BaseMain />
          </v-main>
        </div>
      </v-container>

      <v-container>
        <v-footer fixed padless color="deep-purple accent-4">
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-footer>
      </v-container>
    </v-app>
  </div>
</template>

<script>
console.log("@/layout/index.vue");

import BaseMain from "@/layout/BaseMain.vue";

export default {
  name: "Layout",
  components: {
    BaseMain,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
</style>