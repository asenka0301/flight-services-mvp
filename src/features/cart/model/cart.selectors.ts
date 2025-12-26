import type { Service } from "../../../ entities/services/model/ types";
import type { CartState } from "./cart.types";

export const selectSelectedServices = (services: Service[], cart: CartState) =>
  services.filter((s) => cart.selectedIds.includes(s.id));

export const selectTotalSum = (services: Service[], cart: CartState) =>
  selectSelectedServices(services, cart).reduce((sum, s) => sum + s.price, 0);
