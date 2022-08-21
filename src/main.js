import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'
import components from "./components/UI"
import router from './router/router'
//import VIntersection from './directives/VIntersection'
import directives from './directives'

const app = createApp(App)

// глобальна реєстрація UI компонентів
components.forEach(component => {app.component(component.name, component)})


directives.forEach((directive) => {
  app.directive(directive.name, directive);
});


app
.use(router)
.mount('#app')