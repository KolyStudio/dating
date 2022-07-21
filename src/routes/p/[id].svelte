<script>
  import { page } from '$app/stores'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import dayjs from 'dayjs'
  let firstip
  let myip = ''
  const { id } = $page.params
  const name = id.charAt(0).toUpperCase() + id.slice(1)
  const date = dayjs().format('DD/MM/YYYY')
  console.log(date)

  let link =
    `https://www.rencontres-proximite.com/?acme=wid.90642&siteid=3461948&tpls=73&userName=` +
    name +
    `25&userAge=22&userPicture=https://www.zupimages.net/up/22/29/gm47.jpg&source=RENCONTRE&s1=texte_normal&s2=snapchat&userDistance=7&userPhotos=53`

  let isClicked

  function handleClick() {
    isClicked = true
  }

  onMount(async () => {
    const firstip = await axios.get(`https://geolocation-db.com/json/`)

    const finalip = await axios.get(`https://api.ipregistry.co/` + `${firstip.data.IPv4}` + `?key=6nn8zr4k2hcwkw32`)

    if (!finalip.data.carrier.name) {
      myip = ``
    } else {
      myip = ``
    }

    console.log(finalip.data)
  })
</script>

<svelte:head>
  <title>{name}25 - Page Privée</title>
  <!-- <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script> -->
  <!-- <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=5e7fce81"></script> -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<!-- Logo - Titre -->

<div class="m-auto flex w-[300px] max-w-[400px] flex-col pt-4 ">
  <div class="m-auto flex items-center space-x-1">
    <img src="/mask.png" alt="chat" class="w-[60px]" />
  </div>
  <div class=" m-auto -mt-1 flex  w-full justify-center space-x-1  text-right text-xl font-bold">
    <span>Page Privée</span>
  </div>
</div>

