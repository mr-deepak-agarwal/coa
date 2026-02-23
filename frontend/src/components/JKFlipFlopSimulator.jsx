
import { useState } from "react";
export default function JKFlipFlopSimulator(){
const[q,setQ]=useState(0);
return(
<div className="bg-white p-5 rounded-xl shadow-md">
<h2 className="text-xl font-bold mb-4">JK Flip-Flop Simulator</h2>
<p className="mb-3">J = 1, K = 1 → Toggle Mode</p>
<div className="text-3xl font-bold mb-4">Q = {q}</div>
<button onClick={()=>setQ(q===0?1:0)} className="bg-green-600 text-gray-900 px-4 py-2 rounded-lg">Clock Pulse</button>
</div>
);
}
