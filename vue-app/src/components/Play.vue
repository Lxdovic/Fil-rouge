<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: String
  })

  const count = ref(0)
</script>

<template>
  <div class='flex justify-center lg:flex-row flex-col gap-0 lg:gap-16 flex-wrap'>
    <div class='flex flex-col'>
      <div class='m-auto md:w-[70vh] w-screen h-20 bg-stone-100 flex py-2'>
        <img class='rounded-full' src='../assets/Player1_pfp.jpg'>
        <div class='flex flex-col justify-center text-left'>
          <div class='flex flex-row'>
            <span class='ml-10 text-slate-900 text-xl font-semibold w-auto'>Player1</span>
            <img class='w-4 h-3 mt-2 ml-2' src='../assets/flags/it.svg'>
          </div>
          <span class='ml-10 text-slate-900 text-lg'>905</span>
        </div>
      </div>

      <div class='md:w-[70vh] w-screen m-auto bg-stone-100' id='myBoard'></div>
      
      <div class='m-auto md:w-[70vh] w-screen h-20 bg-stone-100 flex py-2 order-1'>
        <img class='rounded-full' src='../assets/me.png'>
        <div class='flex flex-col justify-center text-left'>
          <div class='flex flex-row'>
            <span class='ml-10 text-slate-900 text-xl font-semibold w-auto'>Me</span>
            <img class='w-4 h-3 mt-2 ml-2' src='../assets/flags/no.svg'>
          </div>
          <span class='ml-10 text-slate-900'>911</span>
        </div>
      </div>
    </div>
    
    <div class='lg:w-[70vh] w-screen mt-20'>
        <div class='w-5/6 bg-stone-200 h-3vh m-auto rounded-t'>
          <h1>Rapid (911)</h1>
        </div>

        <div class='w-5/6 bg-stone-100 h-[60vh] m-auto rounded-b'>
          <h1 class='p-3 text-left text-sm'>PGN</h1>

          <p id='game-pgn' class='px-3 text-left text-sm whitespace-pre overflow-x-scroll bg-white h-6'> </p>
          <div id='game-his' class='p-3'>
        </div>
      </div>

      
    </div>
  </div>
</template>

<style scoped></style>


1. A new program never works first time.
2. I always have bugs in my code.
3. I like to code little by little and fix each bug I encounter one by one to avoid having too many.
4. JavaScript is my favorite language, over english.
5. 