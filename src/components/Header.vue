<template>
    <v-toolbar app color="primary">
        <v-toolbar-title class="headline white--text">
            <span>KeiPanel</span>
        </v-toolbar-title>
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
    })
  }
</script>

<style scoped>

</style>