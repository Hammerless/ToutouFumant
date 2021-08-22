<template>
    <div class="w-full mt-4 flex flex-col">
        <h1 class="text-orange text-lg text-center">Bonjour {{ name }}</h1>
        <div class="flex flex-col w-44 ml-12">
            <router-link to="/commandes" class="w-full">
                <button
                    class="text-sm text-gray-200 uppercase bg-gradient-to-l from-rose to-orange py-2 px-4 rounded-md text-bold mb-4">VOS
                    COMMANDES</button>
            </router-link>
            <button v-on:click="logout"
                class="text-sm text-gray-200 uppercase bg-red-400 py-2 px-4 rounded-md text-bold w-full">Se
                Déconnecter</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data() {
            return {
                name: null,
            };
        },
        created() {
            if (window.Laravel.user) {
                this.name = window.Laravel.user.name;
            }
        },
        beforeRouteEnter(to, from, next) {
            if (!window.Laravel.isLoggedin) {
                window.location.href = "/login";
            }
            next();
        },
        methods: {
            logout(e) {
                e.preventDefault()
                this.$axios.get('/sanctum/csrf-cookie').then(response => {
                    this.$axios.post('/api/logout')
                        .then(response => {
                            if (response.data.success) {
                                window.location.href = "/"
                            } else {
                                console.log(response)
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                })
            }
        },
    };
</script>