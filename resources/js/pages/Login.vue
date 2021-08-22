<template>
  <div class="container w-full flex justify-center items-center text-rose">
    <div class="flex flex-wrap  justify-center">
      <div class="md:w-2/3 pr-4 pl-4">
        <div class="relative px-3 py-3 mb-4 border rounded bg-red-200 border-red-300 text-red-800" role="alert" v-if="error !== null">
          {{ error }}
        </div>

        <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-default">
          <div class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">Login</div>
          <div class="flex-auto p-6">
            <form>
              <div class="mb-4 flex flex-wrap ">
                <label for="email" class="sm:w-1/3 pr-4 pl-4 pt-2 pb-2 mb-0 leading-normal md:text-right"
                  >E-Mail Address</label
                >
                <div class="md:w-1/2 pr-4 pl-4">
                  <input
                    id="email"
                    type="email"
                    class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    v-model="email"
                    required
                    autofocus
                    autocomplete="off"
                  />
                </div>
              </div>

              <div class="mb-4 flex flex-wrap ">
                <label
                  for="password"
                  class="md:w-1/3 pr-4 pl-4 pt-2 pb-2 mb-0 leading-normal md:text-right"
                  >Password</label
                >
                <div class="md:w-1/2 pr-4 pl-4">
                  <input
                    id="password"
                    type="password"
                    class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    v-model="password"
                    required
                    autocomplete="off"
                  />
                </div>
              </div>

              <div class="mb-4 flex flex-wrap  mb-0">
                <div class="md:w-2/3 pr-4 pl-4 md:mx-1/3">
                  <button
                    type="submit"
                    class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
                    @click="handleSubmit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.$axios.get("/sanctum/csrf-cookie").then((response) => {
          this.$axios
            .post("api/login", {
              email: this.email,
              password: this.password,
            })
            .then((response) => {
              console.log(response.data);
              if (response.data.success) {
                this.$router.go("/dashboard");
              } else {
                this.error = response.data.message;
              }
            })
            .catch(function (error) {
              console.error(error);
            });
        });
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    if (window.Laravel.isLoggedin) {
      return next("dashboard");
    }
    next();
  },
};
</script>