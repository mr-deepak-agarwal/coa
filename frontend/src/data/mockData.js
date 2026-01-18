// Mock Data for Computer Organization & Architecture Course

export const courseInfo = {
  title: "Computer Organization & Architecture",
  code: "BCA-52T-115",
  instructor: "Deepak Agarwal",
  company: "code.compyl",
  tagline: "Master the fundamentals of how computers work"
};

export const units = [
  {
    id: 1,
    title: "Boolean Algebra & Logic Gates",
    subtitle: "Foundation of Digital Systems",
    icon: "Gate",
    color: "from-teal-500 to-cyan-400",
    topics: [
      {
        id: "1.1",
        title: "Logic Gates",
        theory: "Logic gates are the fundamental building blocks of digital circuits. They perform basic logical operations on binary inputs (0s and 1s) to produce a single binary output.",
        content: [
          {
            type: "concept",
            title: "What are Logic Gates?",
            description: "Logic gates are electronic circuits that implement Boolean functions. They take binary inputs and produce a binary output based on a specific logical operation."
          },
          {
            type: "gates",
            items: [
              {
                name: "AND Gate",
                symbol: "A · B",
                description: "Output is 1 only when ALL inputs are 1",
                truthTable: [[0,0,0], [0,1,0], [1,0,0], [1,1,1]]
              },
              {
                name: "OR Gate",
                symbol: "A + B",
                description: "Output is 1 when ANY input is 1",
                truthTable: [[0,0,0], [0,1,1], [1,0,1], [1,1,1]]
              },
              {
                name: "NOT Gate",
                symbol: "A'",
                description: "Output is the inverse of input",
                truthTable: [[0,1], [1,0]]
              },
              {
                name: "NAND Gate",
                symbol: "(A · B)'",
                description: "Universal gate - NOT of AND",
                truthTable: [[0,0,1], [0,1,1], [1,0,1], [1,1,0]]
              },
              {
                name: "NOR Gate",
                symbol: "(A + B)'",
                description: "Universal gate - NOT of OR",
                truthTable: [[0,0,1], [0,1,0], [1,0,0], [1,1,0]]
              },
              {
                name: "XOR Gate",
                symbol: "A ⊕ B",
                description: "Output is 1 when inputs are different",
                truthTable: [[0,0,0], [0,1,1], [1,0,1], [1,1,0]]
              },
              {
                name: "XNOR Gate",
                symbol: "(A ⊕ B)'",
                description: "Output is 1 when inputs are same",
                truthTable: [[0,0,1], [0,1,0], [1,0,0], [1,1,1]]
              }
            ]
          }
        ],
        example: {
          title: "Real-World Example",
          description: "Consider a security system: The alarm sounds (output = 1) only when the door sensor detects entry (A = 1) AND the system is armed (B = 1). This is an AND gate in action!"
        }
      },
      {
        id: "1.2",
        title: "Basic Laws of Boolean Algebra",
        theory: "Boolean algebra provides the mathematical foundation for analyzing and simplifying digital circuits. These laws help in reducing complex expressions to simpler forms.",
        content: [
          {
            type: "laws",
            items: [
              {
                name: "Identity Law",
                formula: "A + 0 = A | A · 1 = A",
                explanation: "ORing with 0 or ANDing with 1 gives the variable itself"
              },
              {
                name: "Null Law",
                formula: "A + 1 = 1 | A · 0 = 0",
                explanation: "ORing with 1 gives 1, ANDing with 0 gives 0"
              },
              {
                name: "Idempotent Law",
                formula: "A + A = A | A · A = A",
                explanation: "ORing or ANDing a variable with itself gives the variable"
              },
              {
                name: "Complement Law",
                formula: "A + A' = 1 | A · A' = 0",
                explanation: "A variable OR its complement is 1, AND its complement is 0"
              },
              {
                name: "Commutative Law",
                formula: "A + B = B + A | A · B = B · A",
                explanation: "Order doesn't matter in OR and AND operations"
              },
              {
                name: "Associative Law",
                formula: "(A+B)+C = A+(B+C)",
                explanation: "Grouping doesn't matter in OR and AND operations"
              },
              {
                name: "Distributive Law",
                formula: "A·(B+C) = A·B + A·C",
                explanation: "AND distributes over OR and vice versa"
              },
              {
                name: "De Morgan's Theorem",
                formula: "(A+B)' = A'·B' | (A·B)' = A'+B'",
                explanation: "Break the bar, change the sign - fundamental for circuit design"
              }
            ]
          }
        ],
        example: {
          title: "Simplification Example",
          description: "Simplify: A + A'B\n= A + A'B\n= (A + A')(A + B) [Distributive]\n= 1·(A + B) [Complement]\n= A + B [Identity]"
        }
      },
      {
        id: "1.3",
        title: "Simplification of Boolean Algebra",
        theory: "Simplification reduces the complexity of Boolean expressions, leading to circuits with fewer gates, lower cost, and better performance.",
        content: [
          {
            type: "methods",
            items: [
              {
                name: "Algebraic Method",
                description: "Using Boolean laws step by step to reduce expressions"
              },
              {
                name: "K-Map Method",
                description: "Karnaugh maps provide a visual way to simplify expressions with 2-4 variables"
              },
              {
                name: "Quine-McCluskey",
                description: "Tabular method for simplifying expressions with many variables"
              }
            ]
          }
        ],
        example: {
          title: "K-Map Example",
          description: "For F(A,B) = Σm(0,1,3):\nK-Map shows adjacent cells can be grouped.\nResult: F = A' + B"
        }
      },
      {
        id: "1.4",
        title: "Multiplexers (MUX)",
        theory: "A multiplexer is a combinational circuit that selects one of several input signals and forwards it to a single output line based on select signals.",
        content: [
          {
            type: "concept",
            title: "How MUX Works",
            description: "Think of MUX as a digital switch. For a 4:1 MUX, you have 4 inputs (I0-I3), 2 select lines (S0,S1), and 1 output. The select lines determine which input appears at output."
          }
        ],
        example: {
          title: "4:1 MUX Example",
          description: "If S1=0, S0=1, then output Y = I1\nSelect lines act like a binary address selecting the input!"
        }
      },
      {
        id: "1.5",
        title: "Decoders & Encoders",
        theory: "Decoders convert binary information from n input lines to 2^n unique output lines. Encoders do the reverse - they convert 2^n inputs to n output lines.",
        content: [
          {
            type: "comparison",
            decoder: "n inputs → 2^n outputs (e.g., 3:8 decoder)",
            encoder: "2^n inputs → n outputs (e.g., 8:3 encoder)"
          }
        ],
        example: {
          title: "3:8 Decoder",
          description: "Input: 101 (binary 5)\nOutput: Only D5 line is HIGH (1), all others LOW (0)\nUsed in memory address decoding!"
        }
      },
      {
        id: "1.6",
        title: "Adders & Subtractors",
        theory: "Adders and subtractors are fundamental arithmetic circuits. Half adder adds two bits, full adder adds three bits (including carry). Subtractors use complement method.",
        content: [
          {
            type: "circuits",
            items: [
              {
                name: "Half Adder",
                formula: "Sum = A ⊕ B | Carry = A · B",
                description: "Adds 2 bits, produces sum and carry"
              },
              {
                name: "Full Adder",
                formula: "Sum = A ⊕ B ⊕ Cin | Cout = AB + Cin(A ⊕ B)",
                description: "Adds 3 bits including carry input"
              },
              {
                name: "Parallel Binary Adder",
                description: "Cascade of full adders to add n-bit numbers"
              },
              {
                name: "Parallel Binary Subtractor",
                description: "Uses 2's complement: A - B = A + (2's complement of B)"
              }
            ]
          }
        ],
        example: {
          title: "4-bit Addition Example",
          description: "Add 1011 + 0110:\n  1011\n+ 0110\n------\n 10001\nResult: 10001 (17 in decimal)"
        }
      }
    ]
  },
  {
    id: 2,
    title: "Sequential Logic",
    subtitle: "Memory & State Machines",
    icon: "FlipFlop",
    color: "from-amber-500 to-orange-400",
    topics: [
      {
        id: "2.1",
        title: "Flip-Flops",
        theory: "Flip-flops are fundamental memory elements that can store one bit of information. Unlike combinational circuits, their output depends on both current input and previous state.",
        content: [
          {
            type: "flipflops",
            items: [
              {
                name: "S-R Flip-Flop",
                description: "Set-Reset flip-flop. S=1 sets Q=1, R=1 resets Q=0. S=R=1 is invalid.",
                characteristic: "Q(n+1) = S + R'Q(n)"
              },
              {
                name: "D Flip-Flop",
                description: "Data flip-flop. Output Q follows input D at clock edge. Eliminates invalid state.",
                characteristic: "Q(n+1) = D"
              },
              {
                name: "J-K Flip-Flop",
                description: "Most versatile flip-flop. J=K=1 toggles output. No invalid state.",
                characteristic: "Q(n+1) = JQ'(n) + K'Q(n)"
              },
              {
                name: "T Flip-Flop",
                description: "Toggle flip-flop. T=1 toggles output, T=0 holds state. Used in counters.",
                characteristic: "Q(n+1) = T ⊕ Q(n)"
              }
            ]
          }
        ],
        example: {
          title: "J-K Flip-Flop Example",
          description: "J=1, K=0, Q=0 → Q(next)=1 (SET)\nJ=0, K=1, Q=1 → Q(next)=0 (RESET)\nJ=1, K=1, Q=0 → Q(next)=1 (TOGGLE)"
        }
      },
      {
        id: "2.2",
        title: "Clocked Flip-Flops",
        theory: "Clocked flip-flops change state only at specific clock edges (rising or falling), providing synchronization in digital systems.",
        content: [
          {
            type: "concept",
            title: "Edge Triggering",
            description: "Positive edge triggered: Changes on rising edge (0→1)\nNegative edge triggered: Changes on falling edge (1→0)"
          }
        ],
        example: {
          title: "Synchronous Operation",
          description: "All flip-flops in a system change state at the same clock edge, ensuring coordinated operation."
        }
      },
      {
        id: "2.3",
        title: "Race Around Condition",
        theory: "In J-K flip-flop, when J=K=1 and clock is HIGH for too long, output may toggle multiple times unpredictably. This is the race around condition.",
        content: [
          {
            type: "problem",
            description: "If clock pulse width > propagation delay, multiple toggles occur"
          }
        ],
        example: {
          title: "Solution",
          description: "Use edge-triggering or Master-Slave configuration to prevent race around."
        }
      },
      {
        id: "2.4",
        title: "Master-Slave Flip-Flop",
        theory: "Master-slave configuration uses two flip-flops in series. Master captures input on one edge, slave transfers to output on opposite edge, eliminating race condition.",
        content: [
          {
            type: "concept",
            title: "Working",
            description: "Clock HIGH: Master active, Slave holds\nClock LOW: Master holds, Slave transfers\nResult: Output changes only once per clock cycle"
          }
        ],
        example: {
          title: "Timing Diagram",
          description: "Master samples at positive edge, Slave outputs at negative edge. Clean, race-free operation!"
        }
      },
      {
        id: "2.5",
        title: "Register Transfer Language (RTL)",
        theory: "RTL is a symbolic notation used to describe the micro-operations and data transfers between registers in a digital system.",
        content: [
          {
            type: "syntax",
            items: [
              { symbol: "R1 ← R2", meaning: "Transfer contents of R2 to R1" },
              { symbol: "R1 ← R1 + R2", meaning: "Add R1 and R2, store in R1" },
              { symbol: "P: R1 ← R2", meaning: "If P=1, transfer R2 to R1" }
            ]
          }
        ],
        example: {
          title: "RTL Example",
          description: "T0: AR ← PC\nT1: IR ← M[AR], PC ← PC + 1\nThis describes instruction fetch cycle!"
        }
      },
      {
        id: "2.6",
        title: "Bus and Memory Transfer",
        theory: "A bus is a shared communication path that allows data transfer between multiple components. Memory transfer involves reading from or writing to memory locations.",
        content: [
          {
            type: "concept",
            title: "Bus System",
            description: "Common bus reduces connections. For n registers with k bits each, bus needs k lines + selection logic instead of n×k individual connections."
          }
        ],
        example: {
          title: "Memory Read",
          description: "DR ← M[AR]\nData from memory location pointed by AR is transferred to Data Register."
        }
      },
      {
        id: "2.7",
        title: "Arithmetic Micro-operations",
        theory: "Arithmetic micro-operations perform arithmetic operations on data stored in registers: addition, subtraction, increment, decrement.",
        content: [
          {
            type: "operations",
            items: [
              "R3 ← R1 + R2 (Add)",
              "R3 ← R1 - R2 (Subtract using 2's complement)",
              "R1 ← R1 + 1 (Increment)",
              "R1 ← R1 - 1 (Decrement)"
            ]
          }
        ],
        example: {
          title: "2's Complement Subtraction",
          description: "A - B = A + (B' + 1)\nWhere B' is 1's complement of B"
        }
      },
      {
        id: "2.8",
        title: "Logic Micro-operations",
        theory: "Logic micro-operations perform bitwise logical operations on data in registers: AND, OR, XOR, complement.",
        content: [
          {
            type: "operations",
            items: [
              "R1 ← R1 ∧ R2 (AND)",
              "R1 ← R1 ∨ R2 (OR)",
              "R1 ← R1 ⊕ R2 (XOR)",
              "R1 ← R1' (Complement)"
            ]
          }
        ],
        example: {
          title: "Selective Set",
          description: "To set bits 2 and 5 of register R1:\nR1 ← R1 ∨ 00100100\nOR with mask sets desired bits!"
        }
      },
      {
        id: "2.9",
        title: "Shift Micro-operations",
        theory: "Shift operations move bits left or right within a register. Types include logical shift, circular shift (rotate), and arithmetic shift.",
        content: [
          {
            type: "shifts",
            items: [
              { name: "Logical Shift Left", desc: "Shift bits left, insert 0 at right (multiply by 2)" },
              { name: "Logical Shift Right", desc: "Shift bits right, insert 0 at left (divide by 2)" },
              { name: "Circular Shift", desc: "Rotate bits, no data loss" },
              { name: "Arithmetic Shift Right", desc: "Preserve sign bit for signed numbers" }
            ]
          }
        ],
        example: {
          title: "Left Shift Example",
          description: "R1 = 00001100 (12)\nShift Left: 00011000 (24)\nMultiplication by 2!"
        }
      },
      {
        id: "2.10",
        title: "Arithmetic Logic Shift Unit (ALSU)",
        theory: "ALSU combines arithmetic, logic, and shift operations in a single unit. Selection inputs determine which operation is performed.",
        content: [
          {
            type: "concept",
            title: "ALU Design",
            description: "Typically has 4-bit function select field allowing 16 different operations. Combines adder, logic gates, and shifter with multiplexers."
          }
        ],
        example: {
          title: "ALU Operations",
          description: "S=00: Arithmetic ops\nS=01: Logic ops\nS=10: Shift ops"
        }
      }
    ]
  },
  {
    id: 3,
    title: "Computer Organization & Design",
    subtitle: "CPU Architecture & Instructions",
    icon: "CPU",
    color: "from-emerald-500 to-green-400",
    topics: [
      {
        id: "3.1",
        title: "Instruction Codes",
        theory: "Instruction codes are binary patterns that tell the CPU what operation to perform. They contain operation code (opcode) and operand specifications.",
        content: [
          {
            type: "structure",
            fields: [
              { name: "Opcode", bits: "4 bits", purpose: "Specifies operation (ADD, SUB, etc.)" },
              { name: "Address", bits: "12 bits", purpose: "Memory location of operand" },
              { name: "Mode", bits: "1 bit", purpose: "Direct (0) or Indirect (1) addressing" }
            ]
          }
        ],
        example: {
          title: "16-bit Instruction Format",
          description: "[I][OPCODE][ADDRESS]\n I=0: Direct addressing\n I=1: Indirect addressing"
        }
      },
      {
        id: "3.2",
        title: "Computer Registers",
        theory: "Registers are high-speed storage locations in the CPU used to hold data, addresses, and control information during instruction execution.",
        content: [
          {
            type: "registers",
            items: [
              { name: "AC (Accumulator)", bits: 16, purpose: "Main register for arithmetic & logic" },
              { name: "DR (Data Register)", bits: 16, purpose: "Holds memory operand" },
              { name: "AR (Address Register)", bits: 12, purpose: "Holds memory address" },
              { name: "IR (Instruction Register)", bits: 16, purpose: "Holds current instruction" },
              { name: "PC (Program Counter)", bits: 12, purpose: "Address of next instruction" },
              { name: "TR (Temporary Register)", bits: 16, purpose: "Temporary storage" },
              { name: "INPR (Input Register)", bits: 8, purpose: "Input character" },
              { name: "OUTR (Output Register)", bits: 8, purpose: "Output character" }
            ]
          }
        ],
        example: {
          title: "Register Usage",
          description: "Instruction fetch: PC→AR, M[AR]→IR, PC+1→PC\nRegisters orchestrate the entire operation!"
        }
      },
      {
        id: "3.3",
        title: "Common Bus System",
        theory: "The common bus system allows multiple registers to share a single communication path, reducing the number of connections needed.",
        content: [
          {
            type: "concept",
            title: "Bus Selection",
            description: "3-bit select code (S2,S1,S0) chooses which register outputs to bus. Only one register can output at a time, but any can receive."
          }
        ],
        example: {
          title: "Bus Operation",
          description: "S2S1S0=001: AR outputs to bus\nS2S1S0=010: PC outputs to bus\nSimple, efficient data transfer!"
        }
      },
      {
        id: "3.4",
        title: "Computer Instructions",
        theory: "Computer instructions are classified into three types: Memory Reference, Register Reference, and Input-Output instructions.",
        content: [
          {
            type: "types",
            items: [
              { type: "Memory Reference", opcode: "0xxx", desc: "AND, ADD, LDA, STA, BUN, BSA, ISZ" },
              { type: "Register Reference", opcode: "7xxx", desc: "CLA, CLE, CMA, CME, CIR, CIL, INC, SPA" },
              { type: "I/O Reference", opcode: "Fxxx", desc: "INP, OUT, SKI, SKO, ION, IOF" }
            ]
          }
        ],
        example: {
          title: "ADD Instruction",
          description: "ADD (opcode 1): AC ← AC + M[AR]\nAdds memory content to accumulator"
        }
      },
      {
        id: "3.5",
        title: "Instruction Formats",
        theory: "Instruction format defines how bits are allocated for different fields in an instruction word.",
        content: [
          {
            type: "formats",
            items: [
              { name: "Three-Address", example: "ADD R1, R2, R3 (R1←R2+R3)" },
              { name: "Two-Address", example: "ADD R1, R2 (R1←R1+R2)" },
              { name: "One-Address", example: "ADD X (AC←AC+M[X])" },
              { name: "Zero-Address", example: "ADD (Stack-based)" }
            ]
          }
        ],
        example: {
          title: "Basic Computer Format",
          description: "16-bit instruction:\n[1 bit I][3 bit opcode][12 bit address]\nFor register reference: [1][111][12 bit operation code]"
        }
      },
      {
        id: "3.6",
        title: "Instruction Cycle",
        theory: "The instruction cycle is the complete process of fetching an instruction from memory, decoding it, and executing it.",
        content: [
          {
            type: "phases",
            items: [
              { phase: "Fetch", desc: "Get instruction from memory" },
              { phase: "Decode", desc: "Interpret the opcode" },
              { phase: "Execute", desc: "Perform the operation" },
              { phase: "Store", desc: "Write result if needed" }
            ]
          }
        ],
        example: {
          title: "Timing Diagram",
          description: "T0: AR←PC\nT1: IR←M[AR], PC←PC+1\nT2: Decode IR, AR←IR(0-11)\nT3-T5: Execute"
        }
      },
      {
        id: "3.7",
        title: "Fetch and Decode",
        theory: "Fetch retrieves the instruction from memory using PC. Decode analyzes the opcode to determine what operation to perform.",
        content: [
          {
            type: "sequence",
            steps: [
              "T0: AR ← PC (Put PC address on address bus)",
              "T1: IR ← M[AR], PC ← PC + 1 (Read memory, increment PC)",
              "T2: D0...D7 ← Decode IR(12-14), AR ← IR(0-11), I ← IR(15)"
            ]
          }
        ],
        example: {
          title: "Decoder Output",
          description: "If IR(12-14)=001, then D1=1\nThis indicates ADD operation!"
        }
      },
      {
        id: "3.8",
        title: "Register Reference Instructions",
        theory: "Register reference instructions operate on registers and flags without accessing memory. Identified by opcode 111 with I=0.",
        content: [
          {
            type: "instructions",
            items: [
              { name: "CLA", action: "AC ← 0 (Clear AC)" },
              { name: "CLE", action: "E ← 0 (Clear E flag)" },
              { name: "CMA", action: "AC ← AC' (Complement AC)" },
              { name: "INC", action: "AC ← AC + 1 (Increment AC)" },
              { name: "CIR", action: "Circular shift right AC and E" },
              { name: "CIL", action: "Circular shift left AC and E" }
            ]
          }
        ],
        example: {
          title: "CIR Operation",
          description: "Before: E=1, AC=00110100\nAfter CIR: E=0, AC=10011010\nE bit joins the rotation!"
        }
      },
      {
        id: "3.9",
        title: "Addressing Modes",
        theory: "Addressing modes specify how to find the operand for an instruction. Different modes provide flexibility in accessing data.",
        content: [
          {
            type: "modes",
            items: [
              { name: "Immediate", desc: "Operand in instruction itself", example: "ADD #5" },
              { name: "Direct", desc: "Address of operand given", example: "ADD 200" },
              { name: "Indirect", desc: "Address points to address of operand", example: "ADD @200" },
              { name: "Register", desc: "Operand in register", example: "ADD R1" },
              { name: "Register Indirect", desc: "Register contains address", example: "ADD (R1)" },
              { name: "Indexed", desc: "Base + Index gives address", example: "ADD 100(X)" }
            ]
          }
        ],
        example: {
          title: "Indirect Addressing",
          description: "If M[200]=500 and M[500]=42\nLDA @200 loads 42 into AC\n200 points to 500, which contains data!"
        }
      },
      {
        id: "3.10",
        title: "CPU Design",
        theory: "CPU design involves creating the control unit and datapath to execute instructions. The control unit generates signals to coordinate data movement.",
        content: [
          {
            type: "components",
            items: [
              { name: "Control Unit", desc: "Generates timing and control signals" },
              { name: "ALU", desc: "Performs arithmetic and logic operations" },
              { name: "Registers", desc: "Fast storage for data and addresses" },
              { name: "Internal Bus", desc: "Data transfer between components" }
            ]
          }
        ],
        example: {
          title: "Simple CPU Execution",
          description: "ADD instruction:\n1. Fetch instruction\n2. Decode opcode\n3. Read operand from memory\n4. ALU performs addition\n5. Store result in AC"
        }
      }
    ]
  },
  {
    id: 4,
    title: "I/O & Memory Organization",
    subtitle: "Interfaces & Storage Hierarchy",
    icon: "Memory",
    color: "from-rose-500 to-pink-400",
    topics: [
      {
        id: "4.1",
        title: "Input-Output Interfaces",
        theory: "I/O interfaces provide communication between the CPU and peripheral devices. They handle data format conversion and timing differences.",
        content: [
          {
            type: "concept",
            title: "Interface Functions",
            description: "1. Data buffering (speed matching)\n2. Format conversion (serial↔parallel)\n3. Device selection and addressing\n4. Status and control signal handling"
          }
        ],
        example: {
          title: "Keyboard Interface",
          description: "Keyboard sends serial data, interface:\n1. Converts to parallel (8-bit ASCII)\n2. Buffers until CPU ready\n3. Signals CPU via interrupt"
        }
      },
      {
        id: "4.2",
        title: "Asynchronous Data Transfer",
        theory: "Asynchronous transfer doesn't use a common clock. Instead, handshaking signals coordinate data transfer between devices operating at different speeds.",
        content: [
          {
            type: "handshaking",
            steps: [
              "1. Source places data and asserts Data Valid",
              "2. Destination reads data and asserts Data Accepted",
              "3. Source removes data and negates Data Valid",
              "4. Destination negates Data Accepted"
            ]
          }
        ],
        example: {
          title: "Strobe vs Handshaking",
          description: "Strobe: Single control line, simpler but less reliable\nHandshaking: Two lines, ensures successful transfer"
        }
      },
      {
        id: "4.3",
        title: "Programmed I/O",
        theory: "In programmed I/O, the CPU actively monitors I/O status through polling. CPU is fully involved in every data transfer.",
        content: [
          {
            type: "process",
            steps: [
              "1. CPU checks device status (busy-wait loop)",
              "2. When ready, CPU initiates transfer",
              "3. CPU transfers data byte by byte",
              "4. CPU checks for completion"
            ]
          }
        ],
        example: {
          title: "Polling Loop",
          description: "LOOP: IN STATUS\n      AND READY_BIT\n      JZ LOOP\n      IN DATA\nCPU waits in loop until device ready!"
        }
      },
      {
        id: "4.4",
        title: "Interrupt-Driven I/O",
        theory: "Interrupts allow I/O devices to signal the CPU when they need attention. CPU can do other work instead of polling.",
        content: [
          {
            type: "sequence",
            steps: [
              "1. CPU enables interrupts and continues work",
              "2. Device signals interrupt when ready",
              "3. CPU saves state, jumps to ISR",
              "4. ISR handles I/O, returns to main program"
            ]
          }
        ],
        example: {
          title: "Interrupt Service Routine",
          description: "Keyboard interrupt:\n1. Save registers\n2. Read character from port\n3. Store in buffer\n4. Restore registers\n5. Return from interrupt"
        }
      },
      {
        id: "4.5",
        title: "Direct Memory Access (DMA)",
        theory: "DMA allows I/O devices to transfer data directly to/from memory without CPU involvement, freeing CPU for other tasks.",
        content: [
          {
            type: "operation",
            steps: [
              "1. CPU programs DMA controller (address, count, direction)",
              "2. DMA requests bus from CPU (bus request)",
              "3. CPU grants bus (bus grant)",
              "4. DMA transfers data directly to memory",
              "5. DMA interrupts CPU when done"
            ]
          }
        ],
        example: {
          title: "Disk DMA Transfer",
          description: "Reading 1KB from disk:\nWithout DMA: 1024 interrupts\nWith DMA: 1 interrupt after entire block transferred!"
        }
      },
      {
        id: "4.6",
        title: "Memory Hierarchy",
        theory: "Memory hierarchy organizes storage by speed, cost, and capacity. Faster memories are smaller and more expensive, placed closer to CPU.",
        content: [
          {
            type: "hierarchy",
            levels: [
              { level: "Registers", speed: "<1ns", size: "~100 bytes" },
              { level: "Cache (L1/L2/L3)", speed: "1-10ns", size: "KB-MB" },
              { level: "Main Memory", speed: "50-100ns", size: "GB" },
              { level: "SSD/HDD", speed: "μs-ms", size: "TB" }
            ]
          }
        ],
        example: {
          title: "Locality Principle",
          description: "Programs access nearby memory (spatial) and recent memory (temporal) repeatedly. Cache exploits this!"
        }
      },
      {
        id: "4.7",
        title: "Main Memory",
        theory: "Main memory (RAM) is the primary storage accessible by CPU. It's volatile, losing data when power is off.",
        content: [
          {
            type: "types",
            items: [
              { name: "SRAM", desc: "Fast, expensive, used for cache" },
              { name: "DRAM", desc: "Slower, cheaper, used for main memory" },
              { name: "ROM", desc: "Read-only, non-volatile, for firmware" }
            ]
          }
        ],
        example: {
          title: "Memory Address Calculation",
          description: "For 16KB memory with 12-bit address:\n2^12 = 4096 locations\nEach location = 4 bytes (32-bit)\n4096 × 4 = 16KB"
        }
      },
      {
        id: "4.8",
        title: "Auxiliary Memory",
        theory: "Auxiliary (secondary) memory provides large, non-volatile storage. Includes hard disks, SSDs, optical drives.",
        content: [
          {
            type: "comparison",
            items: [
              { device: "HDD", access: "Sequential/Random", speed: "5-10ms" },
              { device: "SSD", access: "Random", speed: "0.1ms" },
              { device: "Optical", access: "Sequential", speed: "100ms" }
            ]
          }
        ],
        example: {
          title: "Disk Organization",
          description: "Track: Circular path on platter\nSector: Arc of track (~512B)\nCylinder: Same track on all platters"
        }
      },
      {
        id: "4.9",
        title: "Associative Memory",
        theory: "Associative memory (CAM) is searched by content rather than address. Used in TLBs, cache tag matching, and network routers.",
        content: [
          {
            type: "concept",
            title: "Content Addressing",
            description: "All memory cells compared simultaneously with search key. Match signals indicate which words contain the key."
          }
        ],
        example: {
          title: "CAM Search",
          description: "Search key: 1010\nAll words checked in parallel\nMatch output shows word 5 matches\nO(1) search time!"
        }
      },
      {
        id: "4.10",
        title: "Cache Memory",
        theory: "Cache is fast, small memory between CPU and main memory. It stores recently accessed data to reduce average access time.",
        content: [
          {
            type: "mapping",
            items: [
              { name: "Direct Mapped", desc: "Each block maps to one cache line" },
              { name: "Fully Associative", desc: "Block can go anywhere in cache" },
              { name: "Set Associative", desc: "Block maps to a set, can go in any line in set" }
            ]
          }
        ],
        example: {
          title: "Cache Hit/Miss",
          description: "Hit: Data found in cache (fast!)\nMiss: Data not in cache, fetch from memory\nHit Rate = Hits / Total Accesses"
        }
      },
      {
        id: "4.11",
        title: "Virtual Memory",
        theory: "Virtual memory creates illusion of large memory by using disk. Programs use virtual addresses translated to physical addresses.",
        content: [
          {
            type: "concepts",
            items: [
              { name: "Page", desc: "Fixed-size block of virtual memory (typically 4KB)" },
              { name: "Page Table", desc: "Maps virtual pages to physical frames" },
              { name: "TLB", desc: "Cache for page table entries" },
              { name: "Page Fault", desc: "Page not in memory, must load from disk" }
            ]
          }
        ],
        example: {
          title: "Address Translation",
          description: "Virtual: [Page Number | Offset]\nPage table gives Frame Number\nPhysical: [Frame Number | Offset]"
        }
      },
      {
        id: "4.12",
        title: "Types of Interrupts",
        theory: "Interrupts are classified by source: hardware (external), software (internal), and exceptions (errors).",
        content: [
          {
            type: "types",
            items: [
              { name: "Hardware Interrupt", desc: "From I/O devices (keyboard, timer)" },
              { name: "Software Interrupt", desc: "INT instruction, system calls" },
              { name: "Exception", desc: "Divide by zero, invalid opcode" }
            ]
          }
        ],
        example: {
          title: "Interrupt Vector Table",
          description: "Each interrupt has unique number\nIVT[n] = Address of handler for interrupt n\nCPU jumps to handler automatically"
        }
      },
      {
        id: "4.13",
        title: "Priority Interrupts",
        theory: "When multiple interrupts occur, priority determines which is serviced first. Higher priority interrupts can preempt lower ones.",
        content: [
          {
            type: "methods",
            items: [
              { name: "Daisy Chain", desc: "Hardware priority, first in chain wins" },
              { name: "Parallel Priority", desc: "Priority encoder selects highest" },
              { name: "Software Poll", desc: "CPU checks devices in priority order" }
            ]
          }
        ],
        example: {
          title: "Nested Interrupts",
          description: "Low priority ISR running\nHigh priority interrupt occurs\nCurrent ISR suspended\nHigh priority ISR executes\nReturns to low priority ISR"
        }
      }
    ]
  }
];

export const syllabusSummary = {
  totalUnits: 4,
  totalTopics: 40,
  focusAreas: [
    "Digital Logic Fundamentals",
    "Sequential Circuits & Memory",
    "CPU Architecture",
    "I/O Systems & Memory Hierarchy"
  ]
};