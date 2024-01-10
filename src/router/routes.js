import GlobalLayout from "@/layout/GlobalLayout.vue";
import LoginLayout from "@/layout/LoginLayout.vue";

export const routes = [
  {
    path: '/',
    component: GlobalLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import("@/views/home/HomeView.vue"),
      },
      // Outras rotas que usam GlobalLayout
    ],
  },
  {
    path: '/login',
    component: LoginLayout, // Usando o novo layout para login
    children: [
      {
        path: '',
        name: 'login',
        component: () => import("@/views/guard/LoginView.vue"),
      }
    ]
  },
  // Outras rotas principais, se necessário
];
