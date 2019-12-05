<template>
  <div class="answer">
	{{ answer }}
	<br>
    <Comments :answerId="id" />
  </div>
</template>

<script>
import { RepositoryFactory } from '../repositories/RepositoryFactory'
const AnswerRepository = RepositoryFactory.get('answers')

import Comments from './Answer/Comments.vue'
export default {
	props: ['id'],
	data() {
		return {
			answer: {},
			is_loading: false
		}
	},
	methods: {
		async fetch () {
			this.is_loading = true
			this.answer = await AnswerRepository.getSingle(this.id).then(responce => {
				return responce.data
			})
			this.is_loading = false
		}
	},
	components: {
		Comments
	},
	created() {
		this.fetch()
	}
}
</script>

