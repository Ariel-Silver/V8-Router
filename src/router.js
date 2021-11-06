import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from "./componentes/Inicio.vue";
import Entrada from "./componentes/Entrada.vue";
import Articulo from "./componentes/Articulo.vue";
import Contacto from "./componentes/Contacto.vue";
import SobreMi from "./componentes/SobreMi.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Inicio',
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "NotFound" */'./componentes/NotFound.vue') 
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/Entrada',
    name: 'Entrada',
    component: Entrada,
    children: [
      {
        path: ':Articulo',
        name: 'Articulo',
        component: Articulo,
      },
    ]
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto,
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    component: SobreMi,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
