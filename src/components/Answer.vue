<template>
  <div class="answer">
    <Comments :answerId="id" />
  </div>
</template>

<script>
import Comments from './Answer/Comments.vue'
export default {
	props: ['id'],
	components: {
		Comments
	},
}
</script>

