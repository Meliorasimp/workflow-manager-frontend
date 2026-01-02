export interface HomeState {
  id: number;
  isLoginModalOpen?: boolean;
  isRegisterModalOpen?: boolean;
}

export interface RegisterState {
  username: string;
  email: string;
  password: string;
}
