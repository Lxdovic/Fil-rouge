<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: String
  })

  const count = ref(0)
</script>

<template>
  <div>
    <div class='bg-gray-100 w-screen h-auto py-10'>
      <h1 class='font-bold mb-2 text-xl mb-10'>Play</h1>

      <div class='flex justify-center flex-wrap'>
        <div class='container w-64 h-32'>
          <router-link :to="{ path: '/play' }"><button class='py-2 px-3 w-40 bg-gray-200 rounded hover:bg-[#36B18A] hover:text-white transition-colors'>Online</button></router-link>
          <p class='pt-6 text-gray-400'>Play online with other players </p>
        </div>
        
        <div class='container w-64 h-32'>
          <router-link :to="{ path: '/play' }"><button class='py-2 px-3 w-40 bg-gray-200 rounded hover:bg-[#36B18A] hover:text-white transition-colors'>With a friend</button></router-link>
          <p class='pt-6 text-gray-400'>Play with your friends</p>
        </div>
        
        <div class='container w-64 h-32'>
          <router-link :to="{ path: '/play' }"><button class='py-2 px-3 w-40 bg-gray-200 rounded hover:bg-[#36B18A] hover:text-white transition-colors'>With the computer</button></router-link>
          <p class='pt-6 text-gray-400'>Play against the computer</p>
        </div>
      </div>
    </div>

    <div class='bg-white w-screen h-auto pt-10 flex justify-evenly flex-wrap px-10 mb-20'>
      <div class='mb-10'>
        <h1 class='font-bold mb-2 text-xl'>News</h1>
        <div class='container bg-[#30302E] w-[700px] h-96 rounded overflow-y-scroll'>
          <div>

          </div>
        </div>
      </div>

      <div>
        <h1 class='font-bold mb-2 text-xl'>History</h1>
        <div class='container bg-[#30302E] w-[700px] h-96 rounded overflow-y-scroll'>
          <div v-for="game in games" class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span v-if="game.result == 1" class='bg-[#36B18A] rounded mr-4 w-3 h-3 mt-1'></span>
            <span v-else class='bg-[#E83943] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>{{ game.time }}h</span>
            <span class='text-gray-400 mr-4 float-right'>{{ game.mmr }}</span>
            <span class='text-gray-200 mr-4'>{{ game.type }}</span>
            <span class='text-gray-200 float-right'>{{ game.opponent }}</span>
          </div>

          <!-- <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#36B18A] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>3h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 + 12)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#36B18A] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>3h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 + 12)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#E83943] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>3h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 - 13)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#36B18A] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>3h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 + 12)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#36B18A] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>4h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 + 9)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#36B18A] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>4h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 + 12)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#E83943] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>5h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 - 9)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#E83943] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>5h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 - 11)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#E83943] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>5h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 - 11)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>
          
          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#E83943] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>6h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 - 11)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>

          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#36B18A] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>12h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 + 11)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>
          
          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#E83943] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>12h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 - 11)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div>
          
          <div class='m-auto w-full pt-2 pb-2 pl-10 bg-[#41413E] flex justify-left border-gray-500 border-b'>
            <span class='bg-[#E83943] rounded mr-4 w-3 h-3 mt-1'></span>
            <span class='text-gray-200 mr-4'>14h</span>
            <span class='text-gray-400 mr-4 float-right'>(901 - 10)</span>
            <span class='text-gray-200 mr-4'>Rapid</span>
            <span class='text-gray-200 float-right'>Player 1</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
      name: 'games',
      data () {
        return {
          games: [],
          errors: []
        }
      },
      created() {
        axios.get("../src/assets/history.json").then(response => {
          this.games = response.data
        })
      }
    }
</script>

<style scoped>
</style>
