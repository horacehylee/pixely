import { createStore, Action, action, Computed, computed } from "easy-peasy";

interface PaletteModel {
  selectedIndex: number;
  colors: string[];

  selectedColor: Computed<PaletteModel, string>;
  selectColor: Action<PaletteModel, number>;
}
const defaultPaletteModel: PaletteModel = {
  selectedIndex: 0,
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
    state.selectedIndex = index;
  }),
  selectedColor: computed(state => state.colors[state.selectedIndex])
};

type ToolType = "pencil" | "eraser" | "fill" | "pan" | "eyedropper";
interface ToolModel {
  selected: ToolType;
  zoom: number;
  brushSize: number;

  increaseBrushSize: Action<ToolModel, number>;
  decreaseBrushSize: Action<ToolModel, number>;
  increaseZoom: Action<ToolModel, number>;
  decreaseZoom: Action<ToolModel, number>;
}
const defaultToolModel: ToolModel = {
  selected: "pencil",
  zoom: 30,
  brushSize: 1,
  increaseBrushSize: action((state, payload) => {
    state.brushSize = Math.max(1, state.brushSize + payload);
  }),
  decreaseBrushSize: action((state, payload) => {
    state.brushSize = Math.max(1, state.brushSize - payload);
  }),
  increaseZoom: action((state, payload) => {
    state.zoom = Math.min(100, state.zoom + payload);
  }),
  decreaseZoom: action((state, payload) => {
    if (state.zoom - payload <= 0) {
      return state;
    }
    state.zoom -= payload;
  })
};

export type StoreModel = {
  palette: PaletteModel;
  tool: ToolModel;
};

export const storeModel: StoreModel = {
  palette: defaultPaletteModel,
  tool: defaultToolModel
};

export const store = createStore(storeModel);
