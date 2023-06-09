<template>
  <transition name="sidenav">
    <nav
      v-show="isOpen"
      class="app-nav top-0 z-20 bg-tory-blue-600 text-white shadow-inner md:border-b md:border-t border-r border-tory-blue-400 md:border-tory-blue-800 absolute md:relative md:w-auto"
    >
      <div class="container mx-auto md:flex-row flex flex-col justify-between h-full">
        <ul class="flex flex-col md:flex-row w-full justify-space-between">
          <AppNavItem
            v-for="(item, key, index) in navItems"
            :key="index"
            @click="handleNavClick(item, $event)"
          >
            {{ key }}
          </AppNavItem>
        </ul>

        <!-- Dark Mode Toggle -->
        <div
          class="app-nav__dark-mode-switch w-full md:w-10 h-10 flex justify-center items-center cursor-pointer self-end border-t md:border-none border-tory-blue-400 hover:bg-tory-blue-700 select-none"
          :class="{ 'app-nav__dark-mode-switch--dark': isDarkMode }"
          @click="toggleDarkMode"
        >
          <div class="w-6 h-6 flex justify-center items-center rounded-full bg-white dark:bg-tory-blue-600">
            <FontAwesomeIcon
              icon="moon"
              class="text-tory-blue-800 dark:text-white"
            />
          </div>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'close'
])

const route = useRoute()
const router = useRouter()

async function handleNavClick (item) {
  if (route.path !== '/') {
    await router.push({ path: '/' })
    await new Promise(resolve => setTimeout(resolve, 250))
  }

  scrollTo(item)
}

function scrollTo (item) {
  const isMobile = window?.innerWidth < 768
  const headerOffset = isMobile ? 60 : 140
  const el = document.getElementById(item.anchor)
  const elPosition = el?.getBoundingClientRect()?.top
  const offset = elPosition + window.scrollY - headerOffset

  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  })

  if (isMobile) {
    emit('close')
  }
}

const navItems = {
  About: {
    anchor: 'about'
  },
  Experience: {
    anchor: 'experience'
  },
  Websites: {
    anchor: 'websites'
  },
  Projects: {
    anchor: 'projects'
  }
}

/**
 * Dark Mode
 */
const colorMode = useColorMode()
const isDarkMode = computed(() => colorMode.value === 'dark')

function toggleDarkMode () {
  colorMode.preference = isDarkMode.value ? 'light' : 'dark'
}
</script>

<style lang="postcss" scoped>
.app-nav {
  top: 48px;
  width: 80%;
  height: calc(100vh - 48px);
  transition: transform 200ms ease-out;
  transform: translateX(0%);

  @screen md {
    top: 0;
    height: auto;
    transform: none;
    width: 100%;
    transition: none;
    display: block !important;
  }

  &__backdrop {
    @apply opacity-75 bg-black;
  }

  &__dark-mode-switch--dark:hover {
    > div {
      @apply bg-tory-blue-700;
    }
  }
}

.is-open {
  transform: translateX(0%);
}

.sidenav-enter-active,
.sidenav-leave-active {
  transition: transform opacity 200ms ease-in;
}

.sidenav-enter-from,
.sidenav-leave-to {
  transform: translateX(-100%);
}
</style>
