import { createI18n } from 'vue-i18n'
import * as messages from './locale'

export const i18n = createI18n<false>({
	legacy: false,
	locale: 'fr',
	fallbackLocale: 'en',
	messages,
})

export type Ti18n = typeof i18n
