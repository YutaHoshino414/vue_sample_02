<template>
  <div class="page2">
    <h1 class="mb-5">This is a page 2</h1>
    <v-sheet
      color="green lighten-5"
      elevation="1"
      height="200"
      width="1200"
    ><h2>書籍検索</h2>
      <form>
        <v-text-field type="text" label="Type your Search" v-model="query" ref="comment" color="success"></v-text-field><br>
        <v-btn x-large color="success"  v-on:click="getResult(query)">Search</v-btn>
      </form>
    </v-sheet> 
    <br><br>

    <v-row>
    <v-card class="mx-auto mb-3" width="364"  outlined color="blue-grey lighten-5"
    v-for="item,index in items" :key='index'
    >
      <v-list-item three-line class=" pb-0">
        <v-list-item-avatar tile size="110">
        <img
          height="100%"
          v-if="item.volumeInfo.imageLinks"
          :src="item.volumeInfo.imageLinks.thumbnail"
        >
        <p v-else>NO IMAGE</p>
        </v-list-item-avatar>
        <v-list-item-content class="pl-1">
          <div class="text-overline mb-4">書籍
          </div>
          <v-list-item-subtitle class="text-overline mb-4">{{item.volumeInfo.title}}</v-list-item-subtitle>
          <v-card-actions class="justify-center align-self-end">
            <v-btn
              outlined
              rounded
              text
              
            >
              Button
            </v-btn>
          </v-card-actions>
        </v-list-item-content>

      </v-list-item>
    </v-card>
  </v-row><br><br><br><br>
  </div>
</template>

<script>
  export default {
    data () {
      return{
          query:"",
          items:[],
      }
    },
    methods:{
      async getResult(query, i=0){
        const params = {
          q: `intitle:${query}`, // 検索キーワード。intitle:で書籍名が対象に
          Country: "JP",           // 国の指定。JPで日本の指定
          langRestrict: "ja",
          //orderBy: "newest",          //「並び替え」newest or relevance
          maxResults: 40,          // 取得する検索件数。10~40件を指定可。デフォルトは10件
          startIndex: i,        // ページングのページ数を指定。0-index
        };
        let url = `https://www.googleapis.com/books/v1/volumes?`
        console.log(url)
        const response = await this.axios.get(url,{params: params})
            .then( res => {
              console.log(res.data);
              return res.data
            })
            .catch( (err) => {
              this.msg = err // エラー処理
            });
        console.log(response.items)
        this.items = response.items
      },
    },
    created() {
      this.axios.get('https://www.googleapis.com/books/v1/volumes?q=vue&maxResults=40&langRestrict=ja&orderBy=relevance')
      .then( res => {
        console.log(res);
        this.items = res.data.items
      })
      .catch( (err) => {
        this.msg = err // エラー処理
      });
    },
  }

</script>
