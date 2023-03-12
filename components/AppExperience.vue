<template>
  <AppCard
    padding="py-4 px-4 border border-gray-300 dark:border-gray-700"
  >
    <h3 class="text-xl font-semibold mb-2 dark:text-white transition-colors duration-500">
      {{ title }}
    </h3>

    <p class="mb-2 font-semibold dark:text-gray-200 transition-colors duration-500">
      {{ company }} <span class="text-gray-400">({{ startDate }} - {{ endDate }})</span>
    </p>

    <div
      ref="slot"
      class="slot-container"
    >
      <div
        class="slot-text dark:text-white transition-colors duration-500"
      >
        <slot
          class="slot"
        />
      </div>
    </div>

    <div
      v-if="collapsible"
      class="text-center mt-2 py-2 shadow-inner cursor-pointer bg-gray-100 z-0 relative"
      @click="toggleExperience"
    >
      {{ iconText }}
      <FontAwesomeIcon
        class="icon"
        :class="iconClass"
        :icon="['fas', 'chevron-down']"
      />
    </div>
  </AppCard>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },

  company: {
    type: String,
    default: ''
  },

  startDate: {
    type: String,
    default: ''
  },

  collapsible: {
    type: Boolean,
    default: false
  },

  endDate: {
    type: String,
    default: 'Present'
  },

  isOpen: {
    type: Boolean,
    default: true
  }
})

defineEmits(['toggle'])

const slot = ref(null)

function toggleExperience () {
  context.emit('toggle')
  const height = slot.value.scrollHeight
  slotStyle.value.height = props.isOpen ? '0px' : `${height}px`
}

const slotStyle = ref(props.collapsible ? { height: '0px' } : null)
</script>

<style scoped>
.open {
  opacity: 1;
}

.closed {
  opacity: 0;
}

.icon-up {
  transform: rotate(180deg);
}

.icon-down {
  transform: rotate(0deg);
}

.slot-container {
  transition: height 0.35s ease-out;
  will-change: height;
}
</style>
