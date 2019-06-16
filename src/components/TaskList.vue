<template>
    <v-card>
        <v-card-title primary-title>
                <h3 class="headline mb-0">Tasks</h3 class="headline mb-0">
            <v-spacer></v-spacer>
            <v-btn color="success" @click="addTask">Add Task</v-btn>
        </v-card-title>
        <v-data-table :headers="headers" :items="tasks" class="elevation-1">
            <template v-slot:items="props">
                <tr @click="openTask(props.item)" :style="{ cursor: 'pointer'}">
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.command }}</td>
                    <td class="text-xs-left">{{ props.item.time }}</td>
                    <td class="text-xs-left">{{ props.item.interval }}</td>
                    <td class="text-xs-left"><v-btn color="error">Delete</v-btn></td>
                </tr>
            </template>
            <template v-slot:no-data>
                <div class="text-xs-center">
                    <span>You have not created any tasks. Use <b>ADD TASK</b> to create one.</span>
                </div>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
  export default {
    name: 'Scheduler',
    data: () => ({
      headers: [
        {text: 'Name', value: 'name'},
        {text: 'Command', value: 'command'},
        {text: 'Scheduled Time', value: 'time'},
        {text: 'Interval', value: 'interval'},
        {text: 'Action', value: 'action'},
      ],
      tasks: [],
    }),
    computed: {
      serverId: function () {
        return this.$route.params.id
      },
    },
    methods: {
      async addTask () {
        if (await this.$root.$addTaskDialog.open('Add Task', { zIndex: 100 })) {
           // yes
        }
      },
      openTask () {
        //
      },
      deleteRow(index) {
        //
      }
    }
  }
</script>

<style scoped>

</style>