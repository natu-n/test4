import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function loadView(view: string) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView("Home"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: loadView("BpCalendar"),
    },
    {
      path: "/datagrid",
      name: "datagrid",
      component: loadView("BpDatagrid"),
    },
    {
      path: "/Chart",
      name: "Chart",
      component: loadView("BpChart"),
    },
    {
      path: "/Lab",
      name: "lab",
      component: loadView("experimental"),
    },
    {
      path: "/Map",
      name: "map",
      component: loadView("BpHeatmap"),
    },
  ],
});
