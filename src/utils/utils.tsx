export const RandomUserApi = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    if (data) {
      return { data: data?.results };
    }
    // setUser(data.results[0]); // Extract first user from response
  } catch (error) {
    return { error: error };
  }
};

export const RandomUserApiByPage = async (page: number) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=10`
    );
    const data = await response.json();
    if (data) {
      return { data: data?.results };
    }
    // setUser(data.results[0]); // Extract first user from response
  } catch (error) {
    return { error: error };
  }
};
