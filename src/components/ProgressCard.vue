<template>
    <div class="text-xs-center">
        <v-layout align-center justify-center row wrap fill-height>
            <v-flex justify-center v-for="(item, i) in items">
                <v-card>
                    <v-card-title class="justify-center">
                        <v-progress-circular
                                :rotate="90"
                                :size="100"
                                :width="15"
                                :value="item.value"
                                color="primary"
                        >
                            {{ item.value }}%
                        </v-progress-circular>
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
    name: 'ProgressCard',
    data: () => ({
      items: [] // title and value props
    }),
    methods: {
      setData (response) {
        this.items = response.data
      }
    }
  }
</script>

<style scoped>

</style>
