<script>
export default {
  data() {
    return {
      sponsorItems: [
        {
          foto: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png`,
          alt: `stripe`
        },
        {
          foto: `https://cdn.freebiesupply.com/logos/large/2x/upwork-logo-png-transparent.png`,
          alt: `upwork`
        },
        {
          foto: `https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f1fcfd6d1353830d59d5d_6022ed55436bd981af77f1c8_SngeVWxItd1_wR-Uxkx2eQJGvXI1031yScbs42ZCEMD9vulK5smzUhpnrOO3lYNjEkIgked9LuCL_Pr6hnKSm42fNFg4MiWvyVQ5V_lE7CHxIG7GvlLg0QXIlRYRyeItjJf5yymm.png`,
          alt: `webflov`
        },
        {
          foto: `https://logos-download.com/wp-content/uploads/2022/01/Attentive_Logo.png`,
          alt: `attentive`
        },
        {
          foto: `https://upload.wikimedia.org/wikipedia/commons/9/9e/Coinbase.png`,
          alt: `coinbase`
        },
        {
          foto: `https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png`,
          alt: `shopify`
        }
      ],

      jobItems: [
        {
          pImage: `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`,
          cardH: 'Software Team Leader',
          company: 'Webflow',
          job: 'Design',
          location: 'Chicago',
          cost: '$450 - $500 / month',
          date: '2'
        },
        {
          pImage: `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`,
          cardH: 'Software Team Leader',
          company: 'Webflow',
          job: 'Design',
          location: 'Chicago',
          cost: '$450 - $500 / month',
          date: '2'
        },
        {
          pImage: `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`,
          cardH: 'Software Team Leader',
          company: 'Webflow',
          job: 'Design',
          location: 'Chicago',
          cost: '$450 - $500 / month',
          date: '2'
        }
      ]
    }
  }
}
</script>
<template>
  <div class="featureJob">
    <div class="text">
      <p>Trusted by 5,000 companies around the world</p>
    </div>
    <div class="sponsor">
      <div v-for="sponsorItem in sponsorItems" :key="sponsorItem">
        <img :src="sponsorItem.foto" :alt="sponsorItem.alt" />
      </div>
    </div>

    <div class="headerJob">
      <p>FEATURED JOBS</p>
      <br />
      <h2>50k+ jobs for you to explore</h2>
    </div>
    <div class="jobCards">
      <div class="cardBox" v-for="jobItem in jobItems" :key="jobItem">
        <div class="profileH">
          <img :src="jobItem.pImage" alt="pp" />
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="star"></ion-icon>
        </div>
        <div class="cardH">
          <h2>{{ jobItem.cardH }}</h2>
          <p>
            by <b> {{ jobItem.company }} </b> in <span> {{ jobItem.job }} </span>
          </p>
        </div>
        <div class="category">
          <div class="time"><p>Fulltime</p></div>
          <div class="location">
            <p>
              <ion-icon name="location-outline"></ion-icon>

              {{ jobItem.location }}
            </p>
          </div>
          <div class="cost">
            <p>
              <ion-icon name="cash-outline"></ion-icon>
              {{ jobItem.cost }}
            </p>
          </div>
        </div>
        <div class="date">
          <p>
            <span> {{ jobItem.date }} </span> days left to apply
          </p>
        </div>
      </div>
    </div>
    <div class="viewJob">
      <a href="/"> View all jobs </a>
    </div>
  </div>
</template>

<style type="less" lang="less">
@import '../assets/index-2';
</style>
