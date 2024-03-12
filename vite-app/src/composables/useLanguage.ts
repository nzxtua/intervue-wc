import { ref } from 'vue'

export const useLanguage = () => {
	const locale = ref('fr')
	const setLanguage = (value: string) => (locale.value = value)

	return {
		locale,
		setLanguage,
	}
}

export type TUseLanguage = ReturnType<typeof useLanguage>
