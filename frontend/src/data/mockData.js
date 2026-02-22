// ✅ COURSE BASIC INFO (used by header / overview pages)
export const courseInfo = {
  title: "Computer Organization & Architecture",
  code: "BCA-52T-115",
  description: "Interactive Smart Learning Platform for COA"
};

// ✅ OLD STRUCTURE SUPPORT (so existing components don’t crash)
export const units = [
  { id: 1, name: "UNIT I - Boolean Algebra & Combinational Logic" },
  { id: 2, name: "UNIT II - Sequential Logic" },
  { id: 3, name: "UNIT III - Computer Organization" },
  { id: 4, name: "UNIT IV - Memory & I/O Organization" }
];

// ✅ NEW SMART CONTENT STRUCTURE
export const coaUnits = [
  {
    unit: "UNIT I",
    title: "Boolean Algebra & Combinational Logic",
    topics: [
      {
        name: "Logic Gates",
        theory: "Basic building blocks of digital systems.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Logic_gates.svg"
      },
      {
        name: "Multiplexer",
        theory: "Selects one input from multiple inputs.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Multiplexer_4-to-1.svg"
      },
      {
        name: "Full Adder",
        theory: "Performs binary addition.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Full_Adder.svg"
      },
      {
        name: "Decoder",
        theory: "Activates one output line.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/2-to-4_Decoder.svg"
      }
    ]
  },
  {
    unit: "UNIT II",
    title: "Sequential Logic",
    topics: [
      {
        name: "Flip-Flops",
        theory: "SR, JK, D and T flip-flops store 1-bit data.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/JK_Flip_Flop.svg"
      },
      {
        name: "Registers",
        theory: "Group of flip-flops for storage.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/4-bit_shift_register.svg"
      }
    ]
  },
  {
    unit: "UNIT III",
    title: "Computer Organization",
    topics: [
      {
        name: "Instruction Cycle",
        theory: "Fetch → Decode → Execute → Store.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/instruction_cycle.jpg"
      }
    ]
  },
  {
    unit: "UNIT IV",
    title: "Memory Organization",
    topics: [
      {
        name: "Memory Hierarchy",
        theory: "Registers → Cache → Main Memory → Secondary.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Memory_hierarchy.svg"
      },
      {
        name: "Cache Memory",
        theory: "High speed memory between CPU and RAM.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Cache-read.svg"
      },
      {
        name: "DMA",
        theory: "Direct data transfer without CPU.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/dma_controller.jpg"
      },
      {
        name: "Interrupts",
        theory: "Signal for immediate CPU attention.",
        image: "https://www.tutorialspoint.com/computer_logical_organization/images/interrupt_cycle.jpg"
      }
    ]
  }
];