<template>
  <div class="profile">
	{{ user }} <br>
    {{ this.id }}<br>
    <Tabs :user-id="id" />
  </div>
    
</template>

<script>
import { RepositoryFactory } from '../repositories/RepositoryFactory'
const UserRepository = RepositoryFactory.get('users')

import Tabs from './Profile/Tabs.vue'

export default {
  name: 'Profile',
  props: ['id'],
  data() {
	return {
		is_loading: true,
		user: {}
	}
  },
  components: {
    Tabs
  },
  methods: {
	async fetch () {
		this.is_loading = true
		this.user = await UserRepository.getUser(this.id).then(response => {
			var user = response.data
			return user
		})
		this.is_loading = false
	}
  },
  created() {
	this.fetch()
  }
}
</script>
<style>

</style>
