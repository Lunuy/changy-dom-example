import Memo from "./Memo";
import { Array, O } from "changy";

class Memos extends Array<Memo> {
    addMemo(memo : Memo) {
        this.splice(0, 0, memo);
    }
    removeMemo(memo : Memo) {
        this.splice(this[O].indexOf(memo), 1);
    }
}

export default Memos;