<template>
  <!-- <div class="w-full mt-2">
    <div
      class="flex flex-row h-14 border-2 shadow-2xl rounded-3xl nav-wid items-center"
    >
      <div class="flex-1 px-4">
        <h3 class="font-bold text-xl">
          Go<span class="text-blue-500">Social</span>
        </h3>
      </div>

      <div class="mx-1">
        <button
          @click="logout"
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-full text-md py-2 px-8 text-center"
        >
          Logout
        </button>
      </div>
    </div>
  </div> -->

  <div>
    <nav
      class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto shadow-2xl rounded-full round"
      >
        <div class="flex-1 px-4">
          <h3 class="font-bold text-xl">
            Go<span class="text-blue-500">Social</span>
          </h3>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 rounded-full"
          aria-controls="navbar-default"
          aria-expanded="false"
          @click="resposive"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class="w-full md:block md:w-auto"
          id="navbar-default"
          :class="hidNav && 'hidden'"
        >
          <ul
            class="flex flex-col p-4 mt-4 items-center bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 rounded-full btn-ul"
          >
            <li class="btn-li">
              <a
                href="#"
                @click="joinToggle"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-full text-md py-2 px-8 text-center second-btn"
                >All Commuity</a
              >
            </li>

            <li>
              <a
                @click="logout"
                type="button"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-full text-md py-2 px-8 text-center"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div v-if="joinToggleClick">
      <AllCommModal :toggle="joinToggle" />
    </div>
  </div>
</template>

<script>
import AllCommModal from "../Community/AllCommModal.vue";
export default {
  Name: "Navbar",
  data() {
    return {
      hidNav: true,
      joinToggleClick: false,
    };
  },
  methods: {
    async logout() {
      let res = await this.$store.dispatch("auth/logout");
      if (res) {
        this.$swal.fire("Successfully Logout", "", "success");
        this.$router.push({ name: "login" });
      }
    },
    joinToggle() {
      this.joinToggleClick = !this.joinToggleClick;
    },
    resposive() {
      this.hidNav = !this.hidNav;
    },
  },
  components: { AllCommModal },
};
</script>

<style>
.nav-wid {
  width: 95%;
  margin: 0 auto;
}
@media (max-width: 575px) {
  .round {
    border-radius: 30px;
    padding: 10px 10px 10px 0px;
  }
  .second-btn {
    width: 26%;
    margin-bottom: 10px;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
  }
  .btn-li {
    margin-bottom: 0.75rem;
  }
  .btn-ul {
    align-items: flex-start;
  }
}
</style>
