<template>
    <v-container grid-list-md>
        <v-layout align-center row wrap>
            <v-flex xs12>
                <ProgressCard ref="progressCard"></ProgressCard>
                <InfoCard ref="infoCard"></InfoCard>
            </v-flex>
            <v-flex xs12>
                <ServerList ref="serverList"></ServerList>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import ServerList from '../components/ServerList'
  import ProgressCard from '../components/ProgressCard'
  import InfoCard from '../components/InfoCard'

  export default {
    components: {
      ProgressCard,
      InfoCard,
      ServerList
    },
    mounted: function () {
      // get server list
      this.$store.dispatch('api/getServers').then(response => {
        console.log(response)
        this.$refs.serverList.setData(response)
      }).catch(error => {
        console.log(error)
      })

      /* run socket */
      this.socket.on('SERVERINFO', (response) => {
        const progressCardData = [
          {
            title: 'Memory Usage',
            value: (response.os.mempercent * 100).toFixed(2)
          },
          {
            title: 'CPU Usage',
            value: (response.os.cpu * 100).toFixed(2)
          },
        ]
        if (this.$refs.progressCard)
          this.$refs.progressCard.setData(progressCardData)
      })
      this.socket.on('PLAYERINFO', (response) => {
        const infoCardData = [
          {
            title: 'Total Players',
            value: response.players.online
          },
        ]
        if (this.$refs.infoCard)
          this.$refs.infoCard.setData(infoCardData)
      })

    }
  }
</script>
