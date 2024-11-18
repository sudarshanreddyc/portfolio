export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode the JWT payload
    const isTokenExpired = payload.exp * 1000 < Date.now(); // Check expiration
    return !isTokenExpired;
  } catch {
    return false;
  }
};
