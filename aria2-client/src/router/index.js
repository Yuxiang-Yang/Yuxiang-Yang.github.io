import Vue from "vue";
import VueRouter from "vue-router";
import Downloading from "../views/Downloading.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Downloading",
    component: Downloading,
  },
  {
    path: '/task/:gid',
    name: 'TaskDetail',
    component: () => import('../views/TaskDetail.vue')
  },
  {
    path: "/completed",
    name: "Completed",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Completed" */ "../views/Completed.vue"),
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new-task" */ "../views/NewTask.vue"),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ "../views/Settings.vue"),
  },
  {
    path: '/servers',
    name: 'Servers',
    component: () => import(/* webpackChunkName: "servers" */ "../views/Servers.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
