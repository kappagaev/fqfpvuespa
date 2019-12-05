import Repository from "./Repository";


export default {
  getUserAnswers(userId, lastId = 0) {
	var link = 'user/answers/' + userId

	if (lastId) {
		link = link + '?last_id=' + lastId
	}
	return Repository.get(link);
  },
  getUserLikedAnswers(userId, offset = 0) {
	var link = '/user/' +  userId + '/likes'
    if (offset) {
		link = link + '?offset=' + offset
    }
	return Repository.get(link);
  },
  getSingle (id) {
	return Repository.get('answer/' + id)
  }
};
