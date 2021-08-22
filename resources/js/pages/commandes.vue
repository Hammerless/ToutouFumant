<template lang="fr">
    <div class="w-full px-12 py-4" v-for="commande in commandes">
        <div
            class="border border-rose py-4 px-6 shadow-xl rounded-sm text-rose text-center bg-gray-100 w-full flex justify-between items-center">
            <div class="">
                <h1>{{commande.menu.name}} - {{commande.menu.price}}</h1>
            </div>
            <div class="">
                <h1 v-if="commande.steps == 1">Etape : En cours de préparation</h1>
                <h1 v-if="commande.steps == 2">Etape : Préparée</h1>
                <h1 v-if="commande.steps == 3">Etape : Livrée / Retirée</h1>
                <h1 v-if="commande.steps == 4">Etape : Annnulée</h1>
            </div>
            <div class="">
                <button v-if="commande.steps != 4">
                    <i class="far fa-trash-alt text-red-600"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                commandes: null,
            }
        },
        beforeRouteEnter(to, from, next) {
            if (!window.Laravel.isLoggedin) {
                window.location.href = " /login";
            } next();
        }, created() {
            if (window.Laravel.user) {
                this.$axios.get('/api/orders?user_id=' + window.Laravel.user.id).then(response => {
                    this.commandes = response.data;
                })
            }
        },
    }
</script>
<style lang="css">

</style>