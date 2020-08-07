
import * as ChangyDom from "changy-dom";
import { Array, String } from "changy";
import Memos from "../classes/Memos";
import styles from "./Memo.module.scss";

function Memo({ memo, memos } : { memo : String<any>, memos : Memos }) {
    return (
        <div class={styles.memo}>
            <span>{memo}</span>
            <input type="button" value="X" onclick={_ => memos.removeMemo(memo)}/>
        </div>
    )
}

export default Memo;