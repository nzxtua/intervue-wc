import { ref } from 'vue'

const locale = ref('en')

export const useLanguage = () => {
	const setLanguage = (value: string) => (locale.value = value)

	return {
		locale,
		setLanguage,
	}
}

export type TUseLanguage = ReturnType<typeof useLanguage>
