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
  <title>{name}25 - Invitation</title>
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<div class="bg-a h-screen  bg-cover bg-center">
  <div class="h-[500px] bg-jm bg-cover bg-center">a</div>

  <div class="mt-[-80px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#1c1a1b"
        fill-opacity="1"
        d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,90.7C672,85,768,139,864,144C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>

  <div class="h-screen bg-gradient-to-b from-[#1c1a1b] to-[#2f2e2f]">aa</div>
</div>
