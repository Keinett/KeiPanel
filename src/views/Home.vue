<template>
    <v-container grid-list-md>
        <v-layout align-center row wrap>
            <v-flex xs12>
                <ProgressCard ref="progressCard"></ProgressCard>
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

  export default {
    components: {
      ProgressCard,
      ServerList
    },
    mounted: function () {
      // get server list
      this.$store.dispatch('api/getServers').then(response => {
        console.log(response)
        this.$refs.serverList.setData(response)
        this.$refs.progressCard.setData(response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>
