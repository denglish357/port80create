import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layout/app-layout.vue";
import AuthLayout from "@/layout/auth-layout.vue";
import AuthGuard from "./auth-guard";

import RouteViewComponent from "./route-view.vue";
// import UIRoute from "@/pages/admin/ui/route";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: { name: "dash-board" },
    beforeEnter: AuthGuard,
  },
  {
    name: "admin",
    path: "/admin",
    component: AppLayout,
    beforeEnter: AuthGuard,
    children: [
      {
        name: "dash-board",
        path: "/dashboard",
        component: () => import("@/pages/admin/dashboard/Dashboard.vue"),
        beforeEnter: AuthGuard,
      },
      {
        name: "companies",
        path: "/companies",
        component: RouteViewComponent,
        children: [
          {
            name: "companies-list",
            path: "companies-list",
            component: () =>
              import("@/pages/admin/companies/tables/Tables.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/Charts",
            },
          },
          {
            name: "new-companies",
            path: "new-companies",
            component: () =>
              import("@/pages/admin/companies/new/NewCompanies.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars",
            },
          },
        ],
      },
      {
        name: "invoices",
        path: "/invoices",
        component: RouteViewComponent,
        children: [
          {
            name: "invoices-list",
            path: "invoices-list",
            component: () => import("@/pages/admin/invoices/tables/Tables.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/Charts",
            },
          },
          {
            name: "new-invoices",
            path: "new-invoices",
            component: () =>
              import("@/pages/admin/invoices/new/NewInvoices.vue"),
            meta: {
              wikiLink:
                "https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        name: "login",
        path: "login",
        component: () => import("@/pages/auth/login/Login.vue"),
      },
      {
        name: "signup",
        path: "signup",
        component: () => import("@/pages/auth/signup/Signup.vue"),
      },
      {
        name: "recover-password",
        path: "recover-password",
        component: () =>
          import("@/pages/auth/recover-password/RecoverPassword.vue"),
      },
      {
        path: "",
        redirect: { name: "login" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
