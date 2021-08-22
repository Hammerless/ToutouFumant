<template>
    <div class="">
        <nav class="navbar flex justify-between items-center px-4 py-2 w-full bg-rose">
            <div class="logo">
                <router-link to="/">
                    <img src="../../public/images/Logo.png" alt="" class="w-24">
                </router-link>
            </div>
            <div class="menu w-2/4 hidden sm:block text-white uppercase text-base md:text-lg">
                <ul class="flex  justify-around items-center">
                    <li>
                        <router-link to="/">Accueil</router-link>
                    </li>
                    <li>
                        <router-link to="/carte">La carte</router-link>
                    </li>
                    <li>
                        <router-link to="">Trouvez-nous</router-link>
                    </li>
                    <li>
                        <router-link to="/nos-valeurs">Nos valeurs</router-link>
                    </li>
                </ul>


            </div>
            <div class="block sm:hidden menu w-2/4 text-white uppercase text-lg">

                <ul class="flex justify-around items-center">
                    <li>
                        <router-link to="">Acceuil</router-link>
                    </li>
                </ul>
            </div>
            <div class="compte text-white flex items-center">
                <router-link to="/dashboard"><i class="fas fa-user fa-2x mr-4"></i></router-link>
                <i class="fas fa-shopping-cart fa-2x"></i>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                isLoggedIn: false,
            };
        },
        created() {
            if (window.Laravel.isLoggedin) {
                this.isLoggedIn = true;
            }
        },
        methods: {
            logout(e) {
                console.log("ss");
                e.preventDefault();
                this.$axios.get("/sanctum/csrf-cookie").then((response) => {
                    this.$axios
                        .post("/api/logout")
                        .then((response) => {
                            if (response.data.success) {
                                window.location.href = "/";
                            } else {
                                console.log(response);
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                });
            },
        },
    };
</script>