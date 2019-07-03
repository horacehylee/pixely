import { Color } from "csstype";
import { createStore, Action, action } from "easy-peasy";

interface PaletteModel {
  selected: Color;
  colors: Color[];
  selectColor: Action<PaletteModel, number>;
}

export type StoreModel = {
  palette: PaletteModel;
};

export const storeModel: StoreModel = {
  palette: {
    selected: "#1a1c2c",
    colors: [
      "#1a1c2c",
      "#5d275d",
      "#b13e53",
      "#ef7d57",
      "#ffcd75",
      "#a7f070",
      "#38b764",
      "#257179",
      "#29366f",
      "#3b5dc9",
      "#41a6f6",
      "#73eff7",
      "#f4f4f4",
      "#94b0c2",
      "#566c86",
      "#333c57"
    ],
    selectColor: action((state, index) => {
      state.selected = state.colors[index];
    })
  }
};

export const store = createStore(storeModel);
