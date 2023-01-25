import { ToastNotification } from "./components/Toast";
import { Questions } from "./containers/Questions";

const App =() => {
  return (
    <div>
      <Questions/>
      <ToastNotification/>
    </div>
  );
}

export default App;