<!-- Contenu blanc -->
<main class="mt-4 rounded-t-[40px] pb-[10px]">
  <!-- Profil -->
  <section>
    <!-- Photo profil -->
    <article class="relative m-auto mb-5 w-[170px] rounded-[50px] bg-gradient-to-r from-[#ffacbc] to-[#ffacbc] p-[4px] shadow-xl ">
      <img class="m-auto w-[200px] rounded-[50px] border-[5px] border-white" src="/profil.webp" alt="mask" />
      <div class="absolute bottom-[5px] right-[5px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
    </article>

    <!-- Informations profil -->
    <article>
      <h1 class="text-center text-2xl font-bold uppercase ">{name}25</h1>
      <div class="m-auto my-2 w-[100px] rounded-xl border-b-4 border-[#31d275] bg-[white] py-1 text-center text-xs font-semibold uppercase text-[#2aba66]">En Ligne</div>
      <div class="flex justify-center space-x-4 pt-2">
        <h3 class="rounded-xl border-b-4 border-[#f05e7a] bg-white px-2 font-semibold text-black">📸 53 photos</h3>
        <div class=" flex items-center space-x-2 rounded-xl border-b-4 border-[#f05e7a] bg-white px-2 font-semibold text-black ">
          <img src="/pin.svg" alt="pin" class="w-5" />
          <div>À 7 km</div>
        </div>
      </div>
      <div class="flex justify-center space-x-4 pt-2" />
    </article>
  </section>

  <div class="m-auto  w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-white p-4 text-center font-medium text-black">
    <div class="">{name} / 22 ans / Libertine qui s'assume 🍑 <br /><br />Si tu es intéressé, envoie moi un message ici et on s'organise un truc</div>
  </div>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}
    ><section id="testjs" class="mt-3 w-full">
      <article id="testjs" class=" shake  m-auto flex w-[90%]  items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#a36a6a] bg-[#f05e7a]  p-5 px-2 font-bold text-white shadow-2xl">
        <img src="/chat.png" alt="chat" class="w-[30px]" />
        <button id="testjs" class="font-bold tracking-[1px] "> ME CONTACTER MAINTENANT </button>
      </article>
    </section></a
  >

  <!-- Vidéo et explication -->
  <section>
    <section class="m-auto mt-4 w-[90%]  rounded-[30px] bg-gradient-to-r from-[#f05e7a] to-[#f05e7a] p-1  shadow-xl">
      <img src="/proof.webp" alt="proof" class="rounded-[30px] border-[4px] border-white" />
      <!-- <video class="rounded-[30px] border-[4px] border-white" poster="/poster.webp" playinline src="/proof.mp4" type="video/mp4" controls><track kind="captions" /></video> -->
    </section>
  </section>

  <section class="m-auto mt-4 w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-white p-4 font-medium text-black">
    <!-- <h1 class="text-center font-bold uppercase">PROFIL DE {name}25</h1> -->
    <h2 class="py-2 text-center font-bold uppercase text-[#f05e7a]">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>

    <p>
      Une bonne fois pour toute je ne demande pas d'argent, je cherche juste des plans culs pour m'amuser un peu c'est tout. <br /><br />Je préfère généralement les mecs avec un peu d'expérience mais si tu es puceau je vais voir ce que je
      peux faire... 😉<br />
      <br /> Par contre les mecs, respect et discrétion obligatoire SVP, sinon je bloque car c'est pas ce que je cherche. <br /><br />Je passe par J&M Contact, car au moins je me fais pas harceler comme sur Tinder, Badoo, ou Snap ça permet
      de parler sans se faire spammer par des milliers de gros relous. 😘
    </p>
  </section>

  <div class="m-auto mt-4 w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-white p-4 font-medium text-black">
    <div class="">
      <h2 class="py-2 text-center font-bold uppercase text-[#f05e7a]">Comment me rencontrer en réel ?</h2>

      Envoies moi une petite photo sur<a href={link} class="pl-1"> J&M Contact en cliquant ici</a> et dis moi quand t'es dispo.<br /><br /> Je reçois les notifs quand j'ai un message donc habituellement je réponds en quelques minutes. Je préviens
      l'inscription (essai) coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquile tu peux contacter gratuitement autant de filles que tu veux.
    </div>
  </div>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}
    ><section id="testjs" class="mt-3 w-full">
      <article id="testjs" class=" shake  m-auto flex w-[90%]  items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#a36a6a] bg-[#f05e7a]  p-5 px-2 font-bold text-white shadow-2xl">
        <img src="/chat.png" alt="chat" class="w-[30px]" />
        <button id="testjs" class="font-bold tracking-[1px] "> CLIQUE ICI POUR VOIR MON PROFIL </button>
      </article>
    </section></a
  >

  <!-- <section class="m-auto mt-4 w-[90%]  rounded-[30px] bg-gradient-to-r from-[#f05e7a] to-[#f05e7a] p-1  shadow-xl">
    <img src="/proof.webp" alt="proof" class="rounded-[30px] border-[4px] border-white" />
  </section> -->

  <!-- Témoignages -->
  <section>
    <article class="m-auto mt-4 w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-white p-4 text-[#f05e7a] ">
      <h1 class="text-center font-semibold">QUELQUES TÉMOIGNAGES</h1>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%]  rounded-[30px] border-b-4 border-[#f05e7a] bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] shadow-xl">
        <img src="/reviews/rev1.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
      </div>

      <h1 class="m-auto mt-4 w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-white p-4 text-center font-medium text-black">Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘</h1>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9]  shadow-xl">
        <img src="/reviews/rev2.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
      </div>
      <div class="m-auto mt-4  w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-white p-4 text-center font-medium text-black">
        Pour ceux qui sont aussi sceptiques, testez au moins avec l'offre d'essai vous verrez que ça fonctionne vraiment ! 💯🔥
      </div>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%]  rounded-[30px]   border-b-4 border-[#f05e7a] bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9]  shadow-xl ">
        <img src="/reviews/rev3.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
      </div>
      <div class="m-auto mt-4 w-[90%] rounded-[30px] border-b-4 border-[#f05e7a]  bg-white p-2 text-center font-medium text-black">
        <div class="m-auto w-[90%] rounded-[30px] bg-white text-center text-black">Avec plaisir ! Y'a plein de jolies filles comme elle qui s'amusent à dépuceler des mecs 😏👅</div>
      </div>
    </article>
  </section>

  <div class="m-auto w-[90%]">
    <div class="py-4 text-center font-bold  ">Tu veux nous rejoindre ?</div>
    <div class="text-center ">
      Super, tu ne le regretteras pas ! 🔥<br /><br /> Et si tu doutes encore tu peux tester quelques jours avec l’offre d’essai à 1.94€ <br /><br />Il te suffit de cliquer sur le bouton ci-dessous, de t’inscrire en une minute puis de
      choisir une offre !
    </div>
  </div>
  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <section on:click={handleClick} id="testjs" class="mt-3 w-full">
    <article id="testjs" class=" shake  m-auto flex w-[90%]  items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#a36a6a] bg-[#f05e7a]  p-5 px-2 font-bold text-white shadow-2xl">
      <img src="/chat.png" alt="chat" class="w-[30px]" />
      <button id="testjs" class="font-bold tracking-[1px] "> S'INSCRIRE SUR J&M CONTACT </button>
    </article>
  </section>
</main>

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
