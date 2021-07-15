<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            color="accent lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Tambah books
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>

    <v-col cols="12">
      <v-row>
        <v-col
          v-for="(book, index) in books"
          :key="index"
          cols="12"
          md="3"
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange"
                text
              >
                Details
              </v-btn>

              <v-btn
                color="orange"
                text
              >
                Edit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
	data () {
		return {
			dialog: false,

			loading: false,
      		selection: 1,

			books: [1, 2, 3, 4]
		}
	},
	methods: {
		reserve () {
			this.loading = true

			setTimeout(() => (this.loading = false), 2000)
		}
	}
}
</script>
