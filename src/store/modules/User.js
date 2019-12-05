

export default {
  namespaced: true,
  state: {
	identifier: ''
  },
  mutations: {
	SET_IDENTIFIER (state, identifier) {
		state.identifier = identifier
	}
  },
  actions: {
	retrieveIdentifier ({ commit }) {
		var identifier = localStorage.getItem('identifier')
		if (!identifier) {
			var crypto = require("crypto")
			identifier = crypto.randomBytes(20).toString('hex')
			localStorage.setItem('identifier', identifier)
		}
		commit('SET_IDENTIFIER', identifier)
	}
  }
} 