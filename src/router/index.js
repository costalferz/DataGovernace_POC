import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TeacherAssessment from "../views/Assessments/Teacher.vue";
import StudentApplication from "../views/Application/StudentApplication.vue";
import Login from "../views/Login/Login.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,

  },
  {
    path: "/assessment/teacher",
    name: "TeacherAssessment",
    component: TeacherAssessment,
  },
  {
    path: "/application/student",
    name: "StudentApplication",
    component: StudentApplication,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
