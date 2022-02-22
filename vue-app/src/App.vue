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
      addScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      addScript('src/chess/js/chessboard-1.0.0.js')
    },
  }

  function addScript(src) {
    var script = document.createElement('script')
    script.setAttribute('src', src)
    document.head.appendChild(script)
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
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #d8d8d8;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    width: 4px;
    height: 4px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(160, 160, 160);
  }
</style>
