<template>
    <v-app dark>
        <router-view name="header"></router-view>
        <v-content>
            <router-view/>
        </v-content>
        <router-view name="footer"></router-view>
    </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        //
      }
    },
    mounted: function () {
      if (this.$store.state.token) {
        //
      } else {
        this.$router.push({name: 'default'})
      }
    }
  }
</script>
