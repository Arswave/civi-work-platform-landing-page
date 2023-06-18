<script>
export default {
	data() {
		return {
			fSideListItems: [
				{listOne: 'Contrary to popular belief'},
				{listOne: 'It is a long established fact that a reader'},
				{listOne: 'Many desktop publishing packages'}
			],
			sSideListItems: [
				{listTwo: 'There are many variations of passages'},
				{listTwo: 'Lorem Ipsum is simply dummy text'},
				{listTwo: 'It has survived not only five centuries'}
			]
		}
	}
}
</script>
<template>
  <div class="register">
    <div class="registerBox">
      <div class="leftSide">
      <h4>Post jobs Free</h4>
      <ul>
        <li v-for="fSideList in fSideListItems" :key="fSideList">
          {{ fSideList.listOne }}
        </li>
      </ul>
      <div class="sBtn">
        <RouterLink to="/">Post jobs Free</RouterLink>
      </div>
    </div>
    <div class="rightSide">
      <h4>Register for Candidate</h4>
      <ul>
        <li v-for="sSideList in sSideListItems" :key="sSideList">
          {{ sSideList.listTwo }}
        </li>
      </ul>
      <div class="sBtn">
        <RouterLink to="/">Post a resume today</RouterLink>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="less" type="less">
  @import '../assets/index-3';
</style>