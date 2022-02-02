// widgets.js
import { db } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Actions
const LOAD = "voca/LOAD";
const CREATE = "voca/CREATE";

const initialState = {
  list: [],
};

// Action Creators
export function loadVoca(vocas) {
  return { type: LOAD, vocas };
}

export function createVoca(voca) {
  return { type: CREATE, voca };
}

//middlewares
export const loadVocaFB = () => {
  return async function (dispatch) {
    const voca_data = await getDocs(collection(db, "voca"));
    console.log(voca_data);

    let vocas = [];

    voca_data.forEach((v) => {
      console.log(v.data());
      vocas.push({ id: v.id, ...v.data() });
    });

    console.log(vocas);

    dispatch(loadVoca(vocas));
  };
};

export const createVocaFB = (voca) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "voca"), voca);
    console.log(docRef);
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "voca/LOAD": {
      return { list: action.vocas };
    }

    case "voca/CREATE": {
      const new_voca_list = [...state.list, action.voca];
      return { list: new_voca_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
