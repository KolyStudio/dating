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
  let myip = ''
  let isClicked

  function handleClick() {
    isClicked = true
  }

  onMount(async () => {
    const firstip = await axios.get(`https://geolocation-db.com/json/`)

    const finalip = await axios.get(`https://api.ipregistry.co/` + `${firstip.data.IPv4}` + `?key=6nn8zr4k2hcwkw32`)

    if (!finalip.data.carrier.name) {
      myip = `📍 À ` + finalip.data.location.city
    } else {
      myip = '📍 À 7 km'
    }
  })
</script>

<svelte:head>
  <title>{name}25 - Invitation</title>
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<div class="h-screen bg-jm bg-cover bg-center">
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

  <div class="m-auto w-[200px] pt-4">
    <div class="flex items-center space-x-1">
      <img src="/chat.png" alt="chat" class="w-[30px]" />
      <span class="text-2xl font-bold text-white">Jacquie</span>
      <span class="text-2xl font-bold text-[#ffff85]"> &</span>
      <span class="text-2xl font-bold text-white">Michel</span>
    </div>
    <div class="-mt-1 -mr-4 text-right text-lg  font-bold text-[#ffff85]">Club privé des libertines</div>
  </div>

  <!-- Contenu blanc -->
  <main class="mx-2 mt-4  rounded-[40px] bg-black/50 pb-5 pt-5">
    <div class="absolute left-0 right-0 mx-auto -mt-[30px] w-[200px] rounded-xl bg-[#298cfa] py-1 text-center text-xs font-semibold uppercase text-white">PROFIL ACTRICE J&M VERIFIÉ</div>
    <!-- Profil -->
    <section>
      <!-- Photo profil -->
      <article class="relative m-auto mt-2 mb-5 w-[170px] rounded-[50px] bg-gradient-to-r from-[#e0e0e0] to-[#ececec] p-[3px] shadow-xl  ">
        <img class="m-auto w-[200px] rounded-[50px] border-[5px] border-white" src="/profil.png" alt="mask" />
        <div class="absolute bottom-[5px] right-[5px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
      </article>

      <!-- Informations profil -->
      <article>
        <div class="m-auto my-2 w-[100px] rounded-xl bg-[#e1f3e5] py-1 text-center text-xs font-semibold uppercase text-[#2aba66]">En Ligne</div>
        <div class="flex justify-center space-x-4 pt-2">
          <h3 class="rounded-xl bg-white px-2 font-semibold text-black">🎂 22 ans</h3>
          <h3 class="rounded-xl bg-white px-2 font-semibold text-black">🔞 Libertine</h3>
          <h3 class="flex items-center rounded-xl bg-white px-2 font-semibold text-black ">📸 53 photos</h3>
        </div>
        <div class="flex justify-center space-x-4 pt-4">
          <h3 class="fade-inn flex items-center rounded-xl bg-white px-2 font-semibold text-black ">{myip}</h3>
        </div>
      </article>
    </section>

    <section class="my-6">
      <h1 class="m-auto w-[80%] text-center text-2xl font-bold uppercase text-white"><span class="text-[#ffff85]">{name}25</span> T'AS ENVOYÉ UNE INVITATION PRIVÉE 🔞</h1>
    </section>

    <section class="my-4 w-full" id="testjs">
      <article id="testjs" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] bg-gradient-to-r from-[#57cc99] to-[#73db8b]  p-5 font-bold text-white shadow-2xl">
        <button on:click={handleClick} id="testjs" class="font-bold uppercase tracking-[1px]"> Accepter l'invitation </button>
      </article>
    </section>

    <!-- <section class="my-4 w-full" id="photos">
    <article id="photos" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] bg-white p-5 font-bold text-black  shadow-2xl">
      <button id="photos" class="font-bold tracking-[1px]"> 🔞 VOIR MES PHOTOS HOT </button>
    </article>
  </section> -->
  </main>
</div>

{#if isClicked}
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>

  <div class="fixed top-0 flex h-screen w-full flex-col items-center justify-center bg-black/80 ">
    <div class="mx-2 rounded-2xl bg-white py-4 " transition:fade>
      <div class="flex items-center space-x-2 p-2">
        <div class="relative m-auto -mt-2 mb-2 h-[100px] w-[100px] rounded-full">
          <div class="m-auto h-[100px] w-[100px] rounded-full bg-dunes bg-cover bg-top" />
          <div class="absolute top-1 right-[0px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
        </div>

        <div class="m-auto w-[80%] text-left text-[14px] font-medium tracking-wider text-[#e07b7b]">
          Vous allez entrer en contact avec des femmes ayant tournés des vidéos pour Jacquie & Michel. <br />Afin de parler qu'à des majeurs, <span class="inline-block first-letter:uppercase"> {id}25</span> ne souhaite parler qu'aux hommes inscrits.
        </div>
      </div>
      <div id="chatform" />
    </div>
  </div>
{/if}
