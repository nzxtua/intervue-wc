import { ref } from 'vue'
import type { Locale } from 'vue-i18n'

export const useLanguage = () => {
	const locale = ref<Locale>('fr')
	const setLanguage = (value: Locale) => (locale.value = value)

	return {
		locale,
		setLanguage,
	}
}

export type TUseLanguage = ReturnType<typeof useLanguage>
