<script>
  import { page } from '$app/stores'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import dayjs from 'dayjs'
  let firstip
  let myip = ''
  const { id } = $page.params
  const name = 'kalilabelly978'
  const date = dayjs().format('DD/MM/YYYY')

  let link =
    `https://www.rdv-proches.com/?acme=wid.90642&cid=&gemail=&media=social&s1=texte_sm&s2=` +
    date +
    `&siteid=3461948&tpl=153&tpls=73&tr4ck=qsgef62d522d20007bb9e&userAge=&userName=` +
    name +
    `25&userDistance=7&userPicture=https%3A%2F%2Fi.ibb.co%2F551c5pr%2Fprofil.webp&v=&xa=n&userPhotos=53`

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
  <title>Kalilabelly978 - Page Privée</title>
  <meta name="description" content="Accéder à la page privée de kalilabelly978 pour consulter sa présentation et ses photos. kalilabelly978 répond généralement aux messages privés en moins d'une heure." />
  <meta property="og:title" content="@kalilabelly978" />
  <meta property="profile:username" content="kalilabelly978" />
  <!-- <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script> -->
  <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=5e7fce81"></script>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-F3RSNVW3L4"></script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())

    gtag('config', 'G-F3RSNVW3L4')
  </script>
</svelte:head>

<!-- Logo - Titre -->

<div class="m-auto flex w-[300px] max-w-[400px] flex-col pt-4 ">
  <div class="m-auto flex items-center space-x-1">
    <img src="/mask.png" alt="kalilabelly978" class="w-[60px]" />
  </div>
  <div class=" m-auto -mt-1 flex  w-full justify-center space-x-1  text-right text-xl font-bold">
    <span>Page Privée</span>
  </div>
</div>

<!-- Contenu blanc -->
<main class="mt-4 rounded-t-[40px]   pb-[10px]">
  <!-- Profil -->
  <section>
    <!-- Photo profil -->
    <article class="relative m-auto mb-5 w-[170px] rounded-[50px] bg-gradient-to-r from-[#ffacbc] to-[#ffacbc] p-[4px] shadow-xl ">
      <img class="m-auto w-[200px] rounded-[50px] border-[5px] border-white" src="/ismanabelly.webp" alt="kalilabelly978" />
      <div class="absolute bottom-[5px] right-[5px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
    </article>

    <!-- Informations profil -->
    <article>
      <h1 class="text-center text-2xl font-bold uppercase ">{name}</h1>
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
    <div class="">A la recherche d'un soumis {myip} pour m'amuser un peu ! 😘 <br /> <br />Si tu es prêt à obéir à tous mes désirs inscris toi ici et envoie moi un message</div>
  </div>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}
    ><section id="plancul" class="mt-3 w-full">
      <article id="plancul" class=" shake  m-auto flex w-[90%]  items-center justify-center rounded-[30px] border-b-4 border-[#a36a6a] bg-[#f05e7a]  p-5 px-2 font-bold text-white shadow-2xl">
        <button id="plancul" class="font-bold tracking-[1px] ">🔞┇ JE M'ENGAGE À OBÉIR </button>
      </article>
    </section></a
  >

  <!-- Vidéo et explication -->
  <section>
    <section class="m-auto mt-4 w-[90%]  rounded-[30px] bg-gradient-to-r from-[#f05e7a] to-[#f05e7a] p-1  shadow-xl">
      <img src="/proof.webp" alt="kalilabelly978" class="rounded-[30px] border-[4px] border-white" />
      <!-- <video class="rounded-[30px] border-[4px] border-white" poster="/poster.webp" src="/proof.mp4" type="video/mp4" controls><track kind="captions" /></video> -->
    </section>

    <div class="m-auto mt-4 w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-white p-4 font-medium text-black">
      <div class="">
        <h2 class="py-2 text-center font-bold uppercase text-[#f05e7a]">Je recherche un mec soumis</h2>

        Je suis une dominatrice et je cherche mon tout premier soumis personnel. Tu peux quitter cette page si ce n'est pas ton truc, mais si tu restes, il va falloir m'obéir jusque au bout. 😇<br /><br />Je ne demande pas d'argent mais le
        site sur lequel je suis fonctionne par abonnement, du coup je conseille généralement de prendre l'offre d'essai à 2 euros ça permet d'avoir accès à tout sans payer plus. Mais si tu es un vrai soumis ça ne devrait pas te poser
        problème de toute façon... 😘
      </div>
    </div>
  </section>

  <section class="m-auto mt-4 w-[90%] rounded-[30px] border-b-4 border-[#f05e7a] bg-white p-4 font-medium text-black">
    <!-- <h1 class="text-center font-bold uppercase">PROFIL DE {name}25</h1> -->
    <h2 class="py-2 text-center font-bold uppercase text-[#f05e7a]">Pour ceux qui veulent des plans culs</h2>

    <p>
      Perso j'ai pas mal utilisée J&M Contact pour trouver des plans culs par le passé et je sais que y'a plein de filles qui font pareil mais qui attendent encore des propositions. <br /><br />Si être soumis n'est pas ton truc n'hésite pas
      à m'envoyer un petit message quand même je pourrai te conseiller 2-3 filles qui cherchent des mecs pour s'amuser un peu. 😉
    </p>
  </section>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}
    ><section id="plancul" class="mt-3 w-full ">
      <article id="plancul" class=" shake  m-auto flex w-[90%]  items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#a67070] bg-[#f05e7a] p-5 px-2 font-bold text-white shadow-2xl">
        <button id="plancul" class="font-bold tracking-[1px] "> 🔞┇ CLIQUE POUR VOIR MON PROFIL </button>
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
        <img src="/reviews/rev1.jpg" alt="kalilabelly978" class="rounded-[30px] border-[4px] border-white" />
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
        <img src="/reviews/rev3.jpg" alt="kalilabelly978" class="rounded-[30px] border-[4px] border-white" />
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
  <a href={link}
    ><section id="plancul" class="mt-3 w-full">
      <article id="plancul" class=" shake  m-auto flex w-[90%]  items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#a67070] bg-[#f05e7a] p-5 px-2 font-bold text-white shadow-2xl">
        <button id="plancul" class="font-bold tracking-[1px] ">🔞┇S'INSCRIRE MAINTENANT SUR J&M CONTACT </button>
      </article>
    </section></a
  >
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
          Afin de parler qu'à des majeurs, <span class="inline-block first-letter:uppercase"> {name} </span> ne souhaite parler qu'aux hommes inscrits.
        </div>
      </div>
      <div id="chatform" />
    </div>
  </div>
{/if} -->
