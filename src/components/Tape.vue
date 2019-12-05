<template>
  <div class="tape">
    <div v-for="answer in answers" v-bind:key="answer.id">
    {{answer}} <br><hr><hr>
    </div>


    <InfiniteLoading @infinite="fetchAnswers"/>
 
  </div>
    
</template>

<script>
import { RepositoryFactory } from '../repositories/RepositoryFactory'
import InfiniteLoading from 'vue-infinite-loading'
const AnswerRepository = RepositoryFactory.get('answers')


export default {
  props: ['user-id'],
  components: {
    InfiniteLoading
  },
  data() {
    return {
      answers: []
    }
  },
  methods: {
    fetchAnswers ($state) {

      AnswerRepository.getTapeAnswers(this.$store.state.user.identifier)
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
