import { MessageCode } from "./message-codes";

export const MESSAGES: Record<string, string> = {
  // Auth
  [MessageCode.AUTH_LOGIN_SUCCESS]: 'Login realizado com sucesso!',
  [MessageCode.AUTH_LOGIN_FAILED]: 'Falha ao fazer login. Tente novamente.',
  [MessageCode.AUTH_REGISTER_SUCCESS]: 'Cadastro realizado com sucesso!',
  [MessageCode.AUTH_INVALID_CREDENTIALS]: 'Email ou senha incorretos.',
  [MessageCode.AUTH_TOKEN_EXPIRED]: 'Sua sessão expirou. Faça login novamente.',
  [MessageCode.AUTH_UNAUTHORIZED]: 'Você não tem permissão para acessar este recurso.',
  
  // User
  [MessageCode.USER_CREATED]: 'Usuário criado com sucesso!',
  [MessageCode.USER_UPDATED]: 'Dados atualizados com sucesso!',
  [MessageCode.USER_DELETED]: 'Usuário removido com sucesso.',
  [MessageCode.USER_NOT_FOUND]: 'Usuário não encontrado.',
  [MessageCode.USER_ALREADY_EXISTS]: 'Este email já está cadastrado.',
  
  // Exercise
  [MessageCode.EXERCISE_CREATED]: 'Exercício criado com sucesso!',
  [MessageCode.EXERCISE_UPDATED]: 'Exercício atualizado com sucesso!',
  [MessageCode.EXERCISE_DELETED]: 'Exercício removido com sucesso.',
  [MessageCode.EXERCISE_NOT_FOUND]: 'Exercício não encontrado.',
  
  // Workout
  [MessageCode.WORKOUT_CREATED]: 'Treino criado com sucesso!',
  [MessageCode.WORKOUT_UPDATED]: 'Treino atualizado com sucesso!',
  [MessageCode.WORKOUT_DELETED]: 'Treino removido com sucesso.',
  [MessageCode.WORKOUT_NOT_FOUND]: 'Treino não encontrado.',
  
  // Validation
  [MessageCode.VALIDATION_ERROR]: 'Erro de validação. Verifique os campos.',
  [MessageCode.EMAIL_ALREADY_EXISTS]: 'Este email já está cadastrado.',
  [MessageCode.INVALID_EMAIL_FORMAT]: 'Formato de email inválido.',
  [MessageCode.PASSWORD_TOO_SHORT]: 'A senha deve ter no mínimo 6 caracteres.',
  [MessageCode.REQUIRED_FIELD]: 'Este campo é obrigatório.',
  
  // Generic
  [MessageCode.GENERIC_ERROR]: 'Ocorreu um erro. Tente novamente.',
  [MessageCode.INTERNAL_SERVER_ERROR]: 'Erro no servidor. Tente novamente mais tarde.',
  [MessageCode.NOT_FOUND]: 'Recurso não encontrado.',
  [MessageCode.BAD_REQUEST]: 'Requisição inválida.',
  [MessageCode.FORBIDDEN]: 'Você não tem permissão para realizar esta ação.',
}