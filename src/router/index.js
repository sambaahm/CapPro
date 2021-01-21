import Vue from 'vue'
import Router from 'vue-router'
//import Utilisateur from '@/components/Utilisateur'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/componenets',
            name: 'Utilisateur',
            
        },
        {
            path: '/componenets',
            name: 'Notifications',
            
        }
        ,{
            path: '/componenets',
            name: 'parameteres',
            
        }
    ]
})