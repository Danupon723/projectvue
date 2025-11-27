<template>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;">
        <v-card width="400" class="mb-6">

             <h2 class=" text-center align-center mb-6 text-blue">เข้าสู่ระบบ</h2>
            <v-text-field 
            v-model="email"
            label="อีเมล"
            type="email"
            variant="outlined"
            prepend-inner-icon="mdi-email"
            />
            <v-text-field 
            v-model="password"
            label="password"
            :type="showpassword? 'text' : 'password'"
            variant="outlined"
            prepend-inner-icon="mdi-lock"
            :append-inner-icon="showpassword  ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="showpassword = !showpassword"
            />
            <v-btn
            color="primary"
            block
            class="mt-4"
            @click="login"
            >
            เข้าสู่ระบบ
            </v-btn><br>
            <div style="text-align: center;">ยังไม่มีบัญชีผู่ใช้
                <router-link to="register" class="text-blue">สมัคร</router-link>
            </div>

        </v-card>
    </v-container>
</template>

<script setup>
import {ref} from 'vue'
const email = ref('')
const password = ref('')
const showpassword = ref(false)

const login = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
}
</script>
