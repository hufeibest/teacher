<template>
  <div class="dashboard-container">
    <div class="dashboard-text">园区</div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      name: '123'
    }
  },
  mounted() {
  },
  methods: {
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
