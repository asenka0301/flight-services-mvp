export type Currency = "RUB";

export type Service = {
  id: string;
  title: string;
  description?: string;
  currency: Currency;
  category: "baggage" | "seat" | "priority" | "lounge" | "insurance" | "transfer" | "wifi" | "meal";
  available: boolean;
};
