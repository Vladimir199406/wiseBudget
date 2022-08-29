const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/PageBudget.vue") },
      { path: "/cards", component: () => import("src/pages/PageCards.vue") },
      {
        path: "/settings",
        component: () => import("src/pages/PageSettings.vue"),
      },
      {
        path: "/account",
        component: () => import("src/pages/PageAccount.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
