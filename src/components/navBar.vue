<script>
export default {
  data() {
    return {
      // nav bar content
      navItems: [
        { page: 'Home', link: `/` },
        { page: 'Find jobs', link: `/findjobs` },
        { page: 'Companies', link: `/companies` },
        { page: 'Pages', link: `/pages` },
        { page: 'Blog', link: `/blog` }
      ],
      // toggle
      show: false,
      // nav right side
      loginItems: [
        { page: 'Login / Signup', link: `/` },
        { page: 'Post a job', link: `/` }
      ]
    }
  }
}
</script>

<template>
  <!-- info -->
  <div class="infoNav">
    <nav>
      <ion-icon name="alert-circle-outline"></ion-icon>
      <p>Become searchable by top companies in your domain. Learn more</p>
      <ul class="infoList">
        <li class="infoListContent">
          <a href="tel:8465854332"><ion-icon name="call-outline"></ion-icon> +84-65854332</a>
        </li>
        <li class="infoListContent">
          <a href="mailto:info@gmail.com"
            ><ion-icon name="mail-outline"></ion-icon>info@gmail.com</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <!-- nav menu  -->
  <div class="navBarMenu">
    <nav>
      <div class="logo"></div>
      <div class="toggleIcon">
        <ion-icon @click="show = !show" name="menu-outline"></ion-icon>
      </div>
      <div class="navMenu">
        <ul>
          <li v-for="navItem in navItems" :key="navItem">
            <RouterLink :to="navItem.link"
              >{{ navItem.page }} <ion-icon name="chevron-down-outline"></ion-icon
            ></RouterLink>
          </li>
        </ul>
      </div>
      <div class="loginBtn">
        <ul>
          <li v-for="loginItem in loginItems" :key="loginItem">
            <RouterLink :to="loginItem.link"> {{ loginItem.page }} </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
    <!-- toggle menu bar  -->
    <div v-show="show" class="toggleMenu">
      <ul>
        <li v-for="navItem in navItems" :key="navItem">
          <RouterLink :to="navItem.link"
            >{{ navItem.page }} <ion-icon name="chevron-down-outline"></ion-icon
          ></RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style type="less" lang="less">
@import '../assets/navBar.less';
</style>
