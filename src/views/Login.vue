<template>
    <v-container>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="text-xs-center">
                    <v-form ref="loginForm" v-model="formValid" @submit.prevent="login">
                        <img :src="images.logo" height="100"/>
                        <h2>Login to KeiPanel</h2>
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-text-field
                                            label="Username"
                                            name="login"
                                            :rules="textRule"
                                            v-model="username"
                                            prepend-inner-icon="fas fa-user"
                                            outline
                                    ></v-text-field>
                                </v-flex>
                                <v-text-field
                                        label="Password"
                                        name="password"
                                        v-model="password"
                                        :rules="textRule"
                                        id="password"
                                        type="password"
                                        prepend-inner-icon="fas fa-lock"
                                        outline
                                ></v-text-field>
                            </v-layout>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn :disabled="!formValid" color="primary" type="submit">Login</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      formValid: false,
      username: '',
      password: '',
      textRule: [v => !!v || 'This field is required'],
      images: {
        logo: require('../assets/logo.png')
      }
    }),
    methods: {
      login () {
        const data = {username: this.username, password: this.password}
        this.$store.dispatch('api/login', data).then(response => {
          this.$store.state.token = response.data.token
          this.dispatch('login')
          this.$router.push({name: 'home'})
        }).catch(error => {
            // handle error
        })
      },
    }
  }
</script>

<style scoped>

</style>