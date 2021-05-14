<template>
  <v-container>
    <v-carousel class="px-1" v-model="model">
            <v-carousel-item
              v-for="(itemsCover, i) in itemsCover"
              :key="i"
              :src="itemsCover.src"
            ></v-carousel-item>
          </v-carousel>

    <!-- Games -->
    <v-card class="my-8" height="140">
      <v-row>
        <v-list v-for="item in items" :key="item.src">
          <v-list-item-avatar class="mx-8" size="100">
            <v-img :src="item.src"> </v-img>
          </v-list-item-avatar>
        </v-list>
      </v-row>
    </v-card>

    <!-- Cards -->
    <v-row>
      <v-col v-for="card in cards" :key="card.title" :cols="3">
        <v-card class="mx-auto my-2" max-width="400">
          <v-img height="250" :src="card.src"></v-img>

          <v-card-title>{{ card.title }}}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1">50 coins / hour</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              to="/buyMember"
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              ดูข้อมูลเพิ่มเติม
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Homepage",
  data: () => ({
    itemsCover: [
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
    cards: [
      {
        title: "PEKORA",
        src:
          "https://i1.sndcdn.com/artworks-JyzoM7cN8ymbymnR-BL97oQ-t500x500.jpg",
      },
      {
        title: "เช่าน้องมอสหน่อยยย",
        src:
          "https://scontent.fbkk5-4.fna.fbcdn.net/v/t31.18172-8/16602194_382018028827558_5207540479394145311_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFgTgYwWj7eLyQhfgS9AOJgUwxQWxA0yCdTDFBbEDTIJ-9pD-kkWhBBIxeY9OR5IgJ6lKB8LqVFga5qWoZj1rIT&_nc_ohc=TV1bM2DqqAYAX-qOccP&_nc_ht=scontent.fbkk5-4.fna&oh=f886a40fdac28da1ae61870d5ac97905&oe=60C4AF7C",
      },
      {
        title: "Saber หิว",
        src:
          "https://pbs.twimg.com/profile_images/922110546865831936/mbZzPYia_400x400.jpg",
      },
      {
        title: "มาเช่าน้องโจนขาวได้น้าาา",
        src:
          "https://vignette4.wikia.nocookie.net/typemoon/images/0/0b/FGO_Jeanne_dArc_April_Fool.png/revision/latest?cb=20170629182139",
      },
      {
        title: "Melita X เองค่าาาา",
        src:
          "https://yt3.ggpht.com/ytc/AAUvwngLTeTeqTDC4BfbQYAQAuREwTbMRjwBTd-3Y8Hj=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        title: "Qualai Qu",
        src: "https://pbs.twimg.com/media/EuLNPTHVoAAUH4A.jpg",
      },
    ],
    items: [
      {
        src:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dcywezc-c27e7eb2-d3c0-4e69-abce-5a6b90fbbef1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGN5d2V6Yy1jMjdlN2ViMi1kM2MwLTRlNjktYWJjZS01YTZiOTBmYmJlZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.m4o5z3LjT1kDnLFRBD4UKdkgUAHhKMuT_usBj1wgkv0",
      },
      {
        src:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d9yew6j-bb55d3e1-c9fd-4edd-9082-67d36332c53f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZDl5ZXc2ai1iYjU1ZDNlMS1jOWZkLTRlZGQtOTA4Mi02N2QzNjMzMmM1M2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cWP5p2_T3WtWsUuBLkLKuGdIMcGYeZAoidoz1UEDiJY",
      },
      {
        src:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/ddw4dpz-d63ecf90-7c9e-40c0-a65f-6ab715b743ef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGR3NGRwei1kNjNlY2Y5MC03YzllLTQwYzAtYTY1Zi02YWI3MTViNzQzZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MarY5WWMk7bNIaUdP9yKtEQLYN7bGsiz-BeO49HUdHw",
      },
      {
        src: "https://genshinigems.cyou/images/logo.png",
      },
      {
        src:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/de28q7d-63b53c1a-ea0c-4a59-ac77-3a0a89dc9f6d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGUyOHE3ZC02M2I1M2MxYS1lYTBjLTRhNTktYWM3Ny0zYTBhODlkYzlmNmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DjTBTBmOcoZy1hDiwsj3wxL7Fmm3J_87h2pD5cv6dlw",
      },
      {
        src:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dc51d3e-39feefd8-6153-4886-8334-93aeba3d1152.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGM1MWQzZS0zOWZlZWZkOC02MTUzLTQ4ODYtODMzNC05M2FlYmEzZDExNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xfF_VTpreXauryXiZa4LU-L2ce4I4cLgGrhHF1Co1rc",
      },
      {
        src:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/ddjiura-d36e861d-74ab-43eb-ac6c-1c67d14b242e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGRqaXVyYS1kMzZlODYxZC03NGFiLTQzZWItYWM2Yy0xYzY3ZDE0YjI0MmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Gjz4vpJV9uXJfOr1oIxJVKtoWPlRxT0E-7aJcTN-YLk",
      },
      {
        src:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dd3p5k4-f0b341c8-c5ea-4b4c-8e11-1fc99bf56414.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGQzcDVrNC1mMGIzNDFjOC1jNWVhLTRiNGMtOGUxMS0xZmM5OWJmNTY0MTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BuMfLClMakCdKgW8hT8CnnlzMpD1oqUzk6UAcA6m4Hs",
      },
      {
        src:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/dc4pijn-4cc2e19e-3f82-49c1-a888-d33e0a335ed3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGM0cGlqbi00Y2MyZTE5ZS0zZjgyLTQ5YzEtYTg4OC1kMzNlMGEzMzVlZDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5uRgIqNFPOdnqHNBjLwE0o9AWGW-GPLc1YxnLaj-pDA",
      },
    ],
    loading: false,
    selection: 1,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  created() {},

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
