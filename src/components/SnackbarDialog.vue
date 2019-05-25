<template>
    <v-snackbar
            v-model="snackbar"
            :color="options.color"
            :timeout="options.timeout"
            :top="true"
    >
        {{ message }}
        <v-btn flat @click="snackbar = false">
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
  export default {
    name: 'SnackbarDialog',
    data: () => ({
      snackbar: false,
      message: '',
      options: {
        color: 'error',
        timeout: 6000,
      }
    }),
    methods: {
      open (message, options) {
        this.snackbar = true
        this.message = message
        this.options = Object.assign(this.options, options)
      }
    }
  }
</script>
