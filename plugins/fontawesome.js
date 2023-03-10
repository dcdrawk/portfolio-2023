import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faBars,
  faChevronDown,
  faChevronUp,
  faExternalLinkAlt,
  faTimes,
  faAngleLeft,
  faAngleRight,
  faMoon
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'


library.add(
  faBars,
  faChevronDown,
  faChevronUp,
  faExternalLinkAlt,
  faGithub,
  faTimes,
  faAngleLeft,
  faAngleRight,
  faMoon
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon, {})
})