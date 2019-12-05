import UserRepository from './UserRepository'
import AnswerRepository from './AnswerRepository'
import CommentRepository from './CommentRepository'

const repositories = {
	users: UserRepository,
	answers: AnswerRepository,
	comments: CommentRepository
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
