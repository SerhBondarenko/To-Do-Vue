import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'
import components from "./components/UI"

const app = createApp(App)

// глобальна реєстрація UI компонентів
components.forEach(component => {app.component(component.name, component)})

app.mount('#app')