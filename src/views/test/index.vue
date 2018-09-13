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
    cached(fn) {
      const cache = Object.create(null)
      return (function cached(str) {
        console.log(str)
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
      })
    }
  },
  created() {
    const idToTemplate = this.cached(id => {
      const el = 1254
      return el && 456
    })
    let id = idToTemplate(4678)
    console.log(id)
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
