URL = "https://priceisthegoatbackend.herokuapp.com"


export const register = async (request) => {
  try {
    const apiRes = await fetch(`${BACKEND_URL}/register`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(request),
    });
    return await apiRes.json();
  } catch (error) {
    throw error;
  }
};

export const authenticate = async () => {
  try {
    const apiRes = await fetch(`${BACKEND_URL}/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(values),
    });
    return await apiRes.json();
  } catch (error) {
    throw error;
  }
};