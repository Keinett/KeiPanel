<template>
    <v-footer app class="pa-3">
        <v-spacer></v-spacer>
        <div>KeiPanel v{{version}}</div>
    </v-footer>
</template>

<script>
  import packageJson from '../../package'

  export default {
    name: 'Footer',
    computed: {
      version: function () {
        return packageJson.version
      }
    }
  }
</script>

<style scoped>

</style>