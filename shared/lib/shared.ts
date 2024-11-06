const STATE_KEY = "shared_state";

// Initialize state from localStorage or default value
const initializeState = () => {
  const storedState = localStorage.getItem(STATE_KEY);
  if (storedState) {
    return JSON.parse(storedState);
  }
  return {
    message: "shared message",
  };
};

export const state = {
  get message() {
    return initializeState().message;
  },
  set message(value: string) {
    const currentState = initializeState();
    currentState.message = value;
    localStorage.setItem(STATE_KEY, JSON.stringify(currentState));
  },
};
