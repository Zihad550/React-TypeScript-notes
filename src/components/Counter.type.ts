export type CounterState = {
  count: number;
};

export type CounterAction = UpdateAction | ResetAction;

export type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

export type ResetAction = {
  type: "reset";
};
