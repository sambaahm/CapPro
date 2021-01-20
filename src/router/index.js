import Vue from 'vue'
import router from 'vue-router'


Vue.use(router)

export default new Router({
    routes: [
        {
            path: '/Utilisateur',
            name: 'Utilisateur',
            component: Utilisateur
        },
        {
            path: '/Notifications',
            name: 'Notifications',
            component: Notifications
        }
        ,{
            path: '/parameteres',
            name: 'parameteres',
            component: Parameteres
        }
    ]
})