<template>
  <v-container>
    <v-card height="1200" elevation="0">

      <v-card-title class="display-1 pl-20">ข้อมูลส่วนตัว</v-card-title>
      <v-row class="mb-16">
        <v-col cols="12" sm="4" class="pa-10">
          <v-card max-width="500" max-height="500">
            <v-img
              :src="userDetail.profilePicture"
              width="500"
              height="500"
            ></v-img>
          </v-card>
        </v-col>
        
        <v-col class="pt-10">
          <v-card max-width="700">
            <v-card-title>
              {{ userDetail.name }}
            </v-card-title>
          </v-card>
          <v-card class="my-4" width="700" height="600">
            <v-card-text>
              {{ userDetail.intro }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "userProfile",
  data: () => ({
    userDetail:{
      profilePicture: 'https://www.online-station.net/wp-content/uploads/2020/12_1/05-1200x630-4.jpg',
      name: 'Pekora',
      intro: 'สวัสดีจ้า เจ้าพวกแครอททั้งหลายสวัสดีจ้า เจ้าพวกแครอททั้งหลายสวัสดีจ้า เจ้าพวกแครอททั้งหลายสวัสดีจ้า เจ้าพวกแครอททั้งหลายสวัสดีจ้า เจ้าพวกแครอททั้งหลาย',
    },
  }),
    
  created() {

  },


}
</script>
