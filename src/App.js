import "./styles.css";
import Accordion from "./Accordion";

const data = [
  { id: 1, title: "abc", text: "cdf" },
  { id: 2, title: "abc", text: "cdf" },
  { id: 3, title: "abc", text: "cdf" }
];

export default function App() {
  return (
    <div className="App">
      <h1>Accordion</h1>
      {data.map((item) => {
        return <Accordion title={item.title} text={item.text} />;
      })}
    </div>
  );
}
