<script>
export default {
    name: "AppHeader",
    data(){
        return{
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Chi siamo'
                },
                {
                    label: 'Progetti',
                    routeName: 'projects'
                },
                {
                    label: 'Contatti',
                    routeName: 'contact-us'
                },
                {
                    label: 'Categorie'
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                            <router-link class="nav-link" :to="{ name: item.routeName }">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    
</style>