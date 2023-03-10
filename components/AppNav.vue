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
            @click="handleNavClick(item)"
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

defineEmits([
  'close'
])

const route = useRoute()
const router = useRouter()

async function handleNavClick (item) {
  if (route.path !== '/') {
    await router.push({ path: '/', hash: `#${item.anchor}` })
    return
  }

  router.replace({
    path: '/',
    hash: `#${item.anchor}`
  })

  const isMobile = window?.innerWidth < 768

  if (isMobile) {
    context.emit('close')
  }
}

const navItems = {
  About: {
    anchor: 'app-hero'
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
const theme = useStatefulCookie('theme')

const isDarkMode = computed(() => theme.value === 'dark')

function toggleDarkMode () {
  if (theme.value === 'dark') {
    document.documentElement.classList.remove('dark')
    theme.value = 'light'
  } else {
    document.documentElement.classList.add('dark')
    theme.value = 'dark'
  }
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
  /* opacity: 0; */
  transform: translateX(-100%);
}
</style>
