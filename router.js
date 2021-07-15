import Vue from 'vue'
import Router from 'vue-router'
 
import index from '~/pages/index'
import Welcome from '~/pages/welcome/index'
import Book from '~/pages/book/index'

Vue.use(Router)
 
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index,
        },
        {
            path: '/welcome',
            component: Welcome,
        },

        {
            path: '/book',
            component: Book
        }

    ]
  })
}