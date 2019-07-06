<template>
  <div class="books">
    <Hero title="The Books In Our Collection" subtitle="Knowledge is power" color="is-warning" />
    <div class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-2" v-for="book in books" :key="book.isbn">
            <div id="cards" class="card">
              <div class="card-content">
                <h2>{{ book.name }}</h2>
                <router-link
                  :to="{ name: 'details', params: { 
                    bookId: book.name, 
                    country: book.country, 
                    isbn: book.isbn, 
                    releaseDate:book.released, 
                    publisher:book.publisher, 
                    pages:book.numberOfPages, 
                    author:book.authors }}"
                >View Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero";
export default {
  components: {
    Hero
  },
  data() {
    return {
      books: null
    };
  },
  mounted() {
    fetch("https://anapioficeandfire.com/api/books")
      .then(resp => resp.json()) // unwrap the fetch response
      .then(data => {
        this.books = data;
      });
  }
};
</script>

<style lang="scss" scoped>
#cards {
  max-height: 150px;
  min-height: 150px;
  margin: 0 auto;
}
</style>