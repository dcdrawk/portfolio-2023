<template>
  <AppSection id="websites">
    <template #title>
      Websites
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <nuxt-link
        v-for="(website, index) in websites"
        :key="index"
        :to="website.path"
      >
        <AppImageCard
          :title="website.title"
          :subtitle="website.subtitle"
          :img="website.img"
          :img-top="website.imgTop"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="experience.body" />
        </AppImageCard>
      </nuxt-link>
    </div>
  </AppSection>
</template>

<script setup>
const websites = reactive([{
  title: 'Canada Drives (Ecommerce Shop)',
  subtitle: 'Purchase or finance a vehicle from any device',
  img: '/img/websites/canada-drives/cd-shop.jpg',
  path: '/websites/canada-drives-shop'
}, {
  title: 'Canada Drives',
  subtitle: 'Canadian Car Loans',
  img: '/img/websites/canada-drives/cd-website.jpg',
  path: '/websites/canada-drives'
}, {
  title: 'Spring Financial',
  subtitle: 'Personal Loans & Mortgages',
  img: '/img/websites/canada-drives/spring.jpg',
  path: '/websites/spring-financial'
}, {
  title: 'USA Drives',
  subtitle: 'USA Car Loans',
  img: '/img/websites/canada-drives/usa-drives.jpg',
  path: '/websites/usa-drives'
}, {
  title: 'Fresh Start',
  subtitle: 'Online Personal Loans',
  img: '/img/websites/canada-drives/fsf.jpg',
  path: '/websites/freshstart-finance'
}, {
  title: 'Freedom Car Credit',
  subtitle: 'UK Car Loans',
  img: '/img/websites/canada-drives/freedom.jpg',
  path: '/websites/freedom-car-credit'
}, {
  title: 'Canadian Lymphedema Framework',
  subtitle: 'Lymphedema Education',
  img: '/img/websites/clf/clf.jpg',
  path: '/websites/clf'
}, {
  title: 'Fitlight',
  subtitle: 'Agility Training Products',
  img: '/img/websites/fitlight/fitlight.jpg',
  path: '/websites/fitlight'
}, {
  title: 'Gold Standard Physio',
  subtitle: 'Physiotherapy',
  img: '/img/websites/gold-standard/gold-standard.jpg',
  path: '/websites/gold-standard-physio'
}])
</script>
