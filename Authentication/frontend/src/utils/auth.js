export function getAuthToken() {
  const token = localStorage('token');
  return token;
}