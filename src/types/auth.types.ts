export type LoginObject = {
  email: string,
  password: string,
  rememberMe: boolean
}

export type CreateNewAccountObject = {
  firstName: string,
  email: string,
  password: string,
  password2: string,
  acceptedTerms: boolean
}

export type AuthUserDetails = {
  uniqueId: string,
  token: string,
}
