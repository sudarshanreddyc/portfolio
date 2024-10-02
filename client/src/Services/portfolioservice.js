// ApiService.js
export const fetchData = async ({ endpoint, method = "GET", params = {} }) => {
  const url = new URL(endpoint);

  // Append query parameters if any
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
