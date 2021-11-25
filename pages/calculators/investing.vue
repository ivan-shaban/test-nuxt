<template>
  <div>
    <h3>ИНВЕСТИЦИОННЫЙ КАЛЕНДАРЬ</h3>
    <hr>
    <div>
      <Settings />
      <hr>
      <Table />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Settings from '~/components/inversting/calculator/Settings.vue'
import Table from '~/components/inversting/calculator/Table.vue'

export default Vue.extend({
  name: 'InvestingCalculatorPage',
  components: {
    Table,
    Settings
  },
  mounted () {
    this.$store.dispatch('investing/loadData')
  }
})
</script>
