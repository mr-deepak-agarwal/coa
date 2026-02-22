
import { useState } from "react";
const steps = [
"Fetch: Instruction is fetched from memory into IR",
"Decode: Control unit decodes the instruction",
"Execute: ALU performs the operation",
"Store: Result is written back to register/memory",
];
export default function InstructionCycleAnimation(){
const [step,setStep]=useState(0);
return(
<div className="bg-white p-5 rounded-xl shadow-md">
<h2 className="text-xl font-bold mb-4">Instruction Cycle Animation</h2>
<div className="text-lg text-blue-700 font-semibold mb-4">{steps[step]}</div>
<button onClick={()=>setStep((step+1)%steps.length)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Next Step</button>
</div>
);
}
