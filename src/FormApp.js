import { useState, useReducer } from "react";
// import { data } from "./Data";
import DisplayModal from "./DisplayModal";
import { reducer } from "./reduce";
import "./form.css";


// adding the reducer
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
// adding hooks
const FormApp = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  // handling event
  const handleEvent = (e) => {
    e.preventDefault();

    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      return dispatch({ type: "NO_VALUE" });
    }
  };

  // closing modal
  const closeGaps = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  // returning to the DOM
  return (
    <>
      { state.isModalOpen && (
        <DisplayModal closeGaps={closeGaps} modalContent={state.modalContent} />
      )}
      <form className="formik" onSubmit={handleEvent}>
        <h2>TodoList In React</h2>
        <div className="mid-div">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add item</button>
        </div>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={person.id} className="spec">
            <h2>{person.name}</h2>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id})
              }
              className="btn"
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};
export default FormApp;
