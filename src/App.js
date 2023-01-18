import React from "react";

const App = () => {
  //CONSTANTS
  const holidays = [
    "Holiday_1",
    "Holiday_2",
    "Holiday_3",
    "Holiday_4",
    "Holiday_5",
    "Holiday_6",
    "Holiday_7",
    "Holiday_8",
    "Holiday_9",
    "Holiday_10",
    "Holiday_11",
    "Holiday_12",
  ];

  //Email Components
  const [agentEmail, setAgentEmail] = React.useState("");
  const handleAgentEmailChange = (e) => {
    setAgentEmail(e.target.value);
  };
  //Holiday Component

  const [holidaySelection, setHolidaySelection] = React.useState({});

  const handleHolidaySelection = (e) => {
    // Get values from selection
    const selectionName = e.target.name.toLowerCase().replace("_", "");
    const selection = e.target.value;

    setHolidaySelection({
      ...holidaySelection,
      [selectionName]: parseInt(selection),
    });
  };

  //Form Submissions
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(agentEmail);
    console.log(holidaySelection);
  };
  return (
    <div className="App container">
      <div className="py-5 text-center">
        <h2>Holiday Shiftbid</h2>
      </div>
      <form onSubmit={handleFormSubmission}>
        <div className="mb-3">
          <Email
            agentEmail={agentEmail}
            handleAgentEmailChange={handleAgentEmailChange}
          />
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Holiday Name</th>
                <th scope="col">Choice Number</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((holiday) => (
                <Holiday
                  key={holiday}
                  holidayName={holiday}
                  handleHolidaySelection={handleHolidaySelection}
                />
              ))}
            </tbody>
          </table>

          <hr />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

const Holiday = ({
  holidayName,
  handleHolidaySelection,
  selected,
  toggleSelected,
}) => {
  return (
    <tr>
      <th scope="row">{holidayName} </th>
      <td>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-1`}
          value="1"
          onChange={handleHolidaySelection}
          required
        />
        <label htmlFor={`${holidayName}-answer-1`}>1</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-2`}
          value="2"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-2`}>2</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-3`}
          value="3"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-3`}>3</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-4`}
          value="4"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-4`}>4</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-5`}
          value="5"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-5`}>5</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-6`}
          value="6"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-6`}>6</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-7`}
          value="7"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-7`}>7</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-8`}
          value="8"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-8`}>8</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-9`}
          value="9"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-9`}>9</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-10`}
          value="10"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-10`}>10</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-11`}
          value="11"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-11`}>11</label>
        <input
          type="radio"
          name={`${holidayName}`}
          id={`${holidayName}-answer-12`}
          value="12"
          onChange={handleHolidaySelection}
        />
        <label htmlFor={`${holidayName}-answer-12`}>12</label>
      </td>
    </tr>
  );
};

const Email = ({ agentEmail, handleAgentEmailChange }) => {
  return (
    <>
      <label htmlFor="agentEmail" className="form-label">
        Agent Email:
      </label>
      <input
        className="form-control"
        type="email"
        name="agentEmail"
        id="agentEmail"
        placeholder="agent.email@usanainc.com"
        value={agentEmail}
        onChange={handleAgentEmailChange}
        required
      />
    </>
  );
};

export default App;
