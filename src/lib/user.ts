import api from './api';

export async function getCurrentUser() {
  const res = await api.get('/users/me');
  return res.data;
}
