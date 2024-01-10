<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { AXIOS } from '@/Auth/adAuth.js';

const payload = ref({
    email: '',
    password: ''
});
const loading = ref(false);
const response = ref({
    status: '',
    message: '',
    class: '',
    display: false
});

const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
    loading.value = true;
    response.value.display = false;
    response.value.class = '';

    try {
        const res = await AXIOS.post('auth/login_ad', payload.value, {
            headers: {
                'Content-Type': 'application/json',
                'Access': 'application/json',
            },
        });
        authStore.loginUser({ token: res.data.access_token });
        router.replace('/inicio');
    } catch (error) {
        loading.value = false;
        if (error.response) {
            const errorResponse = error.response.status;
            switch (errorResponse) {
                case 401:
                    response.value.display = true;
                    response.value.status = "Erro:";
                    response.value.message = 'Usuário ou senha incorretos.';
                    response.value.class = 'trigger';
                    break;
                case 500:
                    // Casos adicionais podem ser tratados aqui
                    break;
            }
        }
        // Configurar mensagem de erro genérica
        response.value.display = true;
        response.value.status = "Erro:";
        response.value.message = 'Erro interno, tente novamente mais tarde.';
        response.value.class = '';
    }
};
</script>

<template>
    <v-app id="inspire">
        <v-img src="@/assets/img/loginBackground.png">
        <v-main>
            <v-container :style="{ backgroundImage: 'src(@/assets/img/loginBackground.png)' }" class="fill-height" fluid>                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-toolbar class="v-toolbar">
                                <v-toolbar-title>Porta TI</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form @submit.prevent="login">
                                    <v-text-field v-model="payload.email" label="Login" type="text"
                                        prepend-icon="mdi-account" name="login" outlined dense></v-text-field>
                                    <v-text-field v-model="payload.password" label="Password" type="password"
                                        prepend-icon="mdi-lock" name="password" outlined dense
                                        class="custom-text-field"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click="login">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        </v-img>
    </v-app>
</template>

<style scoped lang="scss">
$toolbar-title-font-weight: 800;

.v-toolbar {
    background-color: #2A4CC2;
    color: #FFFFFF;

    .v-toolbar-title {
        font-weight: $toolbar-title-font-weight;
    }

}

</style>
  