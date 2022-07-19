import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProjectView from '../views/ProjectView.vue'
import TaskView from '../views/TaskView.vue'

Vue.use(VueRouter)

// TODO: Appy dynamic page load based off of the user state information or user information that has been provided to the FE
// Should be for Most of the View pages especially Task and Project

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/User',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/Dashboard',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/Project',
    name: 'ProjectView',
    component: ProjectView
  },
  {
    path: '/Task',
    name: 'TaskView',
    component: TaskView
  }
]

const router = new VueRouter({
  routes
})

export default router
