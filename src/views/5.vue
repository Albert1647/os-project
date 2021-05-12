<template>
  <v-container class="grey lighten-5">
    <v-card class="ma-5" height="1200">
      <v-card-title primary-title>
        <h1>ประวัติการเช่า</h1>
      </v-card-title>

      <v-card
        class="d-flex flex-row mb-6"
        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
        flat
        tile
      >
        <v-card
          contain
          height="70"
          class="red 
        lighten-3"
          rounded="0"
        >
          <v-card-title class="pa-5">19/09/64</v-card-title>
        </v-card>

        <v-card
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
                <v-list-item-title>Pekora</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-title>
        </v-card>

        <v-card
          contain
          height="70"
          class="red 
        lighten-3"
          rounded="0"
        >
          <v-card-title class="pa-6">
            50000
          </v-card-title>
        </v-card>

        <v-card
          contain
          height="70"
          class="red 
          lighten-3"
          rounded="0"
        >
          <v-card-title class="pa-6">
            50000
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
              class="align-center ma-2 mt-1 ml-16"
              >ใบเสร็จ</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Opening from the top</v-toolbar>
              <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-card>

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
            <v-card-title class="pa-5">5 ชั่วโมง</v-card-title>
          </v-card>
        </v-col>
        <v-col col="2">
          <v-card contain height="70" class="red lighten-3">
            <v-card-title class="pa-5">5000</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="2" align="center">
          <v-dialog
            transition="dialog-top-transition"
            width="1000"
            height="1000"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
                width="200"
                height="70"
                >ใบเสร็จ</v-btn
              >
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-img
                  src="https://www.microsuck.net/wp-content/uploads/2019/09/1-592x1024.png"
                ></v-img>
                <v-card-actions class="justify-end">
                  <v-btn @click="dialog.value = false" color="er">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
