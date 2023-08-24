import React,{useState} from "react";


import View from './ViewItem/BackOfficeViewItemView';
import Fix from "./ViewItem/BackOfficeViewItemFix";
import Delete from "./ViewItem/BackOfficeViewItemDelete";

export default function BackOfficeViewItem(props) {

    const[mode,setMode] = useState(0);

    return(<>
    {mode===0 ? <View value={props.value} setMode={setMode} test2={props.test2}/> : mode===1 ? <Fix value={props.value} setMode={setMode} test2={props.test2}/> : <Delete value={props.value} setMode={setMode} test2={props.test2}/>}
        </>
    )
}