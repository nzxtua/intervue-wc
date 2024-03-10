<script setup lang="ts">
import type { TUseLanguage } from '@/composables'
import { Ti18n } from '@/i18n/i18nInit'
import { inject } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'

const { t, locale, availableLocales } = inject<Ti18n>(I18nInjectionKey)!.global

const { setLanguage } = inject<TUseLanguage>('language')!

const onChangeLocale = (event: Event) => {
	const newValue = (event.target as HTMLSelectElement).value
	setLanguage(newValue)
}
</script>

<template>
	<div class="card">
		<h3>{{ t('localePicker.title') }}</h3>

		<form>
			<select id="locale-picker" :value="locale" @change="onChangeLocale">
				<option v-for="locale in availableLocales" :value="locale">
					{{ t(`localePicker.${locale}`) }}
				</option>
			</select>
		</form>
	</div>
</template>

<style scoped>
@import url('@/tilewind.css');
</style>
