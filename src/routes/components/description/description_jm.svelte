<script>
  import Button from '../buttons/button.svelte'
  export let prenom
</script>

<section class="mx-[3%] my-4 rounded-[30px] border-b-4 border-[#d2d2d2] bg-white px-6 py-4">
  <p>
    Coucou, je m'appelle <b>{prenom}, j'ai 22 ans.</b> Je suis passionnée de <b>fitness et de danse.</b><br /><br /> Je suis à la recherche de mecs discrets pour <b>des plans cul réguliers.</b> J'ai un appartement depuis peu, et
    <b>j'ai très envie de m'amuser.</b><br /><br />
    Si tu es <b>intéressé,</b> envoie-moi un message <b>on s'organise une soirée dans la semaine.</b>
  </p>
</section>

<section class="mx-[3%] my-4 rounded-[30px] border-b-4 border-[#d2d2d2] bg-white px-6 py-4">
  <h1 class="mb-2 text-center text-lg font-semibold uppercase">PROFIL DE {prenom}26</h1>
  <h2 class="text-l mb-2 text-center font-semibold">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>
  <p>
    Une bonne fois pour toute, <b>je ne demande pas d'argent,</b> je cherche juste <b>des plans culs pour m'amuser</b> un peu c'est tout.<br /><br /> Je préfère généralement les mecs avec <b>un peu d'expérience</b> mais si tu es puceau je
    vais voir ce que je peux faire...<br /><br /> Par contre les mecs, <b>respect et discrétion obligatoire SVP,</b> sinon je bloque car c'est pas ce que je cherche.
  </p>
</section>

<section class="mx-[3%] my-4 rounded-[30px] border-b-4 border-[#d2d2d2] bg-white px-6 py-4">
  <h2 class="text-l mb-2 text-center font-semibold">COMMENT ME RENCONTRER EN RÉEL ?</h2>
  <p>
    Envoie-moi une petite photo sur J&amp;M Contact et <b>dis moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message donc habituellement <b>je réponds en quelques minutes.</b><br /><br /> Je préviens l'inscription coûte
    quelque chose comme 1 mais ensuite t'es tranquille <b>tu peux contacter gratuitement autant de filles que tu veux.</b> <br /><br />
    Et au moins je me fais pas harceler comme sur
    <b>Tinder, Badoo ou Snap ça permet de parler sans se faire spammer</b> par des milliers de gros relous. 😘
  </p>
</section>

<Button prenombutton={prenom} />
