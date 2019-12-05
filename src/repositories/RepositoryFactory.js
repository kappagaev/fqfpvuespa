import UserRepository from './UserRepository'
import AnswerRepository from './AnswerRepository'

const repositories = {
	users: UserRepository,
	answers: AnswerRepository
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
