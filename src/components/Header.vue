<template>
    <v-toolbar app color="primary">
        <v-toolbar-title class="headline white--text">
            <span @click="goHome" :style="{ cursor: 'pointer'}">KeiPanel</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <span>{{ username }}</span>
        <v-toolbar-items>
            <v-btn icon v-if="$store.state.logged" @click="logout">
                <v-icon>fas fa-sign-out-alt</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  import store from '../store/store'
  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
  })
  export default {
    name: 'Header',
    data: () => ({
      images: {
        logo: require('../assets/logo.png')
      }
    }),
    computed: {
      username: function () {
        if (this.decodedToken)
          return this.decodedToken.username
        else
          return ''
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logout').then(() => {
          this.$router.push({name: 'default'})
        })
      },
      goHome() {
        if (this.$store.state.token)
          this.$router.push({name: 'home'})
      }
    }
  }
</script>

<style scoped>

</style>
