<script setup lang="ts">
/**
 * I18nHost is a component that sets up the i18n context for its children
 * as well as counter and language providers.
 */

import { useCounter, useLanguage } from '@/composables'
import { i18nInit } from '@/i18n/i18nInit'
import { provide, watchEffect } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'

const language = useLanguage()
const counter = useCounter()

const i18n = i18nInit()

/**
 * Provide the following data to the child components:
 * - `i18n`: the i18n instance
 * - `language`: the current language object
 * - `counter`: the counter object
 */
provide(I18nInjectionKey, i18n)
provide('language', language)
provide('counter', counter)

watchEffect(() => {
	// Update the i18n locale when the language changes.
	i18n.global.locale.value = language.locale.value
})
</script>

<template>
	<div class="wrapper">
		<slot />
	</div>
</template>

<style scoped>
@import url('@/tailwind.css');
</style>
