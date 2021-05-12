<template>
  <v-container class="grey lighten-5">
    <v-card class="ma-5" height="1200">
      <v-card-title primary-title>
        <h1>ประวัติการเช่า</h1>
      </v-card-title>

      <v-card
        v-for="n in transactions"
        :key="n"
        class="d-flex flex-row mb-2"
        flat
        tile
      >
        <v-card
          width="200"
          contain
          height="70"
          class="red lighten-3"
          rounded="0"
        >
          <v-card-title class="pa-5">19/09/64</v-card-title>
        </v-card>

        <v-card
          width="700"
          contain
          height="70"
          class="red 
        lighten-3"
          rounded="0"
        >
          <v-card-title class="pa-3">
            <v-list-item>
              <v-list-item-avatar size="40">
                <v-img
                  src="https://www.online-station.net/wp-content/uploads/2020/12_1/05-1200x630-4.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ transactions.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
        </v-card>

        <v-card
          width="200"
          contain
          height="70"
          class="red 
        lighten-3"
          rounded="0"
        >
          <v-card-title class="pa-6">
            2
          </v-card-title>
        </v-card>

        <v-card
          width="200"
          contain
          height="70"
          class="red 
        lighten-3"
          rounded="0"
        >
          <v-card-title class="pa-6">
            1000
          </v-card-title>
        </v-card>

        <v-card
          width="200"
          contain
          height="70"
          class="red 
          lighten-3"
          rounded="0"
        >
          <v-card-title class="pa-6">
            2000
          </v-card-title>
        </v-card>

        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
              width="150"
              height="50"
              class="align-center ma-2 mt-3 ml-16"
              >ใบเสร็จ</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-img
                src="https://www.microsuck.net/wp-content/uploads/2019/09/1-592x1024.png"
              ></v-img>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    transactions: {
      date: "24/12/2021",
      avata:
        "https://www.online-station.net/wp-content/uploads/2020/12_1/05-1200x630-4.jpg",
      name: "น้องต่าย",
      hr: 2,
      price: 1000,
      bill:
        "https://www.microsuck.net/wp-content/uploads/2019/09/1-592x1024.png",
    },
  }),
};
</script>
