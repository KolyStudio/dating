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

  let link = `https://k.encontro-rapido.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&source=APPLI_RENCONTRE&s1=story_snap&s2=25/07/2022&tpls=73&v=sexy&userName=` + name + `26&userPicture=https://i.ibb.co/7grhkXy/profil-1.webp`

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

<main class="py-4">
  <section class=" text-center text-lg font-medium text-white">
    <img src="/icons/mask.webp" alt="mask" class=" m-auto w-[70px]" />
    <h1>Page Privée</h1>
  </section>

  <section class="m-auto mt-5 flex w-[90%] items-center justify-center space-x-4">
    <article class=" relative m-auto mb-5 w-[180px]  rounded-[50px] bg-gradient-to-r from-[#cbcbcb] to-[#cbcbcb] p-[5px] shadow-xl  ">
      <img src="/profil.webp" alt="profil" class="w-[180px] rounded-[50px] border-[4px] border-white" />
      <div class="absolute bottom-[5px] right-[5px] h-[25px] w-[25px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
    </article>
  </section>

  <article>
    <h1 class="text-center text-2xl font-bold uppercase text-white">{name}26</h1>
    <div class="m-auto my-2 w-[100px] rounded-xl border-b-4 border-[#31d275] bg-[white] py-1 text-center text-xs font-semibold uppercase text-[#2aba66]">En Ligne</div>
    <div class="flex justify-center space-x-4 pt-2">
      <h3 class="rounded-xl  px-2 font-semibold text-white backdrop-brightness-[.30]">🎂 22 ans</h3>
      <h3 class="rounded-xl  px-2 font-semibold text-white backdrop-brightness-[.30]">🔞 Libertine</h3>
      <h3 class="rounded-xl  px-2 font-semibold text-white backdrop-brightness-[.30]">📸 53 photos</h3>
    </div>
    <div class="flex justify-center space-x-4 pt-2">
      <div class=" flex items-center space-x-2 rounded-xl  px-2 font-semibold text-white backdrop-brightness-[.30] ">
        <img src="/icons/nav.svg" alt="pin" class="w-5" />
        <div>À 7 km</div>
      </div>
    </div>
  </article>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}>
    <section class=" shake my-4 w-full" id="testjs">
      <article id="testjs" class=" m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[20px] border-b-4 border-[#48af78] bg-gradient-to-r from-[#59cd90] to-[#62dc9b]  p-5 font-bold text-white shadow-2xl">
        <img src="/icons/chat.webp" alt="chat" class="w-7" />
        <button id="testjs" class=" font-bold uppercase tracking-[2px]">ME CONTACTER MAINTENANT</button>
      </article>
    </section></a
  >

  <section>
    <section class="m-auto mt-4 w-[90%]    ">
      <article class=" relative m-auto mb-5 rounded-[50px] bg-gradient-to-r from-[#cbcbcb] to-[#cbcbcb] p-[3px] shadow-xl  ">
        <img src={`/proof/` + proofname + `.webp`} alt="proof" class="rounded-[50px] border-[4px] border-white shadow-xl" />
        <!-- <video class="rounded-[30px] border-[4px] border-white" poster="/poster.webp" playinline src="/proof.mp4" type="video/mp4" controls><track kind="captions" /></video> -->
      </article>
    </section>
  </section>

  <section class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-white shadow-xl backdrop-brightness-[.30]">
    <h1 class="pb-2 text-center text-lg font-semibold uppercase text-[white]">PROFIL DE {name}26</h1>
    Coucou, je m'appelle&nbsp;<b>{name}, j'ai 22 ans.</b> Je suis passionnée de <b>fitness et de danse.</b><br /><br /> Je suis à la recherche de mecs discrets pour des <b>plans cul réguliers.</b> J'ai un appartement depuis peu, et
    <b>j'ai très envie de m'amuser.</b>
    <br /><br />Si tu es <b>intéressé</b>, envoie-moi un message on <b>s'organise une soirée dans la semaine.</b>
  </section>

  <section class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-white shadow-xl backdrop-brightness-[.30]">
    <h1 class="pb-2 text-center text-lg font-semibold text-[white]">JE NE SUIS PAS UNE ESCORTE !! ❌</h1>
    Une bonne fois pour toute,&nbsp;<b>je ne demande pas d'argent</b>, je cherche juste <b>des plans culs pour m'amuser</b> un peu c'est tout.<br /><br />Je préfère généralement les mecs avec <b>un peu d'expérience</b> mais si tu es puceau
    je vais voir ce que je peux faire... 😉<br /><br /> Par contre les mecs, <b>respect et discrétion obligatoire SVP</b>, sinon je bloque car c'est pas ce que je cherche.
  </section>

  <section class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-white shadow-xl backdrop-brightness-[.30]">
    <h1 class="pb-2 text-center text-lg font-semibold text-[white]">COMMENT ME RENCONTRER EN RÉEL ?</h1>
    Envoies moi une petite photo sur J&M Contact et&nbsp;<b>dis moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message donc habituellement <b>je réponds en quelques minutes.</b><br /><br /> Je préviens l'inscription (essai)
    coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux contacter gratuitement <b>autant de filles que tu veux.</b> <br /><br />Et au moins je me fais pas harceler comme sur&nbsp;<b
      >Tinder, Badoo ou Snap ça permet de parler sans se faire spammer</b
    > par des milliers de gros relous. 😘
  </section>

  <section class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-white shadow-xl backdrop-brightness-[.30]">
    <h1 class="pb-2 text-center text-lg font-semibold text-[white]">POURQUOI J&M CONTACT PLUTÔT QUE SNAP, BADOO OU TINDER ?</h1>
    Je suis aussi sur Tinder et plusieurs autres sites, mais au final&nbsp;<b>je me fais harceler par des Kssos et les faux profils</b> qui me font perdre beaucoup de temps… 😡
  </section>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}>
    <section class=" shake my-4 w-full" id="testjs">
      <article id="testjs" class=" m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[20px] border-b-4 border-[#48af78] bg-gradient-to-r from-[#59cd90] to-[#62dc9b]   p-5 font-bold text-white shadow-2xl">
        <img src="/icons/chat.webp" alt="chat" class="w-7" />
        <button id="testjs" class=" font-bold uppercase tracking-[2px]">ME CONTACTER MAINTENANT</button>
      </article>
    </section></a
  >

  <section>
    <article class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-center text-white shadow-xl backdrop-brightness-[.30]">
      <h1 class="text-center font-semibold text-[white]">QUELQUES TÉMOIGNAGES</h1>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%] ">
        <img src="/reviews/rev1.webp" alt="rev1" class="rounded-xl " />
      </div>

      <h1 class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-center text-white shadow-xl backdrop-brightness-[.30]">Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘</h1>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%] ">
        <img src="/reviews/rev4.webp" alt="rev4" class="rounded-xl " />
      </div>

      <h1 class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-center text-white shadow-xl backdrop-brightness-[.30]">J'avoue qu'on s'est bien amusé lol.. 🙈😘</h1>
    </article>

    <article>
      <div class="m-auto mt-4 w-[90%] ">
        <img src="/reviews/rev2.webp" alt="rev1" class="rounded-xl" />
      </div>
      <div class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-center text-white shadow-xl backdrop-brightness-[.30]">
        Pour ceux qui sont aussi sceptiques, testez au moins avec l'offre d'essai vous verrez que ça fonctionne vraiment ! 💯🔥
      </div>
    </article>

    <article>
      <div class="m-auto   mt-6  w-[90%]  ">
        <img src="/reviews/rev3.webp" alt="rev1" class="rounded-xl" />
      </div>
      <div class="m-auto rounded-[30px]  text-center  text-black">
        <div class="m-auto my-4 w-[90%] rounded-3xl p-3 py-4 text-center text-white shadow-xl backdrop-brightness-[.30]">Avec plaisir ! Y'a plein de jolies filles comme elle qui s'amusent à dépuceler des mecs 😏👅</div>
      </div>
    </article>
  </section>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}>
    <section class=" shake my-4 w-full" id="testjs">
      <article id="testjs" class=" m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[20px] border-b-4 border-[#48af78] bg-gradient-to-r from-[#59cd90] to-[#62dc9b]    p-5 font-bold text-white shadow-2xl">
        <img src="/icons/chat.webp" alt="chat" class="w-7" />
        <button id="testjs" class=" font-bold uppercase tracking-[2px]">ME CONTACTER MAINTENANT</button>
      </article>
    </section></a
  >
</main>
