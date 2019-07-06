<template>
  <div class="home">
    <Hero title="Welcome to your first vue website"
    subtitle="Hope you've had fun building along"
    size="is-fullheight"
    color="is-info"/>
  </div>
</template>

<script>
import Hero from "../components/Hero"
export default {
  name: "home",
  components: {
    Hero
  }
};
</script>
