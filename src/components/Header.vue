<template>
    <v-toolbar app color="primary">
        <v-toolbar-title class="headline white--text">
            <span>KeiPanel</span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script>
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