import Repository from "./Repository";


export default {
  getUser(id) {
    return Repository.get('user/' + id);
  },
  getUserAnswers(id, lastId = 0) {
	var link = 'user/answers/' + id

	if (lastId) {
		link = link + '?last_id=' + lastId
	}
	return Repository.get(link);
  },
  getUserLikedAnswers(id, offset = 0) {
	var link = '/user/' +  id + '/likes'
    if (offset) {
		link = link + '?offset=' + offset
    }
	return Repository.get(link);
  }
};
