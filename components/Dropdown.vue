<template>
  <div v-click-outside="close" v-global-esc="close" class="relative select-none text-sm">
    <div
      class="relative block px-4 py-2 text-white rounded-lg cursor-pointer hover:bg-indigo-500"
      @click="isOpen = !isOpen"
    >
      <span>{{ title }}</span>
    </div>
    <div v-if="isOpen" class="absolute z-10 mt-2 py-2 bg-white rounded-lg shadow-xl">
      <div
        v-for="item in content"
        :key="item.link.path"
        @click.stop="close"
      >
        <NuxtLink
          :to="item.link"
          class="block whitespace-nowrap px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >
          {{
            item.title
          }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    close () {
      this.isOpen = false
    }
  }
})
</script>
