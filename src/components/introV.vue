<script>
export default {
  data() {
    return {
      searchItems: [
        { icon: `search-outline`, type: `text`, name: `Job title & keyword` },
        { icon: `location-outline`, type: `text`, name: `All location` },
        { icon: `folder-outline`, type: `text`, name: `All categories` },
        { type: `text`, name: `Clear` }
      ],
      populationItems: [
        { icon: `locate-outline`, number: `1200+`, text: `Available Jobs` },
        { icon: `people-outline`, iconCls: `file`, number: `650+`, text: `Employers` },
        { icon: `newspaper-outline`, number: `1500+`, text: `CV's & Resumes` }
      ]
    }
  }
}
</script>

<template>
  <div class="homeBox">
    <div class="homeText">
      <h1>Over <span>1200+</span> jobs are waiting for you</h1>
    </div>
    <div class="search">
      <form>
        <div v-for="searchItem in searchItems" :key="searchItem">
          <ion-icon :name="searchItem.icon" :class="searchItem.iconCls"></ion-icon>
          <input :type="searchItem.type" :name="searchItem.name" :placeholder="searchItem.name" />
        </div>
        <div>
          <input type="submit" name="Search" placeholder="Search" value="Search" />
        </div>
      </form>
    </div>
    <div class="popularSearch">
      <p>Popular Searches: <span>Designer, Developer, Senior Engineer</span></p>
    </div>
    <div class="population">
      <div class="populaBox" v-for="populationItem in populationItems" :key="populationItem">
        <div class="icon">
          <ion-icon :name="populationItem.icon"></ion-icon>
        </div>
        <div>
          <h2>{{ populationItem.number }}</h2>
          <p>{{ populationItem.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="less" lang="less">
@import '../assets/index';
</style>
