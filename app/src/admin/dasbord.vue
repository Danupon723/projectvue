<template>
    <v-container>
      <h2 class="text-h5 font-weight-bold mb-6"></h2>

      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="pa-4 rounded-xl" elevation="4">
            <v-icon size="40" color="indigo">mdi-account</v-icon>
            <h3 class="text-h6 mt-2">จำนวนผู้ใช้</h3>
            <p class="text-h5 font-weight-bold">120</p>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card class="pa-4 rounded-xl" elevation="4">
            <v-icon size="40" color="green">mdi-file-document</v-icon>
            <h3 class="text-h6 mt-2">จำนวนเอกสาร</h3>
            <p class="text-h5 font-weight-bold">45</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-4 rounded-xl" elevation="4">
            <v-icon size="40" color="red">mdi-alert-circle</v-icon>
            <h3 class="text-h6 mt-2">การแจ้งเตือน</h3>
            <p class="text-h5 font-weight-bold">3</p>
          </v-card>
        </v-col>
      </v-row>

      <v-card class="pa-6 mt-6 rounded-xl" elevation="4">
        <h3 class="text-h6 font-weight-bold mb-4">กิจกรรมล่าสุด</h3>

        <v-list>
          <v-list-item>
            <v-icon color="indigo">mdi-check</v-icon>
            <v-list-item-title>ผู้ใช้ใหม่สมัครสมาชิก</v-list-item-title>
            <v-list-item-subtitle>10 นาทีที่แล้ว</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-icon color="green">mdi-pencil</v-icon>
            <v-list-item-title>แก้ไขข้อมูลผู้ใช้</v-list-item-title>
            <v-list-item-subtitle>30 นาทีที่แล้ว</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-icon color="red">mdi-alert</v-icon>
            <v-list-item-title>ระบบแจ้งเตือนข้อผิดพลาด</v-list-item-title>
            <v-list-item-subtitle>1 ชั่วโมงที่ผ่านมา</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>

</template>

<script setup>
import Navbar from './navbar.vue'
</script>
