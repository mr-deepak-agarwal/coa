// ✅ COURSE BASIC INFO
export const courseInfo = {
  title: "Computer Organization & Architecture",
  code: "BCA-52T-115",
  description: "Interactive Smart Learning Platform for COA",
  tagline: "From Logic Gates to Virtual Memory — Master COA Interactively"
};

// ✅ FULL UNITS WITH RICH CONTENT — ALL 4 UNITS COMPLETE
export const units = [
  {
    id: 1,
    title: "Boolean Algebra & Combinational Logic",
    subtitle: "Logic Gates, Boolean Laws, Multiplexers, Decoders, Adders",
    icon: "Gate",
    color: "from-cyan-500 to-blue-500",
    topics: [
      {
        id: "1.1",
        title: "Logic Gates",
        theory: "Logic gates are the fundamental building blocks of all digital circuits. They perform basic logical operations on binary inputs (0 or 1) to produce a single binary output. Every digital system — from a simple calculator to a complex CPU — is built using combinations of these basic gates. The primary logic gates are: AND, OR, NOT, NAND, NOR, XOR, and XNOR.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Logic_gates_world%2C_simplified_symbols.svg/640px-Logic_gates_world%2C_simplified_symbols.svg.png",
        content: [
          {
            type: "gates",
            items: [
              { name: "AND Gate", symbol: "A · B", description: "Output is 1 only when ALL inputs are 1. Used in circuits requiring multiple conditions to be true simultaneously.", truthTable: [[0,0,0],[0,1,0],[1,0,0],[1,1,1]] },
              { name: "OR Gate", symbol: "A + B", description: "Output is 1 when AT LEAST ONE input is 1.", truthTable: [[0,0,0],[0,1,1],[1,0,1],[1,1,1]] },
              { name: "NOT Gate", symbol: "Ā", description: "Inverts the input. Output is the complement of the input. Also called an inverter.", truthTable: [[0,1],[1,0]] },
              { name: "NAND Gate", symbol: "¬(A·B)", description: "Universal gate. Complement of AND. Any logic circuit can be built using only NAND gates.", truthTable: [[0,0,1],[0,1,1],[1,0,1],[1,1,0]] },
              { name: "NOR Gate", symbol: "¬(A+B)", description: "Universal gate. Complement of OR. Output is 1 only when all inputs are 0.", truthTable: [[0,0,1],[0,1,0],[1,0,0],[1,1,0]] },
              { name: "XOR Gate", symbol: "A ⊕ B", description: "Exclusive OR. Output is 1 when inputs are DIFFERENT. Used in adders and parity checkers.", truthTable: [[0,0,0],[0,1,1],[1,0,1],[1,1,0]] }
            ]
          }
        ],
        example: {
          title: "Real-World Application: Burglar Alarm",
          description: "A burglar alarm uses an AND gate:\n- Input A = Door sensor (1 = door open)\n- Input B = Armed status (1 = system armed)\n- Output = Alarm (1 = alarm ON)\n\nAlarm triggers ONLY when door is open AND system is armed.\nThis prevents false alarms when disarmed."
        }
      },
      {
        id: "1.2",
        title: "Boolean Algebra Laws",
        theory: "Boolean Algebra is the mathematical framework for analyzing and simplifying digital logic circuits. Developed by George Boole in 1854, it works with binary variables (0 and 1). Simplifying Boolean expressions reduces the number of gates needed in a circuit, saving cost and improving speed. De Morgan's theorems are especially important for converting between AND/OR forms.",
        image: "https://www.electronicshub.org/wp-content/uploads/2015/04/Boolean-Algebra.jpg",
        content: [
          {
            type: "laws",
            items: [
              { name: "Identity Law", formula: "A + 0 = A,  A · 1 = A", explanation: "Adding 0 or multiplying by 1 doesn't change the value." },
              { name: "Null Law", formula: "A + 1 = 1,  A · 0 = 0", explanation: "Adding 1 always gives 1; multiplying by 0 always gives 0." },
              { name: "Idempotent Law", formula: "A + A = A,  A · A = A", explanation: "A variable OR/AND with itself equals itself." },
              { name: "Complement Law", formula: "A + Ā = 1,  A · Ā = 0", explanation: "A variable OR its complement is 1; AND its complement is 0." },
              { name: "Double Negation", formula: "¬(¬A) = A", explanation: "Inverting twice returns the original value." },
              { name: "Commutative Law", formula: "A+B = B+A,  A·B = B·A", explanation: "Order of operands doesn't matter." },
              { name: "Distributive Law", formula: "A·(B+C) = A·B + A·C", explanation: "AND distributes over OR, just like multiplication over addition." },
              { name: "De Morgan's Theorem 1", formula: "¬(A·B) = Ā + B̄", explanation: "NAND = NOT of AND = OR of NOTs. Break the bar, change the sign." },
              { name: "De Morgan's Theorem 2", formula: "¬(A+B) = Ā · B̄", explanation: "NOR = NOT of OR = AND of NOTs. Break the bar, change the sign." },
              { name: "Absorption Law", formula: "A + A·B = A", explanation: "Simplifies expressions by absorbing redundant terms." }
            ]
          }
        ],
        example: {
          title: "Simplification Example",
          description: "Simplify: F = A·B + A·B̄\n\nStep 1: Factor out A\n  F = A(B + B̄)\n\nStep 2: Apply Complement Law: B + B̄ = 1\n  F = A · 1\n\nStep 3: Apply Identity Law\n  F = A\n\nResult: The expression simplifies to just A!\nThis means one wire instead of multiple gates."
        }
      },
      {
        id: "1.3",
        title: "Multiplexer (MUX)",
        theory: "A Multiplexer (MUX) is a combinational circuit that selects one of many input lines and directs it to a single output line. It acts like a data selector switch. A 2ⁿ-to-1 MUX has n selection lines, 2ⁿ input lines, and 1 output line. MUXes are widely used in data routing, communication systems, and implementing Boolean functions.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mux_from_gates.svg/400px-Mux_from_gates.svg.png",
        content: [
          {
            type: "concepts",
            items: [
              { name: "2-to-1 MUX", desc: "1 select line (S), 2 inputs (I0, I1). Output Y = S'·I0 + S·I1. When S=0 → output = I0; when S=1 → output = I1." },
              { name: "4-to-1 MUX", desc: "2 select lines (S1,S0), 4 inputs (I0–I3). Output = S1'S0'·I0 + S1'S0·I1 + S1S0'·I2 + S1S0·I3." },
              { name: "8-to-1 MUX", desc: "3 select lines, 8 inputs. Used in larger data routing applications." },
              { name: "MUX as Function Generator", desc: "Any Boolean function can be implemented using a MUX. A 2ⁿ-to-1 MUX can implement any n-variable Boolean function." },
              { name: "Applications", desc: "Data routing in buses, parallel-to-serial conversion, function implementation, time-division multiplexing in communication systems." }
            ]
          }
        ],
        example: {
          title: "4-to-1 MUX Selection",
          description: "4-to-1 Multiplexer:\n\nInputs:  I0=1, I1=0, I2=1, I3=1\nSelect:  S1=0, S0=1  →  selects I1\nOutput:  Y = I1 = 0\n\nTruth Table (Select → Output):\nS1 S0 | Output\n 0  0 |  I0\n 0  1 |  I1  ← selected\n 1  0 |  I2\n 1  1 |  I3"
        }
      },
      {
        id: "1.4",
        title: "Decoder & Encoder",
        theory: "A Decoder converts a binary code of n bits into 2ⁿ unique output lines, activating exactly one output for each input combination. An Encoder converts 2ⁿ input lines (only one active at a time) into an n-bit binary code. Decoders are used in memory address decoding, 7-segment display drivers, and instruction decoding in CPUs.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2-to-4_Decoder.svg/400px-2-to-4_Decoder.svg.png",
        content: [
          {
            type: "concepts",
            items: [
              { name: "2-to-4 Decoder", desc: "2 input bits → 4 output lines. D0=A'B', D1=A'B, D2=AB', D3=AB. Only ONE output is HIGH at a time." },
              { name: "3-to-8 Decoder", desc: "3 input bits → 8 output lines. Used in memory chip select. Each output represents one of 8 memory banks or I/O devices." },
              { name: "Enable Input", desc: "Decoders have an Enable pin. Enable=0 → all outputs are 0. Used to cascade multiple decoders together to handle larger addresses." },
              { name: "4-to-2 Priority Encoder", desc: "Handles multiple simultaneous inputs by giving priority to the highest-order input. Output represents the highest active input." },
              { name: "7-Segment Display Decoder", desc: "Converts BCD (0–9) to 7-segment signals (a–g) to drive a 7-segment LED display. Widely used in digital clocks and calculators." }
            ]
          }
        ],
        example: {
          title: "3-to-8 Decoder: Memory Address Decoding",
          description: "Memory has 8 chips (0–7). CPU sends 3-bit address.\n\nAddress 101 (decimal 5):\n  A2=1, A1=0, A0=1\n  → Only output line 5 goes HIGH\n  → Chip 5 is selected\n\n3-to-8 Decoder Output:\nA2 A1 A0 | D0 D1 D2 D3 D4 D5 D6 D7\n 1  0  1 |  0  0  0  0  0  1  0  0\n                               ↑ active"
        }
      },
      {
        id: "1.5",
        title: "Adders & Subtractors",
        theory: "Adders and Subtractors are combinational circuits that perform arithmetic on binary numbers. The Half Adder adds two 1-bit numbers. The Full Adder adds three 1-bit numbers (including carry-in). These are chained together to build Parallel Binary Adders for multi-bit arithmetic. Subtraction uses 2's complement addition with the same hardware.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Full-adder_logic_diagram.svg/400px-Full-adder_logic_diagram.svg.png",
        content: [
          {
            type: "concepts",
            items: [
              { name: "Half Adder", desc: "Adds 2 bits. Outputs: Sum = A⊕B, Carry = A·B. Cannot cascade directly — no carry input." },
              { name: "Full Adder", desc: "Adds 3 bits (A, B, Cin). Sum = A⊕B⊕Cin. Cout = A·B + Cin·(A⊕B). Can be cascaded for multi-bit addition." },
              { name: "Parallel Binary Adder", desc: "N Full Adders connected in ripple-carry chain. Carry-out of each stage → carry-in of next. Adds N-bit numbers in parallel." },
              { name: "Ripple Carry Adder", desc: "Simple but slow. Carry must propagate through all stages. Delay = N × (delay of one FA). Used in low-speed applications." },
              { name: "Binary Subtractor", desc: "A - B = A + (2's complement of B). 2's complement = 1's complement + 1. XOR gates with Cin=1 generate complement automatically." },
              { name: "Parallel Binary Subtractor", desc: "Same as adder but B inputs are inverted and Cin of first stage = 1. Implements A - B using the exact same hardware as addition." }
            ]
          }
        ],
        example: {
          title: "Full Adder: Adding 1011 + 0110",
          description: "  1011  (11 in decimal)\n+ 0110  ( 6 in decimal)\n------\n  Bit 0: 1+0, Cin=0 → Sum=1, Cout=0\n  Bit 1: 1+1, Cin=0 → Sum=0, Cout=1\n  Bit 2: 0+1, Cin=1 → Sum=0, Cout=1\n  Bit 3: 1+0, Cin=1 → Sum=0, Cout=1\n\nResult: 10001 = 17 ✓ (11+6=17)"
        }
      }
    ]
  },

  {
    id: 2,
    title: "Sequential Logic & Register Transfer",
    subtitle: "Flip-Flops, Registers, Micro-Operations, RTL",
    icon: "FlipFlop",
    color: "from-purple-500 to-pink-500",
    topics: [
      {
        id: "2.1",
        title: "Flip-Flops",
        theory: "Flip-Flops are the basic memory elements of sequential logic circuits. Unlike combinational circuits, flip-flops have memory — their output depends on both current inputs AND previous state. They store 1 bit of data and are clocked (synchronized), changing state only on clock edges. They are the building blocks of registers, counters, and all sequential systems.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/SR_Flip-flop_Diagram.svg/400px-SR_Flip-flop_Diagram.svg.png",
        content: [
          {
            type: "flipflops",
            items: [
              { name: "SR Flip-Flop (Set-Reset)", characteristic: "S=0,R=0 → No change | S=1,R=0 → Q=1 | S=0,R=1 → Q=0 | S=1,R=1 → Invalid", description: "Basic flip-flop. S=1 sets output to 1, R=1 resets to 0. S=R=1 is forbidden — creates unpredictable state." },
              { name: "D Flip-Flop (Data/Delay)", characteristic: "Q(next) = D", description: "Simplest flip-flop — eliminates invalid state. Output follows D input on clock edge. Used in registers and memory. Most widely used." },
              { name: "JK Flip-Flop", characteristic: "J=0,K=0 → No change | J=1,K=0 → Set | J=0,K=1 → Reset | J=1,K=1 → Toggle", description: "Universal flip-flop. Improves on SR by making J=K=1 valid (toggles output). Can implement all other flip-flop types." },
              { name: "T Flip-Flop (Toggle)", characteristic: "T=0 → No change | T=1 → Toggle (Q = Q')", description: "Derived from JK with J=K=T. When T=1, output toggles on every clock edge. Used in binary counters." },
              { name: "Race Around Condition", characteristic: "Occurs in JK when J=K=1 with wide clock pulse", description: "In level-triggered JK flip-flop, output toggles repeatedly during entire clock HIGH period, causing unpredictable output. Solved by Master-Slave design." },
              { name: "Master-Slave Flip-Flop", characteristic: "Two flip-flops: master (clock HIGH), slave (clock LOW)", description: "Solves race-around. Master captures input during clock HIGH, slave transfers to output during clock LOW. Output changes only once per cycle." }
            ]
          }
        ],
        example: {
          title: "JK Flip-Flop State Sequence (Binary Counter)",
          description: "JK Flip-Flop with J=K=1 (Toggle mode):\n\nClock | J | K | Q(now) | Q(next)\n  ↑   | 1 | 1 |   0    |   1    (toggle)\n  ↑   | 1 | 1 |   1    |   0    (toggle)\n  ↑   | 1 | 1 |   0    |   1    (toggle)\n\nThis creates a divide-by-2 counter:\nEvery 2 clock pulses → 1 output pulse\nUsed in binary counters and frequency dividers!"
        }
      },
      {
        id: "2.2",
        title: "Register Transfer Language (RTL)",
        theory: "Register Transfer Language (RTL) is a symbolic notation used to describe the movement of data between registers and the micro-operations performed on that data. It specifies operations at the hardware level. RTL uses register names, arrows (←) for transfers, and operators for arithmetic/logic. It is the foundation of CPU design and hardware description.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/register_transfer.jpg",
        content: [
          {
            type: "concepts",
            items: [
              { name: "Register Notation", desc: "Registers denoted by capital letters: R1, R2, MAR, PC, IR. Specific bit: R1(3) = bit 3 of R1. Range: R1(7:0) = bits 7 down to 0." },
              { name: "Transfer Operation", desc: "R2 ← R1 means copy R1 into R2. Conditional: If (P) then (R2 ← R1). Original R1 is unchanged." },
              { name: "Bus & Memory Transfer", desc: "BUS ← R1, then R2 ← BUS. Memory read: DR ← M[AR]. Memory write: M[AR] ← DR." },
              { name: "Arithmetic Micro-ops", desc: "Addition: R3 ← R1 + R2. Subtraction: R3 ← R1 - R2. Increment: R1 ← R1+1. Decrement: R1 ← R1-1. Negate: R1 ← -R1 (2's complement)." },
              { name: "Logic Micro-ops", desc: "AND: R3 ← R1 ∧ R2. OR: R3 ← R1 ∨ R2. XOR: R3 ← R1 ⊕ R2. Complement: R1 ← R1' (1's complement)." },
              { name: "Shift Micro-ops", desc: "Logical shift: R1 ← shl R1 (shift left), R1 ← shr R1 (shift right). Circular: R1 ← cil R1, R1 ← cir R1. Arithmetic: R1 ← ashr R1 (preserves sign bit)." }
            ]
          }
        ],
        example: {
          title: "RTL: Fetch Cycle Description",
          description: "The Fetch cycle in RTL notation:\n\nStep 1: MAR ← PC\n        (Copy Program Counter to Memory Address Register)\n\nStep 2: MBR ← M[MAR], PC ← PC + 1\n        (Read instruction from memory into MBR,\n         simultaneously increment Program Counter)\n\nStep 3: IR ← MBR\n        (Copy instruction to Instruction Register)\n\nThis is how a CPU fetches the next instruction!"
        }
      },
      {
        id: "2.3",
        title: "Arithmetic Logic Shift Unit (ALSU)",
        theory: "The Arithmetic Logic Shift Unit combines all ALU operations (arithmetic and logic) with shift operations into a single unified unit. It is the computational heart of the CPU. Based on the function select inputs, it performs addition, subtraction, AND, OR, XOR, complement, or any of the shift operations on the input data.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/alu.jpg",
        content: [
          {
            type: "operations",
            items: [
              { name: "Arithmetic Operations", description: "Addition (A+B), Subtraction (A-B), Increment (A+1), Decrement (A-1), Negate (-A using 2's complement). Result stored in output register with Carry, Zero, Overflow flags." },
              { name: "Logic Operations", description: "AND (A·B) — masking. OR (A+B) — setting bits. XOR (A⊕B) — toggling/comparing. NOT (Ā) — inverting. XNOR — equality checking." },
              { name: "Logical Shift Left/Right", description: "shl: shift left, fill 0 on right (multiply by 2). shr: shift right, fill 0 on left (divide by 2, unsigned numbers only)." },
              { name: "Arithmetic Shift Right", description: "ashr: shift right but replicate sign bit (MSB). Divides signed integer by 2 while preserving the sign (negative stays negative)." },
              { name: "Circular Shift Left/Right", description: "cil: leftmost bit wraps to rightmost. cir: rightmost bit wraps to leftmost. No bits are lost. Used in cryptography and rotational operations." },
              { name: "Function Select", description: "ALSU has S2, S1, S0 select lines (3-bit opcode). 8 possible operations. Control unit sets these based on decoded instruction opcode." }
            ]
          }
        ],
        example: {
          title: "Shift Operations on 8-bit Register",
          description: "Register R1 = 1010 0110  (initial value)\n\nshl (shift left):   0100 1100  (×2, MSB lost, 0 filled right)\nshr (shift right):  0101 0011  (÷2, LSB lost, 0 filled left)\ncil (circ left):    0100 1101  (MSB=1 wraps to LSB)\ncir (circ right):   0101 0011  (LSB=0 wraps to MSB)\nashr (arith right): 1101 0011  (sign=1 replicated, stays negative)"
        }
      }
    ]
  },

  {
    id: 3,
    title: "Basic Computer Organization & CPU Design",
    subtitle: "Registers, Common Bus, Instruction Cycle, Addressing Modes, CPU",
    icon: "CPU",
    color: "from-orange-500 to-yellow-500",
    topics: [
      {
        id: "3.1",
        title: "Computer Registers & Common Bus",
        theory: "Registers are small, extremely fast storage locations inside the CPU. The common bus system connects all registers and memory, allowing data transfer between them. Only one data transfer can occur at a time on the bus. Each register has a specific role in instruction execution. Together they form the basic datapath of a computer.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/common_bus.jpg",
        content: [
          {
            type: "registers",
            items: [
              { name: "PC", bits: 12, purpose: "Program Counter — holds address of NEXT instruction to fetch. Increments after each fetch." },
              { name: "AR", bits: 12, purpose: "Address Register (MAR) — holds memory address for read/write operations." },
              { name: "IR", bits: 16, purpose: "Instruction Register — holds the current instruction being executed." },
              { name: "DR", bits: 16, purpose: "Data Register (MBR) — buffer for data read from or written to memory." },
              { name: "AC", bits: 16, purpose: "Accumulator — main ALU working register. Stores operands and results." },
              { name: "TR", bits: 16, purpose: "Temporary Register — holds intermediate data during multi-step operations." },
              { name: "OUTR", bits: 8, purpose: "Output Register — holds data to be sent to output device." },
              { name: "INPR", bits: 8, purpose: "Input Register — holds data received from input device (keyboard)." }
            ]
          }
        ],
        example: {
          title: "Bus Transfer: Loading Data from Memory",
          description: "To execute: LOAD (fetch value from address 100):\n\nStep 1: AR ← 100         (Load address 100 into AR)\nStep 2: DR ← M[AR]       (Read memory[100] into DR)\nStep 3: AC ← DR          (Transfer to Accumulator)\n\nAll transfers happen over the single COMMON BUS.\nOnly one register can WRITE to the bus at a time.\nMultiple registers can READ from the bus simultaneously."
        }
      },
      {
        id: "3.2",
        title: "Instruction Codes & Formats",
        theory: "An instruction code is a binary pattern stored in memory that tells the CPU what operation to perform and where to find the data. An instruction format defines how the bits of an instruction are organized — typically into an opcode field (what to do) and address fields (where the data is). Different formats optimize for different trade-offs between opcode space and address range.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/instruction_format.jpg",
        content: [
          {
            type: "formats",
            items: [
              { name: "Memory Reference Instruction", desc: "16-bit instruction: Bit 15 = I (indirect bit), Bits 14-12 = opcode (3 bits = 8 operations), Bits 11-0 = address (12 bits = 4096 locations)." },
              { name: "Register Reference Instruction", desc: "Opcode = 111, I = 0. Remaining 12 bits specify register operation. E.g., CLA (clear AC), CMA (complement AC), INC (increment AC), SZA (skip if AC=0)." },
              { name: "I/O Instruction", desc: "Opcode = 111, I = 1. Remaining 12 bits specify I/O operation. INP (read from INPR to AC), OUT (send AC to OUTR), ION/IOF (enable/disable interrupts)." },
              { name: "Direct Addressing (I=0)", desc: "EA = Address field. Instruction contains the actual memory address of the operand. Simple but limited to 4096 locations (12-bit address)." },
              { name: "Indirect Addressing (I=1)", desc: "EA = M[Address field]. Address field points to memory location which holds the actual address. Expands addressable range but needs two memory accesses." }
            ]
          }
        ],
        example: {
          title: "Decoding a 16-bit Instruction",
          description: "Instruction: 0010 0001 0000 0101\n\nBit 15  = 0 → Direct addressing (I=0)\nBits 14-12 = 001 → opcode 1 = ADD instruction\nBits 11-0 = 0001 0000 0101 = address 261\n\nMeaning: ADD the value at memory address 261 to AC\n  AC ← AC + M[261]\n\nIf bit 15 was 1 (indirect):\n  First read M[261] to get actual address\n  Then: AC ← AC + M[M[261]]"
        }
      },
      {
        id: "3.3",
        title: "Instruction Cycle & Fetch-Decode",
        theory: "The Instruction Cycle is the complete process a CPU goes through to execute one instruction: Fetch → Decode → Execute (→ Memory Access → Write Back). This cycle repeats continuously. The Fetch phase reads the instruction from memory. Decode identifies the operation. Execute performs it. Understanding this cycle is absolutely fundamental to understanding how a CPU works.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/instruction_cycle.jpg",
        content: [
          {
            type: "concepts",
            items: [
              { name: "1. Fetch Phase", desc: "MAR ← PC: Copy PC to MAR. MBR ← M[MAR]: Read instruction from memory. IR ← MBR: Store in IR. PC ← PC+1: Increment for next instruction." },
              { name: "2. Decode Phase", desc: "Control Unit examines IR. Identifies opcode (what to do), operand address, addressing mode (direct/indirect), and type (memory/register/IO reference)." },
              { name: "3. Operand Fetch", desc: "If indirect addressing: AR ← IR(addr), DR ← M[AR] to get actual address. If direct: AR ← IR(addr). Then DR ← M[AR] to fetch operand." },
              { name: "4. Execute Phase", desc: "ALU performs the decoded operation on operands. Result stored in AC or destination register. Status flags updated (Zero, Carry, Negative, Overflow)." },
              { name: "5. Interrupt Check", desc: "After each instruction, CPU checks for pending interrupts. If interrupt pending and interrupts enabled: save state, jump to ISR, execute ISR, restore state, resume." },
              { name: "Register Reference Execution", desc: "For register reference instructions (opcode=111, I=0): the 12 address bits identify the specific register operation. CLA: AC←0, CMA: AC←AC', INC: AC←AC+1, SZA: if AC=0 then PC←PC+1." }
            ]
          }
        ],
        example: {
          title: "Instruction Cycle Flowchart",
          description: "START → [FETCH]\nMAR ← PC\nMBR ← M[MAR]\nIR  ← MBR\nPC  ← PC + 1\n    ↓\n[DECODE] Analyze opcode & mode\n    ↓\n[Memory ref?] YES → Fetch operand\n              NO  → Register/IO ref\n    ↓\n[EXECUTE] ALU performs operation\n    ↓\n[STORE] Write result if needed\n    ↓\n[INTERRUPT?] YES → Handle interrupt\n              NO  → Back to FETCH"
        }
      },
      {
        id: "3.4",
        title: "Addressing Modes",
        theory: "Addressing modes specify how the effective address (EA) of an operand is determined from the information in the instruction. Different modes provide flexibility in accessing operands — whether they are constants, in registers, in specific memory locations, or accessed via pointers and indices. Choosing the right addressing mode is key to writing efficient programs.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/addressing_modes.jpg",
        content: [
          {
            type: "modes",
            items: [
              { name: "Immediate", desc: "Operand IS the value in the instruction itself (not an address). Fastest — no memory access. Used for constants: MOV R1, #5 means R1=5." },
              { name: "Direct", desc: "EA = Address field. Instruction contains actual memory address. Simple but limited to the instruction's address field size." },
              { name: "Indirect", desc: "EA = M[Address field]. Address field points to a memory location containing the actual address. More flexible but requires extra memory access." },
              { name: "Register", desc: "EA = Register name. Operand is in a named CPU register. Very fast — no memory access needed. Most common in modern CPUs." },
              { name: "Register Indirect", desc: "EA = M[Register]. Register holds the memory address (pointer). Used for pointer-based access: e.g., MOV R1, [R2]." },
              { name: "Relative", desc: "EA = PC + Offset. Used in branch instructions. Offset is signed, enabling jump forward or backward. Creates position-independent code." },
              { name: "Index", desc: "EA = Base + Index Register. Base is fixed (start of array), Index changes (element number). Perfect for array traversal: A[i]." },
              { name: "Base Register", desc: "EA = Base Register + Displacement. Base register holds program start address. Enables program relocation in memory without changing instructions." }
            ]
          }
        ],
        example: {
          title: "Addressing Mode Comparison",
          description: "Instruction: LOAD R1, [arg]\n\nImmediate:  arg = 500    → R1 = 500 (value directly)\nDirect:     arg = 500    → R1 = M[500]\nIndirect:   arg = 500    → R1 = M[M[500]] (double fetch)\nRegister:   arg = R2     → R1 = R2\nReg Indir:  arg = [R2]   → R1 = M[R2] (R2 is pointer)\nRelative:   arg = +8     → R1 = M[PC+8]\nIndex:      arg = A[3]   → R1 = M[Base + 3×size]"
        }
      },
      {
        id: "3.5",
        title: "CPU Design",
        theory: "CPU Design involves specifying and implementing the datapath and control unit. A simple CPU must: fetch instructions from memory, decode them, execute them using the ALU, and establish all required data paths. The Control Unit generates timing and control signals. Two approaches: Hardwired control (fast, fixed) and Microprogrammed control (flexible, updatable).",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/cpu_components.jpg",
        content: [
          {
            type: "concepts",
            items: [
              { name: "ALU (Arithmetic Logic Unit)", desc: "Performs all arithmetic (+,-,×,÷) and logic (AND, OR, NOT, XOR) operations. Produces result + status flags: Zero, Carry, Overflow, Negative." },
              { name: "Control Unit (CU)", desc: "Brain of the CPU. Fetches and decodes instructions, generates control signals, manages timing with clock, coordinates data flow between all components." },
              { name: "Hardwired Control", desc: "Control signals generated by fixed logic circuits. Extremely fast but inflexible — cannot be modified. Used in RISC processors (ARM, MIPS, RISC-V)." },
              { name: "Microprogrammed Control", desc: "Control signals from a microprogram in ROM. Flexible — firmware can be updated. Slower than hardwired. Used in CISC processors (x86)." },
              { name: "Datapath", desc: "All functional units (ALU, registers, buses, MUXes) through which data flows. Designed to support all required operations of the instruction set." },
              { name: "Simple CPU Execution Flow", desc: "Fetch instruction → Decode opcode → Select ALU operation → Fetch operands → Execute in ALU → Write result to register/memory → Update PC → Repeat." }
            ]
          }
        ],
        example: {
          title: "CPU: Executing ADD R1, R2",
          description: "Instruction: ADD R1, R2  (R1 = R1 + R2)\n\nCycle 1 - FETCH:\n  MAR ← PC\n  IR ← M[MAR]\n  PC ← PC + 1\n\nCycle 2 - DECODE:\n  CU identifies: ADD opcode\n  Source: R2, Destination: R1\n\nCycle 3 - EXECUTE:\n  ALU_in1 ← R1 (from register file)\n  ALU_in2 ← R2 (from register file)\n  ALU performs ADDITION\n  Result → R1\n  Flags updated: Zero, Carry, Overflow\n\nTotal: 3 clock cycles for one instruction"
        }
      }
    ]
  },

  {
    id: 4,
    title: "I/O & Memory Organization",
    subtitle: "I/O Interfaces, DMA, Interrupts, Memory Hierarchy, Cache, Virtual Memory",
    icon: "Memory",
    color: "from-green-500 to-teal-500",
    topics: [
      {
        id: "4.1",
        title: "Input-Output Organization",
        theory: "I/O Organization defines how the CPU communicates with external devices. Since I/O devices are much slower than the CPU, special techniques manage data transfer efficiently. An I/O Interface acts as a bridge between the fast system bus and slow peripheral devices. The three main transfer modes are: Programmed I/O, Interrupt-driven I/O, and DMA.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/io_interface.jpg",
        content: [
          {
            type: "methods",
            items: [
              { name: "I/O Interface Components", description: "Data register (holds data), Status register (device ready/busy/error flags), Control register (commands to device). Address decoder selects the correct interface." },
              { name: "Programmed I/O (Polling)", description: "CPU continuously checks status register in a loop waiting for device to be ready. Simple to implement but CPU is 100% busy during wait — extremely wasteful." },
              { name: "Interrupt-Driven I/O", description: "CPU starts I/O and continues executing other code. Device sends interrupt when ready. CPU saves state, runs ISR to transfer data, resumes original task. Much more efficient." },
              { name: "Direct Memory Access (DMA)", description: "DMA controller transfers data between device and memory directly, bypassing the CPU entirely. CPU only initiates the transfer and is interrupted only upon completion. Best for bulk transfers." },
              { name: "Asynchronous Transfer (Handshaking)", description: "No shared clock. Sender asserts 'Data Ready', receiver responds with 'Data Accepted'. Works across different speed devices. Overhead from handshake signals." },
              { name: "Synchronous Transfer", description: "All transfers on a common clock. Data valid at specific clock edges. Faster but all devices must operate at same clock speed. Used in modern buses (PCIe, DDR)." }
            ]
          }
        ],
        example: {
          title: "Comparison: Programmed I/O vs DMA",
          description: "Transferring 1MB from Disk to RAM:\n\nPROGRAMMED I/O:\n  For each byte (1,048,576 times):\n    CPU reads disk status → wait if busy\n    CPU reads 1 byte from disk\n    CPU writes 1 byte to RAM\n  CPU utilization: 100% (all for I/O)\n\nDMA:\n  CPU: 'DMA, move 1MB from disk to RAM[5000]'\n  CPU: continues other work\n  DMA: moves data autonomously\n  DMA: sends interrupt when done\n  CPU utilization for I/O: ~0%\n\nSpeedup: CPU is free for useful work!"
        }
      },
      {
        id: "4.2",
        title: "Interrupts",
        theory: "An interrupt is a signal that causes the CPU to suspend its current task, save its state (PC, registers), execute an Interrupt Service Routine (ISR), and then resume the original task. Interrupts enable the CPU to respond to asynchronous events efficiently without polling. Modern systems handle dozens of different interrupt sources simultaneously using a priority system.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/interrupt_cycle.jpg",
        content: [
          {
            type: "types",
            items: [
              { name: "Hardware Interrupt (External)", desc: "Generated by I/O devices (keyboard, mouse, timer, network card). Asynchronous — can occur at any time during program execution." },
              { name: "Software Interrupt (Trap/Exception)", desc: "Generated by executing INT or SYSCALL instruction. Used for OS system calls and software debugging. Synchronous — occurs at a specific instruction." },
              { name: "Maskable Interrupt (INTR)", desc: "Can be disabled by clearing the Interrupt Enable (IE) flag. CPU ignores these when doing critical operations. Re-enabled with STI instruction." },
              { name: "Non-Maskable Interrupt (NMI)", desc: "Cannot be disabled. Used for critical hardware failures: power failure, memory parity error. CPU must always respond immediately." },
              { name: "Vectored Interrupt", desc: "Each interrupt source has a unique ID. CPU uses ID to index into Interrupt Vector Table (IVT) and jump directly to the correct ISR. Fast response." },
              { name: "Priority Interrupts", desc: "Multiple devices each have a priority level. Higher priority interrupt can interrupt (preempt) the ISR of a lower priority device. Implemented with Daisy Chain or Priority Interrupt Controller (8259A PIC)." },
              { name: "Daisy Chain Priority", desc: "All devices share a single interrupt line. When interrupt acknowledged (INTA), grant signal passes device-by-device. First requesting device captures it. Simple hardware, priority by position." }
            ]
          }
        ],
        example: {
          title: "Interrupt Handling Step-by-Step",
          description: "CPU running Program A at instruction 1050\nEvent: Keyboard key pressed\n\n1. Keyboard sends INT signal on interrupt line\n2. CPU finishes instruction 1050\n3. CPU saves state: PC=1051, all registers → Stack\n4. CPU disables further maskable interrupts (IE=0)\n5. CPU reads interrupt ID from data bus\n6. CPU looks up IVT[keyboard_ID] → ISR address 3000\n7. CPU jumps to ISR at address 3000\n8. ISR reads key from INPR register into AC\n9. ISR sends key to output buffer\n10. ISR sends EOI to PIC\n11. CPU restores state from Stack (PC=1051)\n12. IE=1, resume Program A at instruction 1051"
        }
      },
      {
        id: "4.3",
        title: "Memory Hierarchy",
        theory: "Memory hierarchy organizes different storage types by speed, cost, and capacity. The core principle: faster memory costs more and is physically smaller. Modern computers use a hierarchy to balance cost and performance — fast (expensive) memory for frequently accessed data, and large (cheap) memory for bulk storage. The CPU always tries to find data in the fastest available level first.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Memory_hierarchy.svg/400px-Memory_hierarchy.svg.png",
        content: [
          {
            type: "hierarchy",
            levels: [
              { level: "CPU Registers", speed: "~0.3 ns", size: "< 1 KB" },
              { level: "L1 Cache", speed: "~1 ns", size: "32–64 KB" },
              { level: "L2 Cache", speed: "~5 ns", size: "256 KB – 4 MB" },
              { level: "L3 Cache", speed: "~20 ns", size: "4 – 64 MB" },
              { level: "Main Memory (RAM)", speed: "~100 ns", size: "4 – 64 GB" },
              { level: "SSD Storage", speed: "~0.1 ms", size: "128 GB – 4 TB" },
              { level: "HDD Storage", speed: "~10 ms", size: "1 – 20 TB" },
              { level: "Tape / Cloud", speed: "seconds+", size: "Unlimited" }
            ]
          }
        ],
        example: {
          title: "Why Hierarchy? Cost vs Speed Trade-off",
          description: "If ALL memory was register-speed SRAM:\n  Cost: ~$1,000,000 for 8 GB (impossible!)\n  Power: enormous heat, impractical\n\nIf ALL memory was HDD:\n  Every memory access: 10 ms delay\n  3 GHz CPU: only ~30,000 instr/sec\n  (vs 3 billion with cache!)\n\nThe hierarchy gives the best of both:\n  Small fast cache + large cheap RAM + huge slow disk\n  Cache exploits LOCALITY:\n  → Temporal: recently used data used again soon\n  → Spatial: nearby data accessed soon (arrays!)\n  Result: 95%+ of accesses hit L1 or L2 cache!"
        }
      },
      {
        id: "4.4",
        title: "Cache Memory",
        theory: "Cache memory is an extremely fast, small memory placed between the CPU and main RAM. It stores copies of recently and frequently accessed data. On a cache hit, the CPU gets data in ~1ns instead of ~100ns from RAM. Cache mapping determines which RAM block goes to which cache location. The cache controller uses replacement policies to manage evictions.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cache_operation_diagram.png/400px-Cache_operation_diagram.png",
        content: [
          {
            type: "mapping",
            items: [
              { name: "Direct Mapping", desc: "Each RAM block maps to exactly one cache line. Cache line = Block# mod (Cache size). Simple and fast lookup but high conflict misses when two hot blocks share a line." },
              { name: "Fully Associative", desc: "Any RAM block can go into any cache line. Maximum flexibility, fewest misses. Very expensive — hardware must search all lines simultaneously. Used only in very small caches (TLBs)." },
              { name: "Set Associative (N-way)", desc: "Cache divided into sets of N lines. Block maps to a specific set (like direct), but any line within the set (like fully associative). Best balance. Modern CPUs use 4-way, 8-way, or 16-way." },
              { name: "LRU Replacement", desc: "Least Recently Used — evict the line that was last accessed furthest in the past. Approximates optimal replacement by exploiting temporal locality. Most common policy." },
              { name: "Write-Through Policy", desc: "Every cache write also updates RAM immediately. Always consistent but slower. Good for systems that don't tolerate inconsistency (shared memory)." },
              { name: "Write-Back Policy", desc: "Writes go to cache only. RAM updated only when the cache line is evicted. Much faster (fewer RAM writes) but cache and RAM can be inconsistent. Dirty bit tracks modified lines." }
            ]
          }
        ],
        example: {
          title: "Cache Hit vs Miss: Array Access",
          description: "Cache line = 64 bytes = 16 integers (int = 4 bytes)\nint A[1000] — accessing A[0] through A[15]\n\nAccess A[0]:\n  MISS → fetch block from RAM (100ns)\n  A[0]–A[15] all loaded into one cache line\n\nAccess A[1], A[2], ..., A[15]:\n  HIT → 1ns each\n  15 × 1ns = 15ns total\n\nTotal for 16 accesses: 100 + 15 = 115ns\nWithout cache: 16 × 100ns = 1600ns\nSpeedup: 1600 / 115 ≈ 14× faster!\n\nThis is SPATIAL LOCALITY in action."
        }
      },
      {
        id: "4.5",
        title: "Virtual Memory",
        theory: "Virtual Memory is a memory management technique that gives each process the illusion of having a large, private address space — even if physical RAM is limited. The OS + MMU (Memory Management Unit) translate virtual addresses to physical addresses. Pages not currently in RAM are stored on disk and loaded on demand (demand paging). This enables multitasking and programs larger than physical RAM.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Virtual_memory.svg/400px-Virtual_memory.svg.png",
        content: [
          {
            type: "concepts",
            items: [
              { name: "Virtual Address Space", desc: "Each process gets its own virtual address space starting at 0. A 32-bit system gives each process 4 GB virtual space regardless of actual RAM." },
              { name: "Paging", desc: "Virtual space divided into fixed-size pages (typically 4 KB). Physical RAM divided into frames of same size. A page can be stored in any available frame." },
              { name: "Page Table", desc: "Per-process table mapping virtual page number (VPN) → physical frame number (PFN). Contains valid bit (in RAM?), dirty bit (modified?), reference bit (recently used?)." },
              { name: "Page Fault", desc: "Accessing a page with valid bit=0 (not in RAM). OS must: find free frame (evict if needed), load page from disk, update page table, restart the faulting instruction. Very slow — milliseconds." },
              { name: "Page Replacement (LRU)", desc: "When RAM full and new page needed, evict a page. LRU evicts the page unused longest. OS tracks reference bits. Modified (dirty) pages must be written to disk first." },
              { name: "TLB (Associative Memory)", desc: "Translation Lookaside Buffer — small fast cache (~64 entries) for recent page table entries. On TLB hit: translation in ~1ns. On miss: full page table walk (~100ns+). Typical hit rate: 95–99%." }
            ]
          }
        ],
        example: {
          title: "Address Translation: Virtual → Physical",
          description: "System: 32-bit VA, 4KB pages\nPage size = 4KB = 2^12  → offset = 12 bits\nPage number = upper 20 bits\n\nVirtual Address: 0x00403A10\n  Page Number:  0x00403  = page 1027\n  Page Offset:  0xA10    = 2576 bytes\n\nPage Table: VPN 1027 → PFN 52\n\nPhysical Address:\n  = PFN 52 × 4096 + offset 2576\n  = 212992 + 2576\n  = 0x000D4A10\n\nMMU does this translation in hardware\nautomatically for every memory access!"
        }
      },
      {
        id: "4.6",
        title: "Associative & Auxiliary Memory",
        theory: "Associative Memory (Content-Addressable Memory or CAM) is a special type of memory that is searched by its content rather than its address. It retrieves data based on a search key, comparing all locations simultaneously in parallel hardware. Auxiliary Memory is secondary storage (HDD, SSD, tape) used to extend the memory hierarchy beyond main RAM at much lower cost per bit.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/associative_memory.jpg",
        content: [
          {
            type: "concepts",
            items: [
              { name: "Associative Memory (CAM)", desc: "Searched by content, not address. All cells searched simultaneously in parallel. Extremely fast lookup. Used in TLBs, network routers (IP lookup), caches (tag comparison)." },
              { name: "Match Register", desc: "Each CAM cell has a comparator. A search key is broadcast to all cells. Cells where content matches the key set their match bit. Result: all matching addresses found instantly." },
              { name: "Hard Disk Drive (HDD)", desc: "Magnetic storage. Rotating platters + read/write heads. Very large capacity, low cost/GB. Slow access (10ms average). Used for OS, applications, user data." },
              { name: "Solid State Drive (SSD)", desc: "Flash memory, no moving parts. 100x faster than HDD (~0.1ms). More expensive per GB. Increasingly common as primary storage. No seek time." },
              { name: "Magnetic Tape", desc: "Sequential access only. Extremely large capacity. Very low cost/GB. Very slow for random access. Used for long-term archival backup and disaster recovery." },
              { name: "Optical Disc (CD/DVD/Blu-ray)", desc: "Laser-read pits and lands on spinning disc. Used for software distribution and video. Read-only (CD-ROM) or writable (CD-R/RW). Declining use due to USB drives." }
            ]
          }
        ],
        example: {
          title: "CAM vs RAM: TLB Lookup",
          description: "Searching for VPN 1027 in TLB (64 entries):\n\nRAM-based lookup:\n  Check TLB[0], TLB[1], TLB[2], ...\n  Worst case: 64 sequential comparisons\n  Time: 64 × (comparison time)\n\nCAM-based TLB:\n  Broadcast VPN=1027 to ALL 64 entries\n  All 64 comparisons happen SIMULTANEOUSLY\n  Time: 1 × (comparison time)\n  64× faster!\n\nCAM Result: TLB entry 12 matches!\n  VPN=1027 → PFN=52\n  Translation complete in single cycle.\n\nThis is why TLBs use associative (CAM) memory."
        }
      }
    ]
  }
];

// Backward compatibility
export const coaUnits = units;
