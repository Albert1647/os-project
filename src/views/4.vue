<template>
  <v-container>
    <!-- Left -->
    <v-row class="pl-6">
      <!-- Left top card -->
      <v-col cols="5" class="pr-12">
        <v-card class="align-end pa-2 mr-5 mb-5" height="450" width="600">
          <v-row class="d-flex align-center">
            <v-list>
              <v-list-item-avatar size="80">
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
            </v-list>

            <v-col>
              <h1>WOWWOW</h1>
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
          width="600"
        >
          <v-row class="py-4"
            ><v-card-title>สนับสนุนค่าขนมของเราได้ที่นี่</v-card-title></v-row
          >
          <v-row class="py-4 align-center">
            <v-col> <h3>/ ชั่วโมง</h3> </v-col>
            <v-spacer></v-spacer>

            <v-btn class="mx-3" small @click="dropAmount()">-</v-btn>
            <h3>{{ this.amount }}</h3>
            <v-btn class="mx-3" small @click="addAmount()">+</v-btn>
          </v-row>
          <v-row class="py-4"><h3>ราคาทั้งหมด :</h3> </v-row>

          <v-row class="pt-6 px-4">
            <v-btn large color="green" dark>Chat</v-btn>

            <v-btn large>ซื้อตั๋ว</v-btn>
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
      games: [
        { title: "Apex Legends" },
        { title: "Valorant" },
        { title: "Genshin impact" },
      ],
      computed: {},
      cost: 50,
      amount: 1,
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
  methods: {
    addAmount() {
      return this.amount++;
    },
    dropAmount() {
      if (this.amount > 1) {
        return this.amount--;
      } else return this.amount = 1;
    },
  },
};
</script>
