import * as ChangyDom from "changy-dom";
import { Array, String, Function } from "changy";
import Memo from "./Memo";
import Memos from "../classes/Memos";

function MemoList({ memos } : { memos : Memos }) {
    return (
        <div>
            {memos.Map(new Function(memo => <Memo memo={memo} memos={memos}/>))}
        </div>
    )
}

export default MemoList;