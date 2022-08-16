interface IAuthContext {
  signInWithGoogle: () => void
  logOut: () => void
  loggedAccount: IUser
  showLoading: boolean
}

interface IUser {
  displayName: string
  photoURL: string
}

export type { IAuthContext, IUser }
