import api from './api';

export const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/user');
    const user = response.data.user;
    // บันทึก user ลง localStorage
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    // Fallback: ดึงจาก localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // ตรวจสอบว่าเป็น admin
      if (user.role === 'admin') {
        return user;
      }
    }
    return null;
  }
};

export const logout = async () => {
  try {
    await api.post('/auth/logout');
    localStorage.removeItem('user');
    return true;
  } catch (error) {
    console.error('Error logging out:', error);
    return false;
  }
};