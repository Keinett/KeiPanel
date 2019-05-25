<template>
  <v-container grid-list-md>
    <v-layout align-center row wrap>
        <v-flex xs12>
            <v-card v-if="server">
                <v-card-title>
                    <h2>{{ server.name }}</h2>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="fixPerms(server.id, server.name)">Fix Perms</v-btn>
                    <v-btn color="warning" @click="restartServer(server.id, server.name)">Restart</v-btn>
                    <v-btn color="error" @click="">Stop</v-btn>
                </v-card-title>
                <hr>
                <v-card-text>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-textarea
                          name="logbox"
                          label="Server log"
                          :value="logs"
                          readonly
                        ></v-textarea>
                      </v-flex>
                      <v-form ref="cmdForm" @submit.prevent="sendCmd">
                        <v-flex xs12>
                          <v-text-field
                            name="cmdbox"
                            v-model="consoleCmd"
                            label="Console Command"
                          ></v-text-field>
                        </v-flex>
                      </v-form>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Server',
    data: () => ({
      server: null,
      logs: '',
      consoleCmd: '',
    }),
    computed: {
      serverId: function () {
        return this.$route.params.id
      },
    },
    methods: {
      sendCmd () {
        this.socket.emit('write_serverlog', this.consoleCmd)
        this.consoleCmd = ''
      },
      restartServer (id, name) {
        const data = { toRestartID: this.server.id, toRestartName: this.server.name }
        this.$store.dispatch('api/restartServer', data).then(response => {
          this.$root.$snackbarDialog.open(response.data.msg, { color: 'success' })
        }).catch(error => {
          this.$root.$snackbarDialog.open(error.response.data.msg, { color: 'error' })
        })
      },
      fixPerms (id, name) {
        const data = { toRestartID: id, toRestartName: name }
        this.$store.dispatch('api/fixPerms', data).then(response => {
          this.$root.$snackbarDialog.open(response.data.msg, { color: 'success' })
        }).catch(error => {
          this.$root.$snackbarDialog.open('error fixing permissions', { color: 'error' })
        })
      },
      unsub () {
        this.socket.emit('unsubscribe_serverlog')
      }
    },
    beforeMount: function () {
      this.$store.dispatch('api/getServers').then(response => {
        const servers = response.data
        this.server = servers.find(item => item.id == this.$route.params.id)
      }).catch(error => {
        this.$root.$snackbarDialog.open(error.response.data.msg, { color: 'error' })
      })
    },
    mounted: function () {
      this.socket.on('server_log', (response) => {
        console.log(response)
        if (response == "clear_server_logs")
          this.logs = ''
        this.logs += `${response}\n`
      })
      this.socket.emit('subscribe_serverlog', {
        token: this.$store.state.token,
        serverid: parseInt(this.$route.params.id)
      })
    },
    created () {
      window.addEventListener('beforeunload', this.unsub)
    }
  }
</script>

<style scoped>

</style>