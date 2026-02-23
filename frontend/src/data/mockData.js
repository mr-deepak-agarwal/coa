export const courseInfo = {
  title: "Computer Organization & Architecture",
  code: "BCA-52T-115",
  description: "Interactive Smart Learning Platform for COA",
  tagline: "From Logic Gates to Virtual Memory — Master COA Interactively"
};

export const units = [
  /* ═══════════════════════════════════════════════════════
     UNIT I — Boolean Algebra & Combinational Logic
  ═══════════════════════════════════════════════════════ */
  {
    id: 1,
    title: "Boolean Algebra & Combinational Logic",
    subtitle: "Logic Gates, Boolean Laws, Multiplexers, Decoders, Adders",
    icon: "Gate",
    color: "from-slate-700 to-slate-900",
    topics: [
      {
        id: "1.1",
        title: "Logic Gates",
        theory: "Logic gates are the fundamental building blocks of all digital circuits and systems. A logic gate is an electronic device that performs a basic logical operation on one or more binary inputs to produce a single binary output.",
        theoryParagraphs: [
          "Logic gates are the fundamental building blocks of all digital circuits and systems. A logic gate is an electronic device that performs a basic logical operation on one or more binary inputs (either 0 or 1) to produce a single binary output. In digital electronics, the value 0 represents LOW voltage (approximately 0V) and 1 represents HIGH voltage (approximately 3.3V or 5V depending on the logic family used).",
          "All modern computers — from simple microcontrollers to complex processors like Intel Core i9 — are built by combining millions (and now billions) of logic gates. Understanding logic gates is therefore the first and most essential step in understanding how computers work at the hardware level.",
          "According to the University of Rajasthan BCA-52T-115 syllabus, students must understand the working, symbols, Boolean expressions, and truth tables of all basic gates. The seven fundamental gates are AND, OR, NOT, NAND, NOR, XOR, and XNOR. NAND and NOR are called Universal Gates because any logic function can be implemented using only these gates.",
          "Logic gates are implemented using transistors in integrated circuit technology. In modern CMOS (Complementary Metal-Oxide-Semiconductor) technology, a single NAND gate requires as few as 4 transistors, while an entire processor may contain billions of such transistors on a chip just a few centimetres wide."
        ],
        keyPoints: [
          "Logic gates operate on binary values: 0 (LOW) and 1 (HIGH).",
          "NAND and NOR are Universal Gates — any Boolean function can be built from either one alone.",
          "AND gate: Output = 1 only when ALL inputs are 1.",
          "OR gate: Output = 1 when AT LEAST ONE input is 1.",
          "NOT gate (Inverter): Output is always the complement of input.",
          "XOR gate: Output = 1 when inputs are DIFFERENT (odd number of 1s).",
          "De Morgan's Theorem: ¬(A·B) = Ā+B̄ and ¬(A+B) = Ā·B̄ — fundamental for converting gate types.",
          "Truth tables list ALL possible input combinations and their outputs."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Logic_gates_world%2C_simplified_symbols.svg/640px-Logic_gates_world%2C_simplified_symbols.svg.png",
            caption: "Logic Gate Symbols & Notation",
            whiteBg: true
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/LogicGates.svg/640px-LogicGates.svg.png",
            caption: "All Basic Gate Symbols",
            whiteBg: true
          }
        ],
        content: [
          {
            type: "gates",
            items: [
              { name: "AND Gate", symbol: "A · B", description: "Output is 1 only when ALL inputs are 1. Uses multiplication analogy. Essential for checking multiple conditions simultaneously.", truthTable: [[0,0,0],[0,1,0],[1,0,0],[1,1,1]] },
              { name: "OR Gate", symbol: "A + B", description: "Output is 1 when AT LEAST ONE input is 1. Uses addition analogy. Essential for alternative conditions.", truthTable: [[0,0,0],[0,1,1],[1,0,1],[1,1,1]] },
              { name: "NOT Gate", symbol: "Ā (A-bar)", description: "Inverts the single input. Output is always the complement. Also called an Inverter.", truthTable: [[0,1],[1,0]] },
              { name: "NAND Gate", symbol: "¬(A·B)", description: "Universal Gate. Output = complement of AND. Output is 0 ONLY when all inputs are 1. Any circuit can be built using only NANDs.", truthTable: [[0,0,1],[0,1,1],[1,0,1],[1,1,0]] },
              { name: "NOR Gate", symbol: "¬(A+B)", description: "Universal Gate. Output = complement of OR. Output is 1 ONLY when all inputs are 0.", truthTable: [[0,0,1],[0,1,0],[1,0,0],[1,1,0]] },
              { name: "XOR Gate", symbol: "A ⊕ B", description: "Exclusive OR. Output = 1 when inputs are DIFFERENT. Used in adders and parity generators.", truthTable: [[0,0,0],[0,1,1],[1,0,1],[1,1,0]] }
            ]
          }
        ],
        example: {
          title: "Real-World Example: Security Door System",
          description: `Problem: A secure room opens ONLY when a valid keycard is swiped (K=1) AND the alarm is not triggered (A=0).

Gate needed: Output = K AND (NOT A)

Boolean expression: F = K · Ā

Truth Table:
K  A | Ā | F = K·Ā
0  0 | 1 |   0       (No card, door closed)
0  1 | 0 |   0       (No card, door closed)
1  0 | 1 |   1       ← Door OPENS
1  1 | 0 |   0       (Alarm active, door stays locked)

Circuit: K ──────┐
                 AND ──── F (Door)
A ── NOT ────────┘

This is how real electronic access control works!`,
          note: "This example is frequently asked in University of Rajasthan examinations. Always show the truth table when asked to 'design a circuit'."
        }
      },

      {
        id: "1.2",
        title: "Boolean Algebra Laws",
        theory: "Boolean Algebra is the mathematical framework for analyzing and designing digital circuits using binary variables.",
        theoryParagraphs: [
          "Boolean Algebra was developed by the English mathematician George Boole in his landmark 1854 work 'An Investigation of the Laws of Thought'. It provides a mathematical system for manipulating logical expressions using binary variables (0 and 1) and three fundamental operations: AND (·), OR (+), and NOT (¬ or overbar).",
          "In digital circuit design, every logic circuit can be represented as a Boolean expression, and every Boolean expression can be simplified using Boolean algebra laws. This simplification is crucial because a simpler expression requires fewer logic gates, which means lower cost, smaller chip area, lower power consumption, and higher speed.",
          "The University of Rajasthan syllabus emphasizes the ability to: (1) state and prove all Boolean laws, (2) use De Morgan's theorems to convert between AND-OR and NAND-NAND forms, (3) simplify expressions to their minimal form, and (4) implement simplified expressions as logic circuits.",
          "Karnaugh Maps (K-maps) are a graphical method for simplifying Boolean expressions that complements algebraic methods. They provide a visual way to identify and eliminate redundant terms by grouping adjacent cells (groups of 1, 2, 4, 8 minterms). The University syllabus requires students to use both algebraic and K-map methods."
        ],
        keyPoints: [
          "Boolean Algebra variables have only two values: 0 (FALSE) and 1 (TRUE).",
          "De Morgan's Theorem is the most frequently tested law — must be memorized and applied correctly.",
          "Simplification reduces gate count: fewer gates = cheaper, faster, lower power circuit.",
          "SOP (Sum of Products): F = AB + BC + AC — OR of ANDed terms.",
          "POS (Product of Sums): F = (A+B)(B+C) — AND of ORed terms.",
          "Dual principle: Interchange AND↔OR and 0↔1 to get the dual of any expression.",
          "Complement of a function: Apply De Morgan's law repeatedly until each literal is complemented.",
          "Canonical forms (minterms/maxterms) are standard ways to express any Boolean function."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Karnaugh_map_KV_4mal4_de.svg/400px-Karnaugh_map_KV_4mal4_de.svg.png",
            caption: "4-Variable Karnaugh Map Layout",
            whiteBg: true
          }
        ],
        content: [
          {
            type: "laws",
            items: [
              { name: "Identity Law", formula: "A + 0 = A    |    A · 1 = A", explanation: "Adding 0 (OR with 0) or multiplying by 1 (AND with 1) does not change the variable's value." },
              { name: "Null (Annihilator) Law", formula: "A + 1 = 1    |    A · 0 = 0", explanation: "ORing with 1 always gives 1 regardless of A. ANDing with 0 always gives 0 regardless of A." },
              { name: "Idempotent Law", formula: "A + A = A    |    A · A = A", explanation: "A variable ORed or ANDed with itself equals itself. Eliminates duplicate terms." },
              { name: "Complement Law", formula: "A + Ā = 1    |    A · Ā = 0", explanation: "A variable ORed with its complement always gives 1. ANDed with its complement always gives 0." },
              { name: "Double Complementation", formula: "¬(¬A) = A", explanation: "Complementing a variable twice returns it to its original value. Two NOTs cancel out." },
              { name: "Commutative Law", formula: "A+B = B+A    |    A·B = B·A", explanation: "Order of operands does not affect the result, just like addition and multiplication in regular algebra." },
              { name: "Associative Law", formula: "(A+B)+C = A+(B+C)    |    (A·B)·C = A·(B·C)", explanation: "Grouping of operands does not affect the result. Allows rearranging parentheses freely." },
              { name: "Distributive Law", formula: "A·(B+C) = A·B + A·C", explanation: "AND distributes over OR. This is identical to regular algebra. The reverse: A+B·C = (A+B)·(A+C) has no regular algebra equivalent." },
              { name: "De Morgan's Theorem 1", formula: "¬(A · B) = Ā + B̄", explanation: "The complement of an AND expression equals the OR of the complements. Break the bar, change the operator." },
              { name: "De Morgan's Theorem 2", formula: "¬(A + B) = Ā · B̄", explanation: "The complement of an OR expression equals the AND of the complements. Break the bar, change the operator." },
              { name: "Absorption Law", formula: "A + A·B = A    |    A·(A+B) = A", explanation: "The first term 'absorbs' the second. The B term becomes redundant and can be eliminated." },
              { name: "Consensus Theorem", formula: "A·B + Ā·C + B·C = A·B + Ā·C", explanation: "The term B·C is redundant (consensus term) and can be eliminated. Used in simplification." }
            ]
          }
        ],
        example: {
          title: "Simplification using De Morgan's and Absorption Law",
          description: `Problem: Simplify F = A·B + A·B̄ + Ā·B

Step 1: Group first two terms
  F = A·(B + B̄) + Ā·B

Step 2: Apply Complement Law: B + B̄ = 1
  F = A·1 + Ā·B

Step 3: Apply Identity Law: A·1 = A
  F = A + Ā·B

Step 4: Apply Absorption: A + Ā·B = A + B
  (Proof: A + Ā·B = (A+Ā)·(A+B) = 1·(A+B) = A+B)
  F = A + B  ✓

ORIGINAL: 3 AND gates + 2 OR gates + 1 NOT gate = 6 gates
SIMPLIFIED: 1 OR gate = 1 gate

Savings: 5 gates eliminated by simplification!`,
          note: "Simplification questions carry 5-7 marks in University of Rajasthan exams. Always show each step clearly with the law name applied."
        }
      },

      {
        id: "1.3",
        title: "Multiplexer (MUX)",
        theory: "A Multiplexer is a combinational circuit that selects one of 2ⁿ input lines and routes it to a single output line based on n select inputs.",
        theoryParagraphs: [
          "A Multiplexer (MUX), also called a Data Selector, is a combinational logic circuit that selects one of several input signals and forwards the selected input to the output. The selection is controlled by a set of selection lines (also called address or control lines). A multiplexer with n selection lines can select among 2ⁿ input lines.",
          "The term 'multiplexer' comes from the concept of multiplexing in telecommunications — transmitting multiple signals over a single communication channel. In digital systems, MUXes serve a similar purpose: routing one of many data sources to a single destination such as a bus or processing unit.",
          "Multiplexers have a very important property: they are function generators. Any Boolean function of n variables can be implemented using a 2ⁿ-to-1 MUX. This makes them extremely versatile components in digital design. For example, any 3-variable Boolean function can be implemented with a single 8-to-1 MUX.",
          "In the University of Rajasthan syllabus, students must understand the 2-to-1 and 4-to-1 MUX in detail including their Boolean expressions, truth tables, logic circuit implementations, and applications. The concept of using MUX as a universal logic module is also important."
        ],
        keyPoints: [
          "MUX = Data Selector. Selects 1 of 2ⁿ inputs based on n select lines.",
          "2-to-1 MUX: 1 select line, 2 inputs. Output Y = S'I₀ + SI₁",
          "4-to-1 MUX: 2 select lines, 4 inputs. 16-to-1 MUX: 4 select lines, 16 inputs.",
          "Applications: Data routing, parallel-to-serial conversion, function implementation.",
          "Any n-variable Boolean function can be implemented with a 2ⁿ-to-1 MUX.",
          "Enable input: When Enable=0, output is disabled (all 0). Allows cascading MUXes.",
          "MUX is used in CPU to select between PC+1 and branch target address."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mux_from_gates.svg/400px-Mux_from_gates.svg.png",
            caption: "2-to-1 MUX Gate Implementation",
            whiteBg: true
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Multiplexer_4-to-1.svg/400px-Multiplexer_4-to-1.svg.png",
            caption: "4-to-1 Multiplexer Symbol",
            whiteBg: true
          }
        ],
        content: [
          {
            type: "concepts",
            items: [
              { name: "2-to-1 MUX", desc: "n=1 select line (S), 2 inputs (I₀, I₁), 1 output (Y). Boolean Expression: Y = S'·I₀ + S·I₁. When S=0, Y=I₀. When S=1, Y=I₁. Gate implementation: 2 AND gates + 1 OR gate + 1 NOT gate." },
              { name: "4-to-1 MUX", desc: "n=2 select lines (S₁, S₀), 4 inputs (I₀–I₃). Output: Y = S₁'S₀'I₀ + S₁'S₀I₁ + S₁S₀'I₂ + S₁S₀I₃. Requires 4 AND gates + 1 OR gate + 2 NOT gates." },
              { name: "8-to-1 MUX", desc: "n=3 select lines, 8 inputs. Used in larger data routing. Can implement any 3-variable Boolean function by connecting function minterms to inputs." },
              { name: "MUX as Function Generator", desc: "To implement F(A,B,C): connect select lines to A,B,C. For each select combination (minterm), connect input line to 1 if that minterm is in the function, else to 0." },
              { name: "Cascading MUXes", desc: "Two 4-to-1 MUXes + one 2-to-1 MUX = one 8-to-1 MUX. Lower level MUXes feed into higher level MUX. Enable inputs control which group is active." },
              { name: "Applications", desc: "CPU instruction selection, ALU operand selection, parallel-to-serial conversion, time-division multiplexing in communications, address selection in memory controllers." }
            ]
          }
        ],
        example: {
          title: "Implementing F(A,B) = A⊕B using 4-to-1 MUX",
          description: `XOR function truth table:
A  B | F
0  0 | 0
0  1 | 1
1  0 | 1
1  1 | 0

Use 4-to-1 MUX with S₁=A, S₀=B:

Select | Minterm | F | Input to MUX
 00    |  A'B'   | 0 |  I₀ = 0
 01    |  A'B    | 1 |  I₁ = 1
 10    |  AB'    | 1 |  I₂ = 1
 11    |  AB     | 0 |  I₃ = 0

Result: I₀=0, I₁=1, I₂=1, I₃=0
Connect these constants to the MUX inputs.
Output Y = XOR(A,B) — no extra gates needed!`,
          note: "This technique of implementing Boolean functions using MUX is a standard 5-mark question in University of Rajasthan examinations."
        }
      },

      {
        id: "1.4",
        title: "Decoder & Encoder",
        theory: "A Decoder converts an n-bit binary input to one of 2ⁿ output lines. An Encoder performs the reverse operation.",
        theoryParagraphs: [
          "A Decoder is a combinational logic circuit that converts coded information from one format to another. Specifically, an n-to-2ⁿ decoder takes an n-bit binary code as input and activates exactly ONE of its 2ⁿ output lines corresponding to that input code. All other outputs remain inactive (0). Decoders are essential in digital systems for address decoding in memory systems, instruction decoding in CPUs, and driving display devices.",
          "An Encoder is the reverse of a decoder — it takes 2ⁿ input lines (with exactly one HIGH at a time) and produces an n-bit binary output code representing which input is active. However, simple encoders have a limitation: if two inputs are HIGH simultaneously, the output is incorrect. Priority Encoders solve this by giving priority to the highest-order active input.",
          "The 7-segment display decoder is a practical and important application of decoders. It converts a 4-bit BCD input (0000 to 1001 representing decimal 0–9) into 7 output signals (a through g) that drive the segments of an LED display. This is used in digital clocks, calculators, and measurement instruments.",
          "In memory systems, decoders play a critical role: the CPU sends a memory address on the address bus, and the memory controller uses a decoder to select the correct memory chip or bank. For example, a 3-to-8 decoder can select one of 8 memory chips based on the three most significant address bits."
        ],
        keyPoints: [
          "n-to-2ⁿ Decoder: n inputs, 2ⁿ outputs. Only ONE output is HIGH at a time.",
          "2-to-4 decoder outputs are the four minterms of 2 variables: m₀, m₁, m₂, m₃.",
          "Enable pin: Active HIGH or LOW. When disabled, all outputs = 0. Used for cascading.",
          "Priority Encoder: If multiple inputs are HIGH, highest-order input takes priority.",
          "7-Segment Decoder: BCD (0–9) → 7 segment signals (a–g). Output depends on display type (common anode vs common cathode).",
          "Two 2-to-4 decoders + 1 enable line = one 3-to-8 decoder (cascading technique).",
          "Decoders can implement any Boolean function: connect desired output lines to an OR gate."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2-to-4_Decoder.svg/400px-2-to-4_Decoder.svg.png",
            caption: "2-to-4 Line Decoder Circuit",
            whiteBg: true
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Seven_segment_display-animated.gif/200px-Seven_segment_display-animated.gif",
            caption: "7-Segment Display (a–g segments)",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "concepts",
            items: [
              { name: "2-to-4 Decoder", desc: "Inputs: A₁, A₀. Outputs: D₀=A₁'A₀', D₁=A₁'A₀, D₂=A₁A₀', D₃=A₁A₀. Each output is one minterm. Active HIGH output goes HIGH for its specific input combination." },
              { name: "3-to-8 Decoder", desc: "Inputs: A₂, A₁, A₀. Outputs: D₀ to D₇. D₀=A₂'A₁'A₀', ..., D₇=A₂A₁A₀. Used in memory address decoding for 8 banks/chips." },
              { name: "Enable (EN) Input", desc: "When EN=0, all outputs = 0 (disabled). When EN=1, decoder works normally. Used to cascade two 2-to-4 decoders into one 3-to-8 decoder using MSB as select between the two." },
              { name: "4-to-2 Encoder", desc: "Inputs: I₀, I₁, I₂, I₃ (only one HIGH). Outputs: A₁=I₂+I₃, A₀=I₁+I₃. Limitation: undefined output if multiple inputs are HIGH simultaneously." },
              { name: "Priority Encoder (8-to-3)", desc: "8 inputs, 3-bit output. If I₇=1, output=111 (priority 7). Else if I₆=1, output=110. ... Else if I₁=1, output=001. Has valid output bit V=1 when any input is active." },
              { name: "BCD to 7-Segment Decoder", desc: "Input: 4-bit BCD (0000–1001). Output: 7 signals a–g. Each segment signal computed by Boolean simplification. IC 7447 (common anode) and 7448 (common cathode) are standard chips." }
            ]
          }
        ],
        example: {
          title: "Memory Address Decoding using 3-to-8 Decoder",
          description: `System: 8 memory chips, each 4KB
Total memory: 8 × 4KB = 32KB
Address lines: 15 bits (A14–A0)
  A14, A13, A12 → 3-to-8 decoder (selects chip)
  A11–A0 → connected to all chips (selects location within chip)

3-to-8 Decoder output:
A14 A13 A12 | Active Chip | Address Range
  0   0   0 |  Chip 0     | 0x0000–0x0FFF
  0   0   1 |  Chip 1     | 0x1000–0x1FFF
  0   1   0 |  Chip 2     | 0x2000–0x2FFF
  0   1   1 |  Chip 3     | 0x3000–0x3FFF
  1   0   0 |  Chip 4     | 0x4000–0x4FFF
  1   0   1 |  Chip 5     | 0x5000–0x5FFF
  1   1   0 |  Chip 6     | 0x6000–0x6FFF
  1   1   1 |  Chip 7     | 0x7000–0x7FFF

CPU access to address 0x3500:
  A14A13A12 = 011 → Decoder activates Chip 3 (CS=LOW)
  A11–A0 = 0x500 → Location within Chip 3`,
          note: "Memory address decoding is a standard 5-mark question. Draw the decoder diagram and show the address partitioning."
        }
      },

      {
        id: "1.5",
        title: "Adders & Subtractors",
        theory: "Binary adders and subtractors are fundamental combinational circuits that form the core of the ALU in every processor.",
        theoryParagraphs: [
          "Binary adders are the most fundamental arithmetic circuits in digital systems. Every operation a computer performs — addition, subtraction, multiplication, division, and even logical operations — ultimately involves addition at the hardware level. This is why the Arithmetic Logic Unit (ALU) is built around adder circuits.",
          "The Half Adder is the simplest adder, capable of adding two single-bit binary numbers to produce a Sum and a Carry output. However, it cannot accept a carry from a previous stage, making it unsuitable for chaining. The Full Adder extends this by accepting three inputs: A, B, and Carry-in (Cin), making it suitable for building multi-bit adders.",
          "A Parallel Binary Adder (also called Ripple Carry Adder) chains multiple Full Adders together: the Carry-out of each bit position becomes the Carry-in of the next. An 8-bit parallel adder uses 8 Full Adders in series. The key disadvantage is propagation delay — the carry must 'ripple' through all stages before the final sum is valid.",
          "Binary subtraction is performed by adding the 2's complement of the subtrahend: A - B = A + (2's complement of B). The 2's complement is formed by inverting all bits (1's complement) and adding 1. In hardware, this is implemented by XORing the B inputs with a control signal (Mode=1 for subtraction, Mode=0 for addition) and setting Cin=1 to add 1, giving both addition and subtraction with the same hardware."
        ],
        keyPoints: [
          "Half Adder: 2 inputs (A,B), 2 outputs (Sum=A⊕B, Carry=A·B). No carry input.",
          "Full Adder: 3 inputs (A, B, Cin), 2 outputs. Sum = A⊕B⊕Cin, Cout = A·B + Cin·(A⊕B).",
          "Parallel Binary Adder: N Full Adders in series. Carry ripples from LSB to MSB.",
          "Addition: Connect mode signal to 0. Subtraction: mode=1 inverts B (XOR), Cin=1 adds 1 (making 2's complement).",
          "Overflow: Occurs when result exceeds the representable range. Detected by: Cout of MSB ≠ carry into MSB.",
          "Look-Ahead Carry Adder: Computes all carries simultaneously — faster than ripple carry.",
          "Full Adder can be built from two Half Adders + one OR gate."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Half_Adder.svg/400px-Half_Adder.svg.png",
            caption: "Half Adder Circuit Diagram",
            whiteBg: true
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Full-adder_logic_diagram.svg/400px-Full-adder_logic_diagram.svg.png",
            caption: "Full Adder Circuit Diagram",
            whiteBg: true
          }
        ],
        content: [
          {
            type: "concepts",
            items: [
              { name: "Half Adder (HA)", desc: "Adds 2 single bits. Sum = A ⊕ B (XOR gate). Carry = A · B (AND gate). Uses: 1 XOR + 1 AND gate. Limitation: No Carry-in input, cannot be cascaded." },
              { name: "Full Adder (FA)", desc: "Adds 3 bits (A, B, Cin). Sum = A⊕B⊕Cin. Cout = A·B + B·Cin + A·Cin = A·B + Cin·(A⊕B). Built from 2 Half Adders + 1 OR gate." },
              { name: "4-bit Parallel Binary Adder", desc: "4 Full Adders connected in series: Cout of FA₀ → Cin of FA₁ → Cin of FA₂ → Cin of FA₃. Cin of FA₀ = 0. Adds two 4-bit numbers A₃A₂A₁A₀ + B₃B₂B₁B₀. IC 7483 is the standard 4-bit adder chip." },
              { name: "Ripple Carry Propagation", desc: "Carry propagates stage by stage from LSB to MSB. For N-bit adder, worst-case delay = N × (FA delay). For a 64-bit adder, very slow. Solved by Carry Lookahead Adder (CLA) which computes all carries in parallel." },
              { name: "Parallel Binary Subtractor", desc: "A - B using 2's complement: Invert all B bits using XOR gates (XOR with Mode=1), then set Cin of FA₀ = 1. This adds 1 to make 2's complement. Same hardware used for both addition (Mode=0) and subtraction (Mode=1)." },
              { name: "BCD Adder", desc: "Adds two BCD digits (0–9). Uses a 4-bit binary adder, then checks if result > 9 or carry=1. If so, adds 6 (0110) to correct the result back to BCD. Requires additional correction logic." }
            ]
          }
        ],
        example: {
          title: "4-bit Binary Addition and Subtraction",
          description: `ADDITION: 1011 + 0110
  1011  (A = 11 in decimal)
+ 0110  (B =  6 in decimal)
------
Bit 0: A₀=1, B₀=0, Cin=0 → Sum=1, Cout=0
Bit 1: A₁=1, B₁=1, Cin=0 → Sum=0, Cout=1
Bit 2: A₂=0, B₂=1, Cin=1 → Sum=0, Cout=1
Bit 3: A₃=1, B₃=0, Cin=1 → Sum=1, Cout=0 (no overflow)
Final Carry: 1 (which extends to bit 4)
Result: 10001 = 17 ✓ (11 + 6 = 17)

SUBTRACTION: 1011 - 0011 (11 - 3 = 8)
Step 1: 2's complement of 0011
  1's complement: 1100
  Add 1:          1101  (this is -3 in 2's complement)

Step 2: Add: 1011 + 1101
  1011
+ 1101
------
 11000 → Take 4 LSBs → 1000 = 8 ✓
(The carry-out of MSB is discarded for unsigned subtraction)`,
          note: "This is a standard 4–6 mark question. Show the 2's complement steps clearly."
        }
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════
     UNIT II — Sequential Logic & Register Transfer
  ═══════════════════════════════════════════════════════ */
  {
    id: 2,
    title: "Sequential Logic & Register Transfer",
    subtitle: "Flip-Flops, Registers, RTL, Micro-Operations",
    icon: "FlipFlop",
    color: "from-rose-500 to-pink-600",
    topics: [
      {
        id: "2.1",
        title: "Flip-Flops & Sequential Circuits",
        theory: "Flip-flops are bistable memory elements that store one bit of binary information and form the basis of all sequential logic circuits.",
        theoryParagraphs: [
          "Sequential circuits are digital circuits whose outputs depend not only on the current inputs but also on the past history of inputs — that is, they have memory. This is in contrast to combinational circuits where outputs depend only on current inputs. The fundamental memory element in sequential circuits is the Flip-Flop (FF).",
          "A Flip-Flop (also called a bistable multivibrator) is a digital circuit with two stable states (0 and 1) that can store one bit of binary information indefinitely. It has one or two data inputs, a clock input, and complementary outputs Q and Q'. The flip-flop changes its stored state (Q) based on input values and clock signals.",
          "The SR Flip-Flop (Set-Reset) is the most basic flip-flop. Setting S=1 forces Q=1 (Set state). Setting R=1 forces Q=0 (Reset state). The condition S=R=1 is forbidden because it creates an ambiguous next state. The D Flip-Flop (Data/Delay) eliminates this problem by having only one data input D, and Q simply follows D at each clock edge.",
          "The JK Flip-Flop is the most versatile flip-flop. It is similar to SR but with J=K=1 making the output toggle (complement). The Race-Around Condition is a critical problem in JK flip-flops: when J=K=1 and the clock pulse duration is long, the output oscillates rapidly and unpredictably. This is solved by the Master-Slave configuration, which uses two flip-flops in cascade controlled by complementary clock signals."
        ],
        keyPoints: [
          "Sequential circuit: Output depends on current inputs AND previous state (memory).",
          "SR FF: S=R=1 is INVALID (forbidden condition). This is the most common trap in exams.",
          "D FF: Q(next) = D. Eliminates invalid state. Most common FF in registers and memory.",
          "JK FF: J=K=1 → Toggle. J=K=0 → No change. J=1,K=0 → Set. J=0,K=1 → Reset.",
          "T FF: T=1 → Toggle. T=0 → No change. Built from JK with J=K=T.",
          "Race-Around Condition: In level-triggered JK, Q toggles multiple times if J=K=1 and clock is HIGH long enough.",
          "Master-Slave FF: Eliminates race-around. Output changes only at clock FALLING edge.",
          "Edge-triggered FFs respond only to the clock transition (rising or falling edge), not the clock level."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/SR_Flip-flop_Diagram.svg/400px-SR_Flip-flop_Diagram.svg.png",
            caption: "SR Flip-Flop using NAND Gates",
            whiteBg: true
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/D-type_Flip-flop.svg/400px-D-type_Flip-flop.svg.png",
            caption: "D Flip-Flop Symbol and Truth Table",
            whiteBg: true
          }
        ],
        content: [
          {
            type: "flipflops",
            items: [
              { name: "SR Flip-Flop (Set-Reset)", characteristic: "S=0,R=0 → No change (Q=Q) | S=1,R=0 → Q=1 (Set) | S=0,R=1 → Q=0 (Reset) | S=1,R=1 → INVALID ⚠️", description: "Most basic FF. Built from two cross-coupled NAND or NOR gates. The invalid state S=R=1 is forbidden because both Q and Q' go to same value, creating unpredictable behaviour when inputs return to 0." },
              { name: "D Flip-Flop (Data / Delay)", characteristic: "Q(next) = D (on active clock edge)", description: "Single data input. Solves SR's invalid state problem by ensuring S and R are always complements. Output Q samples and holds the D input at each active clock edge. Used in all registers, shift registers, and DRAM." },
              { name: "JK Flip-Flop (Universal FF)", characteristic: "J=0,K=0 → No change | J=1,K=0 → Set (Q=1) | J=0,K=1 → Reset (Q=0) | J=1,K=1 → Toggle (Q=Q')", description: "Most versatile FF. Like SR but J=K=1 is valid — output toggles. Can emulate SR, D, or T flip-flop. Subject to Race-Around Condition in level-triggered implementations." },
              { name: "T Flip-Flop (Toggle)", characteristic: "T=0 → No change (Q=Q) | T=1 → Toggle (Q=Q')", description: "Derived from JK with J=K=T. When T=1, output toggles on every active clock edge. When T=0, retains state. Primary use: binary counters and frequency dividers." },
              { name: "Race-Around Condition", characteristic: "Occurs in level-triggered JK FF when J=K=1 during entire clock HIGH period", description: "Problem: When J=K=1 and clock=1, Q toggles to Q', then Q' feeds back causing another toggle, continuously, making output oscillate unpredictably during clock HIGH. Solution: (1) Use edge-triggered FF (responds only to clock edge), (2) Use Master-Slave FF, (3) Make clock pulse width shorter than FF propagation delay." },
              { name: "Master-Slave JK FF", characteristic: "Master captures input on clock HIGH; Slave transfers to output on clock LOW", description: "Two JK FFs in cascade: Master (enabled when CLK=1) + Slave (enabled when CLK=0=CLK'). Master samples J,K during CLK=1. Output Q changes only on CLK falling edge. Eliminates race-around completely. Output changes exactly ONCE per clock cycle." }
            ]
          }
        ],
        example: {
          title: "JK Flip-Flop State Table and Counter Operation",
          description: `3-bit Binary Counter using 3 JK FFs (all J=K=1):

Each FF toggles on every clock edge.
FF₂ (MSB) - FF₁ (mid) - FF₀ (LSB)

Clock | FF₂ | FF₁ | FF₀ | Decimal
  0   |  0  |  0  |  0  |    0     (initial state)
  ↑   |  0  |  0  |  1  |    1     (FF₀ toggles)
  ↑   |  0  |  1  |  0  |    2     (FF₁ toggles when FF₀=1→0)
  ↑   |  0  |  1  |  1  |    3
  ↑   |  1  |  0  |  0  |    4
  ↑   |  1  |  0  |  1  |    5
  ↑   |  1  |  1  |  0  |    6
  ↑   |  1  |  1  |  1  |    7
  ↑   |  0  |  0  |  0  |    0     (wraps around)

Frequency: FF₀ = CLK/2, FF₁ = CLK/4, FF₂ = CLK/8
This is a MOD-8 (divide by 8) counter.`,
          note: "State table drawing and counter design are frequently asked for 5–7 marks. Draw the characteristic table for each FF type."
        }
      },

      {
        id: "2.2",
        title: "Register Transfer Language (RTL)",
        theory: "RTL is a symbolic notation to describe the flow of data between registers and the micro-operations performed during each clock cycle.",
        theoryParagraphs: [
          "Register Transfer Language (RTL) is a formal notation used to describe the operation of digital systems at the register level — that is, specifying which data is transferred between which registers during each clock cycle, and what operations (micro-operations) are performed on that data. RTL provides a bridge between high-level algorithmic descriptions and actual hardware implementation.",
          "Every computer instruction, when executed, is broken down into a sequence of primitive register transfer operations called micro-operations. For example, the simple instruction 'ADD A, B' (add register B to register A) decomposes into: (1) read both register values, (2) send to ALU inputs, (3) ALU performs addition, (4) store result back in register A. Each of these sub-steps is a micro-operation expressed in RTL.",
          "The bus system is central to register transfers. A common bus connects all registers and allows data to flow between any two registers. However, only ONE transfer can occur on the bus at any given clock cycle. The bus includes multiplexers at the input to select which register's data is placed on the bus, controlled by the Control Unit.",
          "Memory transfer in RTL involves two special registers: the Memory Address Register (MAR) which holds the address, and the Memory Buffer Register (MBR, also called MDR) which holds the data. A read operation is expressed as: MAR ← address, MBR ← M[MAR] (two separate clock cycles). A write is: MAR ← address, M[MAR] ← MBR."
        ],
        keyPoints: [
          "RTL notation: R2 ← R1 means 'copy contents of R1 into R2'. R1 is unchanged.",
          "Conditional transfer: If (condition) then (R2 ← R1), written as P: R2 ← R1",
          "Simultaneous transfers: R2 ← R1, R1 ← R2 (both occur in same clock cycle).",
          "Memory read: MAR ← address; MBR ← M[MAR] (two cycles).",
          "Memory write: MAR ← address; M[MAR] ← MBR (two cycles).",
          "Bus transfer: Only ONE register can drive the bus at a time.",
          "Arithmetic: R3 ← R1 + R2. Logic: R3 ← R1 ∧ R2. Shift: R1 ← shl R1.",
          "RTL is the basis for hardware description languages (VHDL, Verilog) used in chip design."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/register_transfer.jpg",
            caption: "Register Transfer via Common Bus",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "concepts",
            items: [
              { name: "Register Notation", desc: "Single register: R1, R2, MAR, PC, IR, AC. Specific bit: R1(0) = bit 0 (LSB), R1(7) = bit 7 (MSB). Range: R1(7:4) = upper nibble. Complement: R1' = 1's complement of R1." },
              { name: "Transfer Operations", desc: "Unconditional: R2 ← R1. Conditional: P: R2 ← R1 (only if control signal P=1). Simultaneous in one clock: A ← B, B ← A (swap, needs temporary storage in hardware). RTL arrow ← means COPY, not MOVE." },
              { name: "Bus & Memory Transfer", desc: "Bus read: BUS ← R1, R2 ← BUS. Memory read: MAR ← R1; DR ← M[MAR] (two clock cycles required). Memory write: MAR ← R1; M[MAR] ← DR (two clock cycles). Memory word size is 16 bits." },
              { name: "Arithmetic Micro-operations", desc: "Addition: R3 ← R1 + R2. Subtraction: R3 ← R1 - R2 (2's complement internally). Increment: R1 ← R1 + 1. Decrement: R1 ← R1 - 1. Negate: R1 ← R1 + 1 (after complement)." },
              { name: "Logic Micro-operations", desc: "AND: R3 ← R1 ∧ R2 (bitwise AND, used for masking). OR: R3 ← R1 ∨ R2 (setting bits). XOR: R3 ← R1 ⊕ R2 (toggling bits, comparison). Complement: R1 ← R1' (1's complement, bitwise NOT)." },
              { name: "Shift Micro-operations", desc: "Logical: R1 ← shl R1 (shift left, 0 in right), R1 ← shr R1 (shift right, 0 in left). Circular: cil (left wrap), cir (right wrap). Arithmetic: ashr preserves sign bit. Used in multiply/divide algorithms." }
            ]
          }
        ],
        example: {
          title: "RTL Description: Complete Fetch Cycle",
          description: `The Fetch Cycle retrieves an instruction from memory.
Expressed completely in RTL notation:

T0: MAR ← PC
    (Copy Program Counter address to Memory Address Register)

T1: MBR ← M[MAR], PC ← PC + 1
    (Read instruction from memory into Memory Buffer Register,
     simultaneously increment PC to point to next instruction)

T2: IR ← MBR(15:12), AR ← MBR(11:0)
    (Copy opcode to Instruction Register,
     copy address field to Address Register)

Notes:
- T0, T1, T2 represent three consecutive clock cycles
- MBR←M[MAR] and PC←PC+1 happen simultaneously in T1
- IR holds the operation code (what to do)
- AR holds the memory address of the operand (where data is)
- This is the FETCH phase of every instruction's execution`,
          note: "RTL notation questions are worth 5–8 marks. Write the complete RTL sequence for fetch, decode, and execute phases."
        }
      },

      {
        id: "2.3",
        title: "Arithmetic Logic Shift Unit (ALSU)",
        theory: "The ALSU combines all arithmetic, logic, and shift operations into a single unified hardware unit controlled by function select signals.",
        theoryParagraphs: [
          "The Arithmetic Logic Unit (ALU) is the computational core of every CPU — the component that actually performs all calculations and logical decisions. The extended version, the Arithmetic Logic Shift Unit (ALSU), also incorporates shift operations. Together, these operations form the complete set of data manipulation capabilities a processor provides.",
          "The ALSU takes two data inputs (operands A and B), a set of function select lines (typically 3 or 4 bits allowing 8–16 operations), and produces one output along with status flags. The function select lines are controlled by the Control Unit based on the decoded instruction opcode. Status flags include: Zero (Z=1 if result=0), Carry (C=1 if carry out), Sign/Negative (N=1 if MSB=1), and Overflow (V=1 if arithmetic overflow occurred).",
          "Shift operations are a specialized class of operations that move bit patterns within a register without performing arithmetic. Logical shifts fill the vacated position with 0, circular shifts wrap bits around, and arithmetic shifts preserve the sign bit. These are used in implementing multiplication (shift left = multiply by 2), division (shift right = divide by 2), and bit manipulation.",
          "The complete design of an ALSU involves combining: (1) an arithmetic unit (parallel adder with carry propagation), (2) a logic unit (bitwise AND, OR, XOR, NOT implemented in parallel for each bit), and (3) a shift unit (barrel shifter for efficient multi-bit shifts). The appropriate sub-unit's output is selected by a multiplexer based on the operation type."
        ],
        keyPoints: [
          "ALU performs arithmetic (+, -, ×, ÷) and logic (AND, OR, XOR, NOT) operations.",
          "Logical shift left by 1 = multiply by 2. Logical shift right by 1 = divide by 2 (unsigned).",
          "Arithmetic shift right preserves sign bit — for signed integer division by 2.",
          "Circular shift (rotate) wraps bits — no bits lost. Used in cryptography.",
          "Status flags: Z (zero), C (carry), N (negative/sign), V (overflow). Used for conditional branching.",
          "ALSU function select: 3-bit code selects 1 of 8 operations. CU sets this each instruction cycle.",
          "Overflow: Occurs in signed addition when two positives give negative result or vice versa.",
          "Barrel shifter: Shifts by N positions in a single clock cycle (not N sequential shifts)."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/alu.jpg",
            caption: "ALU Block Diagram",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "shifts",
            items: [
              { name: "Logical Shift Left (shl)", formula: "R ← shl R", description: "All bits move one position left. 0 is inserted at the rightmost (LSB) position. The leftmost (MSB) bit is shifted out and lost. Equivalent to multiplying the unsigned number by 2. Example: 1011 → 0110 (with MSB=1 lost, Carry=1)." },
              { name: "Logical Shift Right (shr)", formula: "R ← shr R", description: "All bits move one position right. 0 is inserted at the leftmost (MSB) position. The rightmost (LSB) bit is shifted out and lost. Equivalent to dividing an UNSIGNED number by 2. Example: 1011 → 0101 (with LSB=1 lost)." },
              { name: "Arithmetic Shift Right (ashr)", formula: "R ← ashr R", description: "All bits move right, but the sign bit (MSB) is REPLICATED (copied) into the new MSB position. Correctly divides a signed (2's complement) integer by 2 while preserving the sign. Example: 1100 (-4) → 1110 (-2). Compare: 0110 (6) → 0011 (3)." },
              { name: "Circular Shift Left (cil / rol)", formula: "R ← cil R", description: "All bits move left. The MSB that falls off the left end is inserted at the LSB position on the right. NO bits are lost — they rotate around. Example: 1011 → 0111 (1 from MSB wraps to LSB)." },
              { name: "Circular Shift Right (cir / ror)", formula: "R ← cir R", description: "All bits move right. The LSB that falls off the right end is inserted at the MSB position on the left. NO bits are lost. Example: 1011 → 1101 (1 from LSB wraps to MSB)." },
              { name: "Circular Shift with Carry (rcl/rcr)", formula: "R ← rcl R (through Carry)", description: "9-bit rotation including Carry flag: MSB → Carry → LSB (for left), LSB → Carry → MSB (for right). Used in multi-word shift operations to chain shifts across multiple registers." }
            ]
          }
        ],
        example: {
          title: "All Shift Operations on 8-bit Register",
          description: `Initial value of register R: 1010 0110  (= 166 unsigned, = -90 signed)

LOGICAL Shift Left  (shl):   0100 1100   (MSB=1 lost, 0 filled at right)
LOGICAL Shift Right (shr):   0101 0011   (LSB=0 lost, 0 filled at left)
ARITH.  Shift Right (ashr):  1101 0011   (LSB=0 lost, sign=1 REPLICATED)
CIRCULAR Shift Left  (cil):  0100 1101   (MSB=1 wraps around to LSB)
CIRCULAR Shift Right (cir):  0101 0011   (LSB=0 wraps around to MSB)

Multiplication by 2 using shl:
  0000 1010 (10) → shl → 0001 0100 (20) ✓

Division by 2 using ashr (signed):
  1111 1100 (-4) → ashr → 1111 1110 (-2) ✓
  Note: ashr preserves negative sign. shr would give wrong answer.`,
          note: "Shift operations are asked for 3–5 marks. Always show initial value, operation, and result for each type."
        }
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════
     UNIT III — Basic Computer Organization & CPU Design
  ═══════════════════════════════════════════════════════ */
  {
    id: 3,
    title: "Basic Computer Organization & CPU Design",
    subtitle: "Registers, Common Bus, Instruction Cycle, Addressing Modes, CPU",
    icon: "CPU",
    color: "from-orange-500 to-amber-500",
    topics: [
      {
        id: "3.1",
        title: "Computer Registers & Common Bus System",
        theory: "Registers are small, fast, internal storage units in the CPU connected via a common bus for data transfer.",
        theoryParagraphs: [
          "The basic computer model (as described by Morris Mano in 'Computer System Architecture', the standard reference for University of Rajasthan's COA course) consists of a Memory unit, a set of Registers, and a Control unit connected by a single Common Bus. Understanding this model is essential for the entire Unit III.",
          "Registers are the fastest storage locations in a computer system — they are directly inside the CPU chip. Unlike RAM which takes 50–100ns to access, registers are accessed in a single clock cycle (< 1ns in modern CPUs). Each register holds one 'word' of data (16 bits in Mano's basic computer, 32 or 64 bits in modern systems).",
          "The Common Bus is a shared data pathway that connects all registers and the memory unit. Data can travel between any two components via this bus. However, a critical constraint is that only ONE component can write (drive) data onto the bus at any given clock cycle, although multiple components can read from it simultaneously. The Control Unit generates enable signals to select which register drives the bus.",
          "The function of each register is carefully defined: the Program Counter (PC) always holds the address of the NEXT instruction to be executed. The Instruction Register (IR) holds the currently executing instruction. The Accumulator (AC) is the primary working register for all ALU operations. The Memory Address Register (MAR) and Data Register (DR) serve as interfaces to memory."
        ],
        keyPoints: [
          "Basic computer has 8 registers: PC, AR(MAR), IR, DR(MBR), AC, TR, INPR, OUTR.",
          "PC: 12-bit — holds address of NEXT instruction. Increments during Fetch.",
          "IR: 16-bit — holds CURRENT instruction (opcode + address).",
          "AC: 16-bit — Accumulator, main ALU register. All arithmetic results stored here.",
          "DR: 16-bit — Data Register (Memory Buffer). Buffer between CPU and memory.",
          "AR: 12-bit — Address Register. Always loaded before any memory access.",
          "Common Bus: ONE driver at a time. Controlled by 3-bit selection code (S2 S1 S0).",
          "TR: Temporary register for multi-step operations. Not programmer-accessible."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/common_bus.jpg",
            caption: "Common Bus System with All Registers",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "registers",
            items: [
              { name: "PC", bits: 12, purpose: "Program Counter. Holds the address of the NEXT instruction to be fetched from memory. Automatically incremented by 1 after each fetch. Can be loaded by branch/jump instructions." },
              { name: "AR", bits: 12, purpose: "Address Register (Memory Address Register / MAR). Must be loaded with the desired address BEFORE any memory read or write. Directly connected to the memory address bus." },
              { name: "IR", bits: 16, purpose: "Instruction Register. Holds the complete current instruction after it is fetched from memory. Upper 4 bits = opcode (I + 3-bit opcode), lower 12 bits = address field." },
              { name: "DR", bits: 16, purpose: "Data Register (Memory Buffer Register / MBR). Temporary buffer between CPU and memory. Holds data read FROM memory or data TO BE written to memory." },
              { name: "AC", bits: 16, purpose: "Accumulator. The primary ALU register. One operand comes from AC, result goes back to AC. All arithmetic and logic instructions use AC as source and destination." },
              { name: "TR", bits: 16, purpose: "Temporary Register. Used by the Control Unit to hold intermediate values during multi-cycle operations. Not directly accessible by user programs." },
              { name: "OUTR", bits: 8, purpose: "Output Register. Holds one character (8 bits ASCII) to be sent to the output device (printer, terminal). CPU writes to OUTR; output device reads from it asynchronously." },
              { name: "INPR", bits: 8, purpose: "Input Register. Holds one character received from the input device (keyboard). Device writes to INPR; CPU reads it using the INP instruction." }
            ]
          }
        ],
        example: {
          title: "Common Bus Operation: Executing LOAD (Address 100)",
          description: `Instruction: LDA 100 (Load Accumulator with contents of memory[100])

RTL description of execution:
T0: AR ← PC          [PC value placed on bus; AR reads from bus]
T1: DR ← M[AR]       [Memory read: instruction fetched into DR]
    PC ← PC + 1       [PC increments simultaneously]
T2: IR ← DR(15:12)    [Opcode stored in IR]
    AR ← DR(11:0)     [Address 100 stored in AR]
    --- DECODE: LDA = Load instruction ---
T3: DR ← M[AR]        [Read memory[100] into DR]
T4: AC ← DR           [Copy data to Accumulator]

Bus usage:
T0: PC drives bus → AR reads
T1: Memory drives bus → DR reads; ALU increments PC
T2: DR drives bus → IR(opcode) and AR(address) read
T3: Memory drives bus → DR reads
T4: DR drives bus → AC reads

Each step takes exactly ONE clock cycle.
Total: 5 clock cycles for one Load instruction.`,
          note: "The timing diagram with T0–T4 micro-operations is a very common 8–10 mark question in University of Rajasthan examinations."
        }
      },

      {
        id: "3.2",
        title: "Instruction Codes & Formats",
        theory: "Instruction codes are binary patterns that command the CPU. Their format defines how bits are partitioned into opcode and address fields.",
        theoryParagraphs: [
          "An instruction code (machine instruction) is a group of bits stored in memory that tells the CPU what operation to perform and (usually) where to find the data to operate on. The format of an instruction — how its bits are organized — directly determines the capabilities and limitations of the processor's instruction set.",
          "In the basic computer model (Mano's model used in University of Rajasthan syllabus), instructions are 16 bits wide. The format is: Bit 15 = Indirect bit (I), Bits 14–12 = 3-bit opcode (allowing 8 different operations), Bits 11–0 = 12-bit address (allowing access to 4096 memory locations). When Bit 15 (I) = 0, addressing is direct. When I = 1, addressing is indirect.",
          "Three types of instructions exist in Mano's basic computer: (1) Memory-Reference Instructions (MRI): opcode is 001 through 110, these directly access memory. (2) Register-Reference Instructions: opcode = 111 and I = 0. These operate on CPU registers only. (3) I/O Instructions: opcode = 111 and I = 1. These handle input/output operations.",
          "Register-Reference instructions use bits 11–0 (the 'address' field) to specify which register operation to perform. Examples: CLA (bit 11 = 1): Clear Accumulator, AC ← 0. CMA (bit 10 = 1): Complement Accumulator, AC ← AC'. INC (bit 5 = 1): Increment AC, AC ← AC + 1. SZA (bit 2 = 1): Skip if AC = 0 (PC ← PC + 1 if AC = 0)."
        ],
        keyPoints: [
          "16-bit instruction: Bit15(I) + Bits14-12(opcode 3-bit) + Bits11-0(address 12-bit).",
          "Opcode 000–110 = Memory Reference Instructions (7 operations).",
          "Opcode 111, I=0 = Register Reference Instructions (operate only on registers).",
          "Opcode 111, I=1 = I/O Instructions (INP, OUT, ION, IOF, etc.).",
          "I=0: Direct addressing — EA = address field.",
          "I=1: Indirect addressing — EA = M[address field] (two memory accesses).",
          "12-bit address field = 4096 locations = 4K words addressable.",
          "Common MRI: AND(0), ADD(1), LDA(2), STA(3), BUN(4), BSA(5), ISZ(6)."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/instruction_format.jpg",
            caption: "16-bit Instruction Format (Mano's Basic Computer)",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "formats",
            items: [
              { name: "AND (opcode 000)", desc: "AC ← AC ∧ M[EA]. Bitwise AND of Accumulator with memory operand. Used for bit masking — clearing specific bits of AC." },
              { name: "ADD (opcode 001)", desc: "AC ← AC + M[EA]. Add memory operand to Accumulator. Sets Carry flag if overflow. The primary arithmetic instruction." },
              { name: "LDA (opcode 010)", desc: "AC ← M[EA]. Load Accumulator from memory. Most frequently used instruction for getting data into the CPU." },
              { name: "STA (opcode 011)", desc: "M[EA] ← AC. Store Accumulator to memory. Used to save computation results back to memory." },
              { name: "BUN (opcode 100)", desc: "PC ← EA. Branch Unconditionally — jumps to address EA. Used to implement GOTO, function calls (before BSA), and infinite loops." },
              { name: "BSA (opcode 101)", desc: "M[EA] ← PC, PC ← EA+1. Branch and Save Return Address. The subroutine call instruction. Saves return address at EA, jumps to EA+1 (first instruction of subroutine)." },
              { name: "ISZ (opcode 110)", desc: "M[EA] ← M[EA]+1; if M[EA]=0 then PC←PC+1. Increment and Skip if Zero. Used for loop control — loop variable counted in memory." },
              { name: "Direct Addressing (I=0)", desc: "Effective Address (EA) = address field directly. One memory access for operand. Example: LDA 100 → EA=100, fetch M[100]. Range: 0–4095 (4K locations)." },
              { name: "Indirect Addressing (I=1)", desc: "EA = M[address field]. Two memory accesses: first to get actual address, second for operand. Range: unlimited (can address entire memory). Used for pointers and large programs." }
            ]
          }
        ],
        example: {
          title: "Decoding Instructions: Direct and Indirect Addressing",
          description: `EXAMPLE 1 - Direct Addressing:
Instruction stored in memory: 0010 0001 0000 0101
Bit 15 (I):     0 → Direct addressing
Bits 14-12:   001 → Opcode = ADD
Bits 11-0:  000000000101 = 5 decimal (address)

Execution: AC ← AC + M[5]
(Add the value stored at memory address 5 to Accumulator)

EXAMPLE 2 - Indirect Addressing:
Instruction: 1010 0001 0000 0101
Bit 15 (I):     1 → INDIRECT addressing
Bits 14-12:   010 → Opcode = LDA
Bits 11-0:  000000000101 = 5 (pointer address)

Step 1: Read M[5] → suppose M[5] = 500 (actual address)
Step 2: EA = 500
Step 3: AC ← M[500]
(Load AC with value from address 500, which was pointed to by address 5)

REGISTER REFERENCE:
Instruction: 0111 1000 0000 0000
Bits 15-12: 0111 → opcode=111, I=0 → Register Reference
Bit 11 = 1 → CLA instruction
Execution: AC ← 0 (Clear Accumulator)`,
          note: "Instruction decoding is a standard 5-mark question. Identify: type (MRI/RRI/IO), I bit, opcode, address, and write the RTL operation."
        }
      },

      {
        id: "3.3",
        title: "Instruction Cycle & Fetch-Decode",
        theory: "The instruction cycle is the complete sequence of steps the CPU performs to fetch one instruction from memory, decode it, and execute it.",
        theoryParagraphs: [
          "The Instruction Cycle (also called the Machine Cycle or Fetch-Execute Cycle) is the fundamental operating cycle of every processor. The CPU perpetually repeats this cycle from the moment it is powered on until it is shut down. Each iteration of the cycle processes exactly one instruction. Modern processors execute billions of these cycles every second.",
          "The cycle consists of several phases: Fetch, Decode, (optionally) Operand Fetch, Execute, and (optionally) Store. During Fetch, the CPU reads the instruction from the memory address in PC. During Decode, the Control Unit interprets the opcode and determines what operation to perform. During Execute, the ALU performs the operation. The specifics of each phase depend on the instruction type.",
          "The Fetch phase in Mano's basic computer takes exactly 3 clock cycles (T0, T1, T2). The Decode phase happens in T3 when the Control Unit examines IR bits to determine instruction type. If the instruction is indirect (I=1), an additional memory access is needed. The Execute phase varies from 1 to several clock cycles depending on the instruction.",
          "Register Reference Instructions (RRI) are special: they operate solely on CPU registers without accessing memory after the fetch. The 12-bit 'address' field actually encodes the specific operation (CLA, CMA, INC, SZA, etc.). The processor checks which bit of IR(11:0) is set to determine which register operation to perform."
        ],
        keyPoints: [
          "Fetch: T0: MAR←PC; T1: DR←M[MAR], PC←PC+1; T2: IR←DR(15:12), AR←DR(11:0).",
          "Decode: T3: examine IR bits to determine instruction type (MRI/RRI/IO).",
          "If I=1 (indirect): T3: AR←M[AR] (one extra memory access to get actual address).",
          "Execute: depends on instruction — ADD takes 2 cycles, LDA takes 2, STA takes 1.",
          "After each instruction, check for interrupt: if IEN=1 and interrupt pending, handle interrupt.",
          "Fetch is the SAME for ALL instructions — only execute phase differs.",
          "CLA: AC←0. CMA: AC←AC'. INC: AC←AC+1. SZA: skip next if AC=0.",
          "Complete cycle time = Fetch time + Decode time + Execute time."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/instruction_cycle.jpg",
            caption: "Instruction Cycle Flowchart",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "concepts",
            items: [
              { name: "T0 — Fetch Phase 1", desc: "AR ← PC. The Program Counter value is copied to the Address Register (MAR). This tells memory: 'I want to access this address'. PC still holds the instruction address." },
              { name: "T1 — Fetch Phase 2", desc: "DR ← M[AR], PC ← PC + 1. Simultaneously: Memory reads instruction from AR into DR, AND Program Counter increments. These two happen in parallel in the same clock cycle." },
              { name: "T2 — Fetch Phase 3", desc: "IR ← DR(15:12), AR ← DR(11:0). Upper 4 bits (opcode + I bit) go to IR. Lower 12 bits (address field) go to AR. Now IR knows what to do, AR knows where operand is." },
              { name: "T3 — Decode & Type Check", desc: "Control Unit examines IR. If IR(14:12) ≠ 111: Memory Reference Instruction. Check IR(15) for direct/indirect. If IR(14:12) = 111 and IR(15) = 0: Register Reference. If IR(14:12) = 111 and IR(15) = 1: I/O." },
              { name: "Indirect Addressing Cycle", desc: "If I=1 (indirect): AR ← M[AR]. One extra memory access reads the actual effective address from the location pointed to by the address field. Now AR has the correct final address." },
              { name: "Interrupt Check", desc: "At end of each instruction cycle: if (IEN=1 AND (FGI OR FGO)=1) then save return address, disable interrupts, jump to interrupt handler at address 1. IEN=Interrupt Enable, FGI/FGO=device ready flags." }
            ]
          }
        ],
        example: {
          title: "Complete Execution: ADD (Indirect), address=100",
          description: `Instruction: 1 001 000001100100 (I=1, opcode=ADD, address=100)
Suppose: M[100] = 500 (pointer), M[500] = 35, AC = 20

FETCH PHASE:
T0: AR ← PC               (AR = address of this instruction)
T1: DR ← M[AR], PC←PC+1   (DR = instruction word, PC advances)
T2: IR ← DR(15:12) = 1001  (IR gets opcode+I)
    AR ← DR(11:0) = 100    (AR gets address field = 100)

DECODE PHASE:
T3: Check IR(14:12) = 001 → ADD (Memory Reference Instruction)
    Check IR(15) = 1 → Indirect addressing!

INDIRECT ADDRESS FETCH:
T4: AR ← M[AR] = M[100] = 500   (Get actual effective address)

EXECUTE PHASE (ADD):
T5: DR ← M[AR] = M[500] = 35    (Fetch operand)
T6: AC ← AC + DR = 20 + 35 = 55  (Perform addition)

Final: AC = 55 ✓

Total: 7 clock cycles for one indirect ADD instruction`,
          note: "Drawing the complete timing diagram (T0 through completion) is a very common 8–10 mark question."
        }
      },

      {
        id: "3.4",
        title: "Addressing Modes",
        theory: "Addressing modes define how the Effective Address (EA) of an operand is determined from the information contained in the instruction.",
        theoryParagraphs: [
          "An addressing mode specifies the method by which the CPU calculates the effective address (EA) of the operand referenced in an instruction. Different addressing modes offer different trade-offs between flexibility, speed, and instruction size. Modern instruction set architectures (ISAs) support multiple addressing modes to efficiently handle different programming scenarios.",
          "Immediate addressing is the fastest mode — the operand value is embedded directly in the instruction itself, so no additional memory access is needed. Register addressing is almost as fast since register access is nearly instantaneous. Both modes are used heavily in modern RISC processors.",
          "Indirect addressing (with pointer) and indexed addressing (for arrays) are powerful modes that enable dynamic memory access patterns. In indirect mode, the instruction contains the address of a pointer — the CPU must first read the pointer, then read the actual data. This double memory access is slower but enables flexible pointer-based data access.",
          "Relative addressing is essential for position-independent code and branch instructions. The branch target address is expressed as a signed offset from the current Program Counter value, allowing the code to work correctly regardless of where it is loaded in memory. This is fundamental to modern operating systems that load programs at different addresses."
        ],
        keyPoints: [
          "Immediate: EA = operand itself. Fastest. Used for constants. Example: MOV R1, #5",
          "Direct: EA = address field. One memory access. Simple but limited address range.",
          "Indirect: EA = M[address]. Two memory accesses. Enables pointer-based access.",
          "Register: EA = register. Fastest memory access. No memory access needed.",
          "Register Indirect: EA = M[register]. Register holds address (pointer). MOV R1, [R2]",
          "Relative: EA = PC + offset. Used for branches. Position-independent code.",
          "Index: EA = base + index register. Array access: A[i] where index register holds i.",
          "Base Register: EA = base register + displacement. Program relocation in OS."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/addressing_modes.jpg",
            caption: "Addressing Modes — Effective Address Calculation",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "modes",
            items: [
              { name: "Immediate Addressing", desc: "The operand IS the value in the address field of the instruction. No memory access needed. Fastest mode. Used for loading constants: MOV R1, #255 loads 255 into R1. Limitation: operand size limited to address field width." },
              { name: "Direct Addressing", desc: "EA = address field. The instruction contains the exact memory address of the operand. Simple but the address range is limited to the number of bits in the address field (12 bits = 4096 locations in Mano's computer)." },
              { name: "Indirect Addressing", desc: "EA = M[address field]. The address field contains the address of a POINTER in memory. Two memory accesses required: first to read the pointer, second to read the actual operand. Range: full memory space. Used for pointer variables in high-level languages." },
              { name: "Register Addressing", desc: "EA = named CPU register. Operand is in a CPU register (R0–R15 in modern CPUs). Fastest operand access — register access in single clock cycle. No memory access. Limited by number of registers." },
              { name: "Register Indirect", desc: "EA = M[register]. The register contains the memory address (acts as a pointer). Example: MOV R1, [R2] loads into R1 the value from the address stored in R2. Used for pointer manipulation in C programs." },
              { name: "Relative Addressing", desc: "EA = PC + signed offset. The offset (displacement) is a signed integer in the instruction. EA is calculated relative to the current PC. Used by all branch instructions: BEQ +4 branches 4 locations forward. Enables relocatable code." },
              { name: "Indexed Addressing", desc: "EA = base address + index register value. The base address is fixed (start of array). The index register value changes (array subscript). Perfect for loops through arrays: for(i=0;i<N;i++) A[i]=0 uses index register for i." },
              { name: "Base Register Addressing", desc: "EA = base register + displacement. The base register holds the starting address of the program or data segment. The displacement is a small constant. Used by operating systems for program relocation — only the base register needs changing." }
            ]
          }
        ],
        example: {
          title: "Addressing Modes: All Types Compared",
          description: `Instruction in memory at address 200:  LOAD R1, 500

IMMEDIATE:   R1 = 500         (value 500 directly, no memory access)
DIRECT:      R1 = M[500]      (fetch from address 500)
INDIRECT:    R1 = M[M[500]]   (500 is a pointer; fetch what it points to)
             If M[500]=750: R1 = M[750]
REGISTER:    R1 = R2          (copy from another register)
REG INDIR:   R1 = M[R2]       (R2 contains the address to fetch)
RELATIVE:    R1 = M[PC+500]   (EA = 201+500 = 701, fetch M[701])
             Note: PC=201 after fetch
INDEXED:     R1 = M[500+X]    (X is index register, e.g., X=10 → M[510])
BASE REG:    R1 = M[B+500]    (B is base register, e.g., B=1000 → M[1500])

Speed ranking (fastest to slowest):
Immediate > Register > Direct > Rel/Index/Base > Indirect`,
          note: "Addressing modes are 5 marks in exams. Draw the diagram showing EA calculation for each mode with arrows."
        }
      },

      {
        id: "3.5",
        title: "CPU Design",
        theory: "CPU design involves specifying the datapath and control unit that together implement the complete instruction set.",
        theoryParagraphs: [
          "The Central Processing Unit (CPU) is the electronic circuitry that executes instructions comprising a computer program. The CPU consists of two main components: the Datapath (also called the Operational Unit) and the Control Unit. The Datapath contains all the functional units (ALU, registers, buses, multiplexers) through which data flows. The Control Unit generates the sequence of control signals that orchestrate all operations in the datapath.",
          "Specifying a CPU involves defining: (1) the Register Set — what registers exist and their widths, (2) the Instruction Set Architecture (ISA) — what instructions the CPU can execute, (3) the Datapath — what hardware components exist and how they are connected, and (4) the Control Unit — how instructions are decoded and what control signals are generated for each instruction.",
          "There are two fundamental approaches to implementing the Control Unit: Hardwired Control and Microprogrammed Control. In Hardwired Control, control signals are generated by a fixed combinational logic circuit. Given the current instruction and timing state, the circuit directly produces the required control signals. This is very fast but completely inflexible — changing the instruction set requires redesigning the hardware.",
          "Microprogrammed Control stores the control information in a special ROM called the Control Store. Each instruction is implemented as a sequence of micro-instructions (microprogram). When an instruction is fetched and decoded, the micro-instruction sequencer steps through the microprogram for that instruction, generating control signals from each micro-instruction. This is slower than hardwired but allows instruction set changes by updating the ROM — no hardware changes needed."
        ],
        keyPoints: [
          "CPU = Datapath (operational unit) + Control Unit (CU).",
          "Datapath contains: ALU, Registers, Buses, Multiplexers, Decoders.",
          "CU generates: Register enables, ALU function select, Memory read/write, I/O control signals.",
          "Hardwired Control: Fast, fixed, used in RISC (ARM, RISC-V, MIPS).",
          "Microprogrammed Control: Flexible, updatable ROM, used in CISC (Intel x86, AMD).",
          "Pipeline: Overlapping fetch of instruction N+1 with execute of instruction N = higher throughput.",
          "Fetch → Decode → Execute is the basic pipeline. Modern CPUs have 15–20 pipeline stages.",
          "Hazards: Data hazard (data not ready), Control hazard (branch taken), Structural hazard (resource conflict)."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/cpu_components.jpg",
            caption: "CPU Internal Components — Datapath and CU",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "concepts",
            items: [
              { name: "ALU (Arithmetic Logic Unit)", desc: "Performs all arithmetic operations (+, -, ×, ÷) and logic operations (AND, OR, XOR, NOT, shifts) on binary data. Two input operands → one result output + status flags (Z, C, N, V). The ALU is purely combinational — no memory, no clock needed." },
              { name: "Control Unit (CU) — Role", desc: "Interprets each instruction and generates the sequence of control signals that direct all components to perform the correct operations. CU is the 'conductor' that orchestrates all activities in the CPU. It uses the opcode in IR to determine what to do and generates signals like 'load AC', 'write to memory', 'ALU add'." },
              { name: "Hardwired CU", desc: "Implemented as a combinational circuit (decoder + logic gates + flip-flops for timing). Inputs: instruction opcode (IR bits), current timing state (T0–T7 flip-flops), status flags. Outputs: control signals for every component. Extremely fast, used in RISC architectures." },
              { name: "Microprogrammed CU", desc: "Control Store ROM contains microprograms (one per instruction). Each micro-instruction specifies all control signals for one clock cycle. Micro-instruction sequencer steps through the appropriate microprogram. More flexible than hardwired. Used in Intel x86 (CISC)." },
              { name: "Simple CPU Execution Data Path", desc: "Register File → Bus → ALU Input MUX → ALU → Result Register → Bus → Register File. PC → Instruction Memory → IR → Decoder → CU → Control signals. Data Memory connected via MAR (address) and DR (data) to bus." },
              { name: "Pipelining", desc: "Technique to increase instruction throughput without increasing clock frequency. While instruction N is in Execute stage, instruction N+1 is in Decode, and N+2 is in Fetch. Theoretically: 3-stage pipeline = 3× throughput. Hazards (data, control, structural) reduce this ideal speedup." }
            ]
          }
        ],
        example: {
          title: "Hardwired CU: Control Signals for ADD Instruction",
          description: `ADD instruction (opcode=001, direct, I=0) execution:
Control Unit must generate these signals at each timing state:

T0: PC_out = 1, MAR_in = 1  
    (Enable PC on bus; load MAR from bus)

T1: READ = 1, DR_in = 1, PC_inc = 1  
    (Memory read into DR; Increment PC)

T2: DR_out = 1, IR_in = 1, AR_in = 1  
    (DR to bus; load IR with opcode; load AR with address)

T3: (Decode: it's ADD, direct, so go to T4)

T4: READ = 1, DR_in = 1  
    (Fetch operand from M[AR] into DR)

T5: AC_out = 1, ALU_add = 1, DR_out = 1, AC_in = 1  
    (AC + DR through ALU → result back to AC)

Each control signal is one wire output from the CU.
For hardwired CU, each line is: Tₙ AND opcode_bits → signal
Example: MAR_in = T0 (active during T0 for ALL instructions)
         ALU_add = T5 AND ADD_opcode (only for ADD at T5)`,
          note: "Drawing the control signal table is a 8–10 mark question. Show timing (T0–T5) and signals for each phase."
        }
      }
    ]
  },

  /* ═══════════════════════════════════════════════════════
     UNIT IV — I/O & Memory Organization
  ═══════════════════════════════════════════════════════ */
  {
    id: 4,
    title: "I/O & Memory Organization",
    subtitle: "I/O Interfaces, DMA, Interrupts, Memory Hierarchy, Cache, Virtual Memory",
    icon: "Memory",
    color: "from-teal-500 to-cyan-600",
    topics: [
      {
        id: "4.1",
        title: "Input-Output Organization",
        theory: "I/O organization defines how the CPU communicates with peripheral devices using interfaces, transfer modes, and synchronization protocols.",
        theoryParagraphs: [
          "Input/Output (I/O) organization is a critical aspect of computer architecture because the mismatch in speed between the fast CPU (operating in nanoseconds) and slow I/O devices (operating in milliseconds) must be carefully managed. Without proper I/O management, the CPU would waste most of its time waiting for slow devices, and the full computational power of the processor would be wasted.",
          "An I/O Interface (also called an I/O Controller or Device Controller) is the hardware module that connects a peripheral device to the system bus. It contains three key registers visible to the CPU: (1) Data Register — buffer for data being transferred, (2) Status Register — indicates device state (ready/busy/error), and (3) Control Register — CPU uses this to command the device. The interface also handles voltage level conversion, signal timing, and protocol translation between the device and system bus.",
          "Three fundamental modes of data transfer exist: Programmed I/O (where the CPU continuously polls the status register in a software loop), Interrupt-Driven I/O (where the device signals the CPU via an interrupt when it is ready), and Direct Memory Access or DMA (where a specialized controller transfers data directly between the device and memory without CPU involvement). These represent increasing levels of CPU efficiency.",
          "Asynchronous data transfer does not require a shared clock between sender and receiver. Instead, it uses handshaking signals: the sender asserts a 'data ready' strobe, the receiver acknowledges with an 'acknowledge' signal after reading the data. This is more flexible but adds communication overhead. Synchronous transfer uses a common clock, is faster but requires all devices to operate at the same clock frequency."
        ],
        keyPoints: [
          "I/O Interface contains: Data register, Status register, Control register.",
          "Programmed I/O: CPU polls status register in a busy-wait loop. Simple but wastes CPU.",
          "Interrupt I/O: Device sends INT signal when ready. CPU handles interrupt via ISR.",
          "DMA: Dedicated controller transfers data directly device↔memory. CPU free during transfer.",
          "DMA needs 'bus stealing' — temporarily takes bus from CPU for each transfer.",
          "Handshaking: Sender 'Data Ready' → Receiver reads → Receiver 'Acknowledge' → Sender clears.",
          "I/O mapped I/O: I/O devices have separate address space from memory. IN/OUT instructions.",
          "Memory mapped I/O: I/O registers appear as memory locations. Normal LOAD/STORE instructions used."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/io_interface.jpg",
            caption: "I/O Interface between CPU Bus and Device",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "methods",
            items: [
              { name: "Programmed I/O (Polling)", description: "CPU executes a software loop continuously checking the device status register. While (status_register != READY) { do nothing; }. Then transfer data. Problem: CPU is 100% occupied during the entire wait time — completely wasted on idle checking. Only suitable for extremely time-critical, short-duration I/O operations." },
              { name: "Interrupt-Driven I/O", description: "CPU initiates I/O operation and immediately continues executing other instructions. When the device completes its operation, it asserts an interrupt request (IRQ) signal. CPU completes its current instruction, then jumps to the Interrupt Service Routine (ISR) which transfers the data. Much more CPU efficient than polling." },
              { name: "Direct Memory Access (DMA)", description: "CPU programs the DMA controller with: source address, destination address, and byte count. The DMA controller then transfers data directly between the I/O device and RAM without CPU involvement for each byte. CPU is interrupted only ONCE when the entire block transfer is complete. Best for large transfers (disk reads, network packets, video frames)." },
              { name: "DMA Controller Operation", description: "DMA Controller has: Address Register (current memory address), Word Count Register (bytes remaining), Control Register (direction, mode). On each DMA cycle: (1) DMA requests bus, (2) CPU grants bus ('bus steal'), (3) DMA transfers one word device↔memory, (4) increments address, decrements count, (5) when count=0, interrupts CPU." },
              { name: "Asynchronous Transfer (Handshaking)", description: "No shared clock required. Protocol: (1) Source puts data on bus, asserts DATA_VALID signal. (2) Destination sees DATA_VALID, reads data. (3) Destination asserts DATA_ACCEPTED. (4) Source sees DATA_ACCEPTED, removes data, de-asserts DATA_VALID. (5) Destination de-asserts DATA_ACCEPTED. Cycle complete. Works between devices of any speed." },
              { name: "Synchronous Transfer", description: "All transfers occur on edges of a common clock signal. Data must be stable before the rising edge and held after it. Simpler protocol — no handshaking overhead. All connected devices must operate at exactly the same clock speed. Used in modern high-speed buses: PCIe, SATA, DDR SDRAM." }
            ]
          }
        ],
        example: {
          title: "DMA vs Programmed I/O: Reading 4KB from Disk",
          description: `SCENARIO: Read 4096 bytes from hard disk into RAM

PROGRAMMED I/O:
For each of 4096 bytes:
  1. Check status register: is disk ready?  (wait ~1ms average)
  2. Read 1 byte from data register
  3. Store byte in RAM
Total time: 4096 × (wait + read + store)
CPU utilization: 100% FOR I/O — nothing else gets done

INTERRUPT I/O:
1. CPU: send READ command to disk controller
2. CPU: continue running other programs
3. (disk seeks, rotates: ~5ms — CPU does useful work!)
4. Disk: asserts interrupt when sector in buffer
5. CPU: ISR reads 512 bytes via programmed I/O to RAM
6. CPU: resume main program
Improvement: 5ms wait is useful vs wasted

DMA:
1. CPU: program DMA — source: disk, dest: RAM[5000], count: 4096
2. CPU: continue running other programs  
3. DMA: transfers 4096 bytes directly (disk→RAM)
   Each byte: DMA steals one bus cycle (CPU paused ~1 cycle)
4. DMA: interrupts CPU when all 4096 bytes transferred
5. CPU: data ready to use!
CPU busy with I/O: ~1% (just programming + interrupt handling)

WINNER: DMA for large transfers. 99% CPU time freed!`,
          note: "DMA operation is a standard 8-mark question. Explain all steps, draw the block diagram, compare with other modes."
        }
      },

      {
        id: "4.2",
        title: "Interrupts & Priority Interrupts",
        theory: "Interrupts allow I/O devices to signal the CPU asynchronously, enabling efficient concurrent operation of CPU and peripheral devices.",
        theoryParagraphs: [
          "An interrupt is a hardware or software signal that causes the CPU to temporarily suspend its current program, save its state (all register values and PC), execute a special routine called the Interrupt Service Routine (ISR) or interrupt handler, and then restore the saved state and resume the original program as if nothing happened. Interrupts are the primary mechanism for handling asynchronous events in modern computer systems.",
          "The interrupt mechanism works as follows: The peripheral device sets a flag (interrupt request) in its status register when it needs CPU attention. The CPU checks for pending interrupts after completing each instruction. If an interrupt is pending and interrupts are enabled (IEN=1), the CPU completes a special Interrupt Cycle: it saves the return address (PC) to a fixed memory location (address 0 in Mano's model), disables interrupts (IEN=0), and jumps to the interrupt handler (starting at address 1).",
          "In a real system, there are many different interrupt sources: keyboard, mouse, timer, network card, disk controller, USB devices, etc. Each source needs its own Interrupt Service Routine. The CPU needs to identify WHICH device interrupted. This is done via Interrupt Vectors — a table in memory (the Interrupt Vector Table or IVT) that maps interrupt numbers to ISR addresses. When an interrupt occurs, the device supplies its interrupt number, and the CPU indexes into the IVT to find the ISR.",
          "Priority Interrupts handle the situation when multiple devices interrupt simultaneously. Each device is assigned a priority level. If two devices interrupt at the same time, the one with higher priority is served first. Moreover, a higher-priority interrupt can preempt (interrupt) the ISR of a lower-priority device. This preemption creates a nested interrupt structure. Implementation methods include Daisy Chain, Parallel Priority Interrupt (using a Priority Interrupt Controller like Intel 8259A), and Software Polling."
        ],
        keyPoints: [
          "Interrupt Cycle (Mano): M[0]←PC, PC←0, IEN←0. ISR starts at address 1.",
          "IEN: Interrupt Enable Flag. IEN=1 allows interrupts; IEN=0 masks them.",
          "Interrupt types: Hardware (external devices), Software (INT instruction), Exception (error in program).",
          "Maskable interrupt: Can be disabled with CLI instruction. Used for non-critical events.",
          "Non-Maskable Interrupt (NMI): Cannot be disabled. Used for power failure, memory parity error.",
          "Interrupt Vector Table: Maps interrupt number → ISR address. CPU uses device's interrupt number as index.",
          "Daisy Chain: Grant passes device to device. First requesting device captures it. Priority = position in chain.",
          "Priority Interrupt Controller (8259A): Hardware that manages up to 8 (or 64 cascaded) interrupt levels.",
          "EOI (End of Interrupt): Signal sent to PIC at end of ISR to indicate completion."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/interrupt_cycle.jpg",
            caption: "Interrupt Cycle and ISR Execution",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "types",
            items: [
              { name: "Hardware Interrupt (IRQ)", desc: "Generated by peripheral devices: keyboard, mouse, timer, disk, network. Completely asynchronous — can occur at any time between any two CPU instructions. Initiated by asserting an interrupt request line on the CPU chip." },
              { name: "Software Interrupt (Trap / Syscall)", desc: "Generated by executing a special instruction: INT n (x86), TRAP, SYSCALL. Synchronous — occurs at a specific instruction. Used by application programs to request OS services (system calls): read file, allocate memory, print output. More secure than direct hardware access." },
              { name: "Exception (Internal Interrupt)", desc: "Generated internally by the CPU when an error condition occurs during instruction execution: Division by Zero, Undefined Opcode, Page Fault (virtual memory), Stack Overflow, Memory Access Violation. CPU generates exception and transfers control to OS exception handler." },
              { name: "Maskable Interrupt (INTR line)", desc: "Can be disabled (masked) by clearing the Interrupt Flag (IF) using CLI instruction. CPU will ignore maskable interrupts while IF=0. Enabled again with STI instruction. Used for non-critical I/O devices. Allows critical code sections to run without interruption." },
              { name: "Non-Maskable Interrupt (NMI)", desc: "Cannot be disabled by software. Has its own separate pin on the CPU chip. Used for truly critical events that the system cannot afford to miss: power failure (save state before power dies), hardware memory parity error, watchdog timer expiry. Highest priority." },
              { name: "Vectored Interrupt", desc: "Each interrupt source has a unique ID (vector number). CPU uses this number to index into the Interrupt Vector Table (IVT) stored in low memory. IVT entry at vector × 4 contains the ISR address. CPU reads ISR address from IVT and jumps directly to it. Fast — no software scanning required." },
              { name: "Daisy Chain Priority", desc: "All devices share one interrupt request line (INTR). CPU responds with Interrupt Acknowledge (INTA). INTA signal propagates through chain: device 1 → device 2 → device 3 → ... . First device in chain that requested interrupt captures INTA and places its vector number on data bus. Priority = position in chain (device 1 has highest priority)." }
            ]
          }
        ],
        example: {
          title: "Complete Interrupt Handling Sequence",
          description: `Scenario: CPU executing program at PC=1050
          Keyboard interrupt occurs (user pressed 'A')

DETECTION:
- Keyboard controller: sets FGI (input flag) = 1 in status register
- Keyboard: asserts INTR signal on interrupt request line

CPU SIDE (after completing instruction at 1050):
1. Check: IEN=1 AND FGI=1 → interrupt pending!
2. CPU saves return address: M[0] ← PC (stores 1051 in location 0)
3. CPU disables further interrupts: IEN ← 0
4. CPU jumps to ISR: PC ← 1 (ISR starts at address 1)

INTERRUPT SERVICE ROUTINE (address 1 onwards):
ISR_1:  PUSH all registers to stack  ; save CPU state
ISR_2:  INP                          ; read 'A' from INPR into AC
ISR_3:  STA ASCII_BUFFER             ; store character in buffer
ISR_4:  ION                          ; re-enable interrupts (IEN←1)
ISR_5:  POP all registers from stack ; restore CPU state
ISR_6:  LDA 0                        ; load saved return address
ISR_7:  BUN (return address)         ; jump back to 1051

RESUME:
- CPU is back at address 1051
- Original program resumes
- No indication (from program's perspective) that interrupt occurred!`,
          note: "Interrupt handling sequence is 8–10 marks. Draw flowchart showing detection, acknowledge, ISR, and return."
        }
      },

      {
        id: "4.3",
        title: "Memory Hierarchy",
        theory: "Memory hierarchy organizes storage by speed, cost, and capacity to provide the best balance of performance and affordability.",
        theoryParagraphs: [
          "The fundamental problem in computer memory design is the trade-off between speed, cost, and capacity: fast memory is expensive (and therefore small), while cheap memory is slow (and therefore large). No single technology can simultaneously provide large capacity, high speed, and low cost. The solution is the Memory Hierarchy — organizing different types of storage into levels, with faster (and smaller) storage near the CPU and slower (and larger) storage farther away.",
          "The principle that makes the memory hierarchy work efficiently is locality of reference. Programs exhibit two types of locality: Temporal locality — recently accessed data is likely to be accessed again soon (loops, repeatedly called functions). Spatial locality — data near recently accessed data is likely to be accessed soon (arrays, sequential code execution). Cache memory exploits both types of locality to keep frequently needed data close to the CPU.",
          "The memory hierarchy in modern systems (from fastest to slowest): CPU Registers (< 1ns, < 1KB, dozens of registers), L1 Cache (1–4ns, 32–64KB, on-chip), L2 Cache (5–10ns, 256KB–4MB, on or near chip), L3 Cache (20–40ns, 4–64MB, shared among cores), Main Memory/RAM (50–100ns, 4–64GB, DRAM), Solid State Drive (0.1–0.5ms, 128GB–8TB, Flash NAND), Hard Disk Drive (5–15ms, 1–20TB, magnetic), Tape/Cloud (seconds–minutes, unlimited, archival).",
          "The University of Rajasthan syllabus specifically includes: Main Memory (DRAM technology, memory modules), Auxiliary Memory (hard disks, SSDs, optical discs, magnetic tape), Associative Memory (Content-Addressable Memory, CAM — searched by content not address), Cache Memory (mapping functions, replacement policies), and Virtual Memory (paging, segmentation, page tables, TLB)."
        ],
        keyPoints: [
          "Memory hierarchy: Registers → L1 Cache → L2 Cache → L3 → RAM → SSD → HDD → Tape.",
          "Higher in hierarchy: faster, smaller, more expensive per bit.",
          "Temporal locality: recently used data will be used again soon.",
          "Spatial locality: data near recently used data will be used soon.",
          "Hit ratio (h): fraction of accesses found in cache. Typical L1 hit rate: 90–99%.",
          "Average access time = h × T_cache + (1-h) × T_main (for simple two-level hierarchy).",
          "DRAM (Dynamic RAM): Main memory. Requires periodic refresh. Higher density, cheaper.",
          "SRAM (Static RAM): Cache. No refresh needed. Much faster, smaller density, expensive."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Memory_hierarchy.svg/400px-Memory_hierarchy.svg.png",
            caption: "Memory Hierarchy Pyramid (Speed vs Capacity)",
            whiteBg: true
          }
        ],
        content: [
          {
            type: "hierarchy",
            levels: [
              { level: "CPU Registers (SRAM)", speed: "< 1 ns", size: "< 1 KB (32–256 registers)" },
              { level: "L1 Cache (SRAM)", speed: "1–4 ns", size: "32–64 KB (per core)" },
              { level: "L2 Cache (SRAM)", speed: "5–10 ns", size: "256 KB – 4 MB (per core)" },
              { level: "L3 Cache (SRAM)", speed: "20–40 ns", size: "4 – 64 MB (shared)" },
              { level: "Main Memory (DRAM)", speed: "50–100 ns", size: "4 – 128 GB" },
              { level: "NVMe SSD (Flash)", speed: "0.05 – 0.5 ms", size: "128 GB – 8 TB" },
              { level: "SATA SSD / HDD", speed: "0.1 – 15 ms", size: "256 GB – 20 TB" },
              { level: "Magnetic Tape / Cloud", speed: "seconds – minutes", size: "Unlimited" }
            ]
          }
        ],
        example: {
          title: "Average Access Time Calculation",
          description: `Two-level memory hierarchy:
Cache access time (Tc) = 10 ns
Main memory access time (Tm) = 100 ns
Cache hit ratio (h) = 0.90 (90% of accesses found in cache)

Average Access Time formula:
T_avg = h × Tc + (1-h) × Tm
T_avg = 0.90 × 10 + 0.10 × 100
T_avg = 9 + 10
T_avg = 19 ns

Compare:
Without cache (RAM only): T = 100 ns
With cache (90% hit rate): T = 19 ns
Speedup = 100/19 ≈ 5.26× faster!

If hit rate = 0.99:
T = 0.99×10 + 0.01×100 = 9.9 + 1 = 10.9 ns
Speedup = 100/10.9 ≈ 9.17×

Higher hit rate → closer to cache speed.
This shows why CPU designers work hard to improve cache hit rates!`,
          note: "Average access time calculation is a 5-mark numerical question. Memorize the formula and be able to calculate for different hit ratios."
        }
      },

      {
        id: "4.4",
        title: "Cache Memory",
        theory: "Cache memory is ultra-fast SRAM that stores copies of frequently accessed RAM blocks to reduce effective memory access time.",
        theoryParagraphs: [
          "Cache memory is a small, extremely fast type of computer memory that provides high-speed data access to the processor and stores frequently used programs, instructions, and data. It is placed between the CPU and main RAM in the memory hierarchy. Cache memory is built from Static RAM (SRAM) cells which are faster but use more transistors per bit than DRAM. Modern CPUs have three levels of cache (L1, L2, L3) with L1 being the fastest and smallest.",
          "When the CPU needs to read data: it first checks L1 cache (cache hit if found), then L2 (if not in L1), then L3 (if not in L2), then RAM (if not in any cache). Cache Hit occurs when requested data is found in cache. Cache Miss occurs when it is not. On a miss, the entire cache block (a group of 32–64 bytes) containing the requested address is loaded from RAM into cache. This exploits spatial locality — neighboring data that will likely be needed soon is also loaded.",
          "Three mapping functions determine how RAM blocks map to cache locations: Direct Mapping (each RAM block maps to exactly one cache line — simple and fast but can cause conflict misses), Fully Associative Mapping (a block can go to any cache line — maximum flexibility but expensive hardware), and Set-Associative Mapping (compromise — cache divided into sets, block can go to any line within its set).",
          "Cache replacement policies determine which cached block to evict when the cache is full and a new block must be loaded: LRU (Least Recently Used — evict the block unused for the longest time), FIFO (evict the block that has been in cache the longest), LFU (Least Frequently Used — evict the block accessed the fewest times), and Random (randomly select a block to evict — simple but suboptimal). LRU is the most commonly used policy in real systems."
        ],
        keyPoints: [
          "Cache block (line) = 32–64 bytes (typical). Block = unit of transfer between RAM and cache.",
          "Direct Mapped: Block → one specific cache line. Cache line = Block# mod (number of cache lines).",
          "Fully Associative: Block → any cache line. Best hit rate, most expensive hardware (parallel comparators).",
          "2-way Set Associative: cache divided into sets of 2 lines. Block maps to one set, either line. Common compromise.",
          "LRU replacement: evict least recently used block. Works because of temporal locality.",
          "Write-through: writes go to cache AND RAM simultaneously. Always consistent. Slower.",
          "Write-back: writes go to cache only. RAM updated only on eviction. Faster but uses 'dirty bit'.",
          "Valid bit: indicates if cache line contains valid data (1) or is empty/invalid (0).",
          "Tag: upper bits of address stored with cache line to identify which RAM block is cached."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cache_operation_diagram.png/400px-Cache_operation_diagram.png",
            caption: "Cache Hit and Miss Operation",
            whiteBg: true
          }
        ],
        content: [
          {
            type: "mapping",
            items: [
              { name: "Direct Mapped Cache", desc: "Each main memory block maps to EXACTLY ONE specific cache line. Formula: Cache line number = (Memory block number) mod (Number of cache lines in cache). Tag = upper bits of block number stored to verify. Advantages: Simple hardware, fast lookup. Disadvantage: Conflict misses — if program alternates between two addresses that map to same line, constant eviction occurs ('thrashing')." },
              { name: "Fully Associative Cache", desc: "Any memory block can be placed in ANY cache line. All tag registers searched simultaneously using associative hardware (CAM — Content Addressable Memory). Advantages: Maximum flexibility, lowest miss rate. Disadvantage: Very expensive hardware — requires a comparator for every cache line, operating in parallel. Used only for very small, critical caches like TLBs (Translation Lookaside Buffers)." },
              { name: "Set Associative Cache (N-way)", desc: "Best of both. Cache is divided into sets of N lines each. A block maps to exactly one set (like direct mapped) but can go into any line within that set (like fully associative). Common: 2-way, 4-way, 8-way, 16-way. Formula: Set = Block# mod (number of sets). Within the set, use LRU to select line. Most modern L1/L2 caches are 4-way or 8-way set associative." },
              { name: "LRU Replacement Policy", desc: "When a cache miss occurs and the target set is full, the Least Recently Used block in that set is evicted to make room. Hardware tracks last access time for each line. LRU works because of temporal locality — recently used data is likely to be used again. Downside: hardware is more complex for large N-way caches (approx-LRU used in practice)." },
              { name: "Write-Through Policy", desc: "Every write to a cache line is simultaneously written to main memory as well. Cache and RAM are always consistent. Advantage: Simple, no data loss on power failure or crash. Disadvantage: Every write hits the slow RAM — reduces write performance. Partially solved by Write Buffers that queue writes and do them in background." },
              { name: "Write-Back (Copy-Back) Policy", desc: "Writes go only to the cache. Main memory is updated only when the modified cache line is evicted. Each cache line has a 'dirty bit' (D): D=1 means line has been modified and differs from RAM. On eviction: if D=1, write back to RAM first, then load new block. If D=0, simply overwrite. Advantage: Multiple writes to same line = one RAM write. Better write performance than write-through." }
            ]
          }
        ],
        example: {
          title: "Direct Mapped Cache: Address Calculation",
          description: `Cache size: 8 lines (lines numbered 0–7)
Block size: 4 bytes (2-bit offset)
Main memory: 64 bytes (6-bit address)

Address format: [TAG 1-bit | LINE 3-bit | OFFSET 2-bit]

Accessing address 25 = 011001 binary:
  TAG    = 0 (bit 5)
  LINE   = 110 = 6 (bits 4-2)
  OFFSET = 01 (bits 1-0, byte within block)

Check cache line 6: is TAG stored there = 0? 
  YES (and valid): CACHE HIT! Return byte at offset 01
  NO (or invalid): CACHE MISS! 
    Load 4-byte block from RAM addresses 24-27 into cache line 6
    Store TAG=0, valid=1
    Return byte at offset 01

Conflict example:
  Address 25 → Line 6, Tag 0
  Address 57 → Line 6, Tag 1  (57 = 111001, line = 110 = 6!)
  Accessing 25 then 57 alternately causes EVERY access to miss!
  This is the conflict miss problem of direct mapping.
  Solution: Use set-associative cache.`,
          note: "Cache address calculation is a 5-mark numerical. Memorize: address = tag | line | offset."
        }
      },

      {
        id: "4.5",
        title: "Virtual Memory",
        theory: "Virtual memory allows programs to use more address space than physical RAM by using disk as an extension of main memory.",
        theoryParagraphs: [
          "Virtual Memory is a memory management technique implemented jointly by the operating system and the Memory Management Unit (MMU) hardware. It gives each process the illusion that it has exclusive access to a large, contiguous memory space (the virtual address space), even if the actual physical RAM is smaller than the virtual space and is shared among multiple processes. Programs use virtual addresses; the MMU transparently translates these to physical addresses in RAM.",
          "The most common implementation of virtual memory is Paging. The virtual address space is divided into fixed-size blocks called pages (typically 4 KB each). Physical RAM is divided into equal-size blocks called page frames. A page can be stored in any available page frame — they need not be contiguous. When a process's pages don't fit in RAM, some are stored on disk in a swap space. The mapping from virtual pages to physical frames is recorded in the Page Table, one per process.",
          "A Page Fault occurs when the CPU tries to access a virtual page that is not currently in RAM (its 'present' bit in the page table is 0). The MMU generates a page fault exception, which transfers control to the OS page fault handler. The OS must: find the faulted page on disk, find a free physical frame (possibly evicting another page using LRU or another replacement policy), load the page from disk, update the page table, and restart the faulting instruction. Page faults are very expensive — disk access takes millions of times longer than RAM access.",
          "The Translation Lookaside Buffer (TLB) is a small, fully-associative cache for recent page table entries. Translating every virtual address would require accessing the page table in RAM — adding at least one RAM access to every memory reference. The TLB caches recent translations (typically 64–1024 entries) so that in the common case (TLB hit), translation happens in the same cycle as the cache access. Typical TLB hit rates are 95–99%, making virtual memory practical without significant performance overhead."
        ],
        keyPoints: [
          "Virtual address space: each process sees private address space from 0 to max (e.g., 0 to 4GB for 32-bit).",
          "Paging: divides VA and PA into fixed-size pages/frames (typically 4KB = 2¹² bytes).",
          "Page Table: per-process table mapping VPN (virtual page number) → PFN (physical frame number).",
          "Page Table Entry (PTE) contains: PFN, Valid/Present bit, Dirty bit, Referenced bit, Protection bits.",
          "Page Fault: valid bit = 0 → OS loads page from disk. Very expensive (milliseconds).",
          "LRU page replacement: evict the page not used for the longest time.",
          "TLB (Translation Lookaside Buffer): cache of recent VA→PA translations. Hit rate ~99%.",
          "TLB miss → page table walk in RAM. Page fault → disk access.",
          "Thrashing: excessive page faults because too many processes for available RAM. CPU spends all time swapping."
        ],
        diagrams: [
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Virtual_memory.svg/400px-Virtual_memory.svg.png",
            caption: "Virtual Memory — Paging and Address Translation",
            whiteBg: true
          }
        ],
        content: [
          {
            type: "concepts",
            items: [
              { name: "Virtual vs Physical Address", desc: "Virtual Address (VA): Address used by program. Generated by CPU. Two parts: Virtual Page Number (VPN) + Page Offset. Physical Address (PA): Actual address in RAM hardware. Two parts: Physical Frame Number (PFN) + Offset (same as page offset). MMU translates VA to PA on every memory access." },
              { name: "Page Table Structure", desc: "Array in RAM, one entry per virtual page. Indexed by VPN. Each Page Table Entry (PTE): Present bit (1=in RAM, 0=on disk), PFN (which frame holds this page), Dirty bit (1=modified, write back needed), Referenced/Access bit (used by LRU algorithm), Protection bits (Read/Write/Execute permissions)." },
              { name: "Page Fault Handling", desc: "Trigger: CPU accesses VA whose PTE has Present=0. MMU raises page fault exception. OS handler: (1) Find page on disk swap space, (2) If RAM is full: choose victim page using LRU, if dirty: write victim to disk, (3) Read faulted page from disk into free frame, (4) Update PTE: PFN=new frame, Present=1, (5) Restart the faulting instruction." },
              { name: "Page Replacement (LRU)", desc: "When RAM is full, OS must evict a page to load a faulted page. Optimal policy (OPT): evict page that won't be used for the longest time in the future — impossible to implement (requires future knowledge). LRU approximation: evict page not used for the longest time in the past. Hardware sets Referenced bit=1 when page is accessed. OS periodically clears these bits." },
              { name: "TLB — Translation Lookaside Buffer", desc: "Small, fast, fully-associative cache storing recent VPN→PFN translations. Typical size: 64–1024 entries. On every memory access: TLB checked in parallel with cache. TLB Hit: PFN obtained in one cycle, no page table access needed. TLB Miss: Must access page table in RAM (one RAM access). If PTE shows page not in RAM: page fault occurs." },
              { name: "Thrashing", desc: "Condition where the system spends more time swapping pages than executing instructions. Occurs when combined working sets of running processes exceed available RAM. OS detects thrashing by monitoring page fault rate. Solution: reduce number of running processes (reduce multiprogramming degree), add more RAM, or use better page replacement." }
            ]
          }
        ],
        example: {
          title: "Complete Address Translation with TLB",
          description: `System: 32-bit VA, 4KB pages, 16-bit PA (64KB physical RAM)
Page size = 4KB = 2¹² → Offset = 12 bits
VPN = VA[31:12] (20 bits), PFN = PA[15:12] (4 bits)

Virtual Address: 0x00023A10
  Binary: 0000 0000 0000 0010 0011 | 1010 0001 0000
  VPN    = 0x00023 = 35 decimal
  Offset = 0xA10  = 2576 decimal

STEP 1 — Check TLB:
  Search TLB for VPN=35
  TLB Hit! → PFN = 7
  (Skip page table access — much faster!)

STEP 2 — Form Physical Address:
  PA = PFN × 4096 + Offset
  PA = 7 × 4096 + 2576
  PA = 28672 + 2576 = 31248 = 0x7A10

STEP 3 — Access Memory:
  Read from physical address 0x7A10

IF TLB MISS (VPN=35 not in TLB):
  Access page table in RAM at entry [35]
  PTE[35]: Present=1, PFN=7, Dirty=0
  Load VPN=35→PFN=7 into TLB (evict LRU TLB entry)
  Continue to form PA as above

IF PAGE FAULT (PTE Present=0):
  OS page fault handler runs
  Load page 35 from disk into RAM frame N
  Update PTE[35]: PFN=N, Present=1
  Load into TLB and retry instruction`,
          note: "Address translation (VA→PA) is a 6–8 mark numerical question. Show TLB check, page table lookup, and final address calculation."
        }
      },

      {
        id: "4.6",
        title: "Associative & Auxiliary Memory",
        theory: "Associative memory is searched by content rather than address; auxiliary memory provides large, non-volatile storage at low cost.",
        theoryParagraphs: [
          "Associative Memory, also called Content-Addressable Memory (CAM), is a type of memory that is searched by the content of the data rather than by an address. Instead of specifying 'give me the data at address X', the user specifies a key (a part of the data pattern) and the associative memory responds with all locations containing data matching that key — simultaneously checking all entries in parallel. This makes CAM orders of magnitude faster than sequential searching through RAM for lookups.",
          "The internal structure of a CAM cell is more complex than RAM — each cell has a comparator that compares the stored bit with the search key bit. All comparators operate in parallel. The Match Register stores which locations matched (one bit per word). A priority encoder selects one matched location (e.g., lowest address) if multiple matches occur. CAM is much more expensive per bit than RAM due to the extra comparator circuitry, limiting its use to small but performance-critical applications like TLBs and network lookup tables.",
          "Auxiliary Memory (Secondary Storage) is non-volatile memory that retains data without power and provides much larger capacity than RAM at lower cost per bit. The trade-off is much slower access: RAM is 50–100ns, while HDD takes 5–15ms (100,000× slower!). Despite this, auxiliary memory is indispensable for permanent storage of operating systems, applications, user data, and virtual memory swap space.",
          "Hard Disk Drives (HDD) use magnetic storage on rotating platters. The seek time (moving the read/write head to the correct track) and rotational latency (waiting for the correct sector to rotate under the head) make HDDs slow for random access but reasonably fast for sequential access. Solid State Drives (SSD) use NAND Flash memory with no moving parts, providing much faster random access (< 0.1ms), lower power consumption, and greater shock resistance, at higher cost per GB."
        ],
        keyPoints: [
          "CAM (Associative Memory): searched by CONTENT, not address. All entries compared simultaneously.",
          "CAM Match Register: one bit per word; 1 = match found at that word.",
          "TLB uses CAM: VPN broadcast to all entries, matching entry returns PFN instantly.",
          "Network routers use CAM (TCAM) for fast IP address lookups at wire speed.",
          "HDD: magnetic, rotating platters. Access time = seek time + rotational latency + transfer time.",
          "Seek time (HDD): time to move head to correct track. Typically 5–15ms.",
          "Rotational latency: average = half revolution time. At 7200 RPM = 60000ms/7200 = ~4.2ms.",
          "SSD: NAND Flash. No seek time. Read: ~0.1ms, Write: ~0.5ms. Faster, quieter, lower power.",
          "Magnetic Tape: Sequential access only. Used for archival backup. Cheapest per GB."
        ],
        diagrams: [
          {
            url: "https://www.tutorialspoint.com/computer_logical_organization/images/associative_memory.jpg",
            caption: "Associative Memory Structure (CAM)",
            whiteBg: false
          }
        ],
        content: [
          {
            type: "concepts",
            items: [
              { name: "Associative Memory (CAM) Operation", desc: "Search process: (1) Argument register (search key) is loaded with the search pattern. (2) Key is broadcast simultaneously to ALL CAM cells. (3) Each word's comparator checks if stored data matches the key (all comparisons happen in parallel — O(1) time). (4) Matching words set their bit in the Match Register. (5) Priority encoder selects one match. (6) Data from matched location is read out." },
              { name: "CAM Applications", desc: "TLB (Translation Lookaside Buffer): Searches for VPN among all stored VPN→PFN mappings. Network Routing: TCAM (Ternary CAM, supports 0/1/X don't-care) for IP prefix matching in routers at wire speed. Cache Tag Lookup: Checks if a requested address is cached. Database Engines: Associative retrieval without sequential scan." },
              { name: "Hard Disk Drive (HDD)", desc: "Components: Rotating platters (magnetic coated disks, 5400–15000 RPM), Read/Write heads (one per surface, rides nanometers above platter on air cushion), Actuator arm (moves heads radially). Data organized in tracks (concentric circles), sectors (512 bytes or 4KB per sector), and cylinders (same track on all platters). Access time = Seek time (3–12ms) + Rotational latency (0–8ms) + Transfer time (fast)." },
              { name: "Solid State Drive (SSD)", desc: "Uses NAND Flash memory cells. No moving parts → no seek time, no rotational latency. Random read: ~0.1ms, Sequential read: 500MB/s–7GB/s (NVMe). Pages (4KB) and blocks (256KB) are units of operation. WRITE LIMITATION: Flash cells wear out after ~10,000–100,000 write cycles. Wear leveling algorithms spread writes evenly across all blocks." },
              { name: "Optical Storage (CD/DVD/Blu-ray)", desc: "Data stored as pits and lands on a spiral track. Laser reads the optical difference. CD: 700MB. DVD: 4.7–17GB. Blu-ray: 25–128GB. Speed: 1×CD=150KB/s. Used for software distribution, video archival. Declining use as USB drives and downloads replace them. CD-R/DVD-R are write-once; CD-RW/DVD-RW are rewritable." },
              { name: "Magnetic Tape", desc: "Data stored on magnetic particles on a long plastic tape wound on a reel. Sequential access only — cannot jump to arbitrary location (unlike HDD/SSD random access). Very slow for random access (minutes). But: extremely cheap per GB, high capacity (up to 45TB per cartridge), long archival life (30+ years). Used for: backup of entire data centers, archival storage, scientific data, disaster recovery." }
            ]
          }
        ],
        example: {
          title: "CAM vs RAM Search: TLB Lookup Performance",
          description: `TLB contains 64 entries (VPN → PFN mappings)

SEQUENTIAL RAM-BASED SEARCH:
  for (i = 0; i < 64; i++) {
    if (tlb[i].vpn == requested_vpn) {
      return tlb[i].pfn;
    }
  }
  Average: 32 comparisons
  Time: 32 × (1 RAM access time) = 32 × 100ns = 3200ns !!

CAM-BASED TLB (actual hardware):
  All 64 entries compared SIMULTANEOUSLY with requested VPN
  Time: 1 comparison cycle ≈ 1–2 ns

Speedup: 3200ns / 1.5ns ≈ 2000× FASTER!

HDD vs SSD Access Time Comparison:
Operation           | HDD (7200 RPM) | SSD (SATA) | SSD (NVMe)
Random Read 4KB     |  8–12 ms       |  0.05 ms   | 0.02 ms
Sequential Read     |  100 MB/s      |  550 MB/s  | 3500 MB/s
Random Write 4KB    |  8–12 ms       |  0.10 ms   | 0.05 ms
IOPS (random 4KB)   |  100–200       | 50,000     | 500,000

For a database with 10,000 random reads:
HDD: 10,000 × 10ms = 100 seconds
NVMe SSD: 10,000 × 0.02ms = 0.2 seconds
→ 500× faster!`,
          note: "CAM vs RAM comparison and secondary storage parameters are important 5-mark questions. Know the access time formulas."
        }
      }
    ]
  }
];

export const coaUnits = units;
