<template>
  <div class="answer">
	{{ answer }}
	<br>
    <Comments :answerId="answerId" />
  </div>
</template>

<script>
import { RepositoryFactory } from '../repositories/RepositoryFactory'
const AnswerRepository = RepositoryFactory.get('answers')

import Comments from './Answer/Comments.vue'
export default {
	props: ['answerId'],
	data() {
		return {
			answer: {},
			is_loading: false
		}
	},
	methods: {
		async fetch () {
			this.is_loading = true
			this.answer = await AnswerRepository.getSingle(this.answerId).then(responce => {
				return responce.data
			})
			this.is_loading = false
		}
	},
	components: {
		Comments
	},
	watch: {
		answerId () {
			this.fetch()
		}
	},
	created() {
		this.fetch()
	}
}
</script>

