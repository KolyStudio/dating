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
  const proofname = id.toLowerCase()
  const date = dayjs().format('DD/MM/YYYY')
  console.log(date)
  let choice
  let link

  let isClicked

  function handleClick() {
    isClicked = true
  }

  const ab = {
    1: [`jm`, `jm`],
  }

  const newlink = () => {
    let random = Math.floor(Math.random() * ab[1].length)

    choice = ab[1][random]

    console.log(choice)

    if (choice == 'jm') {
      link = `https://k.encontro-rapido.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&tpls=73&v=sexy&userPicture=https://i.ibb.co/jWLpWnY/profil.webp&v=&xa=n&userPhotos=53&userDistance=7&userName=` + name
    } else {
      link = `https://info-rencontre.com/s/sl?ai=31778&snd=1&pid=https%3A%2F%2Fi.ibb.co%2Ft2SY7Vn%2F2316x3088-75e466c7b193d7a792ca6a6d314b1ed8-copie.jpg&fl=3&sg=3&ap.age=22&ap.loc=Paris&ap.fn=Lisa`
    }
  }

  onMount(async () => {
    const firstip = await axios.get(`https://geolocation-db.com/json/`)

    const finalip = await axios.get(`https://api.ipregistry.co/` + `${firstip.data.IPv4}` + `?key=6nn8zr4k2hcwkw32`)

    if (!finalip.data.carrier.name) {
      myip = `vers ` + finalip.data.location.city
    } else {
      myip = ``
    }

    console.log(finalip.data)

    newlink()
  })
</script>

<svelte:head>
  <title>{name} - Page Privée</title>
  <meta name="description" content="Accéder à la page privée de {name} pour consulter sa présentation et ses photos. {name} répond généralement aux messages privés en moins d'une heure." />
  <meta property="og:title" content="{name} - Page Privée" />
  <meta property="profile:username" content={name} />
  <!-- <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script> -->
  <!-- <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=5e7fce81"></script> -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<!-- Logo - Titre -->

<!-- Contenu blanc -->
<main class="m-auto h-full bg-[#ffd8d3] px-[5%]  pt-4 pb-[10px]">
  <!-- Profil -->
  <img class="m-auto w-[80%] border-white shadow-xl" src="/profil.webp" alt="mask" />

  <div class="m-auto rounded-[30px]  pt-4    text-center font-medium text-black">
    <div class="">{name} / 22 ans / Libertine {myip} qui s'assume 🍑 <br /><br />Si tu es intéressé, envoie moi un message ici et on s'organise un truc</div>
  </div>

  <div class="py-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}
    ><section id="testjs" class="w-full py-3">
      <article id="testjs" class="  m-auto flex  items-center justify-center space-x-4 rounded-[10px]  bg-[#57cc99]  p-5 px-2 font-bold text-white shadow-2xl">
        <button id="testjs" class="font-bold tracking-[1px] ">{`>>> ME CONTACTER MAINTENANT <<<`}</button>
      </article>
    </section></a
  >

  <div class="h-[2px] border-b-[1px] border-[#79413a] py-4" />
  <!-- Vidéo et explication -->
  <section>
    <section class="m-auto mt-4 w-[90%]    shadow-xl">
      <img src={`/proof/` + proofname + `.webp`} alt="proof" class="" />
      <!-- <video class="rounded-[30px] border-[4px] border-white" poster="/poster.webp" playinline src="/proof.mp4" type="video/mp4" controls><track kind="captions" /></video> -->
    </section>
  </section>

  <div class="h-[2px] border-b-[1px] border-[#79413a] pt-6" />

  <section class="m-auto  rounded-[30px]   text-black">
    <!-- <h1 class="text-center font-bold uppercase">PROFIL DE {name}25</h1> -->
    <h2 class="pt-6 pb-4 text-lg font-bold uppercase text-[#79413a]">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>

    <p>
      Une bonne fois pour toute <b>je ne demande pas d'argent</b>, je cherche juste des plans culs pour m'amuser un peu c'est tout. <br /><br />Je préfère généralement les mecs avec un peu d'expérience mais si tu es puceau je vais voir ce
      que je peux faire... 😉<br />
      <br /> Par contre les mecs, <b>respect et discrétion obligatoire SVP</b>, sinon je bloque car c'est pas ce que je cherche.
    </p>
  </section>

  <div class="m-auto  rounded-[30px]  text-black">
    <div class="">
      <h2 class="pt-8 pb-4 text-lg  font-bold uppercase text-[#79413a]">Comment me rencontrer en réel ? 🍑</h2>

      Envoies moi une petite photo sur<a href={link} class="pl-1 text-blue-600 underline underline-offset-2"> J&M Contact en cliquant ici</a> et dis moi quand t'es dispo.<br /><br /> Je reçois les notifs quand j'ai un message donc habituellement
      je réponds en quelques minutes. Je préviens l'inscription (essai) coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux contacter gratuitement autant de filles que tu veux.
    </div>
  </div>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}
    ><section id="testjs" class="w-full py-6">
      <article id="testjs" class="  m-auto flex  items-center justify-center space-x-4 rounded-[10px]  bg-[#57cc99]  p-5 px-2 font-bold text-white shadow-2xl">
        <button id="testjs" class="font-bold tracking-[1px] ">{`CLIQUE ICI POUR VOIR MON PROFIL`}</button>
      </article>
    </section></a
  >

  <!-- <section class="m-auto mt-4 w-[90%]  rounded-[30px] bg-gradient-to-r from-[#f05e7a] to-[#f05e7a] p-1  shadow-xl">
    <img src="/proof.webp" alt="proof" class="rounded-[30px] border-[4px] border-white" />
  </section> -->

  <!-- Témoignages -->
  <div class="h-[2px] border-b-[1px] border-[#79413a]" />
  <section>
    <article class="m-auto  w-[90%] rounded-[30px]  text-[#79413a] ">
      <h1 class="py-4 text-center  text-lg font-semibold">QUELQUES TÉMOIGNAGES</h1>
    </article>

    <article>
      <div class="m-auto  pt-6 shadow-xl">
        <img src="/reviews/rev1.webp" alt="rev1" class=" border-white" />
      </div>

      <h1 class="m-auto rounded-[30px] py-4 text-center text-black">Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘</h1>
    </article>

    <article>
      <div class="m-auto mt-4  pt-6 shadow-xl">
        <img src="/reviews/rev2.webp" alt="rev1" class=" border-white" />
      </div>
      <div class="m-auto mt-4   rounded-[30px]  p-4 text-center  text-black">Pour ceux qui sont aussi sceptiques, testez au moins avec l'offre d'essai vous verrez que ça fonctionne vraiment ! 💯🔥</div>
    </article>

    <article>
      <div class="m-auto  rounded-[30px]   pt-6 shadow-xl">
        <img src="/reviews/rev3.webp" alt="rev1" class=" border-[4px] border-white" />
      </div>
      <div class="m-auto  rounded-[30px] p-2 text-center text-black">
        <div class="rounded-[30px ] m-auto w-[90%] pt-4 text-center text-black">Avec plaisir ! Y'a plein de jolies filles comme elle qui s'amusent à dépuceler des mecs 😏👅</div>
      </div>
    </article>
  </section>

  <div class="my-4 h-[2px] border-b-[1px] border-[#79413a]" />

  <div class="m-auto">
    <div class=" pb-4 text-center text-lg font-bold  text-[#79413a]">Tu veux nous rejoindre ?</div>
    <div class="text-center">
      Super, tu ne le regretteras pas ! 🔥<br /><br /> Et si tu doutes encore tu peux tester quelques jours avec l’offre d’essai <br /><br />Il te suffit de cliquer sur le bouton ci-dessous, de t’inscrire en une minute puis de choisir une
      offre !
    </div>
  </div>
  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}
    ><section id="testjs" class="mt-3 w-full">
      <article id="testjs" class="  m-auto flex items-center justify-center space-x-4 rounded-[10px]  bg-[#57cc99]  p-5 px-2 font-bold text-white shadow-2xl">
        <button id="testjs" class="font-bold tracking-[1px] ">{`S'INSCRIRE SUR J&M CONTACT`}</button>
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
          Afin de parler qu'à des majeurs, <span class="inline-block first-letter:uppercase"> {id} </span> ne souhaite parler qu'aux hommes inscrits.
        </div>
      </div>
      <div id="chatform" />
    </div>
  </div>
{/if} -->
