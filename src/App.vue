<template>
    <v-app dark>
        <router-view name="header"></router-view>
        <v-content>
            <SnackbarDialog ref="snackbarDialog"></SnackbarDialog>
            <AddTaskDialog ref="addTaskDialog"></AddTaskDialog>
            <router-view/>
        </v-content>
        <router-view name="footer"></router-view>
    </v-app>
</template>

<script>
  import SnackbarDialog from './components/SnackbarDialog'
  import AddTaskDialog from './components/AddTaskDialog'

  export default {
    components: {
      AddTaskDialog,
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
      this.$root.$addTaskDialog = this.$refs.addTaskDialog

      if (this.$store.state.token) {
        //
      } else {
        this.$router.push({name: 'default'})
      }
    }
  }
</script>
