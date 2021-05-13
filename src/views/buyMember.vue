<template>
  <v-container>
    <!-- Left -->
    <v-row class="pl-6">
      <!-- Left top card -->
      <v-col cols="5" class="pr-12">
        <v-card class="align-end pa-2 mr-5 mb-5" height="450" width="600">
          <v-row class="d-flex align-center pa-2 pl-5">
            <v-list>
              <v-list-item-avatar size="80">
                <v-img :src="userDetail.profilePicture"></v-img>
              </v-list-item-avatar>
            </v-list>

            <v-col>
              <h1>{{ userDetail.name }}</h1>
            </v-col>
          </v-row>

          <v-carousel hide-delimiters height="300" cycle="true">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
        <!-- Left Bot Card -->
        <v-card
          v-for="game in games"
          :key="game.title"
          class="d-flex align-center pa-6 mr-5 mb-5"
          height="80"
          width="500"
        >
          <v-card-title>{{ game.title }}</v-card-title>
        </v-card>
      </v-col>

      <!-- Right -->
      <v-col cols="7" class="">
        <!-- Right top card -->
        <v-card
          class="pa-6 mr-5 mb-5"
          height="350"
          max-height="350"
          width="800"
        >
          <v-row class="py-4">
            <v-card-title>สนับสนุนค่าขนมของเราได้ที่นี่</v-card-title></v-row
          >
          <v-row class="py-4 align-center">
            <v-col>
              <h3>{{ userDetail.cost + " / ชั่วโมง" }}</h3>
            </v-col>
            <v-spacer></v-spacer>

            <v-btn class="mx-3" small @click="dropAmount()">-</v-btn>
            <h3>{{ this.amount }}</h3>
            <v-btn class="mx-3" small @click="addAmount()">+</v-btn>
          </v-row>
          <v-row class="py-4"
            ><h3>{{ "ราคาทั้งหมด : " + getTotalCost }}</h3>
          </v-row>

          <v-row class="pt-6 px-4">
            <v-btn
                  color="green"
                  dark
                  width="150"
                  height="50"
                  class="align-center ma-2 mt-3 ml-16"
            >แชทเลย</v-btn
                >

            <v-dialog transition="dialog-top-transition" max-width="800">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  width="150"
                  height="50"
                  class="align-center ma-2 mt-3 ml-16"
                  >ซื้อตั๋ว</v-btn
                >
              </template>
              <!-- dialog -->
              <template v-slot:default="dialog">
                <v-card class="px-5">
                  <v-row class="d-flex align-center pa-2 pl-5">
                    <v-list>
                      <v-list-item-avatar size="80">
                        <v-img :src="userDetail.profilePicture"></v-img>
                      </v-list-item-avatar>
                    </v-list>

                    <v-col>
                      <h1>{{ userDetail.name }}</h1>
                    </v-col>
                  </v-row>
                  <v-container class="pa-5">
                    <v-row>
                      <h3>{{ userDetail.cost + " / ชั่วโมง" }}</h3>
                    </v-row>
                    <v-row class="py-4"
                      ><h3>{{ "จำนวน : " + "5" + " ชั่วโมง" }}</h3>
                    </v-row>
                    <v-row class="py-4"
                      ><h3>{{ "ราคาทั้งหมด : " + getTotalCost }}</h3>
                    </v-row>
                  </v-container>
                  <v-divider class="pt-5 pb-5"></v-divider>
                  <h2>อัพโหลดรูปภาพการชำระเงิน</h2>
                  <v-file-input truncate-length="15"></v-file-input>
                  <v-card-actions class="justify-end">
                    <v-btn
                      color="error"
                      dark
                      large
                      @click="dialog.value = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn color="success" dark large> Confirm</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-row>
        </v-card>
        <!-- Right Bot Card -->
        <v-card class="pa-6 mr-5 mb-5" height="600" width="800">
          <v-row>
            <v-card-title> แนะนำตัว</v-card-title>
          </v-row>
          <v-row class="px-5">
            <v-textarea filled readonly placeholder="Sawasdee.."> </v-textarea>
          </v-row> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      amount: 1,
      games: [
        { title: "Apex Legends" },
        { title: "Valorant" },
        { title: "Genshin impact" },
      ],
      userDetail: {
        name: "Pekora",
        profilePicture:
          "https://www.online-station.net/wp-content/uploads/2020/12_1/05-1200x630-4.jpg",
        intro:
          "สวัสดีจ้า เจ้าพวกแครอททั้งหลายสวัสดีจ้า เจ้าพวกแครอททั้งหลายสวัสดีจ้า เจ้าพวกแครอททั้งหลายสวัสดีจ้า เจ้าพวกแครอททั้งหลายสวัสดีจ้า เจ้าพวกแครอทท",
        cost: 50,
      },
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  computed: {
    getTotalCost() {
      return this.userDetail.cost * this.amount;
    },
  },
  methods: {
    addAmount() {
      return this.amount++;
    },
    dropAmount() {
      if (this.amount > 1) {
        return this.amount--;
      } else return (this.amount = 1);
    },
  },
};
</script>
