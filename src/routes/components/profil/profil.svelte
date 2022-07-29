<script>
  import Button from '../buttons/button.svelte'
  export let prenom
  export let ville
</script>

<section class="relative m-auto w-[180px] rounded-[50px] bg-[#d4d4d4] p-1">
  <img src="/profil.webp" alt="profil" class="rounded-[50px] border-[4px] border-white" />
  <div class="absolute bottom-[5px] right-[5px] h-[26px] w-[26px] rounded-full border-4 border-[#f5f7f2] bg-[#31d275] " />
</section>

<section>
  <h1 class="pt-3 text-center text-3xl font-bold uppercase text-white">{prenom}25</h1>
  <article class="m-auto my-2 w-[100px] rounded-xl border-b-4 border-[#add3b5] bg-[#e1f3e5] py-1 text-center text-xs font-semibold uppercase text-[#31d275]">EN LIGNE</article>

  <div class="flex justify-center space-x-4 pt-2">
    <div class="rounded-xl border-b-4 border-[#d2d2d2] bg-white px-2 font-semibold">🎂 22 ans</div>
    <div class="rounded-xl border-b-4 border-[#d2d2d2] bg-white px-2 font-semibold">🔞 Libertine</div>
  </div>

  <div class="flex justify-center space-x-4 pt-4"><div class="fade-inn flex items-center rounded-xl border-b-4 border-[#d2d2d2] bg-white px-2 font-semibold "><div>{ville}</div></div></div>
</section>

<!-- <Button prenombutton={prenom} /> -->
