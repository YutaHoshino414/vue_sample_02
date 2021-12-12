<template>
  <canvas id="myCanvas" width="1000" height="800" class="canvas"></canvas>
</template>

<script>
import { Stage, Ticker, Bitmap } from "@createjs/easeljs";
import { Tween } from '@createjs/tweenjs/dist/tweenjs.cjs.js';
export default {
  mounted() {
    // mounted 以降で canvas の DOM にアクセスできる
    // CreateJS などを使うときにも、ここで canvas と紐付ける
    console.log(this.$el)

    var stage = new Stage("myCanvas");
/*     window.addEventListener("resize", handleResize);
    handleResize(); 
    // リサイズ処理
    function handleResize() {
      // 画面幅・高さを取得
      var w = window.innerWidth;
      var h = window.innerHeight;
      // Canvas要素の大きさを画面幅・高さに合わせる
      stage.canvas.width = w;
      stage.canvas.height = h;
      // 画面更新する
      stage.update();
    } */


    console.log(stage)
    var bmpBG = new Bitmap("https://raw.githubusercontent.com/monsterdive-web-div/vue3x_books/main/sample-app/src/assets/images/hero-bg-home.svg");
    stage.addChild(bmpBG);
    var bmp1 = new Bitmap("https://raw.githubusercontent.com/monsterdive-web-div/vue3x_books/main/sample-app/src/assets/images/logo-vue.svg");
    bmp1.scaleX = 0.1;
    bmp1.scaleY = 0.1;
    stage.addChild(bmp1);
    var bmp2 = new Bitmap("https://raw.githubusercontent.com/YutaHoshino414/vue_sample_02/master/src/assets/logo.svg");
    bmp2.scaleX = 0.2;
    bmp2.scaleY = 0.2;
    stage.addChild(bmp2);

    bmpBG.y = 200;
    bmp1.x = 50;
    bmp1.y = 100;
    bmp2.x = 800;
    bmp2.y = 100;
    Tween.get(bmp1, /* {loop: true} */)  //{loop: true}で繰り返す
      .wait(500)
      .to({x: 840, y: 500, scale: 0.5}, 900)
      .to({x: 200, y: 290, scale: 0.2}, 1000)
      .to({x: 300, y: 100, scale: 0.8}, 1000)
      .to({x: 100, y: 50, scale: 0.4}, 700);

     Ticker.addEventListener("tick", handleTick);

    function handleTick() {
      // マウス座標を取得する
/*       var mx = stage.mouseX;
      var my = stage.mouseY;
      // シェイプをマウスに追随させる
      bmp2.x = mx+50;
      bmp2.y = my+50; */
    } 
    
    update();
    
    // 毎フレームステージを自動更新する
    function update() {
      stage.update();
      requestAnimationFrame(() => update());
    }
  }
}
</script>

<style scoped>

</style>