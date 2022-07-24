<script>
  import { page } from '$app/stores'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import { flip } from 'svelte/animate'
  import { fade } from 'svelte/transition'
  import dayjs from 'dayjs'
  const { id } = $page.params

  console.log(id)
  const name = id.charAt(0).toUpperCase() + id.slice(1)
  const proofname = id
  let firstip
  let myip = ''
  let isClicked
  const date = dayjs().format('DD/MM/YYYY')

  function handleClick() {
    isClicked = true
  }

  let link =
    `https://www.rencontres-proximite.com/?acme=wid.90642&siteid=3461948&tpls=73&userName=` +
    name +
    `&userAge=22&userPicture=https://www.zupimages.net/up/22/29/gm47.jpg&source=APPLI_RENCONTRE&s1=story_snap&s2=` +
    date +
    `&userDistance=7&userPhotos=53`

  // let link =
  //   `https://k.encontro-rapido.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&source=APPLI_RENCONTRE&s1=snapchat&s2=` +
  //   date +
  //   `&tpls=73&v=sexy&userPicture=https://www.zupimages.net/up/22/29/gm47.jpg&userPhotos=53&userName=` +
  //   name +
  //   `25`
  onMount(async () => {
    const firstip = await axios.get(`https://geolocation-db.com/json/`)

    const finalip = await axios.get(`https://api.ipregistry.co/` + `${firstip.data.IPv4}` + `?key=6nn8zr4k2hcwkw32`)

    if (!finalip.data.carrier.name) {
      myip = `À ` + finalip.data.location.city
    } else {
      myip = 'À 7 km'
    }
  })
</script>

<svelte:head>
  <title>{name} - Page Privée</title>
  <!-- <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script> -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<div class=" bg-[#cdb4db] pb-10">
  <!-- Logo - Titre -->
  <!-- <img src="/heart.svg" alt="heart" class=" fixed top-10 left-5 z-[-1] w-[30px] -rotate-[40deg]" />
  <img src="/heart.svg" alt="heart" class=" fixed top-8 right-5 z-[-1] w-[20px] -rotate-[20deg]" />
  <img src="/heart.svg" alt="heart" class="fixed top-[12%] right-[50%] z-[-1] w-[28px] -rotate-[18deg]" />
  <img src="/heart.svg" alt="heart " class="fixed top-[60%] right-[10%] z-[-1] w-[28px] rotate-[18deg]" />
  <img src="/heart.svg" alt="heart" class="fixed top-[55%] left-[10%] z-[-1] w-[22px] -rotate-[18deg]" />
  <img src="/heart.svg" alt="heart" class="fixed top-[35%] left-[5%] z-[-1] w-[22px] rotate-[33deg]" />
  <img src="/heart.svg" alt="heart" class="fixed top-[25%] right-[10%] z-[-1] w-[25px] rotate-[15deg]" />

  <img src="/flash.svg" alt="heart" class="fixed top-[3%] left-[25%] z-[-1] w-[25px] rotate-[15deg]" />
  <img src="/flash.svg" alt="heart" class="fixed top-[15%] right-[15%] z-[-1] w-[18px] rotate-[25deg]" />
  <img src="/flash.svg" alt="heart" class="fixed top-[25%] left-[15%] z-[-1] w-[25px] -rotate-[25deg]" />
  <img src="/flash.svg" alt="heart" class="fixed top-[45%] right-[10%] z-[-1] w-[25px] -rotate-[35deg]" /> -->

  <!-- Contenu blanc -->
  <div class="h-[500px] bg-meuf bg-cover bg-center bg-no-repeat">
    <div class="m-auto w-[80%] pt-4">
      <div class="flex items-center justify-center space-x-2">
        <div class="m-auto w-[150px] rounded-xl border-b-4 border-[#acd0b3] bg-[#e1f3e5]  py-1 text-center font-medium uppercase text-[#2aba66]">En Ligne</div>
      </div>
    </div>
    <div class="relative h-full">
      <div class="absolute bottom-[100px] left-3  mb-2 text-3xl font-medium text-white">
        <div class="flex items-center space-x-2">
          <div>{name}, 22 ans</div>
          <div><img src="/check.webp" alt="check" class="mt-[1px] w-5" /></div>
        </div>
        <div class="flex items-center">
          <img src="/pin.svg" alt="pin" class="w-6" />
          <div class="mt-[2px] text-lg">{myip}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-[-50px] h-[50px] bg-cloud bg-cover " />
  <main class="mt-[-10px]   bg-[#fff2ee] pt-1 pb-5  shadow-xl">
    <!-- Profil -->
    <section>
      <!-- Photo profil -->
      <!-- <article class="relative m-auto mb-5 w-[170px] rounded-[50px] bg-gradient-to-r from-[#cdb4db] to-[#cdb4db] p-[3px] shadow-xl  ">
        <img class="m-auto w-[200px] rounded-[50px] border-[5px] border-white" src="/profil.webp" alt="mask" /> -->
      <!-- <div class="absolute bottom-[5px] right-[5px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " /> -->
      <!-- </article> -->

      <!-- Informations profil -->
      <article>
        <!-- <div class="m-auto my-2 w-[100px] rounded-xl bg-[#e1f3e5] py-1 text-center text-xs font-semibold uppercase text-[#2aba66]">En Ligne</div> -->
        <!-- <div class="flex justify-center space-x-4 pt-2">
          <h3 class="flex items-center rounded-xl border-b-4 bg-white px-2 font-semibold text-black ">📸 53 photos</h3>
          <h3 class=" flex items-center rounded-xl border-b-4 bg-white px-2 font-semibold text-black ">📍 À 7 km</h3>
        </div> -->
      </article>
    </section>

    <div class="m-auto w-[90%]  rounded-[30px]   pt-4  text-center font-medium text-black">
      <div class="">{name} / 22 ans / Libertine qui s'assume 🍑 <br /><br />Si tu es intéressé, envoie moi un message ici et on s'organise un truc</div>
    </div>

    <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

    <a href={link}>
      <section class=" shake my-4 w-full" id="testjs">
        <article id="testjs" class=" m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#4bb788] bg-gradient-to-r from-[#57cc99] to-[#57cc99]  p-5 font-bold text-white shadow-2xl">
          <button id="testjs" class=" font-bold uppercase tracking-[2px]">ME CONTACTER MAINTENANT</button>
        </article>
      </section></a
    >

    <div class="m-auto h-[2px] w-[70%] border-b-[1px] border-[#cdb4db] pb-4" />

    <section>
      <section class="m-auto mt-4 w-[90%]    shadow-xl">
        <img src={`/proof/` + proofname + `.jpg`} alt="proof" class="" />
        <!-- <video class="rounded-[30px] border-[4px] border-white" poster="/poster.webp" playinline src="/proof.mp4" type="video/mp4" controls><track kind="captions" /></video> -->
      </section>
    </section>

    <div class="m-auto h-[2px] w-[70%] border-b-[1px] border-[#cdb4db] pb-4" />

    <section class="m-auto w-[90%]  rounded-[30px]   text-black">
      <!-- <h1 class="text-center font-bold uppercase">PROFIL DE {name}25</h1> -->
      <h2 class=" pt-6 pb-4 text-lg font-bold uppercase text-[#af93c0]">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>

      <p>
        Une bonne fois pour toute je ne demande pas d'argent, je cherche juste des plans culs pour m'amuser un peu c'est tout. <br /><br />Je préfère généralement les mecs avec un peu d'expérience mais si tu es puceau je vais voir ce que je
        peux faire... 😉<br />
        <br /> Par contre les mecs, respect et discrétion obligatoire SVP, sinon je bloque car c'est pas ce que je cherche.
      </p>
    </section>

    <div class="m-auto w-[90%]  rounded-[30px]  text-black">
      <div class="">
        <h2 class="pt-8 pb-4 text-lg  font-bold uppercase text-[#af93c0]">Comment me rencontrer en réel ?</h2>

        Envoies moi une petite photo sur<a href={link} class="pl-1 text-blue-600 underline underline-offset-2"> J&M Contact en cliquant ici</a> et dis moi quand t'es dispo.<br /><br /> Je reçois les notifs quand j'ai un message donc habituellement
        je réponds en quelques minutes. Je préviens l'inscription (essai) coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquile tu peux contacter gratuitement autant de filles que tu veux.
      </div>
    </div>

    <div class="m-auto w-[90%]  rounded-[30px]  text-black">
      <div class="">
        <h2 class="pt-8 pb-4 text-lg  font-bold uppercase text-[#af93c0]">Pourquoi J&M Contact plutôt que Snap ?</h2>

        Je suis aussi sur Tinder et plusieurs autres sites, mais au final je me fais harceler par des Kssos et les faux profils qui me font perdre beaucoup de temps... 😡 Une pote m'a conseillée d'essayer J&M Contact parce que c'est ce
        qu'elle utilisait pour chopper régulièrement de façon discrète.<br /><br />Au début je ne voulais pas trop parce que des rencontres sur J&M Contact ça me bloquait un peu, mais au final j'adore car c'est beaucoup plus pratique et
        discret que Tinder. 😍<br /><br /> Et ceux qui me disent "Ouais mais J&M Contact c'est payant, c'est abusé", vous pouvez toujours essayer Tinder et matcher avec des filles qui ont 200 matches par jour et qui ne répondent plus depuis
        longtemps. ^^
      </div>
    </div>

    <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>
    <a href={link}>
      <section class=" shake my-4 w-full" id="testjs">
        <article id="testjs" class=" m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#4bb788] bg-gradient-to-r from-[#57cc99] to-[#57cc99]  p-5 font-bold text-white shadow-2xl">
          <button id="testjs" class="font-bold uppercase tracking-[2px]">CLIQUE POUR VOIR MON PROFIL</button>
        </article>
      </section></a
    >

    <section>
      <article class=" m-auto w-[90%] pt-[20px] ">
        <h1 class="text-center font-semibold text-[#af93c0]">QUELQUES TÉMOIGNAGES</h1>
      </article>

      <article>
        <div class="m-auto mt-4 w-[90%] ">
          <img src="/reviews/rev1.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
        </div>

        <h1 class="m-auto  w-[90%] p-4 text-center text-black">Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘</h1>
      </article>

      <article>
        <div class="m-auto mt-4 w-[90%] ">
          <img src="/reviews/rev2.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
        </div>
        <div class="m-auto  w-[90%]  p-4 text-center  text-black">Pour ceux qui sont aussi sceptiques, testez au moins avec l'offre d'essai vous verrez que ça fonctionne vraiment ! 💯🔥</div>
      </article>

      <article>
        <div class="m-auto   mt-6  w-[90%]  ">
          <img src="/reviews/rev3.jpg" alt="rev1" class="rounded-[30px] border-[4px] border-white" />
        </div>
        <div class="m-auto rounded-[30px]   p-2 text-center  text-black">
          <div class="m-auto w-[90%] rounded-[30px] text-center text-black">Avec plaisir ! Y'a plein de jolies filles comme elle qui s'amusent à dépuceler des mecs 😏👅</div>
        </div>
      </article>
    </section>

    <div class="m-auto h-[2px] w-[70%] border-b-[1px] border-[#cdb4db] pb-4" />

    <div class="m-auto mt-6 w-[90%]">
      <div class="py-4 text-center font-bold  ">Tu veux nous rejoindre ?</div>
      <div class="text-center ">
        Super, tu ne le regretteras pas ! 🔥<br /><br /> Et si tu doutes encore tu peux tester quelques jours avec l’offre d’essai <br /><br />Il te suffit de cliquer sur le bouton ci-dessous, de t’inscrire en une minute puis de choisir une
        offre !
      </div>
    </div>
    <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

    <a href={link}>
      <section class=" shake my-4 w-full" id="testjs">
        <article id="testjs" class=" m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#4bb788] bg-gradient-to-r from-[#57cc99] to-[#57cc99]  p-5 font-bold text-white shadow-xl">
          <button id="testjs" class="font-bold uppercase tracking-[2px]">S'INSCRIRE SUR J&M CONTACT</button>
        </article>
      </section></a
    >
  </main>
  <div class=" h-[50px] rotate-180 bg-cloud bg-cover bg-center" />
</div>

<!-- {#if isClicked}
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
{/if} -->
