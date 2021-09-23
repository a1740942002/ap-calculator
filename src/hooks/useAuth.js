import { useApi } from '@/hooks/useApi';
import { useCookies } from '@vueuse/integrations/useCookies';
import { ref, computed } from 'vue';

export function useAuth() {
  const { api } = useApi();
  const user = ref({});
  const token = ref('');
  const cookies = useCookies(['user', 'token']);

  const isLogin = computed(() => Object.keys(user.value).length);
  const error = ref('');

  user.value = cookies.get('user') || {};
  token.value = cookies.get('token') || '';

  const signup = async (userData) => {
    try {
      const res = await api.post('/auth/local/register', userData);
      user.value = res.data.user;
      token.value = res.data.jwt;
      cookies.set('user', user.value);
      cookies.set('token', token.value);
      location.href = '/';
      return res;
    } catch (err) {
      error.value = err.response.data.message[0].messages[0].message;
      return new Promise.reject(err);
    }
  };

  const login = async (userData) => {
    try {
      const res = await api.post(`/auth/local`, userData);
      user.value = res.data.user;
      token.value = res.data.jwt;
      cookies.set('user', user.value);
      cookies.set('token', token.value);
      location.href = '/';
      return res;
    } catch (err) {
      error.value = err.response.data.message[0].messages[0].message;
      return new Promise.reject(err);
    }
  };

  const logout = async () => {
    try {
      cookies.remove('user');
      cookies.remove('token');
      user.value = {};
      token.value = '';
      location.href = '/';
    } catch (err) {
      error.value = err.response;
      return new Promise.reject(err);
    }
  };

  return {
    user,
    token,
    cookies,
    error,
    isLogin,
    signup,
    login,
    logout,
  };
}
