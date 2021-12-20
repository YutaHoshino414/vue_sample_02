<template>
  <div class="page3">
    <h1 class="mb-5">映画検索</h1>
    <v-sheet
      color="blue-grey lighten-5"
      elevation="1"
      height="150"
      width="1200"
    >
      <h3 class="mb-5">映画を検索する</h3>
      <v-btn color="info" v-on:click="counter">click</v-btn>
      <p class="mt-5">The button above gets the results of page <strong>{{ num }}</strong>.</p>
    </v-sheet>
    <br><br>
    <v-row>
    <v-card
      elevation=""
      class="mx-auto mb-5"
      max-width="200"
      v-for="movie,index in movies" :key='index'
    >
    <v-img
      :src="movie.Poster"
      height="300px"
    ></v-img>

    <v-card-title>
      {{ movie.Title }}
    </v-card-title>
    {{ movie.Year }}
    </v-card>
    </v-row><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>

  export default {
    data () {
      return{
          movies:[],
          num:0
      }
    },
    methods:{
      counter:function(){
        this.num += 1
        let url = `https://www.omdbapi.com/?s=man&page=${this.num}&apikey=${process.env.VUE_APP_URL}`
        fetch(url)
        .then( response => {
        return response.json();
        })
        .then( response => {
        console.log(response);
        this.movies = response.Search
        })
      }
    },
  }
</script>

<style scoped>
  .page3{
    background-color: #2c3e50;
  }
</style>