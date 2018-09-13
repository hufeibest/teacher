<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎:{{name}}</div>
   <!-- <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getIdentity } from '@/utils/auth'
export default {
  name: 'dashboard',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  mounted() {
    this.name = getIdentity()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
