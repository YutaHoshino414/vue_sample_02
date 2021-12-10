<template>
  <div class="page4">
    <h1 class="mb-5">This is a page 4</h1>
    <Canvas />
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
// キャンバス用コンポーネントの読み込み
import Canvas from '@/components/Canvas.vue'
export default {
  components: {
    Canvas
  },
  data() {
    return {
      radius: 50
    }
  }
}
</script>