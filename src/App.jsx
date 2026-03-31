import data from "./data.json";
import "./App.css";
import MobileCard from "./component/MobileCard";

const App = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center px-4">
      {data.map((product, idx) => {
        return <MobileCard key={idx} productData={product} />;
      })}
    </div>
  );
};

export default App;
