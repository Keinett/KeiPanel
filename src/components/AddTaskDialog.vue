
<template>
    <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel"
              v-bind:style="{ zIndex: options.zIndex }" persistent>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="canAddStudent">
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-text-field
                                label="Name"
                                :rules="rules.required"
                                outline
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                    label="Command"
                                    :rules="rules.required"
                                    outline
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                    label="Time"
                                    :rules="rules.required"
                                    outline
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-select
                                    v-model="type"
                                    label="Rule"
                                    :items="types"
                                    :rules="rules.required"
                                    outline
                            ></v-select>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                    v-if="(type && type.toLowerCase() === 'repeat')"
                                    label="Interval (minutes)"
                                    :rules="rules.int"
                                    outline
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-card-actions class="pt-0">
                        <v-spacer></v-spacer>
                        <v-btn color="grey" flat="flat" @click.native="cancel">Cancel</v-btn>
                        <v-btn :disabled="!canAddStudent" color="primary darken-1" flat="flat" @click.native="agree">
                            Add Task
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'AddTaskDialog',
    data: () => ({
      // form data
      canAddStudent: false,
      name: '',
      command: '',
      time: '',
      interval: '',
      type: '',
      types: ['Run Once', 'Repeat'],
      rules: {
        required: [
          v => !!v || 'Field required'
        ],
        int: [
          v => (v >= 0) || 'must be positive integer'
        ],
      },
      // dialog vars
      dialog: false,
      resolve: null,
      reject: null,
      title: null,
      options: {
        width: 400,
        zIndex: 200
      }
    }),
    methods: {
      open (title, options) {
        this.dialog = true
        this.title = title
        this.options = Object.assign(this.options, options)
        return new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
          // add logic here
        })
      },
      agree () {
        this.resolve(true)
        this.dialog = false
      },
      cancel () {
        this.resolve(false)
        this.dialog = false
      }
    }
  }
</script>

<style scoped>
</style>