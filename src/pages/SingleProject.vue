<script>
import axios from 'axios';
import { store } from '../store';

import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'SingleProject',
    components: {
        AppLoader
    },
    data(){
        return{
            store,
            project: null
        }
    },
    created(){
        this.getSinglePost()
    },
    methods:{
        getSinglePost(){
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                if(response.data.success){
                    this.project = response.data.project;
                    this.store.loading = false;
                }
                else{
                    
                }
            })
        }
    }
}
</script>

<template>
    <div v-if="store.loading" class="loader-position">
        <AppLoader />
    </div>
    <div v-else class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">
                    {{ project.title }}
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-3">
                <img :src="`${store.baseUrl}/storage/${project.image}`" alt="img" width="300">
            </div>
            <div class="col-12 mb-3" v-if="project.type">
                <strong>Categoria:</strong> {{ project.type.name }}
            </div>
            <div class="col-12 mb-3" v-if="project.technologies">
                <strong>Tecnologie:</strong> <span class="badge text-bg-primary me-1" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</span>
            </div>
            <div class="col-12 mb-3">
                <div class="col-12 mb-3" v-if="project.content">
                <strong>Descrizione:</strong> {{ project.content }}
            </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-position{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>