import type { Service } from "../../../ entities/services/model/ types";

export const orderServices = (services: Service[], selectedIds: string[]) => {
  const availableNotSelected = services.filter((s) => s.available && !selectedIds.includes(s.id));

  const selected = services.filter((s) => s.available && selectedIds.includes(s.id));

  const unavailable = services.filter((s) => !s.available);

  return [...availableNotSelected, ...selected, ...unavailable];
};
