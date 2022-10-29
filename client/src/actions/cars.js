import * as api from "../api/cardetails";

export const getAllCars = () => async (dispatch) => {
  try {
    const response = await api.fetchAllCars();
    dispatch({ type: "FETCH_ALL", payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
