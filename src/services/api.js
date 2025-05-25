import axios from 'axios';

// สร้าง instance ของ axios โดยกำหนด baseURL
const api = axios.create({
  baseURL: 'https://swe-project-backend-g841.onrender.com/api',
  withCredentials: true,
});

// API สำหรับจัดการรายวิชา
export const getSubjects = () => api.get('/subjects');
export const createSubject = (data) => api.post('/subjects', { ...data }, { params: { userId: data.userId } });
export const updateSubject = (id, data) => api.put(`/subjects/${id}`, { ...data }, { params: { userId: data.userId } });
export const deleteSubject = (id, { userId }) => api.delete(`/subjects/${id}`, { params: { userId } });
export const checkSubjectCode = (subjectCode, { userId }) => api.get(`/subjects/check/${subjectCode}`, { params: { userId } });

// API สำหรับจัดการผู้ใช้
export const getUsers = ({ userId }) => api.get('/users', { params: { userId } });
export const createUser = (data) => api.post('/users', { ...data }, { params: { userId: data.userId } });
export const updateUser = (id, data) => api.put(`/users/${id}`, { ...data }, { params: { userId: data.userId } });
export const deleteUser = (id, { userId }) => api.delete(`/users/${id}`, { params: { userId } });
export const checkEmail = (email, { userId }) => api.get(`/users/check/${email}`, { params: { userId } });

// API สำหรับ dashboard
export const getDashboardSummary = ({ userId }) => api.get('/dashboard', { params: { userId } });