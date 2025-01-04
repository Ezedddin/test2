<script setup lang="ts">
import Hero from "@/components/hero.vue";
import Service from "@/components/Service.vue";
import Review from "@/components/reviews.vue";
import FooterText from "@/components/footer.vue";
import BeforeAfter from "@/components/before-after.vue";

</script>

<template>

  <hero></hero>
  <BeforeAfter />

  <section id="service">
  <Service></Service>
  </section>

<!--  <Review></Review>-->

  <footer>
    <FooterText></FooterText>
  </footer>
</template>

<style>

#service {
  margin-bottom: 110px;
}

</style>
