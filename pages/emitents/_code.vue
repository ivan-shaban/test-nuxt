<template>
  <div>
    <p>{{ emitentData }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({
    params,
    payload,
    $axios
  }) {
    if (payload) {
      return { emitent: payload }
    } else {
      const emitent = await $axios.$get(`/api/emitents/${params.code}`)
      return { emitent }
    }
  },
  computed: {
    emitentData () {
      return JSON.stringify(this.emitent, null, 4)
    }
  }
}
</script>
