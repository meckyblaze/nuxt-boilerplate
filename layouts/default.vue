<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="d-block d-md-none"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" color="white" app>
      <v-app-bar-nav-icon
        class="d-block d-md-none"
        @click.stop="drawer = !drawer"
      />
      <nuxt-link to="/" class="ml-15 logo-position">
        <nuxt-logo></nuxt-logo>
      </nuxt-link>
      <div
        class="d-md-flex d-none mx-auto"
      >
        <nuxt-link
          v-for="(link, index) in items"
          :key="index"
          :to="link.to"
          class="px-4 text-decoration-none"
          style="color: #333333"
        >{{ (link.title !== 'Create Account') ? link.title : null }}</nuxt-link>
        <v-btn
          text
          class="error mt-n2"
          to="/register"
        >Create Account</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import NuxtLogo from '../components/NuxtLogo';
export default {
  name: 'DefaultsLayout',
  components: {
    NuxtLogo
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-face-agent',
          title: 'Contact',
          to: '/contact',
        },
        {
          icon: 'mdi-login',
          title: 'Login',
          to: '/login',
        },
        {
          icon: 'mdi-account-plus-outline',
          title: 'Create Account',
          to: '/register'
        }
      ],
      right: true,
      title: 'Vuetify.js',
      miniVariant: false,
    }
  },
}
</script>

<style lang="scss" scoped>
  .logo-position {
    position: absolute;
  }
  .v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.1),0 4px 5px 0 rgba(0,0,0,.04),0 1px 10px 0 rgba(0,0,0,.02) !important;
  }
</style>
