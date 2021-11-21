<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="3">
        <v-img :src="require('../assets/logo.svg')"  class="my-3"  contain height="100" />
      </v-col>

      <v-col cols="3">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
        </p>
      </v-col>

      <v-col class="mb-5" cols="3">
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>
      </v-col>

      <v-col  class="mb-5"  cols="3">
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    
    }),
  }
</script>
<style scoped>
img{
  width:50px;
}
</style>