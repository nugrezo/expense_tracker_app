import "./App.css";
import NewExpenseEntry from "./components/DisplayExpenses/NewExpenseEntry/NewExpenseEntry";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Plasma TV",
    amount: "200",
    date: new Date(2021, 2, 18),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "299",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: "199",
    date: new Date(2021, 5, 12),
  },
];

function App() {
  return (
    <div className="App">
      <NewExpenseEntry />
    </div>
  );
}

export default App;
