
export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

export const grade12BiologyQuestions: { [unit: string]: { [difficulty: string]: Question[] } } = {
  'Unit 1: Application of Biology': {
    easy: [
      {
        id: '12bio_app_e1',
        question: 'What is biotechnology?',
        options: ['The use of living organisms to develop products', 'The study of computer technology', 'The study of rocks and minerals', 'The study of weather patterns'],
        correct: 'The use of living organisms to develop products',
        explanation: 'Biotechnology is the use of living systems and organisms to develop or make products.'
      },
      {
        id: '12bio_app_e2',
        question: 'Which of the following is an example of biotechnology?',
        options: ['Making bread with yeast', 'Building computers', 'Mining for gold', 'Weather forecasting'],
        correct: 'Making bread with yeast',
        explanation: 'Using yeast (a living organism) to make bread is a traditional form of biotechnology.'
      },
      {
        id: '12bio_app_e3',
        question: 'What does genetic engineering involve?',
        options: ['Modifying genes in organisms', 'Building machines', 'Studying the weather', 'Mining minerals'],
        correct: 'Modifying genes in organisms',
        explanation: 'Genetic engineering involves directly manipulating genes within an organism.'
      },
      {
        id: '12bio_app_e4',
        question: 'What is bioremediation?',
        options: ['Using organisms to clean up pollution', 'Creating new medicines', 'Growing crops faster', 'Studying animal behavior'],
        correct: 'Using organisms to clean up pollution',
        explanation: 'Bioremediation uses microorganisms to remove or neutralize contaminants from the environment.'
      },
      {
        id: '12bio_app_e5',
        question: 'Which organism is commonly used in genetic engineering?',
        options: ['E. coli bacteria', 'Elephants', 'Oak trees', 'Whales'],
        correct: 'E. coli bacteria',
        explanation: 'E. coli bacteria are commonly used as host organisms in genetic engineering due to their simple structure and rapid reproduction.'
      },
      {
        id: '12bio_app_e6',
        question: 'What is the main goal of medical biotechnology?',
        options: ['Improving human health', 'Creating entertainment', 'Building houses', 'Making cars'],
        correct: 'Improving human health',
        explanation: 'Medical biotechnology focuses on developing treatments, medicines, and diagnostic tools to improve human health.'
      },
      {
        id: '12bio_app_e7',
        question: 'What are GMOs?',
        options: ['Genetically Modified Organisms', 'Great Medical Operations', 'Global Monitoring Organizations', 'General Motor Objects'],
        correct: 'Genetically Modified Organisms',
        explanation: 'GMOs are organisms whose genetic material has been artificially manipulated in a laboratory.'
      },
      {
        id: '12bio_app_e8',
        question: 'Which field uses biotechnology to improve crop yields?',
        options: ['Agriculture', 'Architecture', 'Astronomy', 'Archaeology'],
        correct: 'Agriculture',
        explanation: 'Agricultural biotechnology is used to develop crops with improved traits like higher yields and disease resistance.'
      },
      {
        id: '12bio_app_e9',
        question: 'What is fermentation in biotechnology?',
        options: ['A process using microorganisms to produce products', 'A method of cooking food', 'A way to store items', 'A form of exercise'],
        correct: 'A process using microorganisms to produce products',
        explanation: 'Fermentation uses microorganisms to convert organic compounds into useful products like alcohol, antibiotics, and food.'
      },
      {
        id: '12bio_app_e10',
        question: 'What is the purpose of biological pest control?',
        options: ['Using natural enemies to control pests', 'Using chemicals only', 'Avoiding all pest control', 'Using machines to catch pests'],
        correct: 'Using natural enemies to control pests',
        explanation: 'Biological pest control uses natural predators, parasites, or pathogens to control pest populations.'
      }
    ],
    medium: [
      {
        id: '12bio_app_m1',
        question: 'What is CRISPR-Cas9?',
        options: ['A gene editing tool', 'A type of microscope', 'A chemical compound', 'A laboratory instrument'],
        correct: 'A gene editing tool',
        explanation: 'CRISPR-Cas9 is a revolutionary gene editing technology that allows precise modification of DNA sequences.'
      },
      {
        id: '12bio_app_m2',
        question: 'Which enzyme is commonly used to cut DNA in genetic engineering?',
        options: ['Restriction endonuclease', 'Amylase', 'Pepsin', 'Catalase'],
        correct: 'Restriction endonuclease',
        explanation: 'Restriction endonucleases are enzymes that cut DNA at specific recognition sequences.'
      },
      {
        id: '12bio_app_m3',
        question: 'What is recombinant DNA?',
        options: ['DNA from different sources combined together', 'DNA that has been damaged', 'DNA found in viruses only', 'DNA that cannot replicate'],
        correct: 'DNA from different sources combined together',
        explanation: 'Recombinant DNA is formed by combining DNA sequences from different sources, often different species.'
      },
      {
        id: '12bio_app_m4',
        question: 'What is the role of plasmids in genetic engineering?',
        options: ['Vector for carrying foreign genes', 'Protein synthesis only', 'Energy production', 'Cell division'],
        correct: 'Vector for carrying foreign genes',
        explanation: 'Plasmids are small DNA molecules that can be used as vectors to introduce foreign genes into host cells.'
      },
      {
        id: '12bio_app_m5',
        question: 'What is gene therapy?',
        options: ['Treatment using therapeutic genes', 'Surgery on genes', 'Removing all genes', 'Copying genes'],
        correct: 'Treatment using therapeutic genes',
        explanation: 'Gene therapy involves introducing genetic material into a patient\'s cells to treat disease.'
      },
      {
        id: '12bio_app_m6',
        question: 'What is the polymerase chain reaction (PCR) used for?',
        options: ['Amplifying DNA sequences', 'Breaking down proteins', 'Storing genetic material', 'Measuring cell size'],
        correct: 'Amplifying DNA sequences',
        explanation: 'PCR is a technique used to make many copies of specific DNA sequences.'
      },
      {
        id: '12bio_app_m7',
        question: 'What are monoclonal antibodies?',
        options: ['Identical antibodies from a single clone', 'Antibodies from multiple sources', 'Damaged antibodies', 'Artificial antibodies'],
        correct: 'Identical antibodies from a single clone',
        explanation: 'Monoclonal antibodies are identical antibodies produced by a single clone of cells, used in research and therapy.'
      },
      {
        id: '12bio_app_m8',
        question: 'What is the main advantage of using transgenic organisms?',
        options: ['They can produce desired proteins', 'They grow faster always', 'They never get sick', 'They live forever'],
        correct: 'They can produce desired proteins',
        explanation: 'Transgenic organisms can be engineered to produce specific proteins for medical or industrial use.'
      },
      {
        id: '12bio_app_m9',
        question: 'What is bioethics concerned with?',
        options: ['Ethical issues in biological research', 'Only animal rights', 'Environmental protection only', 'Economic benefits only'],
        correct: 'Ethical issues in biological research',
        explanation: 'Bioethics deals with ethical issues arising from advances in biology and medicine.'
      },
      {
        id: '12bio_app_m10',
        question: 'What is pharmacogenomics?',
        options: ['Study of how genes affect drug response', 'Development of new drugs only', 'Gene therapy techniques', 'Genetic disease diagnosis'],
        correct: 'Study of how genes affect drug response',
        explanation: 'Pharmacogenomics studies how individual genetic variations affect responses to medications.'
      }
    ],
    hard: [
      {
        id: '12bio_app_h1',
        question: 'What is the significance of the Cas9 protein in CRISPR technology?',
        options: ['It acts as molecular scissors to cut DNA', 'It amplifies DNA sequences', 'It synthesizes RNA', 'It repairs damaged proteins'],
        correct: 'It acts as molecular scissors to cut DNA',
        explanation: 'Cas9 is an endonuclease that creates double-strand breaks in DNA at sites specified by guide RNAs.'
      },
      {
        id: '12bio_app_h2',
        question: 'What is the main challenge in gene therapy delivery?',
        options: ['Getting genes into target cells efficiently', 'Finding the right genes', 'Making genes bigger', 'Removing all genes'],
        correct: 'Getting genes into target cells efficiently',
        explanation: 'The major challenge in gene therapy is developing efficient and safe delivery systems to get therapeutic genes into target cells.'
      },
      {
        id: '12bio_app_h3',
        question: 'What is RNA interference (RNAi)?',
        options: ['A mechanism to silence gene expression', 'A method to amplify RNA', 'A way to create new RNA', 'A technique to repair RNA'],
        correct: 'A mechanism to silence gene expression',
        explanation: 'RNAi is a biological process where RNA molecules inhibit gene expression by neutralizing targeted mRNA molecules.'
      },
      {
        id: '12bio_app_h4',
        question: 'What are induced pluripotent stem cells (iPSCs)?',
        options: ['Adult cells reprogrammed to embryonic state', 'Cells that divide rapidly', 'Cells found only in embryos', 'Damaged stem cells'],
        correct: 'Adult cells reprogrammed to embryonic state',
        explanation: 'iPSCs are adult cells that have been genetically reprogrammed to an embryonic stem cell-like state.'
      },
      {
        id: '12bio_app_h5',
        question: 'What is synthetic biology?',
        options: ['Engineering biological systems for useful purposes', 'Creating artificial life forms', 'Studying natural biology only', 'Preserving existing organisms'],
        correct: 'Engineering biological systems for useful purposes',
        explanation: 'Synthetic biology is an interdisciplinary field that applies engineering principles to biology to design and construct new biological parts and systems.'
      },
      {
        id: '12bio_app_h6',
        question: 'What is the role of guide RNA in CRISPR?',
        options: ['It directs Cas9 to specific DNA sequences', 'It cuts the DNA directly', 'It repairs the DNA', 'It amplifies the signal'],
        correct: 'It directs Cas9 to specific DNA sequences',
        explanation: 'Guide RNA contains a sequence complementary to the target DNA and directs the Cas9 nuclease to the correct location.'
      },
      {
        id: '12bio_app_h7',
        question: 'What is epigenetic editing?',
        options: ['Modifying gene expression without changing DNA sequence', 'Changing DNA sequence directly', 'Removing genes completely', 'Adding new genes'],
        correct: 'Modifying gene expression without changing DNA sequence',
        explanation: 'Epigenetic editing involves modifying gene expression through chemical modifications to DNA or histones without altering the underlying DNA sequence.'
      },
      {
        id: '12bio_app_h8',
        question: 'What is the main concern with germline editing?',
        options: ['Changes are heritable to offspring', 'It is too expensive', 'It takes too long', 'It is not effective'],
        correct: 'Changes are heritable to offspring',
        explanation: 'Germline editing modifies genes in eggs, sperm, or embryos, meaning the changes can be passed to future generations.'
      },
      {
        id: '12bio_app_h9',
        question: 'What is bioprinting?',
        options: ['3D printing of biological tissues', 'Printing DNA sequences', 'Copying biological images', 'Printing lab reports'],
        correct: '3D printing of biological tissues',
        explanation: 'Bioprinting is the 3D printing of biological materials, including living cells, to create tissue-like structures.'
      },
      {
        id: '12bio_app_h10',
        question: 'What is the challenge of off-target effects in gene editing?',
        options: ['Unintended edits at wrong locations', 'Edits happening too slowly', 'Edits not working at all', 'Edits being too expensive'],
        correct: 'Unintended edits at wrong locations',
        explanation: 'Off-target effects occur when gene editing tools make unintended cuts or modifications at sites other than the intended target.'
      }
    ]
  },
  'Unit 2: Microorganisms': {
    easy: [
      {
        id: '12bio_micro_e1',
        question: 'What are microorganisms?',
        options: ['Tiny living organisms', 'Large animals', 'Non-living particles', 'Plant leaves'],
        correct: 'Tiny living organisms',
        explanation: 'Microorganisms are microscopic living organisms that are too small to be seen with the naked eye.'
      },
      {
        id: '12bio_micro_e2',
        question: 'Which of these is a microorganism?',
        options: ['Bacteria', 'Elephant', 'Oak tree', 'Human'],
        correct: 'Bacteria',
        explanation: 'Bacteria are single-celled microorganisms that can be found everywhere in the environment.'
      },
      {
        id: '12bio_micro_e3',
        question: 'What do we call microorganisms that cause disease?',
        options: ['Pathogens', 'Symbionts', 'Producers', 'Consumers'],
        correct: 'Pathogens',
        explanation: 'Pathogens are microorganisms that can cause disease in their host organisms.'
      },
      {
        id: '12bio_micro_e4',
        question: 'Which microorganism is used to make bread rise?',
        options: ['Yeast', 'Bacteria', 'Virus', 'Algae'],
        correct: 'Yeast',
        explanation: 'Yeast is a fungus that ferments sugars and produces carbon dioxide, which makes bread dough rise.'
      },
      {
        id: '12bio_micro_e5',
        question: 'What is the main difference between prokaryotes and eukaryotes?',
        options: ['Prokaryotes lack a nucleus', 'Prokaryotes are larger', 'Prokaryotes only live in water', 'Prokaryotes cannot reproduce'],
        correct: 'Prokaryotes lack a nucleus',
        explanation: 'Prokaryotic cells do not have a membrane-bound nucleus, while eukaryotic cells do.'
      },
      {
        id: '12bio_micro_e6',
        question: 'Which of these is NOT a type of microorganism?',
        options: ['Mouse', 'Virus', 'Bacteria', 'Fungi'],
        correct: 'Mouse',
        explanation: 'A mouse is a mammal and much larger than microorganisms, which are microscopic.'
      },
      {
        id: '12bio_micro_e7',
        question: 'What do beneficial bacteria in our gut help with?',
        options: ['Digestion', 'Breathing', 'Seeing', 'Hearing'],
        correct: 'Digestion',
        explanation: 'Beneficial gut bacteria help break down food and aid in the digestive process.'
      },
      {
        id: '12bio_micro_e8',
        question: 'Which microorganism is responsible for malaria?',
        options: ['Plasmodium', 'E. coli', 'Yeast', 'Algae'],
        correct: 'Plasmodium',
        explanation: 'Plasmodium is a parasitic protozoan that causes malaria in humans.'
      },
      {
        id: '12bio_micro_e9',
        question: 'What is fermentation?',
        options: ['A process where microorganisms break down sugars', 'A way to cook food', 'A method of preservation only', 'A type of breathing'],
        correct: 'A process where microorganisms break down sugars',
        explanation: 'Fermentation is a metabolic process where microorganisms convert sugars into acids, gases, or alcohol.'
      },
      {
        id: '12bio_micro_e10',
        question: 'Which scientist first observed microorganisms?',
        options: ['Antonie van Leeuwenhoek', 'Charles Darwin', 'Gregor Mendel', 'Louis Pasteur'],
        correct: 'Antonie van Leeuwenhoek',
        explanation: 'Antonie van Leeuwenhoek was the first to observe and describe microorganisms using his handmade microscopes.'
      }
    ],
    medium: [
      {
        id: '12bio_micro_m1',
        question: 'What is the difference between gram-positive and gram-negative bacteria?',
        options: ['Cell wall structure', 'Size difference', 'Color difference', 'Movement ability'],
        correct: 'Cell wall structure',
        explanation: 'Gram-positive bacteria have thick peptidoglycan cell walls, while gram-negative bacteria have thin peptidoglycan walls with an outer membrane.'
      },
      {
        id: '12bio_micro_m2',
        question: 'What is quorum sensing in bacteria?',
        options: ['Cell-to-cell communication', 'Rapid reproduction', 'DNA repair', 'Protein synthesis'],
        correct: 'Cell-to-cell communication',
        explanation: 'Quorum sensing is a system of stimulus and response that allows bacteria to coordinate behavior based on population density.'
      },
      {
        id: '12bio_micro_m3',
        question: 'What is the role of bacteriophages?',
        options: ['Viruses that infect bacteria', 'Bacteria that eat other bacteria', 'Fungi that grow on bacteria', 'Chemicals that kill bacteria'],
        correct: 'Viruses that infect bacteria',
        explanation: 'Bacteriophages are viruses that specifically infect and replicate within bacterial cells.'
      },
      {
        id: '12bio_micro_m4',
        question: 'What is horizontal gene transfer?',
        options: ['Transfer of genes between organisms', 'Vertical inheritance only', 'Gene deletion', 'Gene amplification'],
        correct: 'Transfer of genes between organisms',
        explanation: 'Horizontal gene transfer is the movement of genetic material between organisms other than by vertical transmission from parent to offspring.'
      },
      {
        id: '12bio_micro_m5',
        question: 'What is a biofilm?',
        options: ['Community of microorganisms in a matrix', 'Single bacterial cell', 'Dead bacterial cells', 'Viral particle'],
        correct: 'Community of microorganisms in a matrix',
        explanation: 'A biofilm is a structured community of microorganisms encased in a self-produced polymeric matrix.'
      },
      {
        id: '12bio_micro_m6',
        question: 'What is the nitrogen cycle\'s dependence on microorganisms?',
        options: ['They fix and convert nitrogen compounds', 'They only consume nitrogen', 'They destroy nitrogen', 'They have no role'],
        correct: 'They fix and convert nitrogen compounds',
        explanation: 'Microorganisms play crucial roles in nitrogen fixation, nitrification, and denitrification in the nitrogen cycle.'
      },
      {
        id: '12bio_micro_m7',
        question: 'What is antibiotic resistance?',
        options: ['Ability of microbes to survive antibiotic treatment', 'Weakness to antibiotics', 'Enhanced antibiotic effectiveness', 'Antibiotic production'],
        correct: 'Ability of microbes to survive antibiotic treatment',
        explanation: 'Antibiotic resistance occurs when microorganisms develop the ability to defeat the drugs designed to kill them.'
      },
      {
        id: '12bio_micro_m8',
        question: 'What are extremophiles?',
        options: ['Organisms that thrive in extreme conditions', 'Very large organisms', 'Extinct organisms', 'Slow-growing organisms'],
        correct: 'Organisms that thrive in extreme conditions',
        explanation: 'Extremophiles are organisms that can survive and thrive in extreme environmental conditions like high temperature, acidity, or salinity.'
      },
      {
        id: '12bio_micro_m9',
        question: 'What is the role of decomposer microorganisms?',
        options: ['Breaking down dead organic matter', 'Producing oxygen only', 'Creating new organisms', 'Storing energy'],
        correct: 'Breaking down dead organic matter',
        explanation: 'Decomposer microorganisms break down dead plants and animals, recycling nutrients back to the ecosystem.'
      },
      {
        id: '12bio_micro_m10',
        question: 'What is microbial fuel cell technology?',
        options: ['Using microbes to generate electricity', 'Powering microbes with electricity', 'Storing microbes in batteries', 'Charging phones with microbes'],
        correct: 'Using microbes to generate electricity',
        explanation: 'Microbial fuel cells use bacteria to convert organic compounds directly into electrical energy.'
      }
    ],
    hard: [
      {
        id: '12bio_micro_h1',
        question: 'What is the CRISPR system\'s original function in bacteria?',
        options: ['Adaptive immune system against viruses', 'DNA repair mechanism', 'Protein synthesis', 'Energy production'],
        correct: 'Adaptive immune system against viruses',
        explanation: 'CRISPR is a natural adaptive immune system in bacteria that provides protection against viruses and other foreign genetic elements.'
      },
      {
        id: '12bio_micro_h2',
        question: 'What is the significance of the RNA world hypothesis in microbiology?',
        options: ['RNA preceded DNA in early life forms', 'RNA is more stable than DNA', 'RNA cannot replicate', 'RNA only exists in viruses'],
        correct: 'RNA preceded DNA in early life forms',
        explanation: 'The RNA world hypothesis suggests that RNA was the primary genetic material in early life forms before DNA evolved.'
      },
      {
        id: '12bio_micro_h3',
        question: 'What is the mechanism of Type II CRISPR-Cas systems?',
        options: ['Guide RNA directs Cas9 to target DNA', 'Cas9 randomly cuts DNA', 'Only RNA is targeted', 'No guide RNA needed'],
        correct: 'Guide RNA directs Cas9 to target DNA',
        explanation: 'In Type II CRISPR systems, guide RNA (gRNA) directs the Cas9 nuclease to specific DNA targets for cleavage.'
      },
      {
        id: '12bio_micro_h4',
        question: 'What is the role of the microbiome in human health?',
        options: ['Influences immune system and metabolism', 'Only causes diseases', 'Has no significant impact', 'Only helps with digestion'],
        correct: 'Influences immune system and metabolism',
        explanation: 'The human microbiome plays crucial roles in immune system development, metabolism, and protection against pathogens.'
      },
      {
        id: '12bio_micro_h5',
        question: 'What is horizontal gene transfer\'s impact on antibiotic resistance?',
        options: ['Spreads resistance genes between bacteria', 'Prevents resistance development', 'Only affects virus resistance', 'Has no relationship'],
        correct: 'Spreads resistance genes between bacteria',
        explanation: 'Horizontal gene transfer allows antibiotic resistance genes to spread rapidly between bacterial species and populations.'
      },
      {
        id: '12bio_micro_h6',
        question: 'What is the endosymbiotic theory?',
        options: ['Mitochondria and chloroplasts originated from bacteria', 'All cells are the same', 'Bacteria cannot live inside cells', 'Viruses created organelles'],
        correct: 'Mitochondria and chloroplasts originated from bacteria',
        explanation: 'The endosymbiotic theory proposes that mitochondria and chloroplasts were once free-living bacteria that became permanent residents of eukaryotic cells.'
      },
      {
        id: '12bio_micro_h7',
        question: 'What is metagenomics?',
        options: ['Study of genetic material from environmental samples', 'Study of single organism genomes', 'Study of artificial genomes', 'Study of viral genomes only'],
        correct: 'Study of genetic material from environmental samples',
        explanation: 'Metagenomics is the study of genetic material recovered directly from environmental samples, revealing microbial diversity.'
      },
      {
        id: '12bio_micro_h8',
        question: 'What is the significance of biofilm formation in medical infections?',
        options: ['Increases antibiotic resistance and persistence', 'Makes infections easier to treat', 'Has no medical relevance', 'Only affects wound healing'],
        correct: 'Increases antibiotic resistance and persistence',
        explanation: 'Biofilms protect bacteria from antibiotics and immune responses, making infections more difficult to treat and more persistent.'
      },
      {
        id: '12bio_micro_h9',
        question: 'What is synthetic biology\'s approach to microorganisms?',
        options: ['Engineering microbes for specific functions', 'Only studying natural microbes', 'Eliminating all microbes', 'Preserving microbes unchanged'],
        correct: 'Engineering microbes for specific functions',
        explanation: 'Synthetic biology engineers microorganisms to perform specific functions like producing medicines, fuels, or cleaning up pollutants.'
      },
      {
        id: '12bio_micro_h10',
        question: 'What is the concept of a minimal genome?',
        options: ['Smallest genome needed for life', 'Largest possible genome', 'Average genome size', 'Genome with only RNA'],
        correct: 'Smallest genome needed for life',
        explanation: 'A minimal genome refers to the smallest set of genes necessary for an organism to survive and reproduce under optimal conditions.'
      }
    ]
  },
  'Unit 3: Energy transformation': {
    easy: [
      {
        id: '12bio_energy_e1',
        question: 'What is the main energy currency of cells?',
        options: ['ATP', 'DNA', 'RNA', 'Protein'],
        correct: 'ATP',
        explanation: 'ATP (Adenosine Triphosphate) is the primary energy currency used by cells for various metabolic processes.'
      },
      {
        id: '12bio_energy_e2',
        question: 'What process do plants use to make their own food?',
        options: ['Photosynthesis', 'Respiration', 'Digestion', 'Fermentation'],
        correct: 'Photosynthesis',
        explanation: 'Photosynthesis is the process by which plants convert light energy into chemical energy to make glucose.'
      },
      {
        id: '12bio_energy_e3',
        question: 'Where does photosynthesis occur in plant cells?',
        options: ['Chloroplasts', 'Mitochondria', 'Nucleus', 'Ribosomes'],
        correct: 'Chloroplasts',
        explanation: 'Chloroplasts are the organelles where photosynthesis takes place in plant cells.'
      },
      {
        id: '12bio_energy_e4',
        question: 'What gas do plants release during photosynthesis?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Methane'],
        correct: 'Oxygen',
        explanation: 'During photosynthesis, plants split water molecules and release oxygen as a byproduct.'
      },
      {
        id: '12bio_energy_e5',
        question: 'What is cellular respiration?',
        options: ['Process that releases energy from glucose', 'Process that makes glucose', 'Process that makes proteins', 'Process that makes DNA'],
        correct: 'Process that releases energy from glucose',
        explanation: 'Cellular respiration is the process by which cells break down glucose to release energy in the form of ATP.'
      },
      {
        id: '12bio_energy_e6',
        question: 'Where does cellular respiration occur?',
        options: ['Mitochondria', 'Chloroplasts', 'Nucleus', 'Cell membrane'],
        correct: 'Mitochondria',
        explanation: 'Most of cellular respiration, particularly the Krebs cycle and electron transport chain, occurs in the mitochondria.'
      },
      {
        id: '12bio_energy_e7',
        question: 'What do plants need for photosynthesis?',
        options: ['Light, water, and carbon dioxide', 'Only water', 'Only light', 'Only carbon dioxide'],
        correct: 'Light, water, and carbon dioxide',
        explanation: 'Photosynthesis requires light energy, water, and carbon dioxide to produce glucose and oxygen.'
      },
      {
        id: '12bio_energy_e8',
        question: 'What is the first law of thermodynamics?',
        options: ['Energy cannot be created or destroyed', 'Energy always decreases', 'Energy only exists in plants', 'Energy moves slowly'],
        correct: 'Energy cannot be created or destroyed',
        explanation: 'The first law of thermodynamics states that energy cannot be created or destroyed, only transformed from one form to another.'
      },
      {
        id: '12bio_energy_e9',
        question: 'What happens to energy during each transfer in a food chain?',
        options: ['Some is lost as heat', 'All is transferred perfectly', 'Energy increases', 'Energy stays the same'],
        correct: 'Some is lost as heat',
        explanation: 'During energy transfers in food chains, some energy is always lost as heat due to the second law of thermodynamics.'
      },
      {
        id: '12bio_energy_e10',
        question: 'What are producers in an ecosystem?',
        options: ['Organisms that make their own food', 'Organisms that only eat meat', 'Organisms that decompose matter', 'Organisms that eat plants'],
        correct: 'Organisms that make their own food',
        explanation: 'Producers, like plants, are organisms that can make their own food through processes like photosynthesis.'
      }
    ],
    medium: [
      {
        id: '12bio_energy_m1',
        question: 'What are the two main stages of photosynthesis?',
        options: ['Light reactions and Calvin cycle', 'Glycolysis and Krebs cycle', 'Transcription and translation', 'Mitosis and meiosis'],
        correct: 'Light reactions and Calvin cycle',
        explanation: 'Photosynthesis consists of light-dependent reactions (light reactions) and light-independent reactions (Calvin cycle).'
      },
      {
        id: '12bio_energy_m2',
        question: 'What is the role of chlorophyll in photosynthesis?',
        options: ['Absorbs light energy', 'Stores glucose', 'Produces oxygen directly', 'Breaks down carbon dioxide'],
        correct: 'Absorbs light energy',
        explanation: 'Chlorophyll is a pigment that absorbs light energy, particularly red and blue wavelengths, to drive photosynthesis.'
      },
      {
        id: '12bio_energy_m3',
        question: 'What are the three stages of cellular respiration?',
        options: ['Glycolysis, Krebs cycle, electron transport', 'Photosynthesis, respiration, fermentation', 'Light reactions, dark reactions, ATP synthesis', 'Transcription, translation, replication'],
        correct: 'Glycolysis, Krebs cycle, electron transport',
        explanation: 'Cellular respiration consists of glycolysis, the Krebs cycle (citric acid cycle), and the electron transport chain.'
      },
      {
        id: '12bio_energy_m4',
        question: 'How many ATP molecules are typically produced from one glucose molecule during cellular respiration?',
        options: ['About 30-32', 'About 2', 'About 100', 'About 500'],
        correct: 'About 30-32',
        explanation: 'Complete cellular respiration of one glucose molecule typically yields about 30-32 ATP molecules.'
      },
      {
        id: '12bio_energy_m5',
        question: 'What is fermentation?',
        options: ['Anaerobic energy production', 'Aerobic energy production', 'Light-dependent reactions', 'DNA replication'],
        correct: 'Anaerobic energy production',
        explanation: 'Fermentation is an anaerobic process that produces energy without oxygen, yielding much less ATP than cellular respiration.'
      },
      {
        id: '12bio_energy_m6',
        question: 'What is the role of NADH in cellular respiration?',
        options: ['Electron carrier', 'Energy storage molecule', 'Enzyme catalyst', 'Structural protein'],
        correct: 'Electron carrier',
        explanation: 'NADH is an electron carrier that transports electrons to the electron transport chain, where ATP is produced.'
      },
      {
        id: '12bio_energy_m7',
        question: 'What is chemosynthesis?',
        options: ['Energy production using chemical reactions', 'Energy production using light only', 'Energy storage in fats', 'Energy transfer in food chains'],
        correct: 'Energy production using chemical reactions',
        explanation: 'Chemosynthesis is the process by which some organisms produce energy using chemical reactions instead of light.'
      },
      {
        id: '12bio_energy_m8',
        question: 'What is the 10% rule in ecology?',
        options: ['Only 10% of energy transfers between trophic levels', '10% of organisms are producers', '10% of energy is lost as heat', '10% of organisms are carnivores'],
        correct: 'Only 10% of energy transfers between trophic levels',
        explanation: 'The 10% rule states that only about 10% of energy is transferred from one trophic level to the next in a food chain.'
      },
      {
        id: '12bio_energy_m9',
        question: 'What is the difference between anabolism and catabolism?',
        options: ['Anabolism builds molecules, catabolism breaks them down', 'They are the same process', 'Anabolism only occurs in plants', 'Catabolism only occurs in animals'],
        correct: 'Anabolism builds molecules, catabolism breaks them down',
        explanation: 'Anabolism involves building complex molecules from simpler ones (requires energy), while catabolism breaks down complex molecules (releases energy).'
      },
      {
        id: '12bio_energy_m10',
        question: 'What is the role of the electron transport chain?',
        options: ['Produces most ATP in cellular respiration', 'Breaks down glucose', 'Synthesizes proteins', 'Replicates DNA'],
        correct: 'Produces most ATP in cellular respiration',
        explanation: 'The electron transport chain is where most ATP is produced during cellular respiration through oxidative phosphorylation.'
      }
    ],
    hard: [
      {
        id: '12bio_energy_h1',
        question: 'What is the Z-scheme in photosynthesis?',
        options: ['Electron flow pattern in light reactions', 'Shape of chloroplast structure', 'ATP synthesis pathway', 'Carbon fixation pattern'],
        correct: 'Electron flow pattern in light reactions',
        explanation: 'The Z-scheme describes the zigzag path of electron flow through photosystems II and I during the light reactions of photosynthesis.'
      },
      {
        id: '12bio_energy_h2',
        question: 'What is the role of cyclic photophosphorylation?',
        options: ['Produces ATP without NADPH', 'Produces NADPH without ATP', 'Produces oxygen', 'Fixes carbon dioxide'],
        correct: 'Produces ATP without NADPH',
        explanation: 'Cyclic photophosphorylation produces additional ATP without producing NADPH or oxygen, helping balance ATP/NADPH ratios.'
      },
      {
        id: '12bio_energy_h3',
        question: 'What is substrate-level phosphorylation?',
        options: ['Direct ATP synthesis from substrate', 'ATP synthesis using oxygen', 'ATP synthesis using light', 'ATP synthesis in chloroplasts'],
        correct: 'Direct ATP synthesis from substrate',
        explanation: 'Substrate-level phosphorylation is the direct synthesis of ATP from ADP by transferring a phosphate group from a substrate molecule.'
      },
      {
        id: '12bio_energy_h4',
        question: 'What is the chemiosmotic theory?',
        options: ['ATP synthesis driven by proton gradient', 'ATP synthesis using glucose directly', 'ATP synthesis using oxygen directly', 'ATP synthesis in nucleus'],
        correct: 'ATP synthesis driven by proton gradient',
        explanation: 'The chemiosmotic theory explains how ATP is synthesized using the energy from a proton gradient across membranes.'
      },
      {
        id: '12bio_energy_h5',
        question: 'What is the C4 pathway?',
        options: ['Alternative carbon fixation mechanism', 'ATP synthesis pathway', 'Protein synthesis pathway', 'DNA replication pathway'],
        correct: 'Alternative carbon fixation mechanism',
        explanation: 'The C4 pathway is an alternative carbon fixation mechanism that concentrates CO2 to improve photosynthetic efficiency in hot, dry conditions.'
      },
      {
        id: '12bio_energy_h6',
        question: 'What is photorespiration?',
        options: ['Wasteful process when RuBisCO binds oxygen', 'Normal photosynthesis process', 'Enhanced ATP production', 'Improved carbon fixation'],
        correct: 'Wasteful process when RuBisCO binds oxygen',
        explanation: 'Photorespiration is an inefficient process that occurs when RuBisCO binds oxygen instead of carbon dioxide, reducing photosynthetic efficiency.'
      },
      {
        id: '12bio_energy_h7',
        question: 'What is the role of cytochrome c in cellular respiration?',
        options: ['Mobile electron carrier in electron transport chain', 'Enzyme in glycolysis', 'Substrate in Krebs cycle', 'Structural protein in mitochondria'],
        correct: 'Mobile electron carrier in electron transport chain',
        explanation: 'Cytochrome c is a mobile electron carrier protein that shuttles electrons between complex III and complex IV in the electron transport chain.'
      },
      {
        id: '12bio_energy_h8',
        question: 'What is the malate-aspartate shuttle?',
        options: ['NADH transport system across mitochondrial membrane', 'ATP transport system', 'Glucose transport system', 'Oxygen transport system'],
        correct: 'NADH transport system across mitochondrial membrane',
        explanation: 'The malate-aspartate shuttle is a system that transports electrons from cytoplasmic NADH into mitochondria for ATP production.'
      },
      {
        id: '12bio_energy_h9',
        question: 'What is metabolic flexibility?',
        options: ['Ability to switch between different fuel sources', 'Fixed metabolic pathways only', 'Single fuel source usage', 'Metabolic shutdown capability'],
        correct: 'Ability to switch between different fuel sources',
        explanation: 'Metabolic flexibility is the ability of organisms to adapt their metabolism to efficiently use different fuel sources based on availability.'
      },
      {
        id: '12bio_energy_h10',
        question: 'What are uncoupling proteins?',
        options: ['Proteins that dissipate proton gradient as heat', 'Proteins that enhance ATP production', 'Proteins that store energy', 'Proteins that transport glucose'],
        correct: 'Proteins that dissipate proton gradient as heat',
        explanation: 'Uncoupling proteins allow protons to bypass ATP synthase, dissipating the proton gradient as heat instead of producing ATP.'
      }
    ]
  },
  'Unit 4: Evolution': {
    easy: [
      {
        id: '12bio_evol_e1',
        question: 'What is evolution?',
        options: ['Change in species over time', 'Individual organisms changing', 'Planets moving in space', 'Rocks forming layers'],
        correct: 'Change in species over time',
        explanation: 'Evolution is the process by which species change over time through successive generations.'
      },
      {
        id: '12bio_evol_e2',
        question: 'Who proposed the theory of evolution by natural selection?',
        options: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Alexander Fleming'],
        correct: 'Charles Darwin',
        explanation: 'Charles Darwin proposed the theory of evolution by natural selection in his book "On the Origin of Species."'
      },
      {
        id: '12bio_evol_e3',
        question: 'What is natural selection?',
        options: ['Survival of organisms best adapted to their environment', 'Random changes in organisms', 'Human selection of traits', 'Organisms choosing their traits'],
        correct: 'Survival of organisms best adapted to their environment',
        explanation: 'Natural selection is the process where organisms with favorable traits are more likely to survive and reproduce.'
      },
      {
        id: '12bio_evol_e4',
        question: 'What are fossils?',
        options: ['Preserved remains of ancient organisms', 'Living organisms', 'Modern animal bones', 'Plant leaves'],
        correct: 'Preserved remains of ancient organisms',
        explanation: 'Fossils are preserved remains or traces of organisms that lived in the past, providing evidence for evolution.'
      },
      {
        id: '12bio_evol_e5',
        question: 'What is adaptation?',
        options: ['Trait that helps organism survive in environment', 'Any change in organism', 'Learning new behaviors', 'Growing larger'],
        correct: 'Trait that helps organism survive in environment',
        explanation: 'An adaptation is a trait that has evolved to help an organism survive and reproduce in its specific environment.'
      },
      {
        id: '12bio_evol_e6',
        question: 'What is a species?',
        options: ['Group of organisms that can reproduce together', 'Any group of similar animals', 'All living things', 'Plants only'],
        correct: 'Group of organisms that can reproduce together',
        explanation: 'A species is typically defined as a group of organisms that can interbreed and produce fertile offspring.'
      },
      {
        id: '12bio_evol_e7',
        question: 'What provides evidence for evolution?',
        options: ['Fossils, DNA similarities, embryology', 'Only fossils', 'Only DNA', 'Only physical appearance'],
        correct: 'Fossils, DNA similarities, embryology',
        explanation: 'Multiple lines of evidence support evolution, including the fossil record, genetic similarities, and embryological development.'
      },
      {
        id: '12bio_evol_e8',
        question: 'What is artificial selection?',
        options: ['Humans selecting traits in breeding', 'Natural environmental selection', 'Random genetic changes', 'Organisms choosing mates'],
        correct: 'Humans selecting traits in breeding',
        explanation: 'Artificial selection is the intentional breeding of organisms by humans to produce desired traits.'
      },
      {
        id: '12bio_evol_e9',
        question: 'What is variation in a population?',
        options: ['Differences between individuals', 'All individuals being identical', 'Only genetic differences', 'Only environmental differences'],
        correct: 'Differences between individuals',
        explanation: 'Variation refers to the differences that exist between individuals in a population, which is essential for evolution.'
      },
      {
        id: '12bio_evol_e10',
        question: 'What is extinction?',
        options: ['Complete disappearance of a species', 'Species changing into another', 'Species moving to new area', 'Species becoming rare'],
        correct: 'Complete disappearance of a species',
        explanation: 'Extinction occurs when the last individual of a species dies, and the species no longer exists.'
      }
    ],
    medium: [
      {
        id: '12bio_evol_m1',
        question: 'What is genetic drift?',
        options: ['Random changes in allele frequencies', 'Directed changes in genes', 'Gene flow between populations', 'Natural selection only'],
        correct: 'Random changes in allele frequencies',
        explanation: 'Genetic drift is the random fluctuation of allele frequencies in a population, especially significant in small populations.'
      },
      {
        id: '12bio_evol_m2',
        question: 'What is the founder effect?',
        options: ['Genetic bottleneck when few individuals start new population', 'Large populations growing bigger', 'Random mating patterns', 'Environmental changes'],
        correct: 'Genetic bottleneck when few individuals start new population',
        explanation: 'The founder effect occurs when a small group establishes a new population, leading to reduced genetic diversity.'
      },
      {
        id: '12bio_evol_m3',
        question: 'What is convergent evolution?',
        options: ['Similar traits evolving independently', 'Species becoming identical', 'Related species diverging', 'Evolution stopping'],
        correct: 'Similar traits evolving independently',
        explanation: 'Convergent evolution occurs when unrelated organisms independently evolve similar traits in response to similar environmental pressures.'
      },
      {
        id: '12bio_evol_m4',
        question: 'What is divergent evolution?',
        options: ['Related species becoming different', 'Unrelated species becoming similar', 'Species staying the same', 'Evolution reversing'],
        correct: 'Related species becoming different',
        explanation: 'Divergent evolution occurs when related species evolve different traits, often due to different environmental pressures.'
      },
      {
        id: '12bio_evol_m5',
        question: 'What is reproductive isolation?',
        options: ['Barriers preventing interbreeding between populations', 'Enhanced breeding success', 'Random mating patterns', 'Increased fertility'],
        correct: 'Barriers preventing interbreeding between populations',
        explanation: 'Reproductive isolation prevents gene flow between populations, which can lead to speciation.'
      },
      {
        id: '12bio_evol_m6',
        question: 'What is punctuated equilibrium?',
        options: ['Rapid evolutionary change followed by stability', 'Constant slow evolution', 'No evolutionary change', 'Reverse evolution'],
        correct: 'Rapid evolutionary change followed by stability',
        explanation: 'Punctuated equilibrium suggests that evolution occurs in rapid bursts followed by long periods of little change.'
      },
      {
        id: '12bio_evol_m7',
        question: 'What is coevolution?',
        options: ['Two species evolving in response to each other', 'Species evolving independently', 'Evolution stopping', 'Single species evolution'],
        correct: 'Two species evolving in response to each other',
        explanation: 'Coevolution occurs when two or more species reciprocally affect each other\'s evolution.'
      },
      {
        id: '12bio_evol_m8',
        question: 'What is adaptive radiation?',
        options: ['Rapid diversification into many species', 'Single species adaptation', 'Species extinction', 'No evolutionary change'],
        correct: 'Rapid diversification into many species',
        explanation: 'Adaptive radiation is the rapid evolution of many species from a common ancestor to fill different ecological niches.'
      },
      {
        id: '12bio_evol_m9',
        question: 'What is sexual selection?',
        options: ['Selection for traits that improve mating success', 'Random mating patterns', 'Selection against reproduction', 'Asexual reproduction only'],
        correct: 'Selection for traits that improve mating success',
        explanation: 'Sexual selection is a form of natural selection that favors traits that increase an individual\'s mating success.'
      },
      {
        id: '12bio_evol_m10',
        question: 'What is gene flow?',
        options: ['Movement of genes between populations', 'Genes staying in same population', 'Gene deletion', 'Gene duplication'],
        correct: 'Movement of genes between populations',
        explanation: 'Gene flow is the transfer of genetic material between populations through migration and interbreeding.'
      }
    ],
    hard: [
      {
        id: '12bio_evol_h1',
        question: 'What is the neutral theory of molecular evolution?',
        options: ['Most mutations are selectively neutral', 'All mutations are beneficial', 'All mutations are harmful', 'Mutations don\'t occur'],
        correct: 'Most mutations are selectively neutral',
        explanation: 'The neutral theory proposes that most evolutionary changes at the molecular level are due to random drift of selectively neutral mutants.'
      },
      {
        id: '12bio_evol_h2',
        question: 'What is the molecular clock hypothesis?',
        options: ['Mutations accumulate at constant rate over time', 'Mutations occur randomly', 'Mutations never occur', 'Mutations only occur under stress'],
        correct: 'Mutations accumulate at constant rate over time',
        explanation: 'The molecular clock hypothesis suggests that mutations accumulate at a relatively constant rate, allowing estimation of divergence times.'
      },
      {
        id: '12bio_evol_h3',
        question: 'What is horizontal gene transfer\'s role in evolution?',
        options: ['Allows rapid acquisition of new traits', 'Prevents evolutionary change', 'Only occurs in reproduction', 'Eliminates genetic diversity'],
        correct: 'Allows rapid acquisition of new traits',
        explanation: 'Horizontal gene transfer allows organisms to acquire genes from other species, providing a mechanism for rapid evolutionary change.'
      },
      {
        id: '12bio_evol_h4',
        question: 'What is the Red Queen hypothesis?',
        options: ['Organisms must constantly evolve to survive', 'Evolution stops after adaptation', 'Only beneficial mutations occur', 'Fitness always increases'],
        correct: 'Organisms must constantly evolve to survive',
        explanation: 'The Red Queen hypothesis suggests that organisms must continuously evolve to maintain their fitness relative to co-evolving organisms.'
      },
      {
        id: '12bio_evol_h5',
        question: 'What is phylogenetic systematics?',
        options: ['Classification based on evolutionary relationships', 'Classification based on appearance only', 'Random classification system', 'Classification based on size'],
        correct: 'Classification based on evolutionary relationships',
        explanation: 'Phylogenetic systematics classifies organisms based on their evolutionary relationships and common ancestry.'
      },
      {
        id: '12bio_evol_h6',
        question: 'What is the concept of evolutionary constraint?',
        options: ['Limitations on possible evolutionary paths', 'No limits on evolution', 'Evolution always optimizes', 'Evolution is completely random'],
        correct: 'Limitations on possible evolutionary paths',
        explanation: 'Evolutionary constraints are factors that limit or bias the direction of evolutionary change due to physical, genetic, or developmental limitations.'
      },
      {
        id: '12bio_evol_h7',
        question: 'What is kin selection theory?',
        options: ['Natural selection acting on genes affecting relatives', 'Selection only acting on individuals', 'Random selection patterns', 'Selection against cooperation'],
        correct: 'Natural selection acting on genes affecting relatives',
        explanation: 'Kin selection theory explains how genes that cause individuals to behave altruistically toward relatives can evolve.'
      },
      {
        id: '12bio_evol_h8',
        question: 'What is the role of epigenetics in evolution?',
        options: ['Heritable changes in gene expression without DNA changes', 'Only DNA sequence changes matter', 'Epigenetics prevents evolution', 'No relationship to evolution'],
        correct: 'Heritable changes in gene expression without DNA changes',
        explanation: 'Epigenetic modifications can be heritable and provide an additional mechanism for evolutionary change beyond DNA sequence changes.'
      },
      {
        id: '12bio_evol_h9',
        question: 'What is evolutionary developmental biology (evo-devo)?',
        options: ['Study of how development influences evolution', 'Study of development only', 'Study of evolution only', 'Study of genetics only'],
        correct: 'Study of how development influences evolution',
        explanation: 'Evo-devo examines how changes in developmental processes contribute to evolutionary change and the origin of new forms.'
      },
      {
        id: '12bio_evol_h10',
        question: 'What is the extended evolutionary synthesis?',
        options: ['Updated evolutionary theory including new mechanisms', 'Replacement of Darwin\'s theory', 'Rejection of natural selection', 'Focus only on genetics'],
        correct: 'Updated evolutionary theory including new mechanisms',
        explanation: 'The extended evolutionary synthesis incorporates new understanding of mechanisms like epigenetics, developmental bias, and niche construction into evolutionary theory.'
      }
    ]
  },
  'Unit 5: Human Body System': {
    easy: [
      {
        id: '12bio_human_e1',
        question: 'What is the main function of the circulatory system?',
        options: ['Transport blood throughout the body', 'Digest food', 'Control movements', 'Produce hormones'],
        correct: 'Transport blood throughout the body',
        explanation: 'The circulatory system transports blood, oxygen, nutrients, and waste products throughout the body.'
      },
      {
        id: '12bio_human_e2',
        question: 'What organ pumps blood through the circulatory system?',
        options: ['Heart', 'Lungs', 'Liver', 'Kidneys'],
        correct: 'Heart',
        explanation: 'The heart is a muscular organ that pumps blood through the circulatory system.'
      },
      {
        id: '12bio_human_e3',
        question: 'What is the main function of the respiratory system?',
        options: ['Exchange of oxygen and carbon dioxide', 'Digest food', 'Filter blood', 'Produce hormones'],
        correct: 'Exchange of oxygen and carbon dioxide',
        explanation: 'The respiratory system facilitates the exchange of oxygen and carbon dioxide between the body and the environment.'
      },
      {
        id: '12bio_human_e4',
        question: 'Where does gas exchange occur in the respiratory system?',
        options: ['Alveoli in the lungs', 'Trachea', 'Bronchi', 'Nose'],
        correct: 'Alveoli in the lungs',
        explanation: 'Gas exchange occurs in the alveoli, tiny air sacs in the lungs where oxygen enters and carbon dioxide exits the blood.'
      },
      {
        id: '12bio_human_e5',
        question: 'What is the main function of the digestive system?',
        options: ['Break down and absorb nutrients from food', 'Pump blood', 'Control breathing', 'Filter waste'],
        correct: 'Break down and absorb nutrients from food',
        explanation: 'The digestive system breaks down food into nutrients that can be absorbed and used by the body.'
      },
      {
        id: '12bio_human_e6',
        question: 'What organ produces insulin?',
        options: ['Pancreas', 'Liver', 'Kidneys', 'Heart'],
        correct: 'Pancreas',
        explanation: 'The pancreas produces insulin, a hormone that regulates blood sugar levels.'
      },
      {
        id: '12bio_human_e7',
        question: 'What is the main function of the nervous system?',
        options: ['Control and coordinate body functions', 'Digest food', 'Pump blood', 'Filter waste'],
        correct: 'Control and coordinate body functions',
        explanation: 'The nervous system controls and coordinates body functions through electrical and chemical signals.'
      },
      {
        id: '12bio_human_e8',
        question: 'What is the basic unit of the nervous system?',
        options: ['Neuron', 'Muscle cell', 'Blood cell', 'Bone cell'],
        correct: 'Neuron',
        explanation: 'Neurons are the basic functional units of the nervous system, specialized for transmitting electrical signals.'
      },
      {
        id: '12bio_human_e9',
        question: 'What organ filters waste from the blood?',
        options: ['Kidneys', 'Liver', 'Heart', 'Lungs'],
        correct: 'Kidneys',
        explanation: 'The kidneys filter waste products and excess water from the blood to form urine.'
      },
      {
        id: '12bio_human_e10',
        question: 'What are the two main parts of the nervous system?',
        options: ['Central and peripheral nervous systems', 'Brain and spinal cord only', 'Sympathetic and parasympathetic', 'Motor and sensory'],
        correct: 'Central and peripheral nervous systems',
        explanation: 'The nervous system is divided into the central nervous system (brain and spinal cord) and peripheral nervous system (all other nerves).'
      }
    ],
    medium: [
      {
        id: '12bio_human_m1',
        question: 'What is the difference between systolic and diastolic blood pressure?',
        options: ['Systolic is pressure during heart contraction, diastolic during relaxation', 'They are the same measurement', 'Systolic measures heart rate only', 'Diastolic measures oxygen levels'],
        correct: 'Systolic is pressure during heart contraction, diastolic during relaxation',
        explanation: 'Systolic pressure is the pressure when the heart contracts, while diastolic pressure is when the heart relaxes between beats.'
      },
      {
        id: '12bio_human_m2',
        question: 'What is the role of hemoglobin in blood?',
        options: ['Carries oxygen and some carbon dioxide', 'Fights infections only', 'Clots blood only', 'Regulates blood pressure only'],
        correct: 'Carries oxygen and some carbon dioxide',
        explanation: 'Hemoglobin is a protein in red blood cells that binds to oxygen for transport and also carries some carbon dioxide.'
      },
      {
        id: '12bio_human_m3',
        question: 'What is peristalsis?',
        options: ['Wave-like muscle contractions that move food through digestive tract', 'Secretion of digestive enzymes', 'Absorption of nutrients', 'Blood circulation'],
        correct: 'Wave-like muscle contractions that move food through digestive tract',
        explanation: 'Peristalsis consists of coordinated muscle contractions that push food through the digestive system.'
      },
      {
        id: '12bio_human_m4',
        question: 'What is the role of the hypothalamus?',
        options: ['Links nervous and endocrine systems', 'Filters blood only', 'Pumps blood only', 'Digests food only'],
        correct: 'Links nervous and endocrine systems',
        explanation: 'The hypothalamus connects the nervous and endocrine systems, controlling hormone release and maintaining homeostasis.'
      },
      {
        id: '12bio_human_m5',
        question: 'What is the function of white blood cells?',
        options: ['Fight infections and foreign substances', 'Carry oxygen only', 'Clot blood only', 'Transport nutrients only'],
        correct: 'Fight infections and foreign substances',
        explanation: 'White blood cells are part of the immune system and defend the body against infections and foreign substances.'
      },
      {
        id: '12bio_human_m6',
        question: 'What is the role of the medulla oblongata?',
        options: ['Controls vital functions like breathing and heart rate', 'Controls voluntary movement only', 'Processes visual information only', 'Stores memories only'],
        correct: 'Controls vital functions like breathing and heart rate',
        explanation: 'The medulla oblongata controls essential life functions including breathing, heart rate, and blood pressure.'
      },
      {
        id: '12bio_human_m7',
        question: 'What is the difference between sympathetic and parasympathetic nervous systems?',
        options: ['Sympathetic activates fight-or-flight, parasympathetic promotes rest-and-digest', 'They have the same function', 'Sympathetic controls digestion only', 'Parasympathetic controls movement only'],
        correct: 'Sympathetic activates fight-or-flight, parasympathetic promotes rest-and-digest',
        explanation: 'The sympathetic nervous system prepares the body for action, while the parasympathetic system promotes relaxation and digestion.'
      },
      {
        id: '12bio_human_m8',
        question: 'What is homeostasis?',
        options: ['Maintenance of stable internal conditions', 'Rapid changes in body functions', 'Growth and development only', 'Reproduction only'],
        correct: 'Maintenance of stable internal conditions',
        explanation: 'Homeostasis is the process by which the body maintains stable internal conditions despite external changes.'
      },
      {
        id: '12bio_human_m9',
        question: 'What is the role of aldosterone?',
        options: ['Regulates sodium and water balance', 'Controls blood sugar only', 'Stimulates growth only', 'Controls heart rate only'],
        correct: 'Regulates sodium and water balance',
        explanation: 'Aldosterone is a hormone that regulates sodium and water balance by affecting kidney function.'
      },
      {
        id: '12bio_human_m10',
        question: 'What is the blood-brain barrier?',
        options: ['Selective barrier protecting brain from harmful substances', 'Complete isolation of brain from blood', 'Barrier preventing all substances from entering brain', 'Connection between brain and heart'],
        correct: 'Selective barrier protecting brain from harmful substances',
        explanation: 'The blood-brain barrier is a selective barrier that protects the brain by allowing beneficial substances through while blocking harmful ones.'
      }
    ],
    hard: [
      {
        id: '12bio_human_h1',
        question: 'What is the Frank-Starling mechanism?',
        options: ['Heart pumps more forcefully when filled with more blood', 'Heart rate increases with exercise', 'Blood pressure regulation mechanism', 'Oxygen transport mechanism'],
        correct: 'Heart pumps more forcefully when filled with more blood',
        explanation: 'The Frank-Starling mechanism describes how the heart automatically adjusts its pumping force based on the amount of blood returning to it.'
      },
      {
        id: '12bio_human_h2',
        question: 'What is the renin-angiotensin-aldosterone system?',
        options: ['Complex system regulating blood pressure and fluid balance', 'Simple blood clotting mechanism', 'Digestive enzyme system', 'Immune response system'],
        correct: 'Complex system regulating blood pressure and fluid balance',
        explanation: 'The RAAS is a hormone system that regulates blood pressure and fluid balance through a cascade of enzymatic reactions.'
      },
      {
        id: '12bio_human_h3',
        question: 'What is long-term potentiation in the nervous system?',
        options: ['Strengthening of synapses based on activity', 'Weakening of neural connections', 'Growth of new neurons only', 'Destruction of synapses'],
        correct: 'Strengthening of synapses based on activity',
        explanation: 'Long-term potentiation is the persistent strengthening of synapses based on recent patterns of activity, important for learning and memory.'
      },
      {
        id: '12bio_human_h4',
        question: 'What is the role of aquaporins?',
        options: ['Water channel proteins in cell membranes', 'Ion channel proteins only', 'Structural proteins only', 'Enzyme proteins only'],
        correct: 'Water channel proteins in cell membranes',
        explanation: 'Aquaporins are specialized channel proteins that facilitate rapid water transport across cell membranes, crucial for water homeostasis.'
      },
      {
        id: '12bio_human_h5',
        question: 'What is the enteric nervous system?',
        options: ['Independent nervous system of the digestive tract', 'Part of the central nervous system only', 'Part of the sympathetic system only', 'Part of the parasympathetic system only'],
        correct: 'Independent nervous system of the digestive tract',
        explanation: 'The enteric nervous system is a large division of the peripheral nervous system that can operate independently to control digestive functions.'
      },
      {
        id: '12bio_human_h6',
        question: 'What is the HPA axis?',
        options: ['Hypothalamic-pituitary-adrenal stress response system', 'Heart-pancreas-artery system', 'Head-pelvis-arm coordination system', 'Hormone-protein-amino acid pathway'],
        correct: 'Hypothalamic-pituitary-adrenal stress response system',
        explanation: 'The HPA axis is a major neuroendocrine system that controls reactions to stress and regulates various body processes.'
      },
      {
        id: '12bio_human_h7',
        question: 'What is synaptic plasticity?',
        options: ['Ability of synapses to change strength over time', 'Fixed synaptic strength', 'Synaptic destruction only', 'Synaptic formation only'],
        correct: 'Ability of synapses to change strength over time',
        explanation: 'Synaptic plasticity is the ability of synapses to strengthen or weaken over time in response to activity, fundamental to learning and memory.'
      },
      {
        id: '12bio_human_h8',
        question: 'What is the role of glial cells?',
        options: ['Support, protect, and maintain neurons', 'Only conduct electrical signals', 'Only form myelin sheaths', 'Only provide structural support'],
        correct: 'Support, protect, and maintain neurons',
        explanation: 'Glial cells perform multiple functions including supporting neurons, maintaining homeostasis, forming myelin, and providing immune defense.'
      },
      {
        id: '12bio_human_h9',
        question: 'What is the concept of allostatic load?',
        options: ['Cumulative physiological wear from chronic stress', 'Immediate stress response only', 'Positive adaptation to stress', 'Absence of stress response'],
        correct: 'Cumulative physiological wear from chronic stress',
        explanation: 'Allostatic load refers to the cumulative physiological wear and tear on the body from repeated or chronic stress responses.'
      },
      {
        id: '12bio_human_h10',
        question: 'What is the role of the vagus nerve?',
        options: ['Major parasympathetic nerve controlling multiple organs', 'Controls voluntary movement only', 'Sensory nerve for vision only', 'Motor nerve for limbs only'],
        correct: 'Major parasympathetic nerve controlling multiple organs',
        explanation: 'The vagus nerve is the longest cranial nerve and a major component of the parasympathetic nervous system, controlling heart rate, digestion, and other organ functions.'
      }
    ]
  },
  'Unit 6: Climate Change': {
    easy: [
      {
        id: '12bio_climate_e1',
        question: 'What is climate change?',
        options: ['Long-term changes in global weather patterns', 'Daily weather variations', 'Seasonal changes only', 'Changes in local weather only'],
        correct: 'Long-term changes in global weather patterns',
        explanation: 'Climate change refers to long-term shifts in global or regional climate patterns, primarily attributed to human activities.'
      },
      {
        id: '12bio_climate_e2',
        question: 'What is the main cause of current climate change?',
        options: ['Human activities releasing greenhouse gases', 'Natural solar variations only', 'Volcanic eruptions only', 'Ocean currents only'],
        correct: 'Human activities releasing greenhouse gases',
        explanation: 'Current climate change is primarily caused by human activities that release greenhouse gases into the atmosphere.'
      },
      {
        id: '12bio_climate_e3',
        question: 'What is the greenhouse effect?',
        options: ['Atmosphere trapping heat from the sun', 'Plants growing in greenhouses', 'Cooling of the atmosphere', 'Reflection of sunlight'],
        correct: 'Atmosphere trapping heat from the sun',
        explanation: 'The greenhouse effect occurs when greenhouse gases in the atmosphere trap heat from the sun, warming the planet.'
      },
      {
        id: '12bio_climate_e4',
        question: 'Which gas is the most abundant greenhouse gas?',
        options: ['Carbon dioxide', 'Methane', 'Nitrous oxide', 'Fluorocarbons'],
        correct: 'Carbon dioxide',
        explanation: 'Carbon dioxide (CO2) is the most abundant greenhouse gas released by human activities, primarily from burning fossil fuels.'
      },
      {
        id: '12bio_climate_e5',
        question: 'How does climate change affect sea levels?',
        options: ['Causes sea levels to rise', 'Causes sea levels to fall', 'Has no effect on sea levels', 'Only affects inland water'],
        correct: 'Causes sea levels to rise',
        explanation: 'Climate change causes sea levels to rise through thermal expansion of seawater and melting of ice sheets and glaciers.'
      },
      {
        id: '12bio_climate_e6',
        question: 'What is ocean acidification?',
        options: ['Oceans becoming more acidic due to CO2 absorption', 'Oceans becoming more basic', 'Oceans becoming saltier', 'Oceans becoming fresher'],
        correct: 'Oceans becoming more acidic due to CO2 absorption',
        explanation: 'Ocean acidification occurs when oceans absorb carbon dioxide from the atmosphere, forming carbonic acid and lowering ocean pH.'
      },
      {
        id: '12bio_climate_e7',
        question: 'How does climate change affect biodiversity?',
        options: ['Threatens many species with extinction', 'Increases all species populations', 'Has no effect on species', 'Only affects plant species'],
        correct: 'Threatens many species with extinction',
        explanation: 'Climate change threatens biodiversity by altering habitats, disrupting ecosystems, and making conditions unsuitable for many species.'
      },
      {
        id: '12bio_climate_e8',
        question: 'What are renewable energy sources?',
        options: ['Energy sources that can be replenished naturally', 'Energy sources that run out quickly', 'Only solar energy', 'Only wind energy'],
        correct: 'Energy sources that can be replenished naturally',
        explanation: 'Renewable energy sources like solar, wind, and hydroelectric power can be replenished naturally and produce little or no greenhouse gases.'
      },
      {
        id: '12bio_climate_e9',
        question: 'What is carbon footprint?',
        options: ['Total greenhouse gases produced by human activities', 'Physical footprint size', 'Amount of carbon in soil', 'Carbon content in food'],
        correct: 'Total greenhouse gases produced by human activities',
        explanation: 'Carbon footprint measures the total amount of greenhouse gases produced directly and indirectly by human activities.'
      },
      {
        id: '12bio_climate_e10',
        question: 'What is one way individuals can help reduce climate change?',
        options: ['Reduce energy consumption', 'Use more fossil fuels', 'Increase waste production', 'Drive more often'],
        correct: 'Reduce energy consumption',
        explanation: 'Individuals can help reduce climate change by reducing energy consumption, using renewable energy, and adopting sustainable practices.'
      }
    ],
    medium: [
      {
        id: '12bio_climate_m1',
        question: 'What is the difference between climate change mitigation and adaptation?',
        options: ['Mitigation reduces causes, adaptation adjusts to effects', 'They are the same thing', 'Mitigation only involves technology', 'Adaptation prevents all climate change'],
        correct: 'Mitigation reduces causes, adaptation adjusts to effects',
        explanation: 'Mitigation involves reducing greenhouse gas emissions to limit climate change, while adaptation involves adjusting to its effects.'
      },
      {
        id: '12bio_climate_m2',
        question: 'What are climate feedback loops?',
        options: ['Processes that amplify or reduce climate change effects', 'Simple cause and effect relationships', 'Only positive outcomes', 'Only negative outcomes'],
        correct: 'Processes that amplify or reduce climate change effects',
        explanation: 'Climate feedback loops are processes where climate change effects either amplify (positive feedback) or reduce (negative feedback) further changes.'
      },
      {
        id: '12bio_climate_m3',
        question: 'What is the albedo effect?',
        options: ['Reflection of solar radiation by surfaces', 'Absorption of all sunlight', 'Production of heat by surfaces', 'Conversion of light to sound'],
        correct: 'Reflection of solar radiation by surfaces',
        explanation: 'The albedo effect refers to how much solar radiation is reflected by different surfaces, affecting global temperature.'
      },
      {
        id: '12bio_climate_m4',
        question: 'What is coral bleaching?',
        options: ['Loss of symbiotic algae due to stress', 'Normal coral reproduction', 'Coral turning white permanently', 'Coral growth process'],
        correct: 'Loss of symbiotic algae due to stress',
        explanation: 'Coral bleaching occurs when corals expel their symbiotic algae due to stress, often from increased water temperature.'
      },
      {
        id: '12bio_climate_m5',
        question: 'What is permafrost thaw?',
        options: ['Melting of permanently frozen soil', 'Seasonal freezing and thawing', 'Formation of new ice', 'Cooling of soil'],
        correct: 'Melting of permanently frozen soil',
        explanation: 'Permafrost thaw is the melting of permanently frozen soil due to warming temperatures, releasing stored carbon.'
      },
      {
        id: '12bio_climate_m6',
        question: 'What is carbon sequestration?',
        options: ['Capture and storage of atmospheric carbon', 'Release of carbon to atmosphere', 'Conversion of carbon to oxygen', 'Destruction of carbon compounds'],
        correct: 'Capture and storage of atmospheric carbon',
        explanation: 'Carbon sequestration is the process of capturing and storing atmospheric carbon dioxide to reduce greenhouse gas concentrations.'
      },
      {
        id: '12bio_climate_m7',
        question: 'What are tipping points in climate science?',
        options: ['Thresholds leading to irreversible changes', 'Points of maximum temperature', 'Points of minimum temperature', 'Regular climate cycles'],
        correct: 'Thresholds leading to irreversible changes',
        explanation: 'Climate tipping points are critical thresholds where small changes can lead to large, irreversible changes in the climate system.'
      },
      {
        id: '12bio_climate_m8',
        question: 'What is phenological shift?',
        options: ['Changes in timing of biological events', 'Changes in species appearance only', 'Changes in population size only', 'Changes in habitat location only'],
        correct: 'Changes in timing of biological events',
        explanation: 'Phenological shifts are changes in the timing of biological events like flowering or migration due to climate change.'
      },
      {
        id: '12bio_climate_m9',
        question: 'What is the role of forests in climate regulation?',
        options: ['Absorb CO2 and regulate water cycles', 'Only provide timber', 'Only produce oxygen', 'Only prevent erosion'],
        correct: 'Absorb CO2 and regulate water cycles',
        explanation: 'Forests play crucial roles in climate regulation by absorbing CO2, regulating water cycles, and moderating temperatures.'
      },
      {
        id: '12bio_climate_m10',
        question: 'What is geoengineering?',
        options: ['Deliberate intervention to counteract climate change', 'Natural climate processes', 'Geological formation processes', 'Mining operations'],
        correct: 'Deliberate intervention to counteract climate change',
        explanation: 'Geoengineering involves deliberate, large-scale interventions in Earth\'s systems to counteract climate change effects.'
      }
    ],
    hard: [
      {
        id: '12bio_climate_h1',
        question: 'What is the Atlantic Meridional Overturning Circulation (AMOC)?',
        options: ['Ocean current system that redistributes heat globally', 'Atmospheric wind pattern', 'Tectonic plate movement', 'Solar radiation pattern'],
        correct: 'Ocean current system that redistributes heat globally',
        explanation: 'AMOC is a large-scale ocean current system that transports warm water northward and cold water southward, playing a crucial role in global climate.'
      },
      {
        id: '12bio_climate_h2',
        question: 'What is radiative forcing?',
        options: ['Change in energy balance between incoming and outgoing radiation', 'Force of solar wind', 'Gravitational force from sun', 'Magnetic force in atmosphere'],
        correct: 'Change in energy balance between incoming and outgoing radiation',
        explanation: 'Radiative forcing measures the difference between solar energy absorbed and energy radiated back to space, driving climate change.'
      },
      {
        id: '12bio_climate_h3',
        question: 'What is the concept of climate sensitivity?',
        options: ['Temperature response to doubled atmospheric CO2', 'Speed of climate change', 'Variability in climate measurements', 'Accuracy of climate predictions'],
        correct: 'Temperature response to doubled atmospheric CO2',
        explanation: 'Climate sensitivity refers to how much global temperature would increase if atmospheric CO2 concentrations doubled.'
      },
      {
        id: '12bio_climate_h4',
        question: 'What is the carbon-climate feedback?',
        options: ['Climate change affects carbon cycle, which affects climate', 'Simple carbon absorption by plants', 'Direct CO2 effects only', 'Independent carbon and climate systems'],
        correct: 'Climate change affects carbon cycle, which affects climate',
        explanation: 'Carbon-climate feedback occurs when climate change alters the carbon cycle, which then influences further climate change.'
      },
      {
        id: '12bio_climate_h5',
        question: 'What is the role of cloud-aerosol interactions in climate?',
        options: ['Complex effects on radiation balance and precipitation', 'Simple cooling effect only', 'Simple warming effect only', 'No significant climate impact'],
        correct: 'Complex effects on radiation balance and precipitation',
        explanation: 'Cloud-aerosol interactions have complex effects on climate through changes in cloud properties, affecting both radiation balance and precipitation patterns.'
      },
      {
        id: '12bio_climate_h6',
        question: 'What is the Keeling Curve?',
        options: ['Long-term record of atmospheric CO2 concentrations', 'Temperature measurement record', 'Sea level measurement record', 'Ice sheet thickness record'],
        correct: 'Long-term record of atmospheric CO2 concentrations',
        explanation: 'The Keeling Curve is a graph showing the long-term increase in atmospheric CO2 concentrations measured at Mauna Loa Observatory.'
      },
      {
        id: '12bio_climate_h7',
        question: 'What is the concept of committed warming?',
        options: ['Future warming from current greenhouse gas levels', 'Past warming only', 'Potential maximum warming', 'Theoretical warming scenarios'],
        correct: 'Future warming from current greenhouse gas levels',
        explanation: 'Committed warming refers to the additional warming that will occur even if greenhouse gas emissions stopped immediately, due to climate system inertia.'
      },
      {
        id: '12bio_climate_h8',
        question: 'What is the role of the cryosphere in climate feedback?',
        options: ['Ice-albedo feedback affects global temperature', 'Ice has no climate effects', 'Ice only affects local weather', 'Ice prevents all climate change'],
        correct: 'Ice-albedo feedback affects global temperature',
        explanation: 'The cryosphere creates important climate feedbacks, particularly the ice-albedo feedback where melting ice reduces reflectivity and increases warming.'
      },
      {
        id: '12bio_climate_h9',
        question: 'What is biogeochemical cycling in climate context?',
        options: ['Movement of elements through Earth systems affecting climate', 'Simple chemical reactions', 'Biological processes only', 'Geological processes only'],
        correct: 'Movement of elements through Earth systems affecting climate',
        explanation: 'Biogeochemical cycling involves the movement of chemical elements through biological, geological, and atmospheric systems, significantly affecting climate.'
      },
      {
        id: '12bio_climate_h10',
        question: 'What is the concept of planetary boundaries?',
        options: ['Safe operating limits for Earth system processes', 'Physical boundaries of Earth', 'Limits of space exploration', 'Boundaries between countries'],
        correct: 'Safe operating limits for Earth system processes',
        explanation: 'Planetary boundaries define safe operating limits for nine Earth system processes, including climate change, within which humanity can safely operate.'
      }
    ]
  }
};

export const getGrade12BiologyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Question[] => {
  console.log('Getting Grade 12 Biology questions for:', { unit, difficulty, count });
  
  if (grade12BiologyQuestions[unit] && grade12BiologyQuestions[unit][difficulty]) {
    const questions = grade12BiologyQuestions[unit][difficulty];
    console.log(`Found ${questions.length} questions for ${unit} - ${difficulty}`);
    
    // Shuffle questions and return the requested count
    const shuffled = questions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }
  
  console.log('No questions found for:', unit, difficulty);
  return [];
};
