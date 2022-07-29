<script>
  import { page } from '$app/stores'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import dayjs from 'dayjs'
  import Profil from '../components/profil/profil.svelte'
  import Header from '../components/header/header.svelte'
  import Proof from '../components/proof/proof.svelte'
  import Description from '../components/description/description.svelte'
  import Reviews from '../components/reviews/reviews.svelte'

  let firstip
  let myip = '📍 À 3.9 km'
  const { id } = $page.params
  const name = id.charAt(0).toUpperCase() + id.slice(1)
  const proofname = id.toLowerCase()
  const date = dayjs().format('DD/MM/YYYY')
  let isClicked

  onMount(async () => {
    const firstip = await axios.get(`https://geolocation-db.com/json/`)

    const finalip = await axios.get(`https://api.ipregistry.co/` + `${firstip.data.IPv4}` + `?key=6nn8zr4k2hcwkw32`)

    if (!finalip.data.carrier.name) {
      myip = `📍 À ` + finalip.data.location.city
    } else {
      myip = `📍 À  3.9 km`
    }
  })

  function handleClick() {
    isClicked = true
  }
</script>

<svelte:head>
  <title>{name} - Page Privée</title>
  <meta name="description" content="Accéder à la page privée de {name} pour consulter sa présentation et ses photos. {name} répond généralement aux messages privés en moins d'une heure." />
  <meta property="og:title" content="{name} - Page Privée" />
  <meta property="profile:username" content={name} />
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>
  <!-- <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=5e7fce81"></script> -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<main class="pb-2 ">
  <Header />
  <Profil prenom={name} ville={myip} />

  <section id="clicked" on:click={handleClick} class="shake m-auto mx-[3%] my-4 flex items-center justify-center space-x-4 rounded-3xl bg-black py-4 font-semibold text-white shadow-xl">
    <img src="/icons/chat.webp" alt="chat" class="w-10" />
    <span>ENVOIE-MOI UN MESSAGE</span>
  </section>

  <Proof />
  <Description prenom={name} />

  <section id="clicked" on:click={handleClick} class="shake m-auto mx-[3%] my-4 flex items-center justify-center space-x-4 rounded-3xl bg-black py-4 font-semibold text-white shadow-xl">
    <img src="/icons/chat.webp" alt="chat" class="w-10" />
    <span>ENVOIE-MOI UN MESSAGE</span>
  </section>

  <Reviews prenom={name} />
</main>

{#if isClicked}
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>

  <div class="fixed top-0 z-[2] flex h-screen w-full flex-col  items-center backdrop-blur-[1px] backdrop-brightness-[.70]">
    <div class="mx-2 mt-[50px] rounded-2xl bg-white py-4">
      <div class="flex items-center space-x-2 p-2">
        <div class="relative  m-auto mb-2 h-[100px] w-[100px] rounded-full">
          <div class="m-auto h-[100px] w-[100px] rounded-full bg-dunes bg-cover bg-top" />
          <div class="absolute top-1 right-[0px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
        </div>

        <div class="m-auto w-[80%] text-left font-medium tracking-wider text-[#e07b7b]">
          Afin de parler qu'à des majeurs, <span class="inline-block first-letter:uppercase"> 26</span> ne souhaite parler qu'aux hommes inscrits.
        </div>
      </div>
      <div id="formulaire" />
    </div>
  </div>
{/if}
