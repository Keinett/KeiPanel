<template>
    <v-layout align-center row wrap>
        <v-flex xs12 v-if="selectedServer">
            <v-card>
                <v-card-title>
                    <h2>{{ selectedServer.name }}</h2>
                    <v-spacer></v-spacer>
                    <v-btn color="warning" @click="">Restart</v-btn>
                    <v-btn color="error" @click="">Stop</v-btn>
                    <v-btn color="error" @click="">Force Stop</v-btn>
                </v-card-title>
                <hr>
                <v-card-text>
                    todo
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    name: 'Server',
    servers: [],
    computed: {
      serverId: function () {
        return this.$route.params.id
      },
      selectedServer: function () {
        return this.servers.find(item => item.id === this.serverId)
      }
    },
    mounted: function () {
      this.$store.dispatch('api/getServers').then(response => {
        this.servers = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped>

</style>
