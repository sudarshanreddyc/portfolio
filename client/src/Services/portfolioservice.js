export const fetchData = async ({
  endpoint,
  method = "GET",
  params = {},
  body = null,
}) => {
  const url = new URL(endpoint);

  // Append query parameters for GET requests
  if (method === "GET") {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  // Fetch the token from localStorage
  const token = localStorage.getItem("token");

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // Add body for POST, PUT, or DELETE requests
  if (body) {
    options.body = JSON.stringify(body);
  }

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
