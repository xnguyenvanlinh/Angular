export default function isAdmin() {
  if (!localStorage.getItem('user')) return false;
  const token: any = localStorage.getItem('user');
  const { email } = JSON.parse(atob(token.split('.')[1]));
  return email === 'admin@gmail.com';
}
export function isAuth() {
  return localStorage.getItem('user');
}
export function _date(date: number) {
  var result = '';
  var d = new Date(date);
  result += d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
  if (!date) {
    return '';
  }
  return result;
}
