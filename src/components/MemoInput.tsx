
import * as ChangyDom from "changy-dom";
import { Array, String, fromC, O } from "changy";
import Memos from "../classes/Memos";
import Memo from "../classes/Memo";

function MemoInput({ memos } : { memos : Memos }) {
    function addMemo() {
        memos.addMemo(memo[O]);
        memo.set("");
    }
    const textInput = <input type="text" onkeydown={(e : KeyboardEvent) => e.keyCode === 13 ? addMemo() : 0}/>;
    const memo = textInput.attributes.Get(new String("value"))[O];
    return (
        <div>
            {textInput}
            <input type="button" onclick={addMemo} value="추가"/>
        </div>
    )
}

export default MemoInput;