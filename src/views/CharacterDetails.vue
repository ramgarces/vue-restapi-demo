<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

import useCharacters from '@/composables/useCharacters'

const route = useRoute()
const { fetchCharacter, currentCharacter } = useCharacters()

onMounted(async () => {
  await fetchCharacter(route.params.id)
})


</script>

<template>
  <main 
    v-if="currentCharacter" 
    class="flex flex-col gap-6 min-h-screen items-center justify-center bg-gradient-to-b from-black to-purple-900">
    <img :src="currentCharacter.imageUrl" :alt="currentCharacter.name" />
    <h1 class="text-6xl font-bolder text-white">
      Hi, I'm {{ currentCharacter.name }}
    </h1>
    <pre class="text-white">{{ currentCharacter }}</pre>
  </main>
</template>
