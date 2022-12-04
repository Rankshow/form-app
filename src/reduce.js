export const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const newPerson = [...state.people, action.payload];
      return {
        ...state,
        people: newPerson,
        isModalOpen: true,
        modalContent: "item included",
      };
    }
    if (action.type === "NO_VALUE") {
      return { ...state, isModalOpen: true, modalContent: "Please add item" };
    }
    if (action.type === "CLOSE_MODAL") {
      return { ...state, isModalOpen: false };
    }
    if (action.type === "REMOVE_ITEM") {
     const newList = state.people.filter((person) => person.id !== action.payload)
      return { ...state, people: newList };
    }
    throw new Error("No matching action");
  };