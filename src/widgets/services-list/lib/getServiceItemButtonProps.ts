export type ServiceButtonState = "add" | "added" | "unavailable";

type Result = {
  text: string;
  variant: "primary";
  disabled: boolean;
};

type Params = {
  available: boolean;
  isSelected: boolean;
};

export const getServiceItemButtonProps = ({ available, isSelected }: Params): Result => {
  const state: ServiceButtonState = !available ? "unavailable" : isSelected ? "added" : "add";

  switch (state) {
    case "add":
      return { text: "Добавить", variant: "primary", disabled: false };
    case "added":
      return { text: "Удалить", variant: "primary", disabled: false };
    case "unavailable":
      return { text: "Недоступно", variant: "primary", disabled: true };
  }
};
