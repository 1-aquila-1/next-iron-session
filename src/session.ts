export interface SessionData {
  userId?: string;
  token?: string
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};
