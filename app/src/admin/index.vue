<template>
  <v-app>
    <!-- แถบด้านบน -->
    <v-app-bar color="grey-darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>ระบบประเมินนบุคคล</v-toolbar-title>
     <v-btn
        type="button"
        color="#A60505"
        size="large"
        class="text-white"
        @click="logout"
      >
        Logout
      </v-btn>
    </v-app-bar>

    <!-- แถบด้านข้าง -->
    <v-navigation-drawer v-model="drawer" app color="grey-lighten-1">
      <v-list density="compact">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <router-link :to="item.path">{{ item.title }}</router-link>
        </v-list-item>
      </v-list> 
    </v-navigation-drawer>

    <!-- เนื้อหาหลัก -->
    <v-main>
      <v-container>
        <!-- ❌ เปลี่ยนจาก component switching เป็น router-view -->
        <router-view />
         <slot />
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(true)

// Menu items ของ router-link
const items = [
  { title: 'หน้าเเสดงผล', path: '/admin/dashboard' },
  { title: 'ผู้ใช้', path: '/admin/users' },
  { title: 'การประเมิน', path: '/admin/evaluation' },
  { title: 'กรรมการผู้ประเมิน', path: '/admin/tabledirector' },
]

function logout(){
  localStorage.removeItem('token');
  router.push('/') 
}
</script>

