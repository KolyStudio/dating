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
  let myip = '📍 À 3.9 km'
  let isClicked

  let link = `https://www.rdv-proches.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&tpls=73&source=jmlinkville&userPicture=https://i.ibb.co/qjb6YLJ/profil.png&userName=` + id + `25&userDistance=3.9`

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
  <title>{name}25 - Rencontre Moi</title>
  <!-- <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script> -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<div class="h-screen bg-jm bg-cover bg-center ">
  <!-- Logo - Titre -->

  <div class="m-auto w-[200px]">
    <!-- <div class="flex items-center space-x-1">
      <img src="/chat.png" alt="chat" class="w-[30px]" />
      <span class="text-2xl font-bold text-white">Match</span>
      <span class="text-2xl font-bold text-[#ffff85]"> &</span>
      <span class="text-2xl font-bold text-white">Sexe</span>
    </div>
    <div class="-mt-1 -mr-4 text-right text-lg  font-bold text-[#ffff85]">Invitation Privée</div> -->
  </div>

  <!-- Contenu blanc -->
  <main class="  h-screen  pb-5 pt-5 backdrop-brightness-[.50]">
    <!-- Profil -->
    <div>
      <section>
        <!-- Photo profil -->
        <article class="relative m-auto mb-5 w-[150px] rounded-[50px] bg-gradient-to-r from-[#e0e0e0] to-[#ececec] p-[3px] shadow-xl  ">
          <img class="m-auto w-[150px] rounded-[50px] border-[5px] border-white" src="/profil.png" alt="mask" />
          <div class="absolute bottom-[5px] right-[5px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
        </article>

        <!-- Informations profil -->
        <article>
          <h1 class="text-center text-2xl font-bold uppercase text-white">{name}25</h1>
          <div class="m-auto my-2 w-[100px] rounded-xl bg-[#e1f3e5] py-1 text-center text-xs font-semibold uppercase text-[#2aba66]">En Ligne</div>
          <div class="flex justify-center space-x-4 pt-2">
            <h3 class="flex items-center rounded-xl bg-white px-2 font-semibold text-black ">📸 53 photos</h3>

            <h3 class=" flex items-center rounded-xl bg-white px-2 font-semibold text-black ">{myip}</h3>
          </div>
        </article>
      </section>

      <!-- <section class="my-6">
      <h1 class="m-auto w-[80%] text-center text-2xl font-bold uppercase text-white"><span class="text-[#ffff85]">{name}25</span> T'AS ENVOYÉ UNE INVITATION PRIVÉE 🔞</h1>
    </section> -->
      <a href={link}>
        <section class="my-4 w-full" id="testjs">
          <article id="testjs" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] border-2 border-b-4 border-[#ffafcc] bg-white p-5 font-medium text-black shadow-2xl">
            <button id="testjs" class="font-bold uppercase tracking-[2px]">🔞┇Faisons connaissance </button>
          </article>
        </section></a
      >

      <a href={link}>
        <section class="my-4 w-full" id="testjs">
          <article id="testjs" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] border-2 border-b-4 border-[#ffafcc] bg-white p-5 font-medium text-black shadow-2xl">
            <button id="testjs" class="font-bold uppercase tracking-[2px]">❤️┇Voir mon profil libertin sur J&M contact</button>
          </article>
        </section></a
      >

      <a href={link}>
        <section class="my-4 w-full" id="testjs">
          <article id="testjs" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] border-2 border-b-4 border-[#ffafcc] bg-white p-5 font-medium text-black shadow-2xl">
            <button id="testjs" class="font-bold uppercase tracking-[2px]">🍑┇Mes nudes et vidéos de soirées hot</button>
          </article>
        </section></a
      >

      <!-- <section class="my-4 w-full" id="photos">
    <article id="photos" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] bg-white p-5 font-bold text-black  shadow-2xl">
      <button id="photos" class="font-bold tracking-[1px]"> 🔞 VOIR MES PHOTOS HOT </button>
    </article>
  </section> -->
    </div>
  </main>
</div>

<!-- {#if isClicked}
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>

  <div class="fixed top-0 flex h-screen w-full flex-col items-center  backdrop-blur-sm backdrop-brightness-[.25]">
    <div class="mx-2 mt-[50px] rounded-2xl bg-white py-4">
      <div class="flex items-center space-x-2 p-2">
        <div class="relative  m-auto mb-2 h-[100px] w-[100px] rounded-full">
          <div class="m-auto h-[100px] w-[100px] rounded-full bg-dunes bg-cover bg-top" />
          <div class="absolute top-1 right-[0px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
        </div>

        <div class="m-auto w-[80%] text-left font-medium tracking-wider text-[#e07b7b]">
          Afin de parler qu'à des majeurs, <span class="inline-block first-letter:uppercase"> {id} </span> ne souhaite parler qu'aux hommes inscrits.
        </div>
      </div>
      <div id="chatform" />
    </div>
  </div>
{/if} -->
