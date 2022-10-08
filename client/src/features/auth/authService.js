import axios from 'axios';

// login user
const login = async (userData) => {
  const response = await axios.post('/api/v1/login', userData);
  return response.data;
};

// load user
const loadUser = async () => {
  const response = await axios.get('/api/v1/me');
  return response.data;
};

// logout user
const logout = async () => {
  await axios.get('/api/v1/logout');
};

const authService = {
  login,
  loadUser,
  logout,
};
export default authService;
