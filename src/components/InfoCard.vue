<template>
    <div class="text-xs-center">
        <v-layout align-center justify-center row wrap fill-height>
            <v-flex justify-center v-for="(item, i) in progressItems">
                <v-card height="200">
                    <v-card-title class="justify-center">
                        <v-progress-circular
                                :rotate="90"
                                :size="100"
                                :width="15"
                                :value="item.value"
                                color="primary"
                                :indeterminate="(item.title === 'Loading...')"
                        >
                            {{ item.value }}%
                        </v-progress-circular>
                    </v-card-title>
                    <v-card-text>
                        <span class="subheading">{{ item.title }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex justify-center v-for="(item, i) in infoItems">
                <v-card height="200">
                    <v-container bg fill-height grid-list-md text-xs-center>
                        <v-layout row wrap align-center>
                            <v-card-text>
                                <h1>{{ item.value }}</h1>
                                <br>
                                <span class="subheading">{{ item.title }}</span>
                            </v-card-text>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
  export default {
    name: 'ProgressCard',
    data: () => ({
      progressItems: [{title: 'Loading...', value: 100}], // title and value props
      infoItems: null, // title and value props
    }),
    methods: {
      setProgressCards (data) {
        this.progressItems = data
      },
      setInfoCards (data) {
        this.infoItems = data
      },
    }
  }
</script>

<style scoped>

</style>
