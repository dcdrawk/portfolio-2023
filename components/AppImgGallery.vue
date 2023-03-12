<template>
  <!-- Featured Image -->
  <div
    v-if="featuredImage"
    class="flex-grow-0 w-full md:w-2/3 md:pr-4 mb-2"
  >
    <AppCard
      padding
      class="cursor-pointer"
      @click="selectImage(images[0], 0)"
    >
      <NuxtImg
        :src="images[0]?.img"
        class="block w-full"
        format="webp"
        width="837"
        height="470"
        :alt="images[0]?.alt"
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
      class="inline-block cursor-pointer"
      @click="selectImage(imageObject, index + 1)"
    >
      <NuxtImg
        :src="imageObject.img"
        class="block w-full"
        :alt="`${imageObject.alt} thumbnail`"
        width="200"
        sizes="sm:350px md:160px"
        format="webp"
      />
    </AppCard>
  </div>

  <!-- Selected Image (Dialog) -->
  <Transition name="gallery" @after-leave="handleDialogLeave" @enter="transitionName = ''">
    <div
      v-show="showDialog"
      class="app-img-gallery__dialog fixed top-0 right-0 left-0 bottom-0 z-20 flex items-center justify-center select-none text-white transition-all duration-300"
      @click="hideSelectedImage"
      @keydown.esc="selectedImage = null"
    >
      <div class="app-img-gallery__dialog-content relative flex overflow-hidden px-12 max-h-[540px] transition-all duration-300 delay-150">
        <button
          class="app-img-gallery__prev lg:absolute w-12 lg:h-full items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
          :class="{
            'opacity-25 cursor-not-allowed !hover:bg-gray-800': !showPreviousArrow,
            'opacity-75': showPreviousArrow
          }"
          aria-label="previous image"
          @click.stop.prevent="goToPreviousImage"
        >
          <FontAwesomeIcon
            icon="angle-left"
            size="2x"
          />
        </button>

        <AppCard
          class="app-img-gallery__selected-image max-w-[960px] relative"
          padding
          rounded
          @click.prevent.stop
        >
          <template
            v-for="(imageObject, index) in images"
            :key="`screen-${index}`"
          >
            <Transition :name="transitionName">
              <NuxtImg
                v-show="imageObject.img === selectedImage?.img"
                :key="`screen-${index}`"
                :src="imageObject.img"
                class="app-img-gallery__screen block w-full"
                width="960"
                height="540"
                loading="lazy"
                :alt="`${imageObject?.alt} screenshot`"
                format="webp"
              />
            </Transition>
          </template>
        </AppCard>

        <button
          class="app-img-gallery__next lg:absolute top-0 w-12 lg:h-full items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
          :class="{
            '!opacity-25 cursor-not-allowed !hover:bg-gray-800': !showNextArrow,
            'opacity-75': showNextArrow
          }"
          aria-label="previous image"
          @click.stop.prevent="goToNextImage"
        >
          <FontAwesomeIcon
            icon="angle-right"
            size="2x"
          />
        </button>
      </div>
    </div>
  </Transition>
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

const showDialog = ref(false)

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

async function selectImage (image, index) {
  selectedIndex.value = index
  selectedImage.value = image
  addKeyboardEventListener()
  await nextTick()
  showDialog.value = true
}

function hideSelectedImage () {
  showDialog.value = false
  // selectedImage.value = null
  removeKeyboardEventListener()
}

const showPreviousArrow = computed(() => {
  return selectedIndex.value > 0
})

const transitionName = ref('')

function goToPreviousImage () {
  if (selectedIndex.value === 0) { return }
  transitionName.value = 'slide-prev'
  selectedIndex.value--
  selectedImage.value = props.images[selectedIndex.value]
}

const showNextArrow = computed(() => {
  return selectedIndex.value < props.images.length - 1
})

function goToNextImage () {
  if (selectedIndex.value === props.images.length - 1) { return }
  transitionName.value = 'slide-next'
  selectedIndex.value++
  selectedImage.value = props.images[selectedIndex.value]
}

function handleDialogLeave () {
  console.log('LEEEEAAAVVE')
  // selectImage.value = null
  selectedImage.value = null
  transitionName.value = ''
}
</script>

<style lang="postcss" scoped>
.app-img-gallery {
  &__dialog {
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 1;
  }

  &__dialog-content {
    width: 100%;
    max-width: 1056px;
    transform: scale(1);
    opacity: 1;
  }

  &__prev {
    @screen md {
      left: 0px;
    }
  }

  &__next {
    @screen md {
      right: 0px;
    }
  }

  &__screen {
    @apply transition-all duration-300;
    transform: translateX(0px);
    opacity: 1;
  }
}

.slide-next-enter-from,
.slide-next-leave-to,
.slide-prev-enter-from,
.slide-prev-leave-to {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.slide-next-enter-from {
  transform: translateX(100px);
}

.slide-next-leave-to {
  z-index: 10;
  transform: translateX(-100px);
}

.slide-prev-enter-from {
  transform: translateX(-100px);
}

.slide-prev-leave-to {
  z-index: 10;
  transform: translateX(100px);
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;

  .app-img-gallery__dialog-content {
    transform: scale(0.8);
    opacity: 0;
  }
}

.gallery-leave-to {
  .app-img-gallery__dialog-content {
    transition-delay: 0ms;
  }
}
</style>
