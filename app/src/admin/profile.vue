<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card width="500" height="600" class="mb-6 "  style="text-align: center;">
        <h2 > profile</h2><br>
        <img v-bind:src="picture"/><br>
        <h2>hello</h2><br>
        <p>ชื่อ : {{ firstname }}</p><br>
        <p>ชื่อ-นามสกุล : {{ getfullname() }}</p><br>
        <p>อายุ : {{ age }}</p>
        <v-btn color="primary" @click="increment">เพิ่มอายุ</v-btn><br><br>
        <v-btn color="primary" @click="int">ลดอายุ</v-btn><br><br>
        <v-btn color="primary" bolck @click="shoData"> คลิกเพื่อดูข้อมูล </v-btn>
        <v-fleld
        v-model="name"
        @input="setnickname"
        type="text"
        label="edit yourname :"
        variant="outlind"
        />
        <v-btn color="primary" bolck @click="showData"> คลิกเพื่อเก้ไขข้อมูลข้อมูล </v-btn>
     </v-card>
  </v-container>
</template>




<script>
export default {
  name: 'App',

  data() {
    return {
      firstname: "danupon",
      lastname: "maneesing",
      age: '1990',
      picture: 'https://cdn-icons-png.flaticon.com/128/149/149452.png',
    }
  },

  methods: {
    getfullname() {
      return this.firstname + " " + this.lastname
    },

    showData() {
      alert(this.firstname)
    },

    increment() {
      this.age++
    },
    int() {
      this.age--
    },
    setnickname(event){
      this.nickname=event.target.value
    }
  }
}
</script>


