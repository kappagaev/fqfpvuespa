<template>
  <div class="tabs">
    <div v-for="comment in comments" v-bind:key="comment.id">
		{{comment}}
    </div>
    <InfiniteLoading @infinite="fetchComments" :identifier="answerId" />
  </div>
    
</template>

<script>
import { RepositoryFactory } from '../../repositories/RepositoryFactory'
import InfiniteLoading from 'vue-infinite-loading'
const CommentRepository = RepositoryFactory.get('comments')


export default {
	props: ['answer-id'],
	components: {
		InfiniteLoading
	},
	data() {
		return {
			comments: []
		}
	},
	methods: {
		fetchComments ($state) {

			CommentRepository.getAnswerComments(this.answerId, this.commentLastId)
				.then((response) => {
					var comments = response.data
					if(comments.length) {
						this.comments = this.comments.concat(comments)
						$state.loaded()
					} else {
						$state.complete()
					}
					
				})
				.catch(() => {
					$state.complete()
				})
		}
	},
	computed: {
		commentLastId() {
			var comment = this.comments[this.comments.length - 1];
			if(comment) {
				return comment.id
			}
			return 0
		},
	
	}
  
}
</script>
<style>

</style>
