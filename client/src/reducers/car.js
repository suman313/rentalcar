const initialState = {
  cars: ["maruti", "hyundai", "suzuki", "mahindra"],
  low: 0,
  high: 1000,
};

const bookcar = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        cars: action.payload.data,
        low: action.payload.low,
        high: action.payload.high,
      };
    case "FILTER": {
      let filteredArray = state.cars.filter(
        (item) =>
          item.rate >= action.payload.low && item.rate <= action.payload.high
      );
      return { ...state, cars: filteredArray };
    }

    default:
      return state;
  }
};

export default bookcar;
