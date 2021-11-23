<template>
  <div class="page1">
    <h1 class="mb-5">This is a page 1</h1>
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
      }
    },
  
      created () {
        let url = process.env.VUE_APP_URL
        fetch(url)
        .then( response => {
          return response.json();
        })
        .then( response => {
          console.log(response);
          this.movies = response.Search
        })
        .catch( (err) => {
          this.msg = err // エラー処理
        });
      }
  
  }

</script>