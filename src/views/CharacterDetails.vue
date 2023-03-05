<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'

import useCharacters from '@/composables/useCharacters'

const route = useRoute()
const { fetchCharacter, currentCharacter } = useCharacters()

onMounted(async () => {
  await fetchCharacter(route.params.id)
})

onUnmounted(() => {
  currentCharacter.value = (null)
})

</script>

<template>
  <main 
    class="min-h-screen  bg-gradient-to-b from-black to-purple-900 py-8">
    <div v-if="currentCharacter" class="flex flex-col items-center justify-center gap-6 ">
      <img :src="currentCharacter.imageUrl" :alt="currentCharacter.name" />
      <h1 class="text-6xl font-bolder text-white">
        Hi, I'm {{ currentCharacter.name }}
      </h1>
      <pre class="text-white">{{ currentCharacter }}</pre>
    </div>
  </main>
</template>
