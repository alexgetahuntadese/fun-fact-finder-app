export interface PhysicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12PhysicsQuestions: { [chapter: string]: PhysicsQuestion[] } = {
  "Unit 1: Application of physics in other fields": [
    // Easy Questions
    {
      id: "phy12_app_e1",
      question: "What is medical physics?",
      options: ["Application of physics principles in medicine", "Study of medicine only", "Study of chemistry in medicine", "Biology in medicine"],
      correct: "Application of physics principles in medicine",
      explanation: "Medical physics applies physics concepts and methods to healthcare, including imaging, radiation therapy, and diagnostic equipment.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e2",
      question: "Which imaging technique uses X-rays?",
      options: ["MRI", "Ultrasound", "CT scan", "PET scan"],
      correct: "CT scan",
      explanation: "CT (Computed Tomography) scans use X-rays to create detailed cross-sectional images of the body.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e3",
      question: "What physics principle is used in ultrasound imaging?",
      options: ["Sound waves", "Light waves", "Radio waves", "Gamma rays"],
      correct: "Sound waves",
      explanation: "Ultrasound imaging uses high-frequency sound waves that reflect off tissues to create images.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e4",
      question: "In agriculture, physics is applied in:",
      options: ["Irrigation systems", "Plant breeding", "Soil chemistry", "Fertilizer composition"],
      correct: "Irrigation systems",
      explanation: "Physics principles like fluid mechanics and pressure are applied in designing efficient irrigation systems.",
      difficulty: "Easy"
    },
    {
      id: "phy12_app_e5",
      question: "What is biophysics?",
      options: ["Physics applied to biological systems", "Pure biology", "Chemistry of life", "Genetics study"],
      correct: "Physics applied to biological systems",
      explanation: "Biophysics uses physics methods and theories to study biological systems and phenomena.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_app_m1",
      question: "Which physics principle explains how MRI works?",
      options: ["Nuclear magnetic resonance", "X-ray absorption", "Sound reflection", "Light refraction"],
      correct: "Nuclear magnetic resonance",
      explanation: "MRI uses nuclear magnetic resonance where hydrogen nuclei in the body respond to magnetic fields and radio waves.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m2",
      question: "In radiation therapy, what type of radiation is commonly used?",
      options: ["Alpha particles", "Beta particles", "Gamma rays", "Visible light"],
      correct: "Gamma rays",
      explanation: "Gamma rays are high-energy electromagnetic radiation used in radiation therapy to destroy cancer cells.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m3",
      question: "The Doppler effect in medical ultrasound is used to measure:",
      options: ["Blood flow velocity", "Tissue density", "Temperature", "Pressure"],
      correct: "Blood flow velocity",
      explanation: "Doppler ultrasound measures the change in frequency of reflected sound waves to determine blood flow velocity.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m4",
      question: "In agricultural remote sensing, which electromagnetic spectrum is primarily used?",
      options: ["Visible and infrared", "X-rays", "Gamma rays", "Radio waves only"],
      correct: "Visible and infrared",
      explanation: "Remote sensing in agriculture uses visible and infrared light to monitor crop health and soil conditions.",
      difficulty: "Medium"
    },
    {
      id: "phy12_app_m5",
      question: "What physics concept is crucial in understanding biomechanics?",
      options: ["Force and motion", "Electromagnetic induction", "Nuclear decay", "Wave interference"],
      correct: "Force and motion",
      explanation: "Biomechanics applies principles of force, motion, and mechanics to understand how organisms move and function.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_app_h1",
      question: "The specific absorption rate (SAR) in medical procedures measures:",
      options: ["Rate of energy absorption by tissue", "Rate of drug absorption", "Rate of oxygen absorption", "Rate of nutrient absorption"],
      correct: "Rate of energy absorption by tissue",
      explanation: "SAR measures the rate at which energy is absorbed by human tissue when exposed to electromagnetic fields, important in MRI safety.",
      difficulty: "Hard"
    },
    {
      id: "phy12_app_h2",
      question: "In positron emission tomography (PET), what happens when a positron meets an electron?",
      options: ["Annihilation producing gamma rays", "Nuclear fusion", "Chemical reaction", "Elastic collision"],
      correct: "Annihilation producing gamma rays",
      explanation: "In PET scans, positrons annihilate with electrons, producing two gamma rays that travel in opposite directions, which are detected to create images.",
      difficulty: "Hard"
    }
  ],

  "Unit 2: Two-dimensional motion": [
    // Easy Questions
    {
      id: "phy12_2d_e1",
      question: "What is projectile motion?",
      options: ["Motion under gravity only", "Circular motion", "Linear motion", "Random motion"],
      correct: "Motion under gravity only",
      explanation: "Projectile motion is the motion of objects under the influence of gravity alone, following a parabolic path.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e2",
      question: "In projectile motion, the horizontal component of velocity:",
      options: ["Remains constant", "Increases", "Decreases", "Becomes zero"],
      correct: "Remains constant",
      explanation: "In the absence of air resistance, the horizontal component of velocity remains constant throughout projectile motion.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e3",
      question: "At the highest point of projectile motion, the vertical velocity is:",
      options: ["Zero", "Maximum", "Minimum but not zero", "Equal to horizontal velocity"],
      correct: "Zero",
      explanation: "At the highest point, the vertical component of velocity becomes zero before the object starts falling back down.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e4",
      question: "What is the path of a projectile called?",
      options: ["Parabola", "Circle", "Ellipse", "Straight line"],
      correct: "Parabola",
      explanation: "The trajectory of a projectile forms a parabolic curve due to the constant horizontal velocity and uniformly accelerated vertical motion.",
      difficulty: "Easy"
    },
    {
      id: "phy12_2d_e5",
      question: "In circular motion, what direction does centripetal acceleration point?",
      options: ["Toward the center", "Away from center", "Tangent to circle", "Perpendicular to plane"],
      correct: "Toward the center",
      explanation: "Centripetal acceleration always points toward the center of the circular path, providing the force needed for circular motion.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_2d_m1",
      question: "For maximum range in projectile motion, the launch angle should be:",
      options: ["45 degrees", "30 degrees", "60 degrees", "90 degrees"],
      correct: "45 degrees",
      explanation: "Maximum range occurs at a launch angle of 45° when air resistance is neglected and launch and landing heights are equal.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m2",
      question: "The time of flight for a projectile depends on:",
      options: ["Initial vertical velocity and gravity", "Initial horizontal velocity only", "Mass of projectile", "Air density"],
      correct: "Initial vertical velocity and gravity",
      explanation: "Time of flight depends on the vertical component of initial velocity and gravitational acceleration, not on horizontal velocity or mass.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m3",
      question: "In uniform circular motion, which quantity remains constant?",
      options: ["Speed", "Velocity", "Acceleration", "Angular displacement"],
      correct: "Speed",
      explanation: "In uniform circular motion, the speed (magnitude of velocity) remains constant, but velocity and acceleration directions change continuously.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m4",
      question: "The centripetal force for circular motion is provided by:",
      options: ["Any force directed toward center", "Gravity only", "Friction only", "Normal force only"],
      correct: "Any force directed toward center",
      explanation: "Centripetal force can be provided by any force or combination of forces that acts toward the center of the circular path.",
      difficulty: "Medium"
    },
    {
      id: "phy12_2d_m5",
      question: "If the radius of circular motion doubles while speed remains constant, centripetal acceleration:",
      options: ["Becomes half", "Doubles", "Becomes quarter", "Remains same"],
      correct: "Becomes half",
      explanation: "Centripetal acceleration = v²/r, so if radius doubles and speed is constant, acceleration becomes half.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_2d_h1",
      question: "A projectile is launched at angle θ with initial velocity v₀. The maximum height reached is:",
      options: ["v₀²sin²θ/(2g)", "v₀²cos²θ/(2g)", "v₀²/(2g)", "v₀²sinθ/(2g)"],
      correct: "v₀²sin²θ/(2g)",
      explanation: "Maximum height = (v₀sinθ)²/(2g) = v₀²sin²θ/(2g), derived from kinematic equations for vertical motion.",
      difficulty: "Hard"
    },
    {
      id: "phy12_2d_h2",
      question: "In non-uniform circular motion, the total acceleration is:",
      options: ["Vector sum of tangential and centripetal accelerations", "Only centripetal acceleration", "Only tangential acceleration", "Difference of tangential and centripetal accelerations"],
      correct: "Vector sum of tangential and centripetal accelerations",
      explanation: "Non-uniform circular motion has both tangential acceleration (changing speed) and centripetal acceleration (changing direction).",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Fluid Mechanics": [
    // Easy Questions
    {
      id: "phy12_fluid_e1",
      question: "What is pressure?",
      options: ["Force per unit area", "Force times area", "Area per unit force", "Volume per unit force"],
      correct: "Force per unit area",
      explanation: "Pressure is defined as the force applied perpendicular to a surface per unit area of that surface.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e2",
      question: "What is the SI unit of pressure?",
      options: ["Pascal", "Newton", "Joule", "Watt"],
      correct: "Pascal",
      explanation: "The SI unit of pressure is Pascal (Pa), which equals one Newton per square meter (N/m²).",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e3",
      question: "Atmospheric pressure at sea level is approximately:",
      options: ["101,325 Pa", "1,000 Pa", "10,000 Pa", "1,000,000 Pa"],
      correct: "101,325 Pa",
      explanation: "Standard atmospheric pressure at sea level is 101,325 Pa or 1 atmosphere.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e4",
      question: "What is buoyancy?",
      options: ["Upward force on submerged objects", "Downward force on floating objects", "Sideways force in fluids", "Force that sinks objects"],
      correct: "Upward force on submerged objects",
      explanation: "Buoyancy is the upward force exerted by a fluid on any object that is wholly or partially submerged in it.",
      difficulty: "Easy"
    },
    {
      id: "phy12_fluid_e5",
      question: "Which principle explains why ships float?",
      options: ["Archimedes' principle", "Newton's first law", "Conservation of energy", "Pascal's principle"],
      correct: "Archimedes' principle",
      explanation: "Archimedes' principle states that the buoyant force equals the weight of displaced fluid, explaining why ships float.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_fluid_m1",
      question: "According to Pascal's principle, pressure applied to a confined fluid:",
      options: ["Is transmitted equally in all directions", "Only acts downward", "Only acts upward", "Decreases with depth"],
      correct: "Is transmitted equally in all directions",
      explanation: "Pascal's principle states that pressure applied to a confined fluid is transmitted undiminished in all directions.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m2",
      question: "The pressure at depth h in a fluid of density ρ is given by:",
      options: ["P₀ + ρgh", "P₀ - ρgh", "ρgh", "P₀/ρgh"],
      correct: "P₀ + ρgh",
      explanation: "Pressure at depth h below the surface is P = P₀ + ρgh, where P₀ is atmospheric pressure.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m3",
      question: "For an object to float in equilibrium, the buoyant force must:",
      options: ["Equal the object's weight", "Be greater than object's weight", "Be less than object's weight", "Be zero"],
      correct: "Equal the object's weight",
      explanation: "For floating equilibrium, the upward buoyant force must exactly balance the downward weight of the object.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m4",
      question: "Bernoulli's equation relates:",
      options: ["Pressure, velocity, and height in flowing fluids", "Only pressure and velocity", "Only pressure and height", "Mass and velocity"],
      correct: "Pressure, velocity, and height in flowing fluids",
      explanation: "Bernoulli's equation shows the relationship between pressure, kinetic energy per unit volume, and potential energy per unit volume in flowing fluids.",
      difficulty: "Medium"
    },
    {
      id: "phy12_fluid_m5",
      question: "Surface tension is caused by:",
      options: ["Cohesive forces between liquid molecules", "Adhesive forces only", "Gravity", "Air pressure"],
      correct: "Cohesive forces between liquid molecules",
      explanation: "Surface tension results from the net inward cohesive forces experienced by molecules at the liquid's surface.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_fluid_h1",
      question: "According to Bernoulli's equation, if the speed of a fluid increases, its pressure:",
      options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
      correct: "Decreases",
      explanation: "Bernoulli's principle shows that for streamline flow, higher fluid velocity corresponds to lower pressure (inverse relationship).",
      difficulty: "Hard"
    },
    {
      id: "phy12_fluid_h2",
      question: "The terminal velocity of a falling object in a fluid occurs when:",
      options: ["Drag force equals gravitational force", "Drag force is zero", "Gravitational force is zero", "Buoyant force equals gravitational force"],
      correct: "Drag force equals gravitational force",
      explanation: "Terminal velocity occurs when the upward drag force balances the net downward force (weight minus buoyancy).",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Electromagnetism": [
    // Easy Questions
    {
      id: "phy12_em_e1",
      question: "What is electric charge?",
      options: ["A fundamental property of matter", "A type of energy", "A magnetic field", "A gravitational force"],
      correct: "A fundamental property of matter",
      explanation: "Electric charge is a fundamental property of matter that causes objects to experience electromagnetic forces.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e2",
      question: "Like charges:",
      options: ["Repel each other", "Attract each other", "Have no effect", "Cancel each other"],
      correct: "Repel each other",
      explanation: "According to Coulomb's law, like charges (both positive or both negative) repel each other.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e3",
      question: "The SI unit of electric current is:",
      options: ["Ampere", "Volt", "Ohm", "Coulomb"],
      correct: "Ampere",
      explanation: "The ampere (A) is the SI base unit of electric current, defined as one coulomb of charge per second.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e4",
      question: "What is Ohm's law?",
      options: ["V = IR", "V = I/R", "V = I + R", "V = I - R"],
      correct: "V = IR",
      explanation: "Ohm's law states that voltage (V) equals current (I) times resistance (R): V = IR.",
      difficulty: "Easy"
    },
    {
      id: "phy12_em_e5",
      question: "A magnetic field around a current-carrying wire forms:",
      options: ["Circular loops", "Straight lines", "Ellipses", "Random patterns"],
      correct: "Circular loops",
      explanation: "The magnetic field around a straight current-carrying wire forms concentric circular loops centered on the wire.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_em_m1",
      question: "Electric potential difference is measured in:",
      options: ["Volts", "Amperes", "Ohms", "Watts"],
      correct: "Volts",
      explanation: "Electric potential difference (voltage) is measured in volts (V), representing energy per unit charge.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m2",
      question: "Faraday's law of electromagnetic induction states that induced EMF is proportional to:",
      options: ["Rate of change of magnetic flux", "Magnetic field strength", "Current magnitude", "Resistance value"],
      correct: "Rate of change of magnetic flux",
      explanation: "Faraday's law states that the induced EMF equals the negative rate of change of magnetic flux through a circuit.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m3",
      question: "The direction of induced current is given by:",
      options: ["Lenz's law", "Ohm's law", "Coulomb's law", "Newton's law"],
      correct: "Lenz's law",
      explanation: "Lenz's law determines the direction of induced current: it opposes the change in magnetic flux that caused it.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m4",
      question: "In a transformer, the voltage ratio is equal to:",
      options: ["Turns ratio", "Current ratio", "Power ratio", "Resistance ratio"],
      correct: "Turns ratio",
      explanation: "In an ideal transformer, the voltage ratio equals the turns ratio: V₁/V₂ = N₁/N₂.",
      difficulty: "Medium"
    },
    {
      id: "phy12_em_m5",
      question: "The magnetic force on a current-carrying conductor is given by:",
      options: ["F = BIL sinθ", "F = BIL cosθ", "F = BIL", "F = BIL tanθ"],
      correct: "F = BIL sinθ",
      explanation: "The magnetic force on a current-carrying conductor is F = BIL sinθ, where θ is the angle between B and I.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_em_h1",
      question: "The energy stored in a magnetic field is proportional to:",
      options: ["B²", "B", "1/B", "√B"],
      correct: "B²",
      explanation: "The energy density in a magnetic field is proportional to B²/2μ, where μ is the permeability of the medium.",
      difficulty: "Hard"
    },
    {
      id: "phy12_em_h2",
      question: "Maxwell's equations describe the relationship between:",
      options: ["Electric and magnetic fields", "Force and acceleration", "Energy and momentum", "Charge and mass"],
      correct: "Electric and magnetic fields",
      explanation: "Maxwell's four equations mathematically describe how electric and magnetic fields are generated and interact with each other and with charges and currents.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Basics of electronics": [
    // Easy Questions
    {
      id: "phy12_elec_e1",
      question: "What is a semiconductor?",
      options: ["Material with conductivity between conductor and insulator", "Perfect conductor", "Perfect insulator", "Magnetic material"],
      correct: "Material with conductivity between conductor and insulator",
      explanation: "Semiconductors have electrical conductivity between that of conductors and insulators, and their conductivity can be controlled.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e2",
      question: "Which element is commonly used to make semiconductors?",
      options: ["Silicon", "Copper", "Iron", "Gold"],
      correct: "Silicon",
      explanation: "Silicon is the most widely used semiconductor material in electronic devices due to its excellent properties and abundance.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e3",
      question: "What is a diode?",
      options: ["Device that allows current in one direction only", "Device that amplifies signals", "Device that stores charge", "Device that generates electricity"],
      correct: "Device that allows current in one direction only",
      explanation: "A diode is a semiconductor device that allows current to flow in only one direction, acting as an electrical one-way valve.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e4",
      question: "What does LED stand for?",
      options: ["Light Emitting Diode", "Low Energy Device", "Linear Electronic Device", "Light Enhancing Diode"],
      correct: "Light Emitting Diode",
      explanation: "LED stands for Light Emitting Diode, a semiconductor device that emits light when current flows through it.",
      difficulty: "Easy"
    },
    {
      id: "phy12_elec_e5",
      question: "What is the main function of a transistor?",
      options: ["Amplification and switching", "Energy storage", "Light emission", "Magnetic field generation"],
      correct: "Amplification and switching",
      explanation: "Transistors can amplify electrical signals and act as electronic switches, making them fundamental components in electronic devices.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "phy12_elec_m1",
      question: "In a p-n junction diode, current flows when:",
      options: ["Forward biased", "Reverse biased", "No bias applied", "Any bias condition"],
      correct: "Forward biased",
      explanation: "Current flows through a p-n junction diode when it is forward biased (positive terminal connected to p-side).",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m2",
      question: "The process of adding impurities to pure semiconductor is called:",
      options: ["Doping", "Mixing", "Alloying", "Coating"],
      correct: "Doping",
      explanation: "Doping is the process of adding small amounts of impurities to pure semiconductors to control their electrical properties.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m3",
      question: "A bipolar junction transistor (BJT) has:",
      options: ["Three terminals: emitter, base, collector", "Two terminals only", "Four terminals", "Five terminals"],
      correct: "Three terminals: emitter, base, collector",
      explanation: "A BJT has three terminals: the emitter, base, and collector, which control the flow of current through the device.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m4",
      question: "The breakdown voltage of a Zener diode is used for:",
      options: ["Voltage regulation", "Current amplification", "Signal generation", "Power storage"],
      correct: "Voltage regulation",
      explanation: "Zener diodes are designed to operate in reverse breakdown and maintain a constant voltage, making them useful for voltage regulation.",
      difficulty: "Medium"
    },
    {
      id: "phy12_elec_m5",
      question: "In digital electronics, binary digit 1 typically represents:",
      options: ["High voltage level", "Low voltage level", "No voltage", "Negative voltage"],
      correct: "High voltage level",
      explanation: "In positive logic digital systems, binary 1 is represented by a high voltage level (typically 3.3V or 5V).",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "phy12_elec_h1",
      question: "The current gain (β) of a transistor is defined as:",
      options: ["Ic/Ib", "Ie/Ib", "Ic/Ie", "Ib/Ic"],
      correct: "Ic/Ib",
      explanation: "The current gain β (beta) of a BJT is the ratio of collector current to base current: β = Ic/Ib.",
      difficulty: "Hard"
    },
    {
      id: "phy12_elec_h2",
      question: "In a MOSFET, the current is controlled by:",
      options: ["Gate voltage", "Drain voltage", "Source voltage", "Substrate voltage"],
      correct: "Gate voltage",
      explanation: "In a MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor), the current between drain and source is controlled by the voltage applied to the gate.",
      difficulty: "Hard"
    }
  ]
};

// Function to get questions by unit and difficulty
export const getGrade12PhysicsQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10) => {
  const unitQuestions = grade12PhysicsQuestions[unit] || [];
  const filteredQuestions = unitQuestions.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
  
  console.log(`Getting Grade 12 Physics questions for:`, { unit, difficulty, count });
  console.log(`Found ${filteredQuestions.length} ${difficulty} questions for ${unit}`);
  
  // Shuffle and return requested number of questions
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Function to get all units for Grade 12 Physics
export const getGrade12PhysicsUnits = () => {
  return Object.keys(grade12PhysicsQuestions);
};