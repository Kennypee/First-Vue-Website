
<template>
  <div>
    <Hero 
    title="Here are more details about our books" 
    subtitle="You can Visit The Book Site to find out more" 
    color="is-info" />
    <br>
    <div id="cards" class="card">
      <header class="card-header">
        <p class="card-header-title">Authored by {{this.author[0]}}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <h4 class="strong">This Book "{{this.bookId}}" is published by {{this.publisher}} at {{this.releaseDate}}</h4>
          <h4>Pages: {{this.pages}}</h4>
          <br />
          <h4>Country Of Origin: {{this.country}}</h4>
          <br />
          <h4>Book ISBN: {{this.isbn}}</h4>
          <br />
        </div>
      </div>
      <footer class="card-footer">
        <a :href="this.url" class="card-footer-item">Visit Book Site</a>
      </footer>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero";
export default {

  props: ["bookId", "country", "publisher", "isbn", "releaseDate", "url", "pages", "author"],
  components: { Hero },
};
</script>
<style lang="scss" scoped>
#cards {
  max-width: 400px;
  margin: 0 auto;
}
</style>