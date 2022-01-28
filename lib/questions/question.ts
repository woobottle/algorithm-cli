export const generateInput = (name: string, message: string) => {
  return {
    type: "input",
    name,
    message,
  };
};

export const generateSelect = (
  name: string,
  message: string,
  choices: string[]
) => {
  return {
    type: "list",
    name,
    message,
    choices,
  };
};
