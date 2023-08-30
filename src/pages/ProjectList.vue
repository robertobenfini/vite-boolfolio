<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
  name: 'ProjectList',
  components:{
    AppLoader
  },

  data(){
    return{
      baseUrl: 'http://localhost:8000',
      projects: [],
      loading: true,
      currentPage: 1,
      lastPage: null
    }
  },
  created(){
    this.getProjects(1);
  },
  methods:{
    getProjects(num_page){
      this.loading = true;
      // axios.get(`${this.baseUrl}/api/projects`).then((response) => {
        
      //   if(response.data.success){
      //     this.projects = response.data.results;
      //     this.loading = false;
      //   }

      //   else{

      //   }
      // })

      axios.get(`${this.baseUrl}/api/projects`, { params: { page:num_page }}).then((response) => {
        this.projects = response.data.results.data;
        this.currentPage = response.data.results.current_page;
        this.lastPage = response.data.results.last_page;
        this.loading = false;
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

  <div v-if="loading" class="loader-position">
    <AppLoader/>
  </div>
  <main v-else>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center my-4">Progetti</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
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
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="d-flex justify-content-center">
            <ul class="pagination">
              <li :class="currentPage === 1 ? 'disabled' : ''">
                <button class="page-link" @click="getProjects(currentPage - 1)">
                  Precedente
                </button>
              </li>
              <li class="page-item"><a class="page-link" href="#">{{ currentPage }}</a></li>
              <li :class="currentPage === lastPage ? 'disabled' : ''">
                <button class="page-link" @click="getProjects(currentPage + 1)">
                  Successivo
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>

</template>

<style lang="scss" scoped>

@use '../styles/generals.scss';

img{
  height: 200px;
  width: 100%;
}

.min_height-377{
  min-height: 377px;
}

.loader-position{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>