export const getJobs = async ({ limit = 0 }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}?page=1&limit=${limit}`,
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
