import react, { useState } from "react";

const Accordion = ({ title, text }) => {
  const [active, setActive] = useState(false);
  const handleToggle = (id) => {
    setActive(!active);
  };

  return (
    <div className="accordion-container">
      <div
        className="accordion-title"
        style={{
          background: "red",
          margin: "10px",
          textAlign: "start",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          cursor: "pointer"
        }}
        onClick={handleToggle}
      >
        {title}
        <div
          className="accordion-plus"
          style={{
            textAlign: "end",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>{active ? "-" : "+"}</div>
        </div>
      </div>
      {active && <div>{text}</div>}
    </div>
  );
};
export default Accordion;
