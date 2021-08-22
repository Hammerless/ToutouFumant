<template>
    <div class="px-4 text-center">
        <div class="title pt-10 mb-10 flex items-center justify-between">
            <div class="reseaux">
                <i class="fab fa-facebook fa-2x text-orange mr-2"></i>
                <i class="fab fa-instagram fa-2x text-orange"></i>
            </div>
            <h1 class="text-rose text-bold text-xl justify-self-center">🇫🇷 Tout nos produits sont français 🇫🇷</h1>
            <p class="text-gray-100"></p>
        </div>
        <div class="page w-full pt-8 flex flex-col items-center md:flex-row md:justify-between mb-28">
            <div
                class="mois border w-96 border-rose px-2 py-4 shadow-xl rounded-sm text-rose text-center bg-gray-100 mb-12 md:mb-0">
                <h1 class="text-bold text-lg mb-4">Le Toutou fumant du mois :</h1>
                <div class="border-b border-orange w-full text-orange mb-2">
                    <h2 class="mb-4">Le caniche Obernais</h2>
                </div>
                <div class="flex flex-col justify-center px-6 ">
                    <div class="flex items-center w-full py-2">
                        <i class="fas fa-hotdog mr-8"></i>
                        <p>Cervelas</p>
                    </div>
                    <div class="flex items-center  w-full py-2">
                        <i class="fas fa-hotdog mr-8"></i>
                        <p>Emmental</p>
                    </div>
                    <div class="flex items-center  w-full py-2">
                        <i class="fas fa-hotdog mr-8"></i>
                        <p>Sauce moutardée au lard</p>
                    </div>

                </div>

            </div>
            <div class="mois border w-96 border-rose px-2 py-4 shadow-xl rounded-sm text-rose text-center bg-gray-100">
                <h1 class="text-bold text-lg mb-4">Le Toutou fumant du mois :</h1>
                <div class="border-b border-orange w-full text-orange mb-2">
                    <h2 class="mb-4">Le caniche Obernais</h2>
                </div>
                <div class="flex flex-col justify-center px-6 ">
                    <div class="flex items-center w-full py-2">
                        <i class="fas fa-hotdog mr-8"></i>
                        <p>Cervelas</p>
                    </div>
                    <div class="flex items-center  w-full py-2">
                        <i class="fas fa-hotdog mr-8"></i>
                        <p>Emmental</p>
                    </div>
                    <div class="flex items-center  w-full py-2">
                        <i class="fas fa-hotdog mr-8"></i>
                        <p>Sauce moutardée au lard</p>
                    </div>

                </div>

            </div>

        </div>
        <router-link to="/carte">

            <button
                class="text-lg text-gray-200 uppercase bg-gradient-to-l from-rose to-orange py-2 px-8 rounded-md text-bold">Commander</button>
        </router-link>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                //
            }
        },
        created() {
        },
        methods: {}
    }
</script>