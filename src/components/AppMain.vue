<script>
import axios from 'axios';

export default {
  name: 'AppMain',

  data(){
    return{
      baseUrl: 'http://localhost:8000',
      projects: [],
      loading: true
    }
  },
  created(){
    this.getProjects();
  },
  methods:{
    getProjects(){
      this.loading = true;
      axios.get(`${this.baseUrl}/api/projects`).then((response) => {
        
        if(response.data.success){
          this.projects = response.data.results;
          this.loading = false;
        }

        else{

        }
      })
    },
    truncateText(text){
      if(text.length > 100){
        return text.substr(0, 50) + '...';
      }

      return text
    }
  }
};
</script>

<template>

  <div class="container">
    <div class="row">
      <h1 class="text-center my-4">Progetti</h1>
      <div class="col-12 col-md-4" v-for="project in projects" :key="project.id">
        <div class="card my-3 min_height-377">
          <div class="card-header">
            {{ project.title }}
          </div>
          <div class="card-image-top">
            <img :src="`${baseUrl}/storage/${project.image}`" alt="img">
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
      </div>
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