<template>
  <div class="tabs">
	<div v-if="answerId">
		<Answer :answerId="answerId"/>
		<br>
		<span style="color: red; font-size: 20px;" @click="closeAnswerPopup">X</span>
    </div>
    <input type="button" @click="changeTab()">
    <div v-for="answer in answers" v-bind:key="answer.id">
		<div class="answer" @click="answerPopup(answer.id)">
			{{answer}}
		</div>  <br><hr><hr>
    </div>
    <div v-if="isUserAnswersTab">

    <InfiniteLoading @infinite="fetchAnswers" :identifier="userId" /></div>
    <div v-else><InfiniteLoading @infinite="fetchLikedAnswers" identifier="liked" /></div>

  </div>
    
</template>

<script>
import { RepositoryFactory } from '../../repositories/RepositoryFactory'
import InfiniteLoading from 'vue-infinite-loading'
import Answer from '../Answer.vue'
const AnswerRepository = RepositoryFactory.get('answers')


export default {
	props: ['user-id'],
	components: {
		InfiniteLoading,
		Answer
	},
	data() {
		return {
			is_loading: true,
			tab: 1,
			answers: [],
			offset: 0,
			answerId: 0
		}
	},
	methods: {
		changeTab () {
			if (this.tab == 1) {
				this.tab = 2
			} else {
				this.tab = 1
			}
			this.offset = 0 
			this.answers = []
		},
		answerPopup (answerId) {
			window.history.pushState({urlPath:'/answer/' + answerId},"",'/answer/' + answerId)
			this.answerId = answerId
		},
		closeAnswerPopup () {
			this.answerId = 0 
			window.history.back()
		},
		fetchAnswers ($state) {

			AnswerRepository.getUserAnswers(this.userId, this.answerLastId)
				.then((response) => {
					var answers = response.data
					if(answers.length) {
						this.answers = this.answers.concat(answers)
						$state.loaded()
					} else {
						$state.complete()
					}
					
				})
				.catch(() => {
					$state.complete()
				})
		},
		fetchLikedAnswers ($state) {

			AnswerRepository.getUserLikedAnswers(this.userId , this.offset)
				.then((response) => {
					var answers = response.data
					if(answers.length) {
						this.answers = this.answers.concat(answers)
						$state.loaded()
					} else {
						$state.complete()
					}
					this.offset++
				})
				.catch(() => {
					$state.complete()
				})

		}
	},
	computed: {
		isUserAnswersTab() {
			return this.tab == 1
		},
		answerLastId() {
			var answer = this.answers[this.answers.length - 1];
			if(answer) {
				return answer.id
			}
			return 0
		},
	
	}
  
}
</script>
<style>

</style>
