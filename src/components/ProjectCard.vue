<script>
import { store } from '../store.js';


export default {
    name: "ProjectCard",
    props:{
        project: Object
    },
    data(){
        return{
            store,
        }
    },
    methods: {
        truncateText(text){
          if(text.length > 100){
            return text.substr(0, 50) + '...';
          }
    
          return text
        }
}
}
</script>

<template>

    <div class="card my-3 min_height-377">
        <div class="card-header">
            {{ project.title }}
        </div>
        <div class="card-image-top">
            <img :src="`${store.baseUrl}/storage/${project.image}`" alt="img">
        </div>
        <div class="card-body">
            <div>
            <span v-if="project.type">{{ project.type.name }}</span>
            <span v-else>Categoria non assegnata</span>
            </div>
            <div v-if="project.technologies">
            <span class="badge text-bg-primary me-3" v-for="technology in project.technologies" :key="technology.id">
                {{ technology.name }}
            </span>
            </div>
            <div>
            {{ truncateText(project.content) }}
            </div>
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-sm btn-primary">Leggi il progetto</a>
        </div>
    </div>

</template>

<style lang="">
    
</style>