const getData = async (api) => {
  try {
    const response = await fetch(api);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    return error;
  }
};

export default getData;
