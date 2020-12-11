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

        <v-navigation-drawer
          v-model="drawer"
          fixed
          left
          temporary
          prominent
          src="@/assets/image/background/kit.jpg"
          style="z-index: 9999"
        >
          <v-list nav dense rounded>
            <v-list-item-group>
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

              <v-list-item-group
                v-model="group"
                active-class="pink--text text--accent-4"
              >
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-avatar>
                  <router-link to="/list">就業服務處清單</router-link>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>mdi-map-marker</v-icon>
                  </v-list-item-avatar>
                  <router-link to="/map">就業服務處地圖</router-link>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-avatar>
                  <router-link to="/resume">關於作者</router-link>
                </v-list-item>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>mdi-flag</v-icon>
                  </v-list-item-avatar>
                  <a
                    href="https://datacenter.taichung.gov.tw/swagger/api-docs/"
                    target="_blank"
                    >資料來源</a
                  >
                </v-list-item>
              </v-list-item-group>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-container>

      <v-spacer></v-spacer>

      <v-container>
        <div>
          <v-main>
            <router-view />
          </v-main>
        </div>
      </v-container>

      <v-spacer></v-spacer>

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
    pageTitle: "找就業服務處",
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
a {
  color: #666;
  font-weight: bold;
  text-decoration: none;
}
</style>