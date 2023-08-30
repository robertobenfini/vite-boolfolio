<script>
import axios from 'axios';

import { store } from '../store.js';
import AppLoader from '../components/AppLoader.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'ProjectList',
  components:{
    AppLoader,
    ProjectCard
  },

  data(){
    return{
      store,
      projects: [],
      currentPage: 1,
      lastPage: null
    }
  },
  created(){
    this.getProjects(1);
  },
  methods:{
    getProjects(num_page){
      this.store.loading = true;
      // axios.get(`${this.baseUrl}/api/projects`).then((response) => {
        
      //   if(response.data.success){
      //     this.projects = response.data.results;
      //     this.loading = false;
      //   }

      //   else{

      //   }
      // })

      axios.get(`${this.store.baseUrl}/api/projects`, { params: { page:num_page }}).then((response) => {
        this.projects = response.data.results.data;
        this.currentPage = response.data.results.current_page;
        this.lastPage = response.data.results.last_page;
        this.store.loading = false;
      })

    },
  }
};
</script>

<template>

  <div v-if="store.loading" class="loader-position">
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
          <ProjectCard :project="project" />
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