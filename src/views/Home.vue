<template>
    <v-container grid-list-md>
        <v-layout align-center row wrap>
            <v-flex xs12>
                <ProgressCard></ProgressCard>
            </v-flex>
            <v-flex xs12>
                <ServerList></ServerList>
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
    }
  }
</script>
