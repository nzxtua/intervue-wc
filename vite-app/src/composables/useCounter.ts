import { ref } from 'vue'

export const useCounter = () => {
	const count = ref(0)
	const increment = () => count.value++
	const decrement = () => count.value--
	const reset = () => (count.value = 0)

	return {
		count,
		reset,
		increment,
		decrement,
	}
}

export type TUseCounter = ReturnType<typeof useCounter>
