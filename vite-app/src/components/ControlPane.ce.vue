<script setup lang="ts">
import type { TUseCounter } from '@/composables'
import { Ti18n } from '@/i18n/i18nInit'
import { inject } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'

const { t } = inject<Ti18n>(I18nInjectionKey)!.global

const { reset } = inject<TUseCounter>('counter')!
</script>

<template>
	<div class="card">
		<h3>{{ t('controlPane.title') }}</h3>

		<button id="reset-button" type="button" @click="reset">
			{{ t('controlPane.reset') }}
		</button>
	</div>
</template>

<style scoped>
@import url('@/tilewind.css');
</style>
