export type CartState = {
  selectedIds: string[];
};

export type CartAction = { type: "TOGGLE"; id: string } | { type: "CLEAR" };

export const initialCartState: CartState = {
  selectedIds: [],
};
