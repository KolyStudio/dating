<script>
  import { page } from '$app/stores'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import { flip } from 'svelte/animate'
  import { fade } from 'svelte/transition'
  const { id } = $page.params

  console.log(id)
  const name = id.charAt(0).toUpperCase() + id.slice(1)
  let firstip
  let myip = '📍 À 7 km'
  let isClicked

  function handleClick() {
    isClicked = true
  }

  onMount(async () => {
    const firstip = await axios.get(`https://geolocation-db.com/json/`)

    const finalip = await axios.get(`https://api.ipregistry.co/` + `${firstip.data.IPv4}` + `?key=6nn8zr4k2hcwkw32`)

    // if (!finalip.data.carrier.name) {
    //   myip = `📍 À 7 km`
    // } else {
    //   myip = '📍 À 7 km'
    // }
  })
</script>

<svelte:head>
  <title>{name}25 - Invitation</title>
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<div class="h-screen bg-[#2f2c41]">
  <!-- Logo - Titre -->
  <img src="/heart.svg" alt="heart" class=" fixed top-10 left-5 z-[-1] w-[30px] -rotate-[40deg]" />
  <img src="/heart.svg" alt="heart" class=" fixed top-8 right-5 z-[-1] w-[20px] -rotate-[20deg]" />
  <img src="/heart.svg" alt="heart" class="fixed top-[12%] right-[50%] z-[-1] w-[28px] -rotate-[18deg]" />
  <img src="/heart.svg" alt="heart " class="fixed top-[60%] right-[10%] z-[-1] w-[28px] rotate-[18deg]" />
  <img src="/heart.svg" alt="heart" class="fixed top-[55%] left-[10%] z-[-1] w-[22px] -rotate-[18deg]" />
  <img src="/heart.svg" alt="heart" class="fixed top-[35%] left-[5%] z-[-1] w-[22px] rotate-[33deg]" />
  <img src="/heart.svg" alt="heart" class="fixed top-[25%] right-[10%] z-[-1] w-[25px] rotate-[15deg]" />

  <img src="/flash.svg" alt="heart" class="fixed top-[3%] left-[25%] z-[-1] w-[25px] rotate-[15deg]" />
  <img src="/flash.svg" alt="heart" class="fixed top-[15%] right-[15%] z-[-1] w-[18px] rotate-[25deg]" />
  <img src="/flash.svg" alt="heart" class="fixed top-[25%] left-[15%] z-[-1] w-[25px] -rotate-[25deg]" />
  <img src="/flash.svg" alt="heart" class="fixed top-[45%] right-[10%] z-[-1] w-[25px] -rotate-[35deg]" />

  <div class="m-auto w-[60%] pt-4">
    <div class="flex items-center justify-end space-x-1">
      <img src="/mask.png" alt="chat" class="w-[40px]" />
      <span class="text-2xl font-bold text-white">Jacquie</span>
      <span class="text-2xl font-bold text-[#ffff85]"> &</span>
      <span class="text-2xl font-bold text-white">Michel</span>
    </div>
    <div class="-mt-1 -mr-4 text-right  font-bold text-[#ffff85]">Club de Rencontres libertines</div>
  </div>

  <!-- Contenu blanc -->
  <main class="mx-2 mt-4  rounded-[30px] bg-[#fff2ee] pt-1 pb-5  shadow-xl">
    <div class="m-auto mb-4 mt-2 h-[5px] w-[40px] rounded-2xl bg-[#2f2c41]" />
    <!-- Profil -->
    <section>
      <!-- Photo profil -->
      <article class="relative m-auto mb-5 w-[170px] rounded-[50px] bg-gradient-to-r from-[#31d275] to-[#31d275] p-[3px] shadow-xl  ">
        <img class="m-auto w-[200px] rounded-[50px] border-[5px] border-white" src="/profil.webp" alt="mask" />
        <!-- <div class="absolute bottom-[5px] right-[5px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " /> -->
      </article>

      <!-- Informations profil -->
      <article>
        <div class="m-auto my-2 w-[100px] rounded-xl bg-[#e1f3e5] py-1 text-center text-xs font-semibold uppercase text-[#2aba66]">En Ligne</div>
        <div class="flex justify-center space-x-4 pt-2">
          <h3 class="flex items-center rounded-xl border-b-4 bg-white px-2 font-semibold text-black ">📸 53 photos</h3>
          <h3 class="flex items-center rounded-xl border-b-4 bg-white px-2 font-semibold text-black ">🎂 22 ans</h3>
        </div>

        <div class="mt-3 flex justify-center"><h3 class=" flex items-center rounded-xl border-b-4 bg-white px-2 font-semibold text-black ">{myip}</h3></div>
      </article>
    </section>

    <section class="my-6">
      <h1 class="m-auto w-[80%] text-center text-2xl font-bold uppercase text-[#2f2c41]"><span class="text-[#5acd97]">{name}25</span> T'AS ENVOYÉ UNE INVITATION PRIVÉE 🔞</h1>
    </section>

    <section class="my-4 w-full" id="testjs">
      <article id="testjs" class=" m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#4bb788] bg-gradient-to-r from-[#57cc99] to-[#73db8b]  p-5 font-bold text-white shadow-2xl">
        <button on:click={handleClick} id="testjs" class="font-bold uppercase tracking-[2px]">Accepter l'invitation</button>
      </article>
    </section>

    <!-- <div class="flex justify-center"><h3 class="flex items-center rounded-xl border-b-4 bg-white px-2 font-semibold text-black">✅ Invitation validées:<span>&nbsp; 12/15 invitations</span></h3></div> -->
    <div class="flex justify-center"><h3 class="mt-2 flex items-center rounded-xl border-b-4 border-[#eac8a8] bg-[#ffe7d1] px-2 font-semibold text-[#FF5A50]">🚨 3 invitations restantes</h3></div>

    <!-- <section class="my-4 w-full" id="testjs">
      <article id="testjs" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] bg-gradient-to-r from-[#57cc99] to-[#73db8b]   p-5 font-bold text-white shadow-2xl">
        <button on:click={handleClick} id="testjs" class="font-bold uppercase tracking-[2px]">S'inscrire</button>
      </article>
    </section> -->

    <!-- <section class="my-4 w-full" id="photos">
    <article id="photos" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] bg-white p-5 font-bold text-black  shadow-2xl">
      <button id="photos" class="font-bold tracking-[1px]"> 🔞 VOIR MES PHOTOS HOT </button>
    </article>
  </section> -->
  </main>
</div>

{#if isClicked}
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>

  <div class="fixed top-0 flex h-screen w-full flex-col items-center  backdrop-blur-sm backdrop-brightness-[.25]">
    <div class="mx-2 mt-[30px] rounded-2xl bg-[#fff2ee] py-4">
      <div class="flex items-center space-x-2 p-2">
        <div class="relative  m-auto mb-2 h-[100px] w-[100px] rounded-full">
          <div class="m-auto h-[100px] w-[100px] rounded-[30px] bg-dunes bg-cover bg-top" />
          <div class="absolute bottom-[-2px] right-[-6px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
        </div>

        <div class="m-auto w-[80%] text-left font-medium tracking-wider text-[#e07b7b]">
          Afin de parler qu'à des majeurs, <span class="inline-block first-letter:uppercase"> {id} </span> ne souhaite parler qu'aux hommes inscrits.
        </div>
      </div>
      <div id="chatform" />
    </div>
  </div>
{/if}
