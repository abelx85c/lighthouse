<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-app-bar fixed color="blue" dark>
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

        <v-navigation-drawer v-model="drawer" fixed left temporary prominent>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="text-decoration-none"
            >
              <v-app-bar class="text-center" color="cyan" dark>
                <v-list-item-group>
                  <v-list-item-content>
                    <v-list-item-title class="title"
                      >Web Demo</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >Vue Cli & Vuetify</v-list-item-subtitle
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
        <v-footer fixed color="blue" dark prominent>
          <v-col class="text-center">
            {{ new Date().getFullYear() }} — <strong>Abel</strong>
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
.main {
}
</style>