<script>
  export let isClick
  export let prenom
</script>

{#if isClick}
  <script type="text/javascript" src="https://c.love.free-datings.com/8/js/script.js?id=rEwc2"></script>

  <div class="fixed top-0 z-[2] flex h-screen w-full flex-col  items-center  backdrop-blur-[3px] backdrop-brightness-[.45]">
    <div class="fadeInForm mx-2 mt-[50px] rounded-[30px] bg-white py-4">
      <div class="flex items-center space-x-2 p-2">
        <div class="relative  m-auto mb-2 h-[100px] w-[100px] rounded-full">
          <div class="m-auto h-[100px] w-[100px] rounded-full bg-dunes bg-cover bg-top" />
          <div class="absolute top-1 right-[0px] h-[25px] w-[25px] rounded-full border-4 border-white bg-[#31d275] " />
        </div>

        <div class="m-auto w-[80%] text-left font-medium tracking-wider text-[#e07b7b]">
          Afin de parler qu'à des majeurs, <span class="inline-block first-letter:uppercase"> {prenom}26</span> ne souhaite parler qu'aux hommes inscrits.
        </div>
      </div>
      <iframe
        border="0"
        src={`https://info-rencontre.com/colors/fi?ai=31778&hbg_color=%23ffc5d0&h=1&h_text=INSCRIPTION%20GRATUITE&ht_color=%23343434&b_text=COMMENCE%20%C3%80%20BAISER%20!&bbg_color=%2357cc99&bbg_color_hover=%2357cc99&bt_color=%23ffffff&fbg_color=%23ffffff&jb_color=%23ffc5d0&jbb_color=%23ffc5d0&fb_color=%23ffffff&bbg_color_dis=%23a4a4a4&message_color=%239C9C9C&error_color=%23ff0000&sg=3&ap.age=22&pid=https%3A%2F%2Fi.ibb.co%2FfCFJ6Rk%2F231.jpg&ap.fn=` +
          prenom}
        style="border: none; height: 570px; width: 100%;"
      />
    </div>
  </div>
{/if}
