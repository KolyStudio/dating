<script>
  import Popupex from '../popup/popup_ex.svelte'
  let isClicked

  export let prenombutton

  let link = `https://info-rencontre.com/s/sl?ai=31778&snd=1&sg=3&pid=https%3A%2F%2Fi.ibb.co%2FqF29sJ6%2Fp.webp&ap.age=22&fl=3&ap.fn=` + prenombutton

  function handleClick() {
    isClicked = true
  }
</script>

<a href={link}
  ><section class="shake m-auto mx-[3%] my-4 flex items-center justify-center space-x-4 rounded-3xl bg-black py-4 font-semibold text-white shadow-xl">
    <img src="/icons/chat.webp" alt="chat" class="w-10" />
    <span>ENVOIE-MOI UN MESSAGE</span>
  </section></a
>

<!-- <Popupex isClick={isClicked} prenom={prenombutton} /> -->
