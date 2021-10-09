import { useApi } from '../hooks/useApi';
import { useCookies } from '@vueuse/integrations/useCookies';
import { ref, computed, Ref } from 'vue';
import { LoginUserData, RegisterUserData } from '../types';

export function useAuth() {
  const { api } = useApi();
  const user = ref({});
  const isLogin = computed(() => Object.keys(user.value).length);
  const token = ref('');
  const cookies = useCookies(['token']);
  const error = ref('');

  token.value = cookies.get('token') || '';

  const getMe = async (token?: Ref<string>) => {
    try {
      const { api } = useApi(token);
      const res = await api.get('/users/me');
      return res.data;
    } catch (err) {
      error.value = err.response.data.message;
    }
  };

  const login = async (loginUserData: LoginUserData) => {
    try {
      const res = await api.post(`/auth/local`, loginUserData);
      token.value = res.data.jwt;
      cookies.set('token', token.value);
      user.value = await getMe(token);
      return res;
    } catch (err) {
      error.value = err.response.data.message[0].messages[0].message;
      return err.response;
    }
  };

  const signup = async (registerUserData: RegisterUserData) => {
    try {
      const res = await api.post('/auth/local/register', registerUserData);
      token.value = res.data.jwt;
      cookies.set('token', token.value);
      user.value = await getMe(token);
      return res;
    } catch (err) {
      error.value = err.response.data.message[0].messages[0].message;
      return err.response;
    }
  };

  const logout = () => {
    cookies.remove('token');
    token.value = '';
    location.href = '/';
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
    getMe,
  };
}
