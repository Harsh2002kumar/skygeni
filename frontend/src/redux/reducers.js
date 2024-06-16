// frontend/src/redux/reducers.ts
import { combineReducers } from "redux";
const initialState = {
  customerType: [],
  accountIndustry: [],
  team: [],
  productLine: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CUSTOMER-TYPE":
      return { ...state, customerType: action.payload };
    case "FETCH_ACCOUNT-INDUSTRY": {
      console.log("recieved account industry",action.payload)
      return { ...state, accountIndustry: action.payload };
    }
    case "FETCH_TEAM":
      return { ...state, team: action.payload };
    case "FETCH_PRODUCT_LINE":
      return { ...state, productLine: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
