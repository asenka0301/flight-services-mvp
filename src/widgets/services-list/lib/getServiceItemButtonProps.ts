export type ServiceButtonState = "add" | "unavailable";

type Result = {
  text: string;
  variant: "primary" | "secondary";
  disabled: boolean;
  isLoading: boolean;
};

type Params = {
  available: boolean;
};

export const getServiceItemButtonProps = ({ available }: Params): Result => {
  const state: ServiceButtonState = !available ? "unavailable" : "add";

  switch (state) {
    case "add":
      return { text: "Добавить", variant: "primary", disabled: false, isLoading: false };
    case "unavailable":
      return { text: "Недоступно", variant: "secondary", disabled: true, isLoading: false };
  }
};
