import styles from './App.module.css';
import { navbar } from "./components/navbar/navbar";

function App() {
  return <div className={styles.App}>
    <navbar />
  </div>;
}

export default App;
