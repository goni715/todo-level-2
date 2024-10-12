import { Button } from "./components/ui/button";


const App = () => {
  return (
    <>
      <h1 className="text-3xl text-red-500">This is Todo App</h1>
      <div className="p-8">
        <Button>Click me</Button>
      </div>
    </>
  );
};

export default App;