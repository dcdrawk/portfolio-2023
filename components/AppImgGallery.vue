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
      <picture>
        <source
          :srcSet="images[0].imgWebp.srcSet"
          sizes="(min-width: 1280px) 837px, (min-width: 1100px) 645px, (min-width: 780px) calc(54vw + 62px), calc(100vw - 32px)"
          type="image/webp"
        >
        <img
          sizes="(min-width: 1280px) 837px, (min-width: 1100px) 645px, (min-width: 780px) calc(54vw + 62px), calc(100vw - 32px)"
          :src="images[0].img.src"
          :srcSet="images[0].img.srcSet"
          :width="images[0].img.width"
          :height="images[0].img.height"
          class="block w-full"
        >
      </picture>
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
      <picture>
        <source
          :srcSet="imageObject.imgWebp.srcSet"
          sizes="(min-width: 1280px) 205px, (min-width: 1080px) 157px, (min-width: 780px) calc(14.29vw + 6px), calc(50vw - 24px)"
          type="image/webp"
        >
        <img
          :src="imageObject.img.src"
          :srcSet="imageObject.img.srcSet"
          :width="imageObject.img.width"
          :height="imageObject.img.height"
          sizes="(min-width: 1280px) 205px, (min-width: 1080px) 157px, (min-width: 780px) calc(14.29vw + 6px), calc(50vw - 24px)"
          class="block w-full"
          :alt="`${imageObject.alt} thumbnail`"
        >
      </picture>
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
        <picture>
          <source
            :srcSet="selectedImage.imgWebp.srcSet"
            type="image/webp"
          >
          <img
            :src="selectedImage.img.src"
            :srcSet="selectedImage.img.srcSet"
            :width="selectedImage.img.width"
            :height="selectedImage.img.height"
            sizes="(min-width: 800px) 800px, 100vw"
            class="block w-full"
          >
        </picture>
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

<script>
import { computed, ref } from 'vue'

export default {
  // Name
  name: 'AppImgGallery',

  // Props
  props: {
    featuredImage: {
      type: [Boolean, Number],
      default: false
    },
    images: {
      type: Array,
      default: () => []
    }
  },

  // Setup
  setup (props, context) {
    const galleryImages = computed(() => {
      if (props.featuredImage) return props.images.slice(1)
      return props.images
    })

    const selectedImage = ref(null)
    const selectedIndex = ref(null)

    // function escapeKeyHandler (event) {
    //   if (event.key === 'Escape') {
    //     hideSelectedImage()
    //   }
    // }

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
      // window.addEventListener('keyup', escapeKeyHandler)
    }

    function hideSelectedImage () {
      selectedImage.value = null
      removeKeyboardEventListener()
      // window.removeEventListener('keyup', escapeKeyHandler)
    }

    const showPreviousArrow = computed(() => {
      return selectedIndex.value > 0
    })

    function goToPreviousImage () {
      if (selectedIndex.value === 0) return

      selectedIndex.value--
      selectedImage.value = props.images[selectedIndex.value]
    }

    const showNextArrow = computed(() => {
      return selectedIndex.value < props.images.length - 1
    })

    function goToNextImage () {
      if (selectedIndex.value === props.images.length - 1) return

      selectedIndex.value++
      selectedImage.value = props.images[selectedIndex.value]
    }

    return {
      galleryImages,
      selectedImage,
      selectImage,
      hideSelectedImage,
      showPreviousArrow,
      goToPreviousImage,
      showNextArrow,
      goToNextImage
    }
  }
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
