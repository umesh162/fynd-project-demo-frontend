<template>
  <div class="h-screen overflow-hidden">
    <NavBar />

    <div v-if="userJoinComm.length === 0">
      <!-- <div v-if="0 === 0"> -->
      <NewUser />
    </div>
    <div v-else>
      <MainPage />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NewUser from "./NewUser.vue";
import MainPage from "./MainPage.vue";
import NavBar from "../Utils/NavBar.vue";

export default {
  name: "HomePage",
  components: { NewUser, MainPage, NavBar },
  computed: {
    ...mapState("comm", ["commList", "userJoinComm"]),
  },
  methods: {
    async createdCall() {
      console.log("Created called");
      await this.$store.dispatch("comm/getUserJoinComm");
      await this.$store.dispatch("comm/getAllCOmmunity");
      console.log("Created called");
    },
  },
  mounted() {
    this.createdCall();
  },
};
</script>

<style></style>
