export default function isAdmin() {
  const token: any = localStorage.getItem('user');
  const { email } = JSON.parse(atob(token.split('.')[1]));
  return email === 'admin@gmail.com';
}
export function isAuth() {
  return localStorage.getItem('user');
}
