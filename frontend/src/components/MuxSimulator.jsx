
import { useState } from "react";
export default function MuxSimulator(){
const[sel,setSel]=useState(0);
const inputs=[0,1,1,0];
return(
<div className="bg-white p-4 rounded-xl shadow">
<h2 className="font-bold mb-2">4:1 MUX Simulator</h2>
<p>Selected Input: {inputs[sel]}</p>
<button onClick={()=>setSel((sel+1)%4)} className="bg-blue-600 text-white px-3 py-1 rounded">Change Select</button>
</div>
);
}
