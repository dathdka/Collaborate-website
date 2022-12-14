import { drawActions } from "../actions/drawAction";
import { BLANK_BOARD } from "../../Dashboard/Draw/BLANK_BOARD";
const initState = {
  id: null,
  data: null,
  collection: [],
  isChat: true,
  isDraw: false,
  push : null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case drawActions.SET_DRAW:
      return {
        ...state,
        id : action.id,
        data: action.data,
        collection: []
      };
    case drawActions.SET_NEW_BOARD:
      return {
        ...state,
        id: action.id,
        data: action.data,
      };
    case drawActions.SET_IS_CHAT:
      return {
        ...state,
        isChat: action.isChat,
        isDraw: action.isDraw,
        data : null,
        id: null,
        push: null
      };
    case drawActions.SET_IS_DRAW:
      return {
        ...state,
        isChat: action.isChat,
        isDraw: action.isDraw,
      };
    case drawActions.SET_COLLECTION:
      return{
        ...state,
        collection: action.collection
      }
    case drawActions.PUSH_DATA:
      return{
        ...state,
        id: action.id,
        push: action.push
      }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
