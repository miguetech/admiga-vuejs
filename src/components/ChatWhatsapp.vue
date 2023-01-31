<script>
export default {
    data(){
        return{
            message:"",
            messageWhatsapp:""
        };
    },
    mounted(){
        this.detectScreen();
    },
    methods:{
        detectScreen(){
            if(screen.width > 768){
                return  `https://web.whatsapp.com/send/?phone=%2B5804247019938&text=${this.message}&app_absent=0`
            }
            else{
                return  `https://api.whatsapp.com/send/?phone=%2B5804247019938&text=${this.message}&app_absent=0`
            }
        },
        closeChatWhatsapp(){
            this.$emit('close-chat')
        },
    }
}

</script>

<template>
<div class="z-50">
    <div class="bottom-0 fixed mb-8  p-8  sm:w-[25rem] w-[20rem]  sm:h-[25rem] h-[25rem] ">

        <div  class="bg-[#095e54] rounded-t-2xl text-white flex items-center">
            <img class="m-2 h-[40px]" src="../assets/admiga-chat-logo.png" alt="">
            <div>
                <p class="font-bold">AdmiGa</p>
                <p>Te responderemos pronto</p>
            </div>
            <button v-on:click="closeChatWhatsapp()" class="flex-none md:flex md:relative md:left-[22%] mb-5">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>   
        </div>
        <div class="bg-[#e5ddd5] h-[13rem]">
            <div class="bg-white w-[14rem] relative top-[3%]  rounded-b-2xl rounded-tr-2xl p-2 m-auto" >
                <p>
                    ¡Hola!  
                    <a href="https://api.whatsapp.com/send/?phone=%2B5804247019938&text=${this.message}&app_absent=0" class="text-green-500">
                        <span class=""><i class="fa-brands fa-whatsapp"></i></span>
                        +5804247019938
                    </a>
                </p>
                <p>¿Qué podemos hacer por tí?</p>
            </div>
            <img class="h-32 mb-6 relative top-[6%] left-[26%]" src="../assets/vaquitaBonita.png" alt="">
        
        </div>
        <div class=" grid bg-[#f0f0f0] gap-1 justify-center rounded-b-2xl">
            <span class="pt-4 "><textarea class="p-1 w-64 rounded-lg h-[35px!important]" type="text" v-model="message" placeholder="Escribe un mensaje"></textarea> </span>
            <a class="bg-[#4fce5d] p-1 w-64 rounded-lg mb-4 text-center" :href="detectScreen()" target=”_blank”>Enviar</a>
        </div>
    </div>
</div>

</template>