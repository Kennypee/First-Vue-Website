<template>
  <div id="nav" class="navbar is-dark">
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span>Home</span>
        </router-link>
        <router-link to="/about" class="navbar-item">
          <span class="icon">
            <i class="fas fa-info-circle"></i>
          </span>
          <span>About</span>
        </router-link>
        <router-link to="/books" class="navbar-item">
          <span class="icon">
            <i class="fas fa-book"></i>
          </span>
          <span>Books</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteNav",
  components: {}
};
</script>

