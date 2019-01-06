<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">
      roles:
      <span v-if="roles.includes('superAdmin')">超级管理员</span>
      <span v-else-if="roles.includes('admin')">管理员</span>
      <span v-else-if="roles.includes('user')">普通用户</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles',
      'token'
    ])
  },
  mounted() {
    
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
