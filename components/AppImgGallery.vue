<template>
  <!-- Featured Image -->
  <div
    v-if="featuredImage"
    class="flex-grow-0 w-full md:w-2/3 md:pr-4 mb-2"
  >
    <AppCard
      padding
      class="w-full cursor-pointer"
      @click="selectImage(images[0], 0)"
    >
      <NuxtImg
        :src="images[0]?.img"
        class="block w-full"
      />
    </AppCard>
  </div>

  <!-- Gallery -->
  <div
    class="w-full md:w-1/3 grid grid-cols-2 self-start gap-4"
  >
    <AppCard
      v-for="(imageObject, index) in galleryImages"
      :key="index"
      padding
      class="w-full inline-block cursor-pointer"
      @click="selectImage(imageObject, index + 1)"
    >
      <NuxtImg
        :src="imageObject.img"
        class="block w-full"
        :alt="`${imageObject.alt} thumbnail`"
        sizes="sm:calc(50vw - 24px) md:calc(14.29vw + 6px) lg:157px xl:205px"
        format="webp"
      />
    </AppCard>
  </div>

  <!-- Selected Image (Dialog) -->
  <div
    v-if="selectedImage"
    class="app-img-gallery__dialog fixed top-0 right-0 left-0 bottom-0 z-20 flex items-center justify-center select-none text-white"
    @click="selectedImage = null"
    @keydown.esc="selectedImage = null"
  >
    <div class="app-img-gallery__dialog-content relative flex">
      <button
        class="app-img-gallery__prev lg:absolute w-12 lg:h-full items-center justify-center hover:bg-gray-800 transition-colors"
        :class="{
          'opacity-25 cursor-not-allowed': !showPreviousArrow,
          'opacity-75': showPreviousArrow
        }"
        @click.stop.prevent="goToPreviousImage"
      >
        <FontAwesomeIcon
          icon="angle-left"
          size="2x"
        />
      </button>

      <AppCard
        class="app-img-gallery__selected-image w-full"
        padding
        rounded
        @click.prevent.stop
      >
        <NuxtImg
          :src="selectedImage.img"
          class="block w-full"
          sizes="sm:100vw md:960px"
          :alt="`${selectedImage.alt} screenshot`"
          format="webp"
        />
      </AppCard>

      <button
        class="app-img-gallery__next lg:absolute top-0 w-12 lg:h-full items-center justify-center hover:bg-gray-800 transition-colors"
        :class="{
          'opacity-25 cursor-not-allowed': !showNextArrow,
          'opacity-75': showNextArrow
        }"
        @click.stop.prevent="goToNextImage"
      >
        <FontAwesomeIcon
          icon="angle-right"
          size="2x"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  featuredImage: {
    type: [Boolean, Number],
    default: false
  },
  images: {
    type: Array,
    default: () => []
  }
})

const galleryImages = computed(() => {
  if (props.featuredImage) { return props.images.slice(1) }
  return props.images
})

const selectedImage = ref(null)

const selectedIndex = ref(null)

function keyupListener (event) {
  switch (event.key) {
    case ('ArrowLeft'):
      goToPreviousImage()
      break
    case ('ArrowRight'):
      goToNextImage()
      break
    case ('Escape'):
      hideSelectedImage()
      break
  }
}

function addKeyboardEventListener () {
  window.addEventListener('keyup', keyupListener)
}

function removeKeyboardEventListener () {
  window.removeEventListener('keyup', keyupListener)
}

function selectImage (image, index) {
  selectedIndex.value = index
  selectedImage.value = image
  addKeyboardEventListener()
}

function hideSelectedImage () {
  selectedImage.value = null
  removeKeyboardEventListener()
}

const showPreviousArrow = computed(() => {
  return selectedIndex.value > 0
})

function goToPreviousImage () {
  if (selectedIndex.value === 0) { return }
  selectedIndex.value--
  selectedImage.value = props.images[selectedIndex.value]
}

const showNextArrow = computed(() => {
  return selectedIndex.value < props.images.length - 1
})

function goToNextImage () {
  if (selectedIndex.value === props.images.length - 1) { return }
  selectedIndex.value++
  selectedImage.value = props.images[selectedIndex.value]
}
</script>

<style lang="postcss" scoped>
.app-img-gallery {
  &__dialog {
    background-color: rgba(0, 0, 0, 0.9);
  }

  &__dialog-content {
    width: 100%;
    max-width: 960px;
  }

  &__prev {
    @screen md {
      left: -48px;
    }
  }

  &__next {
    @screen md {
      right: -48px;
    }
  }
}
</style>
