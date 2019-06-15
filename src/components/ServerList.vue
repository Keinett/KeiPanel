<template>
    <v-card>
        <v-card-title>
            <h2>Servers</h2>
        </v-card-title>
        <v-data-table :headers="headers" :items="servers" class="elevation-1" hide-actions>
            <template v-slot:items="props">
                <tr @click="rowClicked(props.item)" :style="{ cursor: 'pointer'}">
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.cpu }}</td>
                    <td class="text-xs-left">{{ props.item.uptime }}</td>
                </tr>
            </template>
            <template v-slot:no-data>
                <v-alert :value="true" color="error" icon="fas fa-exclamation-circle">
                    There are no servers available :(
                </v-alert>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
  export default {
    name: 'ServerList',
    data: () => ({
      headers: [
        {text: 'Server', value: 'name'},
        {text: 'CPU Usage', value: 'cpu'},
        {text: 'Uptime', value: 'uptime'},
      ],
      servers: []
    }),
    methods: {
      rowClicked (item) {
        this.$router.push({name: 'server', params: {serverid: item.id, nodeid: item.nodeid}})
      },
      setData (response) {
        this.servers = response.data
      }
    }
  }
</script>

<style scoped>

</style>
