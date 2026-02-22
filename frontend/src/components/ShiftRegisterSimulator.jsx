
import { useState } from "react";
export default function ShiftRegisterSimulator(){
const[reg,setReg]=useState([0,0,0,0]);
return(
<div className="bg-white p-5 rounded-xl shadow-md">
<h2 className="text-xl font-bold mb-4">Shift Register</h2>
<div className="flex gap-2 mb-4">
{reg.map((bit,i)=>(
<div key={i} className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg text-xl font-bold">{bit}</div>
))}
</div>
<button onClick={()=>setReg([1,reg[0],reg[1],reg[2]])} className="bg-purple-600 text-white px-4 py-2 rounded-lg">Shift</button>
</div>
);
}
