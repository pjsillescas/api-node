const API_URL = "http://localhost:5000/api";

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/data`);
  return await response.json();
};
