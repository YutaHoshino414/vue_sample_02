<template>
  <canvas id="myCanvas" width="1400" height="600" class="canvas"></canvas>
</template>

<script>
import { Stage, Shape, Bitmap } from "@createjs/easeljs";
import { Tween } from '@createjs/tweenjs/dist/tweenjs.cjs.js';
export default {
  props: {
    radius: {
      type: Number,
      default: 50
    }
  },
  watch: {
    radius() {
      this.draw(this.radius)
   }
  },
  methods: {
    draw(radius) {
      this.ctx.beginPath()
      this.ctx.clearRect(0, 0, 200, 200)
      this.ctx.arc(100, 100, radius, 0, Math.PI * 2)
      this.ctx.fill()
    }
  },
  mounted() {
    // mounted 以降で canvas の DOM にアクセスできる
    // CreateJS などを使うときにも、ここで canvas と紐付ける
    console.log(this.$el)
    this.ctx = this.$el.getContext('2d')
    this.draw(this.radius)

    var stage = new Stage("myCanvas");
    console.log(stage)
    var bmp2 = new Bitmap("https://raw.githubusercontent.com/YutaHoshino414/vue_sample_02/master/src/assets/logo.svg");
    bmp2.scaleX = 0.2;
    bmp2.scaleY = 0.2;
    stage.addChild(bmp2);

    const circle = new Shape();
    circle.graphics.beginFill('DarkRed').drawCircle(0, 0, 50);
    stage.addChild(circle);
    
    bmp2.x = 200;
    bmp2.y = 100;
    
    Tween.get(bmp2, {loop: true})
      .wait(300)
      .to({x: 940, y: 200, scale: 0.7}, 700)
      .to({x: 400, y: 0, scale: 0.3}, 1200)
      .to({x: 300, y: 100, scale: 1.2}, 1200)
      .to({x: 100, y: 50, scale: 0.5}, 700);
    
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
.canvas {
  border: 1px solid #000;
}
</style>