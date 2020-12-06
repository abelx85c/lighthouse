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
              <v-list-item>
                <v-list-item-title>Foo</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-container>

      <v-container>
        <v-main>
          <BaseMain />
        </v-main>
      </v-container>
    </v-app>
  </div>
</template>

<script>
console.log("@/layout/index.vue");

//import BaseHeader from "@/layout/BaseHeader.vue";
//import BaseAside from "@/layout/BaseAside.vue";
import BaseMain from "@/layout/BaseMain.vue";
// import BaseFooter from "@/layout/BaseFooter.vue";

export default {
  name: "Layout",
  components: {
    //BaseHeader,
    // BaseAside,
    BaseMain,
    // BaseFooter,
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