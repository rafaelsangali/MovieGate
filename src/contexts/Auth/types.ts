export interface IAuthContext {
  signInWithGoogle: () => void
  user: object | null
  showLoading: boolean
}
