


<style>
input#mce-EMAIL {
    background-size: 0px!important;
}
</style>

<script>


import DownloadButtonMovil from './DownloadButtonMovil.vue'
import WhatsappButton from './WhatsappButton.vue'
import UpButton from './UpButton.vue'
export default {
  data()
  {
    return {
      isLoaded:false
    }
  },
  methods:{
    loadImage(){
      this.isLoaded = true;
    }
  },
  components: {
    DownloadButtonMovil,
    WhatsappButton,
    UpButton,
  },
}
</script>

<template >
  <div id="inicio"></div>
  <div>
    <div class="2xl:py-40 absolute h-screen lg:flex mx-auto sm:py-32 w-full">
        <div class="text-center mx-auto">
          <h1 class="text-3xl sm:text-6xl mx-10 sm:mx-0 sm:mx-auto text-center lg:truncate 2xl:pt-24 xl:pt-24 lg:pt-16  pt-32 font-black text-[#5E585E] ">Administración Ganadera</h1>
        </div>
    </div>

    <section class="w-full h-screen">
      <img loading="lazy" @load="loadImage()" src="../assets/admiga-banner-web2.jpg" class="object-cover w-full h-full" alt="Image alt text" />
    </section>
    <!-- <h2 v-if="true" > Image Loaded : {{isLoaded}} </h2> -->
    <!--  -->
    <div class="h-full sm:h-screen w-screen flex justify-end bg-[#DADAD9]" id="admiga" name="admiga">
      <div class="mx-auto xl:mt-32">
        <img loading="lazy" class="h-52 w-80 mx-auto" alt="Admiga logo" src="../assets/sombrero_logo.png" />
        <h2 class="text-2xl sm:text-3xl p-2 text-center" >AdmiGa</h2>
        <p class="p-2 text-justify sm:w-1/2 w-11/12 mx-auto">La administración de tu finca en la palma de tu mano.</p>
        <p class="p-2 text-justify sm:w-1/2 w-11/12  mx-auto">Es una aplicación de administración ganadera que permite, de manera  fácil  a los usuarios,  llevar un registro, organización y visualización de los animales de la finca, sus datos técnicos más relevantes y sus datos de producción; además de permitir documentar las tareas, eventos y acontecimientos relacionados a sus animales.</p>
        <a class="md:visible invisible" href="https://play.google.com/store/apps/details?id=com.industriasbjt.admiga" target=”_blank”><img title="Redirección a Google Play" loading="lazy" class="w-56 m-auto py-10" alt="Admiga logo" src="../assets/imagen_play_store.png" /></a>
      </div>
    </div>
    <!--  -->
    <div id="funcionalidades" class="bg-[#DADAD9] flex sm:flex-wrap  flex-wrap-reverse h-full items-center justify-evenly sm:h-screen w-screen">

        <img loading="lazy" class="md:order-none w-auto sm:w-[35vw]" alt="Admiga logo" title="Calendario animal" src="/src/assets/calendario.png">

      <div class="">
        <img loading="lazy" class="h-52 w-80 mx-auto" alt="Admiga logo" src="/src/assets/sombrero_logo.png">
        <h2 class="text-2xl sm:text-3xl p-2 text-center">Calendario</h2>
        <p class="w-80 sm:w-96 text-justify p-2">Registre los eventos y acontecimientos más importantes de su unidad de producción.</p>
        <p class="w-80 sm:w-96 text-justify p-2"> Mantenga el control de los eventos y tareas relacionadas a sus animales.</p>
      </div>
    </div>
    <!--  -->
    <div id="funcionalidades" class="bg-[#DADAD9] flex flex-wrap  h-full items-center justify-evenly sm:h-screen w-screen">
      <div class="">
        <img loading="lazy" class="h-52 w-80 mx-auto" alt="Admiga logo" src="/src/assets/sombrero_logo.png">
        <h2 class="text-2xl sm:text-3xl p-2 text-center">Registro del Animal</h2>
        <p class="w-80 sm:w-96 text-justify p-2">Registre los animales al instante, mantenga un orden de su información más relevante para una mejor gestión.</p>
        <p class="w-80 sm:w-96 text-justify p-2">Permite registrar entre Bovinos y Bufalinos.</p>
        <p class="w-80 sm:w-96 text-justify p-2">Ficha técnica individual para cada animal.</p>
      </div>
      <img loading="lazy" class="md:order-none w-auto sm:w-[35vw]" alt="Admiga logo" title="Registro Del Animal" src="/src/assets/registro-animal.png">
    </div>
    <!--  -->

    <div id="funcionalidades" class="bg-[#DADAD9] flex sm:flex-wrap  flex-wrap-reverse  h-full items-center justify-evenly sm:h-screen w-screen">
      <img loading="lazy" class="md:order-none w-auto sm:w-[35vw]" alt="Admiga logo" title="Gráficas y Reportes" src="/src/assets/graficas-de-produccion.png">
      <div class="">
        <img loading="lazy" class="h-52 w-80 mx-auto" alt="Admiga logo" src="/src/assets/sombrero_logo.png">
        <h2 class="text-2xl sm:text-3xl p-2 text-center">Gráficas y Reportes</h2>
        <p class="w-80 sm:w-96 text-justify p-2">Gráficas que muestran la producción del ganado, para poder tomar mejores decisiones.</p>
        <p class="w-80 sm:w-96 text-justify p-2">Gráficas sobre la ganacia de peso o leche, para poder ver tanto el promedio, como los totales por rangos de día, mes y año.</p>
      </div>
    </div>
    <!--  -->
    <footer name="Pie de Pagina" class="bg-gray-400 flex h-full sm:h-screen w-screen flex-wrap justify-center place-content-center ">
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup" class="order-last bg-gray-400 w-80">
          <form action="https://industriasbjt.us14.list-manage.com/subscribe/post?u=c79fcdbd7cac893893beb210c&amp;id=e3b3e342cb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate container flex " target="_blank" novalidate>
            <div class="mx-auto" id="mc_embed_signup_scroll">
            <h3 class=" text-center text-white font-bold text-3xl font-semibold p-2">Contáctanos</h3>
          
            <div class="mc-field-groucorreo Eléctronico mt-4 mx-3">
              <label for="mce-EMAIL" class="text-center text-white">Correo Elétronico</label><br>
              <input type="email" value="" name="EMAIL" class="border rounded-lg pr-12 py-2"  id="mce-EMAIL" aria-required="true">
            </div>
            <div class="mc-field-group mt-2 mx-3">
              <label for="mce-FNAME" class="text-white">Nombre</label><br>
              <input type="text" value="" name="FNAME" class="border rounded-lg pr-12 py-2" id="mce-FNAME">
            </div>
            <div class="mc-field-group size1of2 mt-2 mx-3">
              <label for="mce-PHONE" class="text-white">Número de telefono</label><br>
              <input type="text" name="PHONE" class="border rounded-lg pr-12 py-2" value="" id="mce-PHONE">
            </div>
            <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5a530e94103202cb6cd49c2a0_fd4ebc93f9" tabindex="-1" value=""></div>
                <div class="optionalParent">
                    <div class="flex justify-center">
                        <input type="submit" value="Suscribete" name="subscribete" id="mc-embedded-subscribe" class="button clear foot text-center my-5 px-4 py-2 bg-teal-500 rounded-lg  text-white" required>
                    </div>
                </div>
            </div>
          </form>
        </div>
        <!--End mc_embed_signup-->

        <div class ="mx-16">
          <h3 class="text-white font-bold text-3xl font-semibold pb-4 pt-2">Sitemap</h3>
          <p class="text-white pb-8">Nuestros Links</p>
          <ul class="list-disc">
            <li class="text-white ml-8 pb-2"><a href="#inicio"> Inicio</a></li>
            <li class="text-white ml-8 pb-2"><a href="#admiga"> Admiga</a></li>
            <li class="text-white ml-8 pb-2"><a href="#Funcionalidades">Funcionalidades</a></li>
            <li class="text-white ml-8 pb-2"><a href="https://api.whatsapp.com/send/?phone=%2B5804247019938&text&app_absent=0" target="_blank">Contáctanos</a></li>
            <li class="text-white ml-8 pb-2"><a href="https://www.industriasbjt.com/" target="_blank">Industrias BJT</a></li>
          </ul>
        </div>

        <div name="Contactos" id="contactos" class="order-first">
          <img loading="lazy" height="400"  width="400" class="h-40 w-40 mx-16 sm:my-0 my-10" alt="Admiga logo " src="../assets/logo_admiga.png" />
          <i class="fa-thin fa-square-small"></i>
          <p><a href="https://api.whatsapp.com/send/?phone=%2B5804247019938&text&app_absent=0" target="_blank" class="text-white ml-16 pt-8"><i class="fa-brands fa-whatsapp"></i> +58 4247019938</a></p>
          <p><a href="https://api.whatsapp.com/send/?phone=%2B5804140786261&text&app_absent=0" target="_blank" class="text-white ml-16"><i class="fa-brands fa-whatsapp"></i> +58 4140786261</a></p>
          <p><a href="mailto:soporte@admiga.app? Subject=Interesado%20en%20el%20curso" class="text-white ml-16 pt-2"><i class="fa-solid fa-envelope"></i> Correo Soporte AdmiGa</a></p>
          <p><a href="https://m.facebook.com/admigaapp/?_rdro" class="text-white ml-16 pt-2"><i class="fa-brands fa-facebook"></i> Facebook</a></p>
          <p><a href="https://www.instagram.com/admigaapp/" class="text-white ml-16 pt-2"><i class="fa-brands fa-instagram"></i> Instagram</a></p>
        </div>
    
      
    </footer>
    <p id="copyright" class="bg-gray-700 text-center text-white w-screen">Copyright&copy; Industrias BJT 2022</p>
    
    <UpButton/>
    <WhatsappButton/>
    <DownloadButtonMovil/>
  </div>

  


</template>



