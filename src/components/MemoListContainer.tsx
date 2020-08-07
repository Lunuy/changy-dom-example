
import * as ChangyDom from "changy-dom";
import MemoList from "./MemoList";
import MemoInput from "./MemoInput";
import Memos from "../classes/Memos";
import Memo from "../classes/Memo";

const memos : any = new Memos([new Memo("안냥")]);

function MemoListContainer() {
    return (
        <div>
            <MemoInput memos={memos}/>
            <MemoList memos={memos}/>
        </div>
    );
}

export default MemoListContainer;