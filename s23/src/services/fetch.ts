const fetchWrapper = async (url: string, options: any) => {
  const defaultOptions = {
    headers: {
      "content-type": "application/json",
    },
  };

  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL + url, {
      ...options,
      ...defaultOptions,
    });

    if (!response.ok) throw Error;

    const result = await response.json();

    return result;
  } catch {
    console.error("WTF");
    return null;
  }
};

export const get = async (url: string, options?: any) => {
  const result = await fetchWrapper(url, {
    ...options,
    method: "GET",
  });

  return result;
};

export const post = async (url: string, options?: any) => {
  const result = await fetchWrapper(url, {
    ...options,
    method: "POST",
  });

  return result;
};
