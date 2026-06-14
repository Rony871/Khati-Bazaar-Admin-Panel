export const API_BASE_URL = "https://api.khatibazaar.com/v1";

export const fetchData = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  return response.json();
};
