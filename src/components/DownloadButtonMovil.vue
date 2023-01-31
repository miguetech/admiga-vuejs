<script >
export default {
  data() {
    return {
      hiddenButton: '',
    };
    
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);
  },

  methods:{
    updateScroll(){
        this.scrollPosition = window.scrollY
        const difference = document.documentElement.scrollHeight - window.innerHeight;
        const scrollposition = document.documentElement.scrollTop; 
      if ((difference/2)<scrollposition  ) {
            this.hiddenButton = 'hidden';
      }  
      else{
        this.hiddenButton = '';
      }
    },

  }
};
</script>
<template>
    <div :class="`grid grid-cols-1 justify-items-center ${hiddenButton}`">
          <a class="bottom-0 fixed lg:hidden m-4 visible animate-ping" href="https://play.google.com/store/apps/details?id=com.industriasbjt.admiga" target=”_blank”><button class="bg-white m-auto p-16 py-3 rounded-3xl " alt="Boton de descarga"><i class="fa-solid fa-download "></i>¡Descarga GRATIS!</button></a>
          <a class="bottom-0 fixed lg:hidden m-4 visible " href="https://play.google.com/store/apps/details?id=com.industriasbjt.admiga" target=”_blank”><button class="bg-[#e84e1b] m-auto p-16 py-3 rounded-3xl " alt="Boton de descarga"><div class="text-white"><i class="fa-solid fa-download "></i>¡Descarga GRATIS!</div></button></a>
      </div>
</template>