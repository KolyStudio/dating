<script>
  import { page } from '$app/stores'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import dayjs from 'dayjs'
  import Profil from '../components/profil/profil.svelte'
  import Header from '../components/header/header.svelte'
  import Proof from '../components/proof/proof.svelte'
  import Descriptionjm from '../components/description/description_jm.svelte'
  import Descriptionex from '../components/description/description_ex.svelte'
  import Reviewsex from '../components/reviews/reviews_ex.svelte'

  let firstip
  let myip = 'À 7 km'
  const { id } = $page.params
  const name = id.charAt(0).toUpperCase() + id.slice(1)
  const proofname = id.toLowerCase()
  const date = dayjs().format('DD/MM/YYYY')

  onMount(async () => {
    const firstip = await axios.get(`https://geolocation-db.com/json/`)

    const finalip = await axios.get(`https://api.ipregistry.co/` + `${firstip.data.IPv4}` + `?key=6nn8zr4k2hcwkw32`)

    if (!finalip.data.carrier.name) {
      myip = `À ` + finalip.data.location.city
    } else {
      myip = `À  7 km`
    }
  })
</script>

<svelte:head>
  <title>{name}26 - Page Privée</title>
  <meta name="description" content="Accéder à la page privée de {name} pour consulter sa présentation et ses photos. {name} répond généralement aux messages privés en moins d'une heure." />
  <meta property="og:title" content="{name} - Page Privée" />
  <meta property="profile:username" content={name} />
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>
  <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=c836eadf"></script>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<main class="pb-2">
  <Header />
  <Profil prenom={name} ville={myip} />
  <Proof proofname2={proofname} />
  <Descriptionex prenom={name} />
  <Reviewsex prenom={name} />
</main>
