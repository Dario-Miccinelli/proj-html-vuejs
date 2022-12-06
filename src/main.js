import Vue from 'vue'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faCartShopping, faChevronDown, faMagnifyingGlass, faStar} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faFacebook, faFacebookF, faInstagram, faYoutube, faCartShopping, faChevronDown, faMagnifyingGlass, faStar)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
