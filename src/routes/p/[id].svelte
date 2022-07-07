<script>
  import { page } from '$app/stores'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  let firstip
  let myip = ''
  const { id } = $page.params
  const name = id.charAt(0).toUpperCase() + id.slice(1)

  let link = `https://k.encontro-rapido.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&tpls=73&tpls=73&source=jm_link&userPicture=https://i.ibb.co/3WjYHdD/profil.png&userName=` + id + `25&userDistance=7`

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
      myip = `📍 À 7 km`
    }

    console.log(finalip.data)
  })
</script>

<svelte:head>
  <title>{name}25 - Page Privée</title>
  <!-- <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script> -->
  <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=5e7fce81"></script>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<div class="p-1 text-center text-lg font-medium uppercase text-white backdrop-brightness-[.70]">FERMETURE DE LA PAGE Privée à minuit</div>

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

<div class="m-auto flex w-[300px] max-w-[400px] flex-col  pt-4">
  <div class="m-auto flex items-center space-x-1">
    <img src="/mask.png" alt="chat" class="w-[60px]" />
  </div>
  <div class=" m-auto -mt-1 flex  w-full justify-center space-x-1  text-right text-xl font-bold text-white">
    <span>Page Privée</span>
  </div>
</div>

<!-- Contenu blanc -->
<main class="mt-4 rounded-t-[40px]  pb-[10px]">
  <!-- Profil -->
  <section>
    <!-- Photo profil -->
    <article class="relative m-auto mb-5 w-[170px] rounded-[50px] bg-gradient-to-r from-[#e0e0e0] to-[#ececec] p-[3px] shadow-xl ">
      <img class="m-auto w-[200px] rounded-[50px] border-[5px] border-white" src="/profil.png" alt="mask" />
      <div class="absolute bottom-[5px] right-[5px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
    </article>

    <!-- Informations profil -->
    <article>
      <h1 class="text-center text-2xl font-bold uppercase text-white">{name}25</h1>
      <div class="m-auto my-2 w-[100px] rounded-xl bg-[#e1f3e5] py-1 text-center text-xs font-semibold uppercase text-[#2aba66]">En Ligne</div>
      <div class="flex justify-center space-x-4 pt-2">
        <a href={link}><h3 class="rounded-xl bg-white px-2 font-semibold text-black">🎂 22 ans</h3></a>
        <a href={link}><h3 class="flex items-center rounded-xl bg-white px-2 font-semibold text-black ">🔞 Libertine</h3></a>
      </div>
      <div class="flex justify-center space-x-4 pt-4">
        <h3 class="fade-inn flex items-center rounded-xl bg-white px-2 font-semibold text-black ">{myip}</h3>
      </div>
    </article>
  </section>

  <a href={link}>
    <section id="testjs" class="mt-3 w-full">
      <article id="testjs" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] bg-gradient-to-r from-[#57cc99] to-[#73db8b]  p-5 font-bold text-white shadow-2xl">
        <img id="testjs" src="/chat.png" alt="chat" class="w-[30px]" />
        <button id="testjs" class="font-bold tracking-[1px]"> ME CONTACTER MAINTENANT</button>
      </article>
    </section>
  </a>

  <!-- Vidéo et explication -->
  <section>
    <section class="m-auto mt-4 w-[90%]  rounded-[30px] bg-gradient-to-r from-[#e0e0e0] to-[#ececec] p-1  shadow-xl">
      <img src="/proof.webp" alt="proof" class="rounded-[30px] border-[4px] border-white" />
    </section>

    <div class="m-auto mt-4 w-[90%] rounded-[30px] bg-white p-4 text-black">
      <div class="text- my-2">
        Coucou, je m'appelle <div class="inline-block font-bold first-letter:uppercase">{name},</div>
        <b> j'ai 22 ans.</b>
        Je suis passionnée de <b> fitness et de danse.</b>
        <br />
        <br />
        Je suis à la recherche de mecs discrets pour des <b> plans cul réguliers.</b>
        J'ai un appartement depuis peu, et
        <b> j'ai très envie de m'amuser.</b>
        <br /><br />
        Si tu es <b> intéressé</b>, envoie-moi un message on <b> s'organise une soirée dans la semaine</b> <br />
      </div>
    </div>
  </section>

  <section class="m-auto mt-4 w-[90%] rounded-[30px] bg-white p-4 text-black">
    <h1 class="text-center font-bold uppercase">PROFIL DE {name}25</h1>
    <h2 class="py-2 text-center font-bold">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>

    <p>
      Une bonne fois pour toute <b>je ne demande pas d'argent,</b> je cherche juste des <b>plans culs pour m'amuser</b> un peu c'est tout. <br /><br />Je préfère généralement les mecs avec
      <b>un peu d'expérience</b> mais si tu es puceau je vais voir ce que je peux faire... 😉<br />
      <br /> Par contre les mecs,
      <b>respect et discrétion obligatoire SVP,</b> sinon je bloque car c'est pas ce que je cherche.
    </p>
  </section>

  <section class="m-auto mt-4 w-[90%] rounded-[30px] bg-white p-4 text-black">
    <h1 class="mb-2 text-center font-semibold">COMMENT ME RENCONTRER EN RÉEL ?</h1>
    <p>
      Envoies moi une petite photo sur J&M Contact et
      <b> dis moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message donc habituellement <b>je réponds en quelques minutes.</b>
      <br />
      <br />Je préviens l'inscription (essai) coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux contacter gratuitement
      <b> autant de filles que tu veux.</b> <br />
      <br />Et au moins je me fais pas harceler comme sur
      <b> Tinder ou Snap ça permet de parler sans se faire spammer</b> par des milliers de gros relous. 😘
    </p>
  </section>

  <a href={link}>
    <section id="testjs" class="mt-3 w-full">
      <article id="testjs" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] bg-gradient-to-r from-[#57cc99] to-[#73db8b]  p-5 font-bold text-white shadow-2xl">
        <img id="testjs" src="/chat.png" alt="chat" class="w-[30px]" />
        <button id="testjs" class="font-bold tracking-[1px]"> ME CONTACTER MAINTENANT</button>
      </article>
    </section></a
  >

  <!-- Témoignages -->
  <section>
    <article class="m-auto mt-4 w-[90%] rounded-[30px] bg-white p-4 text-black">
      <h1 class="text-center font-semibold">QUELQUES TÉMOIGNAGES</h1>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%]  rounded-[30px] bg-gradient-to-r from-[#e0e0e0] to-[#ececec] p-1 shadow-xl">
        <img src="/reviews/rev1.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
      </div>

      <h1 class="m-auto mt-4 w-[90%] rounded-[30px] bg-white p-4 text-center text-black">Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘</h1>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%] rounded-[30px] bg-gradient-to-r from-[#e0e0e0] to-[#ececec] p-1 shadow-xl">
        <img src="/reviews/rev2.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
      </div>
      <div class="m-auto mt-4  w-[90%] rounded-[30px]  bg-white p-4 text-center text-black">Pour ceux qui sont aussi sceptiques, testez au moins avec l'offre d'essai vous verrez que ça fonctionne vraiment ! 💯🔥</div>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%]  rounded-[30px]  bg-gradient-to-r from-[#e0e0e0] to-[#ececec] p-1  shadow-xl ">
        <img src="/reviews/rev3.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
      </div>
      <div class="m-auto mt-4 w-[90%] rounded-[30px] bg-white p-4 text-center text-black">Ce ne sont pas des escortes, donc seul l'abonnement au site est payant, mais vous pouvez ensuite contacter autant de filles que vous voulez. 👌</div>
    </article>
  </section>

  <a href={link}>
    <section id="testjs" class="mt-3 w-full">
      <article id="testjs" class="shake m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] bg-gradient-to-r from-[#57cc99] to-[#73db8b]  p-5 font-bold text-white shadow-2xl">
        <img id="testjs" src="/chat.png" alt="chat" class="w-[30px]" />
        <button id="testjs" class="font-bold tracking-[1px]"> ME CONTACTER MAINTENANT</button>
      </article>
    </section></a
  >
</main>
<!-- 
{#if isClicked}
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
