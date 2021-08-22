<template lang="fr">
    <div class="px-12 w-full py-4">

        <div class="border border-rose py-4 px-6 shadow-xl rounded-sm text-rose text-center bg-gray-100 w-full">
            <p class="text-rose text-bold text-xl text-center pb-4 border-b border-orange">🇫🇷 Tout nos produits sont
                français 🇫🇷</p>
            <div class="flex justify-between mt-4 text-orange">
                <div class="flex flex-col justify-center w-1/3">
                    <h1 class="text-rose mb-2">Pain (boulangers locaux) :</h1>
                    <ul class="text-sm">
                        <li>- Moelleux sésame</li>
                        <li>- Croustillant</li>
                    </ul>
                </div>
                <div class="flex flex-col justify-center w-1/3">
                    <h1 class="text-rose mb-2">Accompagnements :</h1>
                    <ul class="text-sm">
                        <li>- Salade verte (Sauce balsamique, provençale, noix, raisin)</li>
                        <li>- Frites maison (pommes de terre de l'île de Ré)</li>
                    </ul>
                </div>
                <div class="flex flex-col justify-center w-1/3">
                    <h1 class="text-rose mb-2">Boissons :</h1>
                    <ul class="text-sm">
                        <li>- Eaux minérales : Celtic, Elsass'o, Eau Royale, Volvic</li>
                        <li>- Bières : Stout, Bourganel, Pierre de lune, La ventre jaune </li>
                        <li>- Cidres : Pré de Sagnes, Sagarmuin, Félicité</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <div class="flex justify-around flex-wrap items-center">


        <div v-if="menus" v-for="menu in menus"
            class="mois border w-96 border-rose px-2 py-4 shadow-xl rounded-sm text-rose text-center bg-gray-100 mt-8">
            <div class="border-b border-orange w-full text-orange mb-2">
                <h2 class="mb-4">{{menu.name}}</h2>
            </div>
            <div class="flex flex-col justify-center px-6 ">
                <div class="flex items-center w-full py-2 " v-for="ingredient in menu.ingredients">
                    <i class="fas fa-hotdog mr-8"></i>
                    <p>{{ingredient}}</p>
                </div>
            </div>
            <div>
                <p class="text-xs text-orange text-left mt-2">*Un toutou est vendu avec un accompagnement au choix et
                    une
                    boisson</p>

                <p>Prix : {{menu.price}} €</p>
                <button
                    class="text-base text-gray-200 uppercase bg-gradient-to-l from-rose to-orange py-2 px-8 rounded-md text-bold mt-4">
                    COMMANDER
                </button>
            </div>

        </div>
    </div>


</template>
<script>
    export default {
        data() {
            return {
                menus: null,
            };
        },
        async created() {
            await this.$axios.get("/api/menus").then((response) => {
                this.menus = response.data;
                console.log(this.menus[0]);
            });

            this.menus.forEach((menu) => {
                menu.ingredients = JSON.parse(menu.ingredients);
            });
        },
    };
</script>
<style lang="css">
</style>