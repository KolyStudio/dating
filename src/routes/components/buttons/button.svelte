<script>
  import Popupex from '../popup/popup_ex.svelte'
  let isClicked

  export let prenombutton

  // let link = `https://info-rencontre.com/s/sl?ai=31778&snd=1&sg=3&pid=https://i.ibb.co/W5tYTXj/p.webp&ap.age=22&fl=3&ap.fn=` + prenombutton
  let link = `https://k.encontro-rapido.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&s1=SAMEDI30&tpls=73&userPicture=https://i.ibb.co/W5tYTXj/p.webp&userName=` + prenombutton
  function handleClick() {
    isClicked = true
  }
</script>

<div class="flex justify-center pt-2">⬇️⬇️⬇️⬇️⬇️</div>

<a href={link}
  ><section class="shake m-auto mx-[3%] my-4 flex items-center justify-center space-x-4 rounded-[30px] border-b-4 border-[#229351] bg-[#31d275] py-5 text-lg font-semibold text-white shadow-xl">
    <img src="/icons/chat.webp" alt="chat" class="w-10" />
    <span>ENVOIE-MOI UN MESSAGE</span>
  </section></a
>

<!-- <Popupex isClick={isClicked} prenom={prenombutton} /> -->
