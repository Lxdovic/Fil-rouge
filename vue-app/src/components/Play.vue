<script setup>
  import { ref } from 'vue'
  // import Chessboard from '../assets/Chessboard.js-main/chessboard.js'

  defineProps({
    msg: String
  })

  const count = ref(0)
</script>

<template>
  <div>
    <h1>Play page</h1>
    <div id='myBoard' style='width: 400px; height: 400px;'></div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
