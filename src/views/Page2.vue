<template>
  <div class="page2">
    <h1 class="mb-5">This is a page 2</h1>
    <v-sheet
      color="blue-grey lighten-5"
      elevation="1"
      height="200"
      width="1200"
    ></v-sheet>
    <br><br>

    <v-row>
    <v-card class="mx-auto mb-3" width="364" outlined
    v-for="item,index in items" :key='index'
    >
      <v-list-item three-line class="pl-0 pb-0">
        <v-avator
          tile
          size="80"
          
        ><v-img
          height="100%"
          :src="item.volumeInfo.imageLinks.thumbnail"
          ></v-img>
        </v-avator>
        
        <v-list-item-content class="pl-5">
          <div class="text-overline mb-4">
            {{ index }}
          </div>
          <v-list-item-subtitle class="mb-4">{{item.volumeInfo.title}}</v-list-item-subtitle>
          <v-card-actions class="justify-end align-self-end">
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
          items:[],
      }
    },
    created() {
      this.axios.get('https://www.googleapis.com/books/v1/volumes?q=python&maxResults=40')
      .then( res => {
        console.log(res);
        this.items = res.data.items
      })
      .catch( (err) => {
        this.msg = err // エラー処理
      });
    }
  
  }

</script>
