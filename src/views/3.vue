<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        แนะนำตัว
        <v-text-field
          placeholder="แนะนำตัวดิ"
          outlined
          clearable
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-card class="pa-2" cols="auto" tile>
          ราคา
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-text-field outlined height="50"></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-card class="pa-2" cols="auto" tile>
          บาท ต่อ ชั่วโมง
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <v-select
          v-model="value"
          :items="items"
          chips
          label="เกมที่เล่น"
          multiple
          solo
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-btn alight="right" color="success">ยืนยัน</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Apex", "Minecraft", "Mario", "PacMan"],
    value: [],
  }),
};
</script>
