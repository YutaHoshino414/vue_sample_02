<template>
  <div class="page4">
    <h1 class="mb-5"></h1>
    <Canvas />
    <h1 class="animate__animated animate__lightSpeedInRight animate__delay-1s">This is a page4</h1>
    <p class="mt-5 animate__animated animate__bounceInLeft animate__delay-2s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto esse quasi ducimus omnis at ea blanditiis minus sit iste? Obcaecati porro provident cumque aut non vero nostrum consectetur iusto?
    Rerum fugiat doloremque quos vitae praesentium ullam velit tempora quia voluptate esse quis, iure minima eligendi ipsa illo. Quas, expedita. Exercitationem consequatur repudiandae laboriosam enim illum voluptatem adipisci voluptates quasi!
    Natus, ipsum architecto! Sed dicta voluptas quo quis, consequuntur sunt dolor debitis architecto doloribus, neque obcaecati voluptatum saepe! Doloribus praesentium saepe optio vero! Qui, cum quae? Aperiam commodi itaque consequatur?
    Enim obcaecati dolores necessitatibus quia magnam voluptas tempora ullam expedita commodi adipisci, quam omnis! </p>
    <p class="mt-5 animate__animated animate__bounceInRight animate__delay-3s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto esse quasi ducimus omnis at ea blanditiis minus sit iste? Obcaecati porro provident cumque aut non vero nostrum consectetur iusto?
    Rerum fugiat doloremque quos vitae praesentium ullam velit tempora quia voluptate esse quis, iure minima eligendi ipsa illo. Quas, expedita. Exercitationem consequatur repudiandae laboriosam enim illum voluptatem adipisci voluptates quasi!
    Natus, ipsum architecto! Sed dicta voluptas quo quis, consequuntur sunt dolor debitis architecto doloribus, neque obcaecati voluptatum saepe! Doloribus praesentium saepe optio vero! </p>
    
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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

<style scoped>

</style>