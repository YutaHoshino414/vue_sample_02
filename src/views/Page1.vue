<script>
  export default {
    data () {
      return{
          movies:[],
      }
    },
    created () {
      let pages = 1
      while (pages < 7) { 
        fetch(`https://www.omdbapi.com/?s=man&page=${pages}&apikey=${process.env.VUE_APP_URL}`)
        .then( response => {
          return response.json();
        })
        .then( response => {
          /* this.movies = response.Search */
          const results = response.Search
          if (results) {
              results.forEach((result, index) => {
                this.loadMovie(result.imdbID) 
                console.log(index)
              })
          }
        })
        .catch( (err) => {
          this.msg = err // エラー処理
        });
        console.log(pages)
        pages++
      } 
    },
    methods:{
      loadMovie(id){
        /* results_set.push(id) */
        /* console.log(results_set) */
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.VUE_APP_URL}`)
        .then( response => {
          return response.json();
        })
        .then( response => {
          const result = response
          this.movies.push(result)
        })
      },
        // トランジション開始でインデックス*100ms分のディレイを付与
      beforeEnter(el) {
        el.style.transitionDelay = 150 * parseInt(el.dataset.index, 10) + 'ms'
      },
      // トランジション完了またはキャンセルでディレイを削除
      afterEnter(el) {
        el.style.transitionDelay = ''
      },
    }
  }
</script>

<template>
  <div class="page1">
    <div class="container mb-5">
    <h1 class="mb-5 animate__animated animate__bounceInDown animate__delay-1s">This is a page 1</h1>
    <br><br>
    <v-row>
      <transition-group name="cards" tag="div"
          @before-enter="beforeEnter"
          @after-enter="afterEnter"
          @enter-cancelled="afterEnter"
          class="d-flex flex-wrap"
          >
        <v-card v-for="movie,index in movies" v-bind:key='movie.imdbID'
          :data-index="index"
          class="card mx-auto mb-5"
          max-width="200"
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
      </transition-group>
    </v-row><br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<style scoped>

.cards-enter-active, .cards-leave-active {
  transition: opacity 1s, transform 1s ease;
}
/* .cards-leave-active {
  position: absolute;
} */
.cards-enter {
  opacity: 0;
}
.cards-leave-to {
  opacity: 0;
  /* transform: translateY(20px); */
}
</style>