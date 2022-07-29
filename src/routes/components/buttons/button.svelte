<script>
  import Popup from '../popup/popup.svelte'
  let isClicked

  function handleClick() {
    isClicked = true
  }

  export let prenombutton
</script>

<section id="clicked" on:click={handleClick} class="shake m-auto mx-[3%] my-4 flex items-center justify-center space-x-4 rounded-3xl bg-black py-4 font-semibold text-white shadow-xl">
  <img id="clicked" src="/icons/chat.webp" alt="chat" class="w-10" />
  <span id="clicked">ENVOIE-MOI UN MESSAGE</span>
</section>

<Popup isClick={isClicked} prenom={prenombutton} />
