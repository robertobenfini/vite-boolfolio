<script>
import axios from 'axios';
import { store } from '../store'

import AppLoader from './AppLoader.vue';


export default {
    name: 'ContactForm',
    components:{
        AppLoader
    },
    data(){
        return {
            store,
            loading: false,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm(){
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                content: this.message
            }

            //pulisco l'array degli errori
            this.errors = {};

            //effettuiamo la chiamata axios in post
            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                this.success = response.data.success;
                if(!this.success){
                    this.errors = response.data.errors;
                }
                else{
                    //ripuliamo i dati in input
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }
                this.loading = false
            })
        }
    }
}
</script>

<template>
    <div>
        
    </div>
</template>

<style lang="scss" scoped>
    
</style>