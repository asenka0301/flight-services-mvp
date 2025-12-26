import type { CartAction, CartState } from "./cart.types";

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "TOGGLE": {
      const exists = state.selectedIds.includes(action.id);
      return {
        selectedIds: exists
          ? state.selectedIds.filter((x) => x !== action.id)
          : [...state.selectedIds, action.id],
      };
    }
    case "CLEAR":
      return { selectedIds: [] };

    default:
      return state;
  }
};
