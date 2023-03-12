<template>
  <div class="container dark:text-white pt-6 md:pt-12 px-4 xl:px-0">
    <div class="mb-2">
      <nuxt-link
        :to="`/#${anchor}`"
        class="inline-block text-tory-blue-400 dark:text-tory-blue-100 underline font-semibold"
      >
        Home
      </nuxt-link> / {{ breadcrumb }}
    </div>
    <h1 class="text-4xl md:text-5xl font-heading font-display">
      {{ title }}
    </h1>

    <h2
      v-if="subtitle"
      class="text-xl mt-2 font-display"
    >
      {{ subtitle }} <span
        v-if="date"
        class="opacity-75"
      >- {{ date }}</span>
    </h2>

    <AppDivider margin="my-6" />

    <div class="w-full flex flex-col md:flex-row">
      <section
        class="w-full"
        :class="{ 'md:w-2/3 md:pr-4': imgRight }"
      >
        <div
          v-if="youtubeId || (featuredImage && !imgRight)"
          class="flex flex-col md:flex-row mb-4"
        >
          <div
            v-if="youtubeId"
            class="w-full md:w-2/3 mr-4 bg-gray-600 mb-4 flex justify-center items-center"
          >
            <AppSpinner
              v-if="youtubeId"
              class="app-project__youtube-spinner absolute w-full"
            />
            <div
              v-if="youtubeId"
              class="self-start app-project__youtube w-full flex-shrink-0"
            >
              <iframe
                class="absolute top-0 left-0 w-full"
                :src="youtubeSrc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <AppImgGallery
            :featured-image="featuredImage"
            :images="imgGallery"
          />
        </div>

        <div
          v-if="showLinks"
          class="mb-4"
        >
          <h3 class="text-xl font-semibold mb-2">
            Links
          </h3>
          <a
            v-if="website"
            :href="website"
            target="_blank"
            class="inline-block p-2 rounded shadow text-white bg-tory-blue-400 font-semibold text-lg mr-2"
          >
            Website
            <FontAwesomeIcon
              icon="external-link-alt"
              class="ml-1 inline-block"
            />
          </a>

          <a
            v-if="github"
            :href="github"
            target="_blank"
            class="inline-block p-2 rounded shadow text-white bg-tory-blue-400 font-semibold text-lg"
          >
            Github
            <FontAwesomeIcon
              :icon="['fab', 'github']"
              class="ml-1 inline-block"
            />
          </a>
        </div>

        <div class="mb-4">
          <h3 class="text-xl font-semibold mb-2">
            Technology
          </h3>
          <ul>
            <li
              v-for="(key, index) in technology"
              :key="index"
              class="bg-golden-bell-500 text-black inline-block rounded p-2 mr-2 mb-2"
            >
              {{ key }}
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="text-xl font-semibold mb-2">
            Role
          </h3>
          <ul>
            <li
              v-for="(key, index) in roles"
              :key="index"
              class="bg-gray-400 text-black inline-block rounded p-2 mr-2 mb-2"
            >
              {{ key }}
            </li>
          </ul>
        </div>

        <div
          v-if="summary"
          class="mb-4"
        >
          <h3 class="text-xl font-semibold">
            Summary
          </h3>
          <p>
            {{ summary }}
          </p>
        </div>

        <div
          v-if="process"
          class="mb-4"
        >
          <h3 class="text-xl font-semibold">
            Process
          </h3>
          <p>
            {{ process }}
          </p>
        </div>

        <div
          v-if="result"
          class="mb-4"
        >
          <h3 class="text-xl font-semibold">
            Result
          </h3>
          <p>
            {{ result }}
          </p>
        </div>
      </section>

      <div
        v-if="img && imgRight"
        class="w-full md:w-1/3"
      >
        <AppCard
          padding
          class="h-auto inline-block"
        >
          <NuxtImg
            :src="img"
            width="426"
            :alt="title"
            class="block w-full"
            format="webp"
          />
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  anchor: {
    type: String,
    default: ''
  },
  breadcrumb: {
    type: String,
    default: ''
  },
  website: {
    type: String,
    default: ''
  },
  github: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    default: ''
  },
  process: {
    type: String,
    default: ''
  },
  result: {
    type: String,
    default: ''
  },
  technology: {
    type: Array,
    default: () => []
  },
  roles: {
    type: Array,
    default: () => []
  },
  img: {
    type: [String, Object],
    default: ''
  },
  imgRight: {
    type: Boolean,
    default: false
  },
  imgGallery: {
    type: Array,
    default: () => []
  },
  youtubeId: {
    type: String,
    default: ''
  },
  featuredImage: {
    type: Boolean,
    default: false
  }
})

const showLinks = computed(() => props.website || props.github)
const youtubeSrc = computed(() => `https://www.youtube.com/embed/${props.youtubeId}?autoplay=0&modestbranding=1`)
</script>

<style lang="postcss" scoped>
.app-project {
  &__youtube {
    @apply relative;
    padding-bottom: 56.25%; /* 16:9 */

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__youtube-spinner {
    left: calc(50% - 40px);
  }
}
</style>
