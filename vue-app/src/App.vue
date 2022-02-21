<script setup>
  import Nav from './components/Nav.vue'
  import Menu from './components/Menu.vue'
  import Footer from './components/Footer.vue'
  import Play from './components/Play.vue'

</script>

<script defer>
  export default {
    name: 'app',
    components: {
      Play
    },

    mounted() {
      let ChessLib = document.createElement('script')
      ChessLib.setAttribute('src', 'src/assets/Chessboard.js-main/libraries/chess.js')
      document.head.appendChild(ChessLib)

      let ChessboardLib = document.createElement('script')
      ChessboardLib.setAttribute('src', 'src/assets/Chessboard.js-main/chessboard.js')
      document.head.appendChild(ChessboardLib)
    },
  }
</script>

<template>
  <Nav/>
  <!-- <Menu/> -->

  <router-view/>

  <Footer/>
</template>

<style>
  * {
    overflow-x: hidden;
    overflow-y: hidden;
    /* transition: all .2 ease-in-out; */
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: #d8d8d8;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    width: 7px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(160, 160, 160);
  }
</style>
