import { createApp } from 'vue'
import './style.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from './App.vue'
import Router from './router/index'
import { pageTitle} from "vue-page-title"


createApp(App).use(Router).use( pageTitle({
    suffix: ' || Linkbum',
    mixin: true,
  })).use(Toast).mount('#app')
