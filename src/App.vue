<template>
    <v-app dark>
        <router-view name="header"></router-view>
        <v-content>
            <SnackbarDialog ref="snackbarDialog"></SnackbarDialog>
            <router-view/>
        </v-content>
        <router-view name="footer"></router-view>
    </v-app>
</template>

<script>
  import SnackbarDialog from './components/SnackbarDialog'

  export default {
    components: {
      SnackbarDialog,
    },
    name: 'App',
    data () {
      return {
        //
      }
    },
    beforeMount: function () {
      if (this.$store.state.token) {
        // reroute if logged in
        if (this.$route.name === 'default')
          this.$router.push({name: 'home'})
      }
    },
    mounted: function () {
      this.$root.$snackbarDialog = this.$refs.snackbarDialog

      if (this.$store.state.token) {
        //
      } else {
        this.$router.push({name: 'default'})
      }
    }
  }
</script>
