<template>
  <div class="about">
    <Hero 
    title="Here are our Team" 
    subtitle="We are just a small bunch" 
    color="is-warning" />
    <div class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-2" v-for="user in users" :key="user.login">
            <User :user="user" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../components/User";
import Hero from "../components/Hero";
export default {
  components: {
    User,
    Hero
  },
  data() {
    return {
      users: null
    };
  },

  mounted() {
    fetch("https://api.github.com/users?per_page=12")
      .then(resp => resp.json()) // unwrap the fetch response
      .then(data => {
        this.users = data;
      });
  }
};
</script>