<template>
    <div class="text-xs-center">
        <v-layout align-center justify-center row wrap fill-height>
            <v-flex justify-center v-for="(item, i) in items">
                <v-card>
                    <v-card-title class="justify-center">
                        <h1>{{ item.value }}</h1>
                    </v-card-title>
                    <v-card-text>
                        <span class="subheading">{{ item.title }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
  export default {
    name: 'InfoCard',
    data: () => ({
      items: [{ title: "Loading...", value: '...' }] // title and value props
    }),
    methods: {
      setData (data) {
        this.items = data
      }
    }
  }
</script>

<style scoped>

</style>
