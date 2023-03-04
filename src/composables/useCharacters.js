import { ref } from 'vue'

const characters = ref([])

const useCharacters = () => {
    const fetchCharacters = () => {
        for (let index = 0; index < 2; index++) {
            characters.value.push({
                _id: characters.value.length,
                name: `Character ${characters.value.length}`,
                imageUrl: 'https://via.placeholder.com/400X800',
            })
        }
    }
    return { characters, fetchCharacters }
}

export default useCharacters