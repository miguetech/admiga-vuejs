<script >
export default {
  data() {
    return {
      hiddenButton: 'hidden',
    };
    
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);
  },

  methods:{
    updateScroll(){
      this.scrollPosition = window.scrollY
      if(this.scrollPosition>500){
        this.hiddenButton = '';
      }
      else{
        this.hiddenButton = 'hidden';
      }
    },

  }
};
</script>

<template>
    <div :class="`grid grid-cols-1 justify-items-end ${hiddenButton}`" >
        <a class="bottom-0 fixed lg:visible m-8 invisible bg-[#e84e1b] text-white p-3 rounded-full text-2xl"  href="/#inicio"><i class="fa-solid fa-arrow-up"></i><div class="hidden">.</div></a>
    </div>
</template>