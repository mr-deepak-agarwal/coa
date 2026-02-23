// ✅ This satisfies HeroSection + Footer (OLD UI)
export const courseInfo = {
  title: "Computer Organization & Architecture",
  code: "BCA-52T-115",
  description: "Interactive Smart Learning Platform for COA",
};

// ✅ This is used by your new syllabus + unit content
export const courseData = {
  units: [
    {
      unit: "UNIT I",
      title: "Boolean Algebra & Combinational Logic",
      topics: [
        {
          name: "Logic Gates",
          theory: "Basic building blocks of digital systems.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/Logic_gates.svg",
        },
        {
          name: "Multiplexer",
          theory: "Selects one input from multiple inputs.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/Multiplexer_4-to-1.svg",
        },
        {
          name: "Full Adder",
          theory: "Performs binary addition.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/5d/Full_Adder.svg",
        },
        {
          name: "Decoder",
          theory: "Activates one output line.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/2-to-4_Decoder.svg",
        },
      ],
    },
    {
      unit: "UNIT II",
      title: "Sequential Logic",
      topics: [
        {
          name: "Flip-Flops",
          theory: "SR, JK, D and T flip-flops store 1-bit data.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/JK_Flip_Flop.svg",
        },
        {
          name: "Registers",
          theory: "Group of flip-flops for storage.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/8a/4-bit_shift_register.svg",
        },
      ],
    },
    {
      unit: "UNIT III",
      title: "Computer Organization",
      topics: [
        {
          name: "Instruction Cycle",
          theory: "Fetch → Decode → Execute → Store.",
          image:
            "https://www.tutorialspoint.com/computer_logical_organization/images/instruction_cycle.jpg",
        },
      ],
    },
    {
      unit: "UNIT IV",
      title: "Memory Organization",
      topics: [
        {
          name: "Memory Hierarchy",
          theory:
            "Registers → Cache → Main Memory → Secondary Memory.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/Memory_hierarchy.svg",
        },
      ],
    },
  ],
};