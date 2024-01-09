<template>
    <div class="container">
        <div class="door" @click="toggleDoor">
            <div class="door-front" :class="{ 'open': doorOpen }">
                <div class="knob"></div>
            </div>
            <div class="door-back">
                <img src="@/assets/img/vitinho.jpg" alt="">
            </div>
            <div class="door-mat"></div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const doorOpen = ref(false);

const toggleDoor = async () => {
    doorOpen.value = !doorOpen.value;

    const url = 'https://10.25.3.170:4441/v1/dispositivo/15/abrir_porta_acesso';
    const payload = {
        "id": 15,
        "saida": 0,
        "porta": 1
    };
    const token = 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNzA0ODk4NDkzLCJlbWFpbCI6IiIsImlzX2FjdGl2ZSI6dHJ1ZSwiaXNfc3VwZXJ1c2VyIjp0cnVlLCJwZXNzb2EiOnsibm9tZSI6IkFkbWluIn0sInBlcm1pc3Npb25zIjp7ImFjb2VzX2V2ZW50b3MiOnsiYWNhb2V2ZW50byI6eyJpZF9wZXJtaXNzYW9fYWRkIjozNywiaWRfcGVybWlzc2FvX2NoYW5nZSI6MzgsImlkX3Blcm1pc3Nhb19kZWxldGUiOjM5LCJpZF9wZXJtaXNzYW9fdmlldyI6NDB9fSwiYW50aXBhc3NiYWNrIjp7ImFudGlwYXNzYmFja2Rpc3Bvc2l0aXZvIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjQ1LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjo0NiwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6NDcsImlkX3Blcm1pc3Nhb192aWV3Ijo0OH19LCJhcmVhIjp7ImFyZWEiOnsiaWRfcGVybWlzc2FvX2FkZCI6NTMsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjU0LCJpZF9wZXJtaXNzYW9fZGVsZXRlIjo1NSwiaWRfcGVybWlzc2FvX3ZpZXciOjU2fSwiaGlzdG9yaWNhbGFyZWEiOnsiaWRfcGVybWlzc2FvX2FkZCI6NDksImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjUwLCJpZF9wZXJtaXNzYW9fZGVsZXRlIjo1MSwiaWRfcGVybWlzc2FvX3ZpZXciOjUyfX0sImJhY2t1cCI6eyJiYWNrdXAiOnsiaWRfcGVybWlzc2FvX2FkZCI6MzE3LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjozMTgsImlkX3Blcm1pc3Nhb19kZWxldGUiOjMxOSwiaWRfcGVybWlzc2FvX3ZpZXciOjMyMH19LCJjb25maWd1cmFjYW8iOnsiY29uZmlndXJhY2FvIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjMyMSwiaWRfcGVybWlzc2FvX2NoYW5nZSI6MzIyLCJpZF9wZXJtaXNzYW9fZGVsZXRlIjozMjMsImlkX3Blcm1pc3Nhb192aWV3IjozMjR9fSwiY3JlZGVuY2lhbCI6eyJhc3N1c2Vyc2RrZGlzcG9zaXRpdm9zZGsiOnsiaWRfcGVybWlzc2FvX2FkZCI6MjU3LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoyNTgsImlkX3Blcm1pc3Nhb19kZWxldGUiOjI1OSwiaWRfcGVybWlzc2FvX3ZpZXciOjI2MH0sImNvbnRyb2xlcmVtb3RvIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjI2MSwiaWRfcGVybWlzc2FvX2NoYW5nZSI6MjYyLCJpZF9wZXJtaXNzYW9fZGVsZXRlIjoyNjMsImlkX3Blcm1pc3Nhb192aWV3IjoyNjR9LCJjcmVkZW5jaWFsIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjI0OSwiaWRfcGVybWlzc2FvX2NoYW5nZSI6MjUwLCJpZF9wZXJtaXNzYW9fZGVsZXRlIjoyNTEsImlkX3Blcm1pc3Nhb192aWV3IjoyNTJ9LCJjcmVkZW5jaWFsbWlwaXAiOnsiaWRfcGVybWlzc2FvX2FkZCI6MjY5LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoyNzAsImlkX3Blcm1pc3Nhb19kZWxldGUiOjI3MSwiaWRfcGVybWlzc2FvX3ZpZXciOjI3Mn0sImhpc3RvcmljYWxiaW9tZXRyaWFkaWdpdGFsIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjI0NSwiaWRfcGVybWlzc2FvX2NoYW5nZSI6MjQ2LCJpZF9wZXJtaXNzYW9fZGVsZXRlIjoyNDcsImlkX3Blcm1pc3Nhb192aWV3IjoyNDh9LCJ1c2VyaW5jb250cm9sdXNlcmRpc3Bvc2l0aXZvIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjI3MywiaWRfcGVybWlzc2FvX2NoYW5nZSI6Mjc0LCJpZF9wZXJtaXNzYW9fZGVsZXRlIjoyNzUsImlkX3Blcm1pc3Nhb192aWV3IjoyNzZ9fSwiZGVwYXJ0YW1lbnRvIjp7ImRlcGFydGFtZW50byI6eyJpZF9wZXJtaXNzYW9fYWRkIjoxMDksImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjExMCwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6MTExLCJpZF9wZXJtaXNzYW9fdmlldyI6MTEyfX0sImRpc3Bvc2l0aXZvIjp7ImRpc3Bvc2l0aXZvIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjkzLCJpZF9wZXJtaXNzYW9fY2hhbmdlIjo5NCwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6OTUsImlkX3Blcm1pc3Nhb192aWV3Ijo5Nn0sImhpc3RvcmljYWxkaXNwb3NpdGl2b2VuY29udHJhZG8iOnsiaWRfcGVybWlzc2FvX2FkZCI6ODUsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjg2LCJpZF9wZXJtaXNzYW9fZGVsZXRlIjo4NywiaWRfcGVybWlzc2FvX3ZpZXciOjg4fX0sImV2ZW50b19kaXNwb3NpdGl2byI6eyJldmVudG9kaXNwb3NpdGl2byI6eyJpZF9wZXJtaXNzYW9fYWRkIjoxOTcsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjE5OCwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6MTk5LCJpZF9wZXJtaXNzYW9fdmlldyI6MjAwfSwiZXZlbnRvb3BlcmFkb3JkaXNwb3NpdGl2byI6eyJpZF9wZXJtaXNzYW9fYWRkIjoyMDUsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjIwNiwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6MjA3LCJpZF9wZXJtaXNzYW9fdmlldyI6MjA4fX0sImV2ZW50b19vcGVyYWRvciI6eyJldmVudG9vcGVyYWRvciI6eyJpZF9wZXJtaXNzYW9fYWRkIjoxNzMsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjE3NCwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6MTc1LCJpZF9wZXJtaXNzYW9fdmlldyI6MTc2fX0sImV2ZW50b191c3VhcmlvIjp7ImV2ZW50b3VzdWFyaW8iOnsiaWRfcGVybWlzc2FvX2FkZCI6MTY5LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoxNzAsImlkX3Blcm1pc3Nhb19kZWxldGUiOjE3MSwiaWRfcGVybWlzc2FvX3ZpZXciOjE3Mn19LCJmZXJpYWRvIjp7ImZlcmlhZG8iOnsiaWRfcGVybWlzc2FvX2FkZCI6Mjk3LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoyOTgsImlkX3Blcm1pc3Nhb19kZWxldGUiOjI5OSwiaWRfcGVybWlzc2FvX3ZpZXciOjMwMH0sImhpc3RvcmljYWxmZXJpYWRvIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjI5MywiaWRfcGVybWlzc2FvX2NoYW5nZSI6Mjk0LCJpZF9wZXJtaXNzYW9fZGVsZXRlIjoyOTUsImlkX3Blcm1pc3Nhb192aWV3IjoyOTZ9fSwiZ3J1cG9fcG9udG9zX2FjZXNzbyI6eyJoaXN0b3JpY2FsZ3J1cG9wb250b3NhY2Vzc28iOnsiaWRfcGVybWlzc2FvX2FkZCI6Mjg1LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoyODYsImlkX3Blcm1pc3Nhb19kZWxldGUiOjI4NywiaWRfcGVybWlzc2FvX3ZpZXciOjI4OH19LCJpbnRlcnRyYXZhbWVudG8iOnsiaW50ZXJ0cmF2YW1lbnRvZGlzcG9zaXRpdm8iOnsiaWRfcGVybWlzc2FvX2FkZCI6MTg1LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoxODYsImlkX3Blcm1pc3Nhb19kZWxldGUiOjE4NywiaWRfcGVybWlzc2FvX3ZpZXciOjE4OH19LCJtb2RlbG9fZGlzcG9zaXRpdm8iOnsiaGlzdG9yaWNhbG1vZGVsb2Rpc3Bvc2l0aXZvIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjEwMSwiaWRfcGVybWlzc2FvX2NoYW5nZSI6MTAyLCJpZF9wZXJtaXNzYW9fZGVsZXRlIjoxMDMsImlkX3Blcm1pc3Nhb192aWV3IjoxMDR9fSwib3BlcmFkb3IiOnsib3BlcmFkb3IiOnsiaWRfcGVybWlzc2FvX2FkZCI6NTcsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjU4LCJpZF9wZXJtaXNzYW9fZGVsZXRlIjo1OSwiaWRfcGVybWlzc2FvX3ZpZXciOjYwfX0sInBlcmZpbGFjZXNzbyI6eyJoaXN0b3JpY2FscGVyZmlsYWNlc3NvIjp7ImlkX3Blcm1pc3Nhb19hZGQiOjE2MSwiaWRfcGVybWlzc2FvX2NoYW5nZSI6MTYyLCJpZF9wZXJtaXNzYW9fZGVsZXRlIjoxNjMsImlkX3Blcm1pc3Nhb192aWV3IjoxNjR9LCJwZXJmaWxhY2Vzc28iOnsiaWRfcGVybWlzc2FvX2FkZCI6MTU3LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoxNTgsImlkX3Blcm1pc3Nhb19kZWxldGUiOjE1OSwiaWRfcGVybWlzc2FvX3ZpZXciOjE2MH19LCJwbGFudGFfYmFpeGEiOnsicG9udG9wbGFudGFiYWl4YSI6eyJpZF9wZXJtaXNzYW9fYWRkIjozNDUsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjM0NiwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6MzQ3LCJpZF9wZXJtaXNzYW9fdmlldyI6MzQ4fX0sInNpdGVfaW5jb250cm9sIjp7Imhpc3RvcmljYWxzaXRlIjp7ImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjM1NH19LCJ0ZW1wb19zZW5zb3IiOnsidGVtcG9zZW5zb3IiOnsiaWRfcGVybWlzc2FvX2FkZCI6Mzg1LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjozODYsImlkX3Blcm1pc3Nhb19kZWxldGUiOjM4NywiaWRfcGVybWlzc2FvX3ZpZXciOjM4OH19LCJ1c3VhcmlvIjp7InVzZXJzZ3JvdXAiOnsiaWRfcGVybWlzc2FvX2FkZCI6MTI1LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoxMjYsImlkX3Blcm1pc3Nhb19kZWxldGUiOjEyNywiaWRfcGVybWlzc2FvX3ZpZXciOjEyOH0sInVzdWFyaW8iOnsiaWRfcGVybWlzc2FvX2FkZCI6MTE3LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoxMTgsImlkX3Blcm1pc3Nhb19kZWxldGUiOjExOSwiaWRfcGVybWlzc2FvX3ZpZXciOjEyMH19LCJ2ZWljdWxvIjp7InZlaWN1bG8iOnsiaWRfcGVybWlzc2FvX2FkZCI6MTgxLCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoxODIsImlkX3Blcm1pc3Nhb19kZWxldGUiOjE4MywiaWRfcGVybWlzc2FvX3ZpZXciOjE4NH19LCJ2aXNpdGEiOnsiaGlzdG9yaWNhbHZpc2l0YSI6eyJpZF9wZXJtaXNzYW9fYWRkIjozMDUsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjMwNiwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6MzA3LCJpZF9wZXJtaXNzYW9fdmlldyI6MzA4fX0sInZpc2l0YW50ZSI6eyJ2aXNpdGFudGUiOnsiaWRfcGVybWlzc2FvX2FkZCI6MTI5LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoxMzAsImlkX3Blcm1pc3Nhb19kZWxldGUiOjEzMSwiaWRfcGVybWlzc2FvX3ZpZXciOjEzMn19LCJ6b25hX3RlbXBvIjp7InNka3N0ZHR6aWQiOnsiaWRfcGVybWlzc2FvX2FkZCI6MTQ1LCJpZF9wZXJtaXNzYW9fY2hhbmdlIjoxNDYsImlkX3Blcm1pc3Nhb19kZWxldGUiOjE0NywiaWRfcGVybWlzc2FvX3ZpZXciOjE0OH0sInpvbmF0ZW1wbyI6eyJpZF9wZXJtaXNzYW9fYWRkIjoxNDEsImlkX3Blcm1pc3Nhb19jaGFuZ2UiOjE0MiwiaWRfcGVybWlzc2FvX2RlbGV0ZSI6MTQzLCJpZF9wZXJtaXNzYW9fdmlldyI6MTQ0fX19fQ.CxwY3lB2x-p_RpNmLlS7FqwnSCz4TxP_J5ZBGP36tts'; // Substitua pelo seu token JWT real

    try {
        const response = await axios.put(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },

        });

        // Trate a resposta aqui
        console.log(response.data);
    } catch (error) {
        // Trate erros aqui
        console.error("Erro na requisição: ", error);
    }
};
</script>

  
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.door {
    position: relative;
    width: 170px;
    height: 270px;
    transform-style: preserve-3d;
    transition: transform 1s;
    cursor: pointer;
    transform: perspective(2500px);
}

.door-front {
    width: 170px;
    height: 270px;
    overflow: hidden;
    transform-origin: left;
    box-shadow: 30px 0 50px rgba(0, 0, 0, 0.2);
    position: absolute;
    background-color: #924500;
    z-index: 1;
    transition: .5s;
}

.door-front:before,
.door-front:after {
    content: "";
    position: absolute;
    background-color: #924500;
    width: 105px;
    height: 75px;
    border: 10px ridge #b05500;
    left: 22.5px;
}

.door-front:before {
    top: 25px;
}

.door-front:after {
    top: 155px;
}

.knob {
    position: absolute;
    width: 20px;
    height: 30px;
    background-color: #eeba0b;
    top: 122px;
    left: 145px;
    border-radius: 2px;
}

.knob:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: #f1c83c;
    width: 18px;
    height: 18px;
    left: -1px;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}

.knob:after {
    content: "";
    position: absolute;
    width: 4px;
    height: 7px;
    background-color: #333;
    top: 20px;
    left: 8.5px;
}

.door-back {
    position: relative;
    background: linear-gradient(0deg, rgba(193, 124, 116, 1) 13%, rgba(73, 88, 103, 1) 13%, rgba(79, 100, 124, 1) 15%, rgba(87, 115, 153, 1) 15%);
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 10px solid #edf2f4;
}

.door-back img {
    width: 100%;
    /* Ajusta a largura da imagem para a largura da porta */
    height: 100%;
    /* Ajusta a altura da imagem para a altura da porta */
    object-fit: cover;
    /* Garante que a imagem cubra todo o espaço sem ser distorcida */
    position: absolute;
    /* Posiciona a imagem corretamente dentro da porta */
    top: 0;
    /* Alinha a imagem ao topo da porta */
    left: 0;
    /* Alinha a imagem à esquerda da porta */
}

.rack {
    position: absolute;
    width: 7px;
    height: 150px;
    background-color: #a78a7f;
    top: 90px;
    left: 100px;
}

.rack:before {
    content: "";
    position: absolute;
    width: 70px;
    height: 10px;
    border-radius: 30px 30px 0 0;
    background-color: #8c1c13;
    top: 150px;
    left: -30px;
}

.rack:after {
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    border-bottom: 5px solid #a78a7f;
    border-right: 5px solid #a78a7f;
    border-bottom-right-radius: 100%;
    top: 20px;
}

.hat {
    position: absolute;
    width: 60px;
    height: 15px;
    border-radius: 20px 20px 0 0;
    background-color: #bf4342;
    top: 80px;
    left: 75px;
}

.hat:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 20px;
    border-radius: 10px 10px 0 0;
    background-color: #bf4342;
    top: -20px;
    left: 10px;
    box-shadow: inset 0 -5px #e7d7c1;
}

.hat:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 100px;
    background-color: #735751;
    border-radius: 50% 60% 20% 20% / 70% 70% 20% 20%;
    top: 20px;
    left: 45px;
}

.jacket {
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: #e7d7c1;
    border-radius: 50%;
    top: 120px;
    left: 137px;
    box-shadow: 0 20px #e7d7c1;
}

.jacket:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #a78a7f;
    left: -10px;
    top: 40px;
}

.jacket:after {
    content: "";
    position: absolute;
    border-top: 15px solid #8c1c13;
    border-right: 15px solid transparent;
    border-left: 15px solid transparent;
    width: 0;
    height: 0;
    top: 40px;
    left: -12px;
}

.door-mat {
    position: relative;
    perspective: 200px;
}

.door-mat:before {
    content: "";
    position: absolute;
    width: 170px;
    height: 70px;
    background: repeating-linear-gradient(#a8763e, #a8763e 10px,
            #9d741a 10px, #9d741a 20px);
    top: 20px;
    outline: 5px solid #a8763e;
    transform: rotateX(45deg);
}

.door-front.open {
    transform: rotateY(-160deg);
}
</style>
  