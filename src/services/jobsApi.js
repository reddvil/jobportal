export const getJobs = async ({ limit = 8, page = 1 }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}?page=${page}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.trace(err);
    return [];
  }
};

const jobsApi = { getJobs };

export default jobsApi;
