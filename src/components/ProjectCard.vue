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
            <router-link class="btn btn-sm btn-primary" :to="{ name: 'single-project', params: { slug: project.slug }}">Visualizza progetto</router-link>
        </div>
    </div>

</template>

<style lang="scss" scoped>
img{
  height: 200px;
  width: 100%;
}

.min_height-377{
  min-height: 377px;
}
</style>