
import { useState } from "react";
export default function FullAdderSimulator(){
const[a,setA]=useState(0);
const[b,setB]=useState(0);
const sum=a^b;
const carry=a&b;
return(
<div className="bg-white p-4 rounded-xl shadow">
<h2 className="font-bold mb-2">Full Adder</h2>
<p>A: {a} B: {b}</p>
<p>Sum: {sum} Carry: {carry}</p>
<button onClick={()=>setA(a^1)} className="bg-green-600 text-white px-2 py-1 m-1 rounded">Toggle A</button>
<button onClick={()=>setB(b^1)} className="bg-purple-600 text-white px-2 py-1 m-1 rounded">Toggle B</button>
</div>
);
}
