<template>
  <v-container fluid>
    <v-row class="ma-auto justify-center" align="center" col="1">
      <v-card class="pa-5" width="900">
        <v-card-title>สมัครเป็น Member</v-card-title>
        <v-card-subtitle>โปรดใช้ถ้อยคำที่สุภาพและเหมาะสม</v-card-subtitle>
        <v-row class="pt-10">
          <v-col cols="16">
            แนะนำตัว
            <v-textarea
              outlined
              clearable
              label="แนะนำตัวดิ"
              counter="800"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="16">
            ค่าขนม (บาท/ชั่วโมง)
            <v-text-field placeholder="100" outlined clearable></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            เกมที่เล่นได้
            <v-select
              v-model="value"
              :items="items"
              chips
              label="เลือกเกม"
              multiple
              solo
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="16">
            ช่องทางติดต่อเพื่อเล่นเกม
            <v-text-field
              placeholder="https://discord.gg/M7YG5H3daYw"
              outlined
              clearable
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="end">
          <v-col align="end">
            <!-- <v-btn alight="right" color="success">ยืนยัน</v-btn> -->
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" dark v-bind="attrs" v-on="on">
                    ยืนยัน
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    โปรดตรวจสอบข้อมูล
                  </v-card-title>
                  <v-card-text
                    >คุณสามารถกลับไปแก้ไขข้อมูลด้วยการกดยกเลิก และบันทึกข้อมูลด้วยการกดยืนยัน</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                      ยกเลิก
                    </v-btn>
                    <v-btn color="green darken-1" text @click="dialog = false">
                      ยืนยัน
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>

          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    items: ["Apex", "Minecraft", "Mario", "PacMan", "RB6", "CS:GO"],
    value: [],
  }),
};
</script>
