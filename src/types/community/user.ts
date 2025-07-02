export interface User {
  id: string;
  username: string;
  avatar?: string;
  status: 'ONLINE' | 'OFFLINE' | 'BANNED';
}