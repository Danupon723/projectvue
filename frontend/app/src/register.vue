<template>
    <v-container class="d-flex justify-center align-center" style="height: 100vh;" >
        <v-card width="400" class="mb-6">

            <h2 class="text-center text-blue">สร้างบัญชีผู้ใช้</h2>
            <v-form>
            <v-text-field
            v-model="email"
            type="email"
            label="อีเมล"
            variant="outlined"
            prepend-inner-icon="mdi-email"
            />
            <v-text-field
            v-model="password"
            :type="showpassword? 'text' : 'password'"
            label="รหัสผ่าน"
            variant="outlined"
            prepend-inner-icon="mdi-lock"
            :append-inner-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showpassword = !showpassword"
            />
            <v-text-field
            v-model="name"
            type="text"
            label="ชื่อ"
            variant="outlined"
            prepend-inner-icon="mdi-account"
            />
            <v-select
        v-model="department_id"
        :items="depart"
        item-title="name_th"
        item-value="id"
        label="กลุ่มงาน (Group)"
        variant="outlined"
        prepend-inner-icon="mdi-account-group"
        class="mb-4"
      />
            <v-select
        v-model="group_id"
        :items="groups"
        item-title="name_th"
        item-value="id"
        label="กลุ่มงาน (Group)"
        variant="outlined"
        prepend-inner-icon="mdi-account-group"
        class="mb-4"
      />

      <v-btn color="primary" block class="mt-4" @click="sigin"> สร้างบัญชีผู้ใช้</v-btn><br>
      <div style="text-align: center;">มีบัญชีผู้ใช้เเล้ว<RouterLink to="/" class="text-blue">เข้าสู่ระบบ</RouterLink></div><br>
    </v-form>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
const email = ref('')
const password = ref('')
const showpassword = ref(false)
const name = ref('')
const department_id = ref(null)
const group_id = ref(null)

const depart = [
  { id: 1, name_th: 'ฝ่ายบัญชี' },
  { id: 2, name_th: 'ฝ่ายไอที' },
  { id: 3, name_th: 'ฝ่ายบุคคล' },
]

const groups = [
  { id: 1, name_th: 'ผู้ดูแล' },
  { id: 2, name_th: 'พนักงาน' },
]

function sigin() {
  console.log('email:', email.value)
  console.log('password:', password.value)
  console.log('name:', name.value)
  console.log('department_id:', department_id.value)
  console.log('group_id:', group_id.value)
}


</script>


<style lang="scss" scoped>

</style>