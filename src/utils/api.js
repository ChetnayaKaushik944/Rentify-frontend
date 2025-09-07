const API = process.env.REACT_APP_API_URL;

// Example fetch
export async function getProperties() {
  const res = await fetch(`${API}/api/properties`);
  return res.json();
}
