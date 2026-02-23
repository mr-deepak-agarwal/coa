
import { useState } from "react";
export default function DecoderSimulator(){
const[input,setInput]=useState(0);
return(
<div className="bg-white p-4 rounded-xl shadow">
<h2 className="font-bold mb-2">2:4 Decoder</h2>
<p>Active Line: {input}</p>
<button onClick={()=>setInput((input+1)%4)} className="bg-red-600 text-gray-900 px-3 py-1 rounded">Change Input</button>
</div>
);
}
