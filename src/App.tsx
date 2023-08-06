import Dashboard from "./components/Dashboard/Dashboard";
import userData from "./data/data.json";

export default function App() {
  return (
    <main>
      <Dashboard userData={userData} />
    </main>
  );
}
