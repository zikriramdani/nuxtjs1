<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12 d-card--default pb-2">
          <v-layout align-start justify-center row>
            <div class="text-gray text-center pt-3">
              <b>Selamat Datang</b>
            </div>
          </v-layout>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                ref="username"
                v-model="form.username"
                :label="form.username ? 'Username/ID' : ''"
                placeholder="Username/ID"
                prepend-inner-icon="person"
                name="username"
                type="text"
                :rules="rules.username"
                required
              />

              <v-text-field
                id="password"
                ref="password"
                v-model="form.password"
                :label="form.password ? 'Kata Sandi' : ''"
                placeholder="Kata Sandi"
                prepend-inner-icon="lock"
                name="password"
                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                :rules="rules.password"
                :error-messages="checkFailUsernameOrPassword"
                :type="showPassword ? 'text' : 'password'"
                counter
                maxlength="30"
                class="pb-2"
                required
                @input="inputPasswordCheck"
                @click:append="showPassword = !showPassword"
                @keyup.enter="submit"
              />
            </v-form>
          </v-card-text>

          <v-card-text>
            <v-card-actions class="pa-0">
              <template v-if="loadingLogin">
                <v-btn
                  block
                  large
                  class="d-button--blue border-radius-2"
                  loading
                />
              </template>

              <template v-else>
                <v-btn
                  block
                  large
                  class="d-button--blue border-radius-2"
                  @click="submit"
                >
                  Login
                </v-btn>
                <!-- <v-btn
                  block
                  large
                  class="d-button--blue border-radius-2"
                  href="/welcome"
                >
                  Login
                </v-btn> -->
              </template>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
	layout: 'login',
	data () {
		return {
			valid: false,
			rules: {
				username: [v => !!v || 'Username harus di isi'],
				password: [v => !!v || 'Kata Sandi harus di isi']
			},
			form: {
				username: '',
				password: ''
			},
			showPassword: false,
			failUsernameOrPassword: false,
			loadingLogin: false,

			errorMessage: ''
		}
	},

	head () {
		return {
			title: 'Login'
		}
	},
	computed: {
		checkFailUsernameOrPassword () {
			if (this.failUsernameOrPassword) {
				return this.errorMessage
			}

			return ''
		}
	},
	methods: {
		submit () {
			this.$refs.form.validate()

			if (!this.valid) {
				return
			}

			this.loadingLogin = true

			this.$store.dispatch('user/login', this.form).then(
				(response) => {
					console.log('index', response)
					// if (response.status) {
					// 	this.$router.push('/welcome')
					// }
				},
				(error) => {
					console.warn(error)
					if (error) {
					    this.errorMessage = 'error 412' // error.error.message;
					    this.failUsernameOrPassword = true
					}

					this.loadingLogin = false
				}
			)
		},
		inputPasswordCheck () {
			this.failUsernameOrPassword = false
		}
	}
}
</script>
