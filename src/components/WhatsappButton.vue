<script >
import ChatWhatsapp from './ChatWhatsapp.vue';
export default {
  data() {
    return {
      hiddenButton: 'hidden',
      showChatWatsapp:'hidden',
    };
    
  },
  components:{
    ChatWhatsapp,
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);
    
  },
  methods:{
    updateScroll(){
        this.scrollPosition = window.scrollY
        const difference = document.documentElement.scrollHeight - window.innerHeight;
        const scrollposition = document.documentElement.scrollTop;
        
        if(screen.width < 768){
            if ((difference/2)>scrollposition  ) {
                this.hiddenButton = 'hidden';
            }  
            else{
                this.hiddenButton = '';
            }
        }
        else{
            this.hiddenButton = '';
        }
    },

    openChatWhatsapp(){
      if(this.showChatWatsapp == "hidden"){
        this.showChatWatsapp = "";
      }
      else{
        this.showChatWatsapp = "hidden"
      }
    }

  }
};
</script>
<template>
    <div class="grid grid-cols-1 border-2 border-rose-600  " >
        <button :class="`bottom-0 fixed ${hiddenButton} m-8 z-40 outline-0`" v-on:click="openChatWhatsapp()" target=”_blank”><img loading="lazy" height="56" width="56" src="../assets/Whatsapp-Logo.png" alt=""></button>
        <button :class="`bottom-0 fixed ${hiddenButton} m-8  animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] outline-0`" v-on:click="openChatWhatsapp()" target=”_blank”><img loading="lazy" height="56" width="56" src="../assets/Whatsapp-Logo.png" alt=""></button>
        <ChatWhatsapp :class="`${showChatWatsapp}`" @close-chat="openChatWhatsapp()" />
    </div>
</template>