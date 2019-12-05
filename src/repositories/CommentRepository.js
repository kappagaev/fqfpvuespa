import Repository from "./Repository";


export default {
  getAnswerComments(answerId, lastId = 0) {
	var link = 'answer/comments/' + answerId

	if (lastId) {
		link = link + '?last_id=' + lastId
	}
	return Repository.get(link);
  }
};
