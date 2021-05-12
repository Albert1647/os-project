<template>
  <v-container class="ma-">
    <v-row class="pl-5 pr-5 justify-center ">
      <v-card class="pa-2  mr-5 mb-5" height="450" width="500">
        <v-card-title>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
              <v-list-item-subtitle>Author</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>

        <v-carousel hide-delimiters height="300" cycle="true">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        <v-card-actions>444</v-card-actions>
      </v-card>

      <v-card class="pa-2  mr-5 mb-5" height="450" width="800">
        <h1>ทดสอบ</h1>
      </v-card>
    </v-row>
    <v-row class="pl-5 pr-5 justify-center ">
      <v-card class="pa-2 mr-5 mb-5" height="450" width="500">
        <h1>ทดสอบ</h1>
      </v-card>
      <v-card class="pa-2  mr-5 mb-5" height="600" width="800">
        <h1>ทดสอบ</h1>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
};
</script>
