<template>
  <v-container class="grey lighten-5">
    <v-card class="ma-5" height="1200">
      <v-card-title primary-title>
        <h1>ประวัติการเช่า</h1>
      </v-card-title>

      <v-row class="ma-5">
        <v-card contain height="70" class="red lighten-3">
          <v-card-title class="pa-5">19/09/64</v-card-title>
        </v-card>

        <v-card contain height="70" class="red lighten-3">
          <v-card-title class="pa-3">
            <v-list-item>
              <v-list-item-avatar size="40">
                <v-img
                  src="https://www.online-station.net/wp-content/uploads/2020/12_1/05-1200x630-4.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Pekora</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
        </v-card>

        <v-card contain height="70" class="red lighten-3">
          <v-card-title class="pa-6">
            50000
          </v-card-title>
        </v-card>

        <v-card contain height="70" class="red lighten-3">
          <v-card-title class="pa-6">
            50000
          </v-card-title>
        </v-card>

        <v-dialog transition="dialog-top-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed color="primary" height="70" width="200"
              >หลักฐานการโอนเงิน</v-btn
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
      </v-row>

      <v-row class="ma-5">
        <v-col cols="2">
          <v-card contain height="70" class="red lighten-3">
            <v-card-title class="pa-5">19/09/64</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card contain height="70" class="red lighten-3">
            <v-card-title class="pa-2">
              <v-list-item>
                <v-list-item-avatar size="40">
                  <v-img
                    src="https://www.online-station.net/wp-content/uploads/2020/12_1/05-1200x630-4.jpg"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Pekora</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card contain height="70" class="red lighten-3">
            <v-card-title class="pa-5">5000 Bath</v-card-title>
          </v-card>
        </v-col>
        <v-col col="2">
          <v-card contain height="70" class="red lighten-3">
            <v-card-title class="pa-5">5 ชั่วโมง</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2" align="center">
          <v-btn depressed color="primary" height="70" width="200">
            ใบเสร็จ
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
