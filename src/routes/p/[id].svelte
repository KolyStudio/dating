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

<main class="py-4">
  <section class="pt-2 text-center text-lg font-medium text-white">
    <img src="/mask.webp" alt="mask" class=" m-auto w-[70px]" />
    <h1>Ma Page Privée</h1>
  </section>

  <section class="m-auto mt-10 flex w-[90%] items-center justify-center space-x-4">
    <article class=" relative m-auto mb-5 w-full  rounded-full bg-gradient-to-r from-[#b870ff] to-[#f97ef8] p-[5px] shadow-xl  ">
      <img src="/profil.webp" alt="profil" class="w-[290px] rounded-full border-[4px] border-white" />
    </article>

    <article class="-mt-2 flex w-full flex-col space-y-2 text-[24px] font-medium text-white">
      <h2>💟 Lisa45</h2>
      <h2>🎂 22 ans</h2>
      <h2>✅ En Ligne</h2>
    </article>
  </section>

  <div class="pt-3 text-center">⬇️⬇️⬇️⬇️⬇️</div>

  <a href={link}>
    <section class=" shake my-4 w-full" id="testjs">
      <article id="testjs" class=" m-auto flex  w-[90%] items-center justify-center space-x-4 rounded-[20px] border-b-4 border-[#b870ff] bg-gradient-to-r from-[#b870ff] to-[#f97ef8]  p-5 font-bold text-white shadow-2xl">
        <button id="testjs" class=" font-bold uppercase tracking-[2px]">ME CONTACTER MAINTENANT</button>
      </article>
    </section></a
  >

  <section>
    <section class="m-auto mt-4 w-[90%]    ">
      <img src={`/proof/` + proofname + `.jpg`} alt="proof" class="rounded-xl shadow-xl " />
      <!-- <video class="rounded-[30px] border-[4px] border-white" poster="/poster.webp" playinline src="/proof.mp4" type="video/mp4" controls><track kind="captions" /></video> -->
    </section>
  </section>

  <section class="m-auto w-[90%] py-4 text-white">
    <h1 class="font-semibold text-[#f97ef8]">PROFIL DE LISA45</h1>
    Coucou, je m'appelle Lisa, j'ai 22 ans. Je suis passionnée de fitness et de danse.<br /><br /> Je suis à la recherche de mecs discrets pour des plans cul réguliers. J'ai un appartement depuis peu, et j'ai très envie de m'amuser.
    <br /><br />Si tu es intéressé, envoie-moi un message on s'organise une soirée dans la semaine.
  </section>

  <section class="m-auto w-[90%] py-4 text-white">
    <h1 class="font-semibold text-[#f97ef8]">JE NE SUIS PAS UNE ESCORTE !!</h1>
    ❌ Une bonne fois pour toute, je ne demande pas d'argent, je cherche juste des plans culs pour m'amuser un peu c'est tout. Je préfère généralement les mecs avec un peu d'expérience mais si tu es puceau je vais voir ce que je peux faire...
    😉 Par contre les mecs, respect et discrétion obligatoire SVP, sinon je bloque car c'est pas ce que je cherche.
  </section>

  <section class="m-auto w-[90%] py-4 text-white">
    <h1 class="font-semibold text-[#f97ef8]">COMMENT ME RENCONTRER EN RÉEL ?</h1>
    Envoies moi une petite photo sur J&M Contact et dis moi quand t'es dispo. Je reçois les notifs quand j'ai un message donc habituellement je réponds en quelques minutes. Je préviens l'inscription (essai) coûte quelque chose comme 1 ou 2 euros
    mais ensuite t'es tranquille tu peux contacter gratuitement autant de filles que tu veux. Et au moins je me fais pas harceler comme sur Tinder ou Snap ça permet de parler sans se faire spammer par des milliers de gros relous. 😘
  </section>

  <section class="m-auto w-[90%] py-4 text-white">
    <h1 class="font-semibold text-[#f97ef8]">POURQUOI J&M CONTACT PLUTÔT QUE SNAP OU TINDER ?</h1>
    Je suis aussi sur Tinder et plusieurs autres sites, mais au final je me fais harceler par des Kssos et les faux profils qui me font perdre beaucoup de temps… 😡
  </section>
</main>
