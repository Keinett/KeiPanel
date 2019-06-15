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
                      <div id="serverlog" v-chat-scroll>
                        <v-flex xs12 v-for="log in logs">
                          <div>
                            {{ log }}
                          </div>
                        </v-flex>
                      </div>
                      <v-flex xs12>
                        <v-form ref="cmdForm" @submit.prevent="sendCmd">
                          <v-text-field
                            name="cmdbox"
                            v-model="consoleCmd"
                            label="Console Command"
                          ></v-text-field>
                        </v-form>
                      </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            <div v-else class="text-xs-center">
              <v-progress-circular
                :size="100"
                :width="7"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import io from 'socket.io-client';

  export default {
    name: 'Server',
    data: () => ({
      server: null,
      logs: [],
      consoleCmd: '',
      socket: io('https://panel.potatosalad.keinett.us')
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
        this.server = servers.find(item => (item.id == this.$route.params.serverid) && (item.nodeid == this.$route.params.nodeid))
      }).catch(error => {
        this.$root.$snackbarDialog.open(error.response.data.msg, { color: 'error' })
      })
    },
    mounted: function () {
      this.socket.on('server_log', (response) => {
        console.log(response)
        if (response == "clear_server_logs")
          this.logs = []
        this.logs.push(response)
      })
      this.socket.emit('subscribe_serverlog', {
        token: this.$store.state.token,
        serverid: parseInt(this.$route.params.serverid),
        nodeid: parseInt(this.$route.params.nodeid)
      })
    },
    created () {
      window.addEventListener('beforeunload', this.unsub)
    }
  }
</script>

<style scoped>
#serverlog{
  height: 600px;
  width: 100%;
  overflow: auto;
  top: 0;
  bottom: 3em;
}
</style>
