<script setup lang="ts">
import type { TUseCounter } from '@/composables'
import { Ti18n } from '@/i18n/i18nInit'
import { inject } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'

const { t } = inject<Ti18n>(I18nInjectionKey)!.global

const { increment, decrement } = inject<TUseCounter>('counter')!
</script>

<template>
	<div class="card">
		<h3>{{ t('controlButtons.title') }}</h3>

		<div class="row">
			<button id="plus-button" type="button" @click="increment">
				{{ t('controlButtons.increment') }}
			</button>
			{{ '/' }}
			<button id="minus-button" type="button" @click="decrement">
				{{ t('controlButtons.decrement') }}
			</button>
		</div>
	</div>
</template>

<style scoped>
@import url('@/tailwind.css');
</style>
