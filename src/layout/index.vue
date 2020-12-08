<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-app-bar fixed color="blue" dark>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>

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
            <v-list-item-group v-model="group">
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

              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item>
                  <v-list-item-title>
                    <router-link to="/list">就業服務處清單</router-link>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>
                    <router-link to="/map">就業服務處地圖</router-link>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>
                    <router-link to="/resume">關於作者</router-link>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-title>資料來源</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-container>

      <v-container>
        <v-main>
          <router-view />
        </v-main>
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

export default {
  name: "Layout",
  data: () => ({
    drawer: false,
    group: null,
    selectedItem: 0,
    pageTitle: "找就業服務處",
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
a {
  color: #000;
  text-decoration: none;
}
</style>