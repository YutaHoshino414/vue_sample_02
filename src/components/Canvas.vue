<template>
  <canvas id="myCanvas" width="1400" height="600" class="canvas"></canvas>
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
    console.log(stage)
    var bmp1 = new Bitmap("https://raw.githubusercontent.com/monsterdive-web-div/vue3x_books/main/sample-app/src/assets/images/logo-vue.svg");
    bmp1.scaleX = 0.2;
    bmp1.scaleY = 0.2;
    stage.addChild(bmp1);
    var bmp2 = new Bitmap("https://raw.githubusercontent.com/YutaHoshino414/vue_sample_02/master/src/assets/logo.svg");
    bmp2.scaleX = 0.2;
    bmp2.scaleY = 0.2;
    stage.addChild(bmp2);
    
    bmp1.x = 850;
    bmp1.y = 100;
    bmp2.x = 200;
    bmp2.y = 100;
    Tween.get(bmp1, {loop: true})
      .wait(300)
      .to({x: 240, y: 200, scale: 0.7}, 700)
      .to({x: 400, y: 290, scale: 0.3}, 1200)
      .to({x: 300, y: 100, scale: 1.2}, 1200)
      .to({x: 100, y: 50, scale: 0.5}, 700);

      Ticker.addEventListener("tick", handleTick);

      function handleTick() {
        // マウス座標を取得する
        var mx = stage.mouseX;
        var my = stage.mouseY;
        // シェイプをマウスに追随させる
        bmp2.x = mx+50;
        bmp2.y = my+50;
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