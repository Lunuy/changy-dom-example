
import { Array, String } from "changy";
import * as ChangyDom from "changy-dom";
import MemoListContainer from "./MemoListContainer";
import styles from "./App.module.scss";

function App() {


    return (
        <div class={styles.app}>
            <MemoListContainer/>
        </div>
    );
}

export default App;