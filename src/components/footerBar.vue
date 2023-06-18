<script>
export default {
  data() {
    return {
      companyItems: [
        { page: 'AboutUs', link: `/` },
        { page: 'Carrer', link: `/` },
        { page: 'Blogs', link: `/` },
        { page: "FAQ's", link: `/` },
        { page: 'Contact', link: `/` }
      ],
      serviceItems: [
        { page: 'Jobs', link: `/` },
        { page: 'Companies', link: `/` },
        { page: 'Employers', link: `/` },
        { page: 'Pricing', link: `/` },
        { page: 'partner', link: `/` }
      ],
      supportItems: [
        { page: 'Privacy Policy', link: `/` },
        { page: 'Terms of Use', link: `/` },
        { page: 'Help center', link: `/` },
        { page: 'Updates', link: `/` },
        { page: 'Documentation', link: `/` }
      ],
      contactItems: [
        { icon: 'logo-linkedin', media: 'Linkedin', link: `/` },
        { icon: 'logo-twitter', media: 'Twitter', link: `/` },
        { icon: 'logo-facebook', media: 'Facebook', link: `/` },
        { icon: 'logo-instagram', media: 'İnstagram', link: `/` },
        { icon: 'logo-youtube', media: 'Youtube', link: `/` }
      ]
    }
  }
}
</script>
<template>
  <footer>
    <!-- subscribe -->
    <div class="image">
      <ion-icon name="mail-open-outline"></ion-icon>
    </div>
    <div class="subH">
      <h2>Subscribe to our newsletter</h2>
      <span>We'll keep you updated with the best new jobs.</span>
    </div>
    <div class="input">
      <input type="email" placeholder="Enter your email" />
      <input type="submit" value="Subscribe" />
    </div>
    <!-- info navbar  -->
    <div class="footer">
      <div class="navFooter">
        <!-- about -->
        <div class="aboutInfo">
          <div class="about">
            <h4>About Us</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Quos earum mollitia minima
              ab dolore cum, totam neque praesentium, id magni repellendus labore eveniet rerum
              distinctio eum ipsam, aliquam qui quod.
            </p>
          </div>
          <!-- info  -->
          <div class="info">
            <div>
              <a href="tel:90723445793">T. +90723445793</a>
            </div>
            <div>
              <a href="tel:info@example.com">E. info@example.com</a>
            </div>
          </div>
        </div>
        <!-- routers  -->
        <div class="companies">
          <h4>Company</h4>
          <ul>
            <li v-for="companyItem in companyItems" :key="companyItem">
              <RouterLink :to="companyItem.link">{{ companyItem.page }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="services">
          <h4>Services</h4>
          <ul>
            <li v-for="serviceItem in serviceItems" :key="serviceItem">
              <RouterLink :to="serviceItem.link">{{ serviceItem.page }}</RouterLink>
            </li>
          </ul>
        </div>
        <!-- contact media  -->
        <div class="contact">
          <h4>Contact</h4>
          <ul>
            <li v-for="contactItem in contactItems" :key="contactItem">
              <ion-icon :name="contactItem.icon"></ion-icon>
              <RouterLink :to="contactItem.link">{{ contactItem.media }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- copyright  -->
      <div class="copy">
        <p>&copy 2022 morfiux. All Right Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="less" type="less">
@import '../assets/footer';
</style>
