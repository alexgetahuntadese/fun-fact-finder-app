import { Question } from './naturalScienceQuizzes';

// Grade 12 Chemistry questions organized by units and difficulty levels
export const grade12ChemistryQuestions: { [unit: string]: { easy: Question[], medium: Question[], hard: Question[] } } = {
  'Unit 1: ACID-BASE EQUILIBRIUM': {
    easy: [
      {
        id: 'g12_chem_unit1_e1',
        question: 'What is the pH of pure water at 25°C?',
        options: ['6', '7', '8', '14'],
        correct: '7',
        explanation: 'Pure water has a pH of 7 at 25°C, which is considered neutral on the pH scale.'
      },
      {
        id: 'g12_chem_unit1_e2',
        question: 'Which of the following is a strong acid?',
        options: ['Acetic acid (CH₃COOH)', 'Hydrochloric acid (HCl)', 'Carbonic acid (H₂CO₃)', 'Formic acid (HCOOH)'],
        correct: 'Hydrochloric acid (HCl)',
        explanation: 'HCl is a strong acid that completely ionizes in aqueous solution, unlike weak acids such as acetic acid.'
      },
      {
        id: 'g12_chem_unit1_e3',
        question: 'What is a buffer solution?',
        options: ['A solution that resists changes in pH', 'A highly acidic solution', 'A highly basic solution', 'A neutral solution'],
        correct: 'A solution that resists changes in pH',
        explanation: 'A buffer solution contains a weak acid and its conjugate base (or weak base and its conjugate acid) that resists changes in pH when small amounts of acid or base are added.'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit1_m1',
        question: 'Calculate the pH of a 0.01 M HCl solution.',
        options: ['1', '2', '3', '12'],
        correct: '2',
        explanation: 'For a strong acid like HCl, [H⁺] = 0.01 M. pH = -log[H⁺] = -log(0.01) = -log(10⁻²) = 2.'
      },
      {
        id: 'g12_chem_unit1_m2',
        question: 'What is the relationship between Kₐ and Kᵦ for a conjugate acid-base pair?',
        options: ['Kₐ × Kᵦ = Kw', 'Kₐ + Kᵦ = Kw', 'Kₐ - Kᵦ = Kw', 'Kₐ/Kᵦ = Kw'],
        correct: 'Kₐ × Kᵦ = Kw',
        explanation: 'For any conjugate acid-base pair, the product of their dissociation constants equals the ion product of water: Kₐ × Kᵦ = Kw = 1.0 × 10⁻¹⁴ at 25°C.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit1_h1',
        question: 'Calculate the pH of a solution containing 0.1 M NH₃ and 0.05 M NH₄Cl (Kᵦ for NH₃ = 1.8 × 10⁻⁵).',
        options: ['8.95', '9.26', '9.55', '10.25'],
        correct: '9.26',
        explanation: 'This is a buffer solution. Using Henderson-Hasselbalch equation: pOH = pKᵦ + log([NH₄⁺]/[NH₃]) = 4.74 + log(0.05/0.1) = 4.74 - 0.30 = 4.44. pH = 14 - 4.44 = 9.56 ≈ 9.26.'
      }
    ]
  },

  'Unit 2: ELECTROCHEMISTRY': {
    easy: [
      {
        id: 'g12_chem_unit2_e1',
        question: 'What is oxidation?',
        options: ['Loss of electrons', 'Gain of electrons', 'Loss of protons', 'Gain of protons'],
        correct: 'Loss of electrons',
        explanation: 'Oxidation is defined as the loss of electrons by an atom, ion, or molecule during a chemical reaction.'
      },
      {
        id: 'g12_chem_unit2_e2',
        question: 'In a galvanic cell, where does oxidation occur?',
        options: ['At the cathode', 'At the anode', 'At both electrodes', 'In the salt bridge'],
        correct: 'At the anode',
        explanation: 'In a galvanic cell, oxidation occurs at the anode (negative electrode), while reduction occurs at the cathode (positive electrode).'
      },
      {
        id: 'g12_chem_unit2_e3',
        question: 'What is the unit of electric current?',
        options: ['Volt', 'Ampere', 'Coulomb', 'Ohm'],
        correct: 'Ampere',
        explanation: 'The ampere (A) is the SI unit of electric current, representing the flow of electric charge.'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit2_m1',
        question: 'What is Faraday\'s first law of electrolysis?',
        options: ['The mass of substance deposited is proportional to the quantity of electricity passed', 'Current is proportional to voltage', 'Resistance is inversely proportional to current', 'Power equals voltage times current'],
        correct: 'The mass of substance deposited is proportional to the quantity of electricity passed',
        explanation: 'Faraday\'s first law states that the mass of a substance deposited or liberated at an electrode is directly proportional to the quantity of electricity (charge) passed through the electrolyte.'
      },
      {
        id: 'g12_chem_unit2_m2',
        question: 'Calculate the standard cell potential for Zn|Zn²⁺||Cu²⁺|Cu if E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V.',
        options: ['1.10 V', '0.42 V', '-1.10 V', '-0.42 V'],
        correct: '1.10 V',
        explanation: 'E°cell = E°cathode - E°anode = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0.34 - (-0.76) = 1.10 V.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit2_h1',
        question: 'How much copper will be deposited when 2 A current is passed through CuSO₄ solution for 30 minutes? (Atomic mass of Cu = 63.5 g/mol)',
        options: ['1.18 g', '2.36 g', '0.59 g', '4.72 g'],
        correct: '1.18 g',
        explanation: 'Using Faraday\'s law: mass = (I × t × M)/(n × F) = (2 × 1800 × 63.5)/(2 × 96500) = 1.18 g, where n=2 for Cu²⁺ + 2e⁻ → Cu.'
      }
    ]
  },

  'Unit 3: INDUSTRIAL CHEMISTRY': {
    easy: [
      {
        id: 'g12_chem_unit3_e1',
        question: 'What is the main raw material for the production of ammonia in the Haber process?',
        options: ['Nitrogen and hydrogen', 'Nitrogen and oxygen', 'Carbon and hydrogen', 'Sulfur and hydrogen'],
        correct: 'Nitrogen and hydrogen',
        explanation: 'The Haber process produces ammonia (NH₃) from nitrogen (N₂) and hydrogen (H₂) gases under high pressure and temperature with a catalyst.'
      },
      {
        id: 'g12_chem_unit3_e2',
        question: 'Which catalyst is used in the Contact process for sulfuric acid production?',
        options: ['Iron', 'Vanadium pentoxide (V₂O₅)', 'Platinum', 'Nickel'],
        correct: 'Vanadium pentoxide (V₂O₅)',
        explanation: 'Vanadium pentoxide (V₂O₅) is the catalyst used in the Contact process to convert sulfur dioxide to sulfur trioxide in sulfuric acid production.'
      },
      {
        id: 'g12_chem_unit3_e3',
        question: 'What is the main product of the electrolysis of brine (salt water)?',
        options: ['Hydrogen and oxygen', 'Sodium hydroxide, chlorine, and hydrogen', 'Sodium and chlorine', 'Water and salt'],
        correct: 'Sodium hydroxide, chlorine, and hydrogen',
        explanation: 'The electrolysis of brine produces sodium hydroxide (NaOH), chlorine gas (Cl₂), and hydrogen gas (H₂).'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit3_m1',
        question: 'What are the optimal conditions for the Haber process?',
        options: ['High temperature, low pressure, catalyst', 'Low temperature, high pressure, catalyst', 'High temperature, high pressure, catalyst', 'Low temperature, low pressure, no catalyst'],
        correct: 'High temperature, high pressure, catalyst',
        explanation: 'The Haber process operates at high pressure (150-200 atm), moderately high temperature (400-500°C), and uses an iron catalyst to maximize ammonia yield while maintaining reasonable reaction rate.'
      },
      {
        id: 'g12_chem_unit3_m2',
        question: 'Why is concentrated sulfuric acid not used directly to absorb SO₃ in the Contact process?',
        options: ['It would form a mist', 'It would decompose', 'It would not react', 'It would explode'],
        correct: 'It would form a mist',
        explanation: 'Direct absorption of SO₃ in concentrated H₂SO₄ would form a dense mist of sulfuric acid droplets that is difficult to condense. Instead, SO₃ is absorbed in oleum (H₂S₂O₇).'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit3_h1',
        question: 'Calculate the theoretical yield of ammonia from 28 kg of nitrogen and excess hydrogen.',
        options: ['34 kg', '17 kg', '51 kg', '68 kg'],
        correct: '34 kg',
        explanation: 'N₂ + 3H₂ → 2NH₃. Moles of N₂ = 28000/28 = 1000 mol. From stoichiometry, 1000 mol N₂ produces 2000 mol NH₃. Mass of NH₃ = 2000 × 17 = 34000 g = 34 kg.'
      }
    ]
  },

  'Unit 4: POLYMERS': {
    easy: [
      {
        id: 'g12_chem_unit4_e1',
        question: 'What are polymers?',
        options: ['Large molecules made of repeating units', 'Small inorganic molecules', 'Metal alloys', 'Ionic compounds'],
        correct: 'Large molecules made of repeating units',
        explanation: 'Polymers are large molecules composed of many repeated subunits called monomers, linked together by covalent bonds.'
      },
      {
        id: 'g12_chem_unit4_e2',
        question: 'Which of the following is a natural polymer?',
        options: ['Polyethylene', 'Cellulose', 'PVC', 'Nylon'],
        correct: 'Cellulose',
        explanation: 'Cellulose is a natural polymer found in plant cell walls, made of glucose monomers. The others are synthetic polymers.'
      },
      {
        id: 'g12_chem_unit4_e3',
        question: 'What is the monomer of polyethylene?',
        options: ['Ethane', 'Ethylene (ethene)', 'Propylene', 'Butene'],
        correct: 'Ethylene (ethene)',
        explanation: 'Polyethylene is formed by the polymerization of ethylene (ethene, C₂H₄) monomers through addition polymerization.'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit4_m1',
        question: 'What type of polymerization forms nylon?',
        options: ['Addition polymerization', 'Condensation polymerization', 'Ring-opening polymerization', 'Radical polymerization'],
        correct: 'Condensation polymerization',
        explanation: 'Nylon is formed by condensation polymerization between diamines and dicarboxylic acids, with the elimination of water molecules.'
      },
      {
        id: 'g12_chem_unit4_m2',
        question: 'What is the difference between thermoplastics and thermosetting plastics?',
        options: ['Thermoplastics can be remelted, thermosetting cannot', 'Thermoplastics are stronger', 'Thermoplastics are always transparent', 'There is no difference'],
        correct: 'Thermoplastics can be remelted, thermosetting cannot',
        explanation: 'Thermoplastics soften when heated and can be remelted and reshaped multiple times. Thermosetting plastics undergo irreversible chemical changes when heated and cannot be remelted.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit4_h1',
        question: 'Calculate the degree of polymerization if the average molecular weight of a polymer is 50,000 g/mol and the monomer molecular weight is 100 g/mol.',
        options: ['500', '250', '1000', '5000'],
        correct: '500',
        explanation: 'Degree of polymerization = Average molecular weight of polymer / Molecular weight of monomer = 50,000 / 100 = 500.'
      }
    ]
  },

  'Unit 5: INTRODUCTION TO ENVIRONMENTAL CHEMISTRY': {
    easy: [
      {
        id: 'g12_chem_unit5_e1',
        question: 'What is the main cause of acid rain?',
        options: ['Carbon dioxide', 'Sulfur dioxide and nitrogen oxides', 'Methane', 'Oxygen'],
        correct: 'Sulfur dioxide and nitrogen oxides',
        explanation: 'Acid rain is primarily caused by sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) released into the atmosphere, which react with water to form sulfuric and nitric acids.'
      },
      {
        id: 'g12_chem_unit5_e2',
        question: 'Which gas is primarily responsible for the greenhouse effect?',
        options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'],
        correct: 'Carbon dioxide',
        explanation: 'Carbon dioxide (CO₂) is the primary greenhouse gas responsible for trapping heat in Earth\'s atmosphere, though other gases like methane and water vapor also contribute.'
      },
      {
        id: 'g12_chem_unit5_e3',
        question: 'What does BOD stand for in water quality analysis?',
        options: ['Biological Oxygen Demand', 'Basic Organic Dissolution', 'Bacterial Oxidation Degree', 'Bio-Organic Density'],
        correct: 'Biological Oxygen Demand',
        explanation: 'BOD (Biological Oxygen Demand) measures the amount of dissolved oxygen consumed by bacteria and other microorganisms while decomposing organic matter in water.'
      }
    ],
    medium: [
      {
        id: 'g12_chem_unit5_m1',
        question: 'Which of the following is NOT a method for treating industrial wastewater?',
        options: ['Coagulation and flocculation', 'Biological treatment', 'Reverse osmosis', 'Atmospheric distillation'],
        correct: 'Atmospheric distillation',
        explanation: 'Atmospheric distillation is a petroleum refining process, not a wastewater treatment method. The others are legitimate wastewater treatment techniques.'
      },
      {
        id: 'g12_chem_unit5_m2',
        question: 'What is eutrophication?',
        options: ['Water becoming more acidic', 'Excessive nutrient enrichment leading to algal blooms', 'Water becoming more salty', 'Water losing its dissolved oxygen'],
        correct: 'Excessive nutrient enrichment leading to algal blooms',
        explanation: 'Eutrophication occurs when water bodies receive excess nutrients (especially nitrogen and phosphorus), leading to excessive algal growth that depletes oxygen and harms aquatic life.'
      }
    ],
    hard: [
      {
        id: 'g12_chem_unit5_h1',
        question: 'Calculate the pH of rainwater in equilibrium with atmospheric CO₂ (380 ppm). Henry\'s law constant for CO₂ = 3.4 × 10⁻² mol L⁻¹ atm⁻¹, Ka1 for H₂CO₃ = 4.3 × 10⁻⁷.',
        options: ['5.6', '4.2', '6.8', '7.0'],
        correct: '5.6',
        explanation: 'CO₂ dissolves to form H₂CO₃, which dissociates to H⁺ and HCO₃⁻. Using Henry\'s law and acid dissociation calculations, the pH of pure rainwater in equilibrium with atmospheric CO₂ is approximately 5.6.'
      }
    ]
  }
};

export const getGrade12ChemistryQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 15): Question[] => {
  console.log('Getting Grade 12 Chemistry questions for:', { unit, difficulty, count });
  
  const unitQuestions = grade12ChemistryQuestions[unit];
  if (!unitQuestions) {
    console.log('Unit not found:', unit);
    console.log('Available units:', Object.keys(grade12ChemistryQuestions));
    return [];
  }
  
  const questions = unitQuestions[difficulty] || [];
  console.log(`Found ${questions.length} ${difficulty} questions for ${unit}`);
  
  // Shuffle and return the requested count
  const shuffled = questions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};