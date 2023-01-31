<script >
export default {
  data() {
    return {
      showMenu: false,
      changeColor:'',
      scrollPosition:null,
      navbarPadding2xl:'2xl:py-20',
      navbarPaddinglg:'md:py-8',
    };
    
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);
    
  },

  methods:{
    updateScroll(){
       
      this.scrollPosition = window.scrollY
      if(this.scrollPosition>100){
            this.changeColor = 'bg-[#DADAD9] ';
            this.navbarPadding2xl='2xl:py-0';
            this.navbarPaddinglg ='md:py-0';
      }
      else{
        this.changeColor = '';
        this.navbarPadding2xl='2xl:py-20';
        this.navbarPaddinglg ='md:py-8';
      }
    }
  }
};
</script>


<template>
    <div id="inicio"  >
      <nav :class="`${navbarPadding2xl} lg:absolute fixed  justify-around lg:flex ${navbarPaddinglg} py-4  w-full z-50 ${changeColor}`" >
        <div class="flex items-center justify-between lg:justify-around md:mx-8 mx-4 z-50">
          <router-link to="/">
            <img loading="lazy"  class="h-12 lg:h-24 lg:w-24 md:h-20 md:w-20 xl:h-28 xl:w-28  w-12" alt="Admiga logo" src="../assets/logo_admiga.png" />
          </router-link>
          <div @click="showMenu = !showMenu" class="flex lg:hidden relative">
              <button class="bg-trans border-2 border-red-400 outline-none p-1 px-2 py-1 relative rounded-full shadow-lg text-red-500" @click="menu">Menú</button>
          </div>
        </div>
        <ul :class="showMenu ? 'flex' : 'hidden'" class="2xl:pl-28 flex flex-col grow-0 lg:flex lg:flex-row lg:items-center lg:mt-0 lg:relative lg:space-x-10 lg:space-y-0 md:grow-0 mt-8 space-x-0 space-y-4 text-right xl:pl-24">
          
          <li>
              <a href="/#inicio" class="text-lg font-bold text-gray-500 hover:text-red-500 bg-[#DADAD9] lg:bg-transparent rounded-lg pl-28 pb-48 pr-4 pt-4">Inicio</a>
          </li>
          <li >
           <a href="/#admiga" class="text-lg font-bold text-gray-500 hover:text-red-500 bg-[#DADAD9] md:bg-transparent pr-4">AdmiGa</a>
          </li>
          <li>
            <a href="/#funcionalidades" class="text-lg font-bold text-gray-500 hover:text-red-500 bg-[#DADAD9] md:bg-transparent pr-4">Funcionalidades</a>
          </li>
          <li >
            <a href="/#contactos" class="text-lg font-bold text-gray-500 hover:text-red-500 bg-[#DADAD9] md:bg-transparent pr-4">Contáctanos</a>
          </li>
          <li >
            <router-link to="/politicas" class="text-lg font-bold text-gray-500 hover:text-red-500 bg-[#DADAD9] md:bg-transparent pr-4">Políticas</router-link>
          </li>
        </ul>
      </nav>
    </div>
</template>