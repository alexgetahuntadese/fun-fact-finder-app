
export interface BiologyQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12BiologyQuestions: { [chapter: string]: BiologyQuestion[] } = {
  "Unit 1: Application of Biology": [
    // Easy Questions
    {
      id: "bio12_app_e1",
      question: "What is biotechnology?",
      options: ["The use of living organisms to make products", "The study of rocks", "The study of weather", "The study of space"],
      correct: "The use of living organisms to make products",
      explanation: "Biotechnology involves using living organisms, cells, or biological processes to develop products and technologies that benefit society.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e2",
      question: "Which of the following is an example of genetic engineering?",
      options: ["Creating insulin using bacteria", "Breeding dogs", "Planting seeds", "Watering plants"],
      correct: "Creating insulin using bacteria",
      explanation: "Genetic engineering involves manipulating genes to produce desired products, such as using genetically modified bacteria to produce human insulin.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e3",
      question: "What does DNA stand for?",
      options: ["Deoxyribonucleic Acid", "Direct Natural Acid", "Dynamic Nuclear Acid", "Diverse Nucleic Acid"],
      correct: "Deoxyribonucleic Acid",
      explanation: "DNA (Deoxyribonucleic Acid) is the molecule that carries genetic information in living organisms.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e4",
      question: "Which organism is commonly used in bread making?",
      options: ["Yeast", "Bacteria", "Virus", "Algae"],
      correct: "Yeast",
      explanation: "Yeast (Saccharomyces cerevisiae) is used in bread making because it ferments sugars and produces carbon dioxide, which makes bread rise.",
      difficulty: "Easy"
    },
    {
      id: "bio12_app_e5",
      question: "What is fermentation?",
      options: ["A process that converts sugars to alcohol or acids", "A process of photosynthesis", "A process of respiration", "A process of digestion"],
      correct: "A process that converts sugars to alcohol or acids",
      explanation: "Fermentation is an anaerobic metabolic process where microorganisms convert organic compounds, especially sugars, into simpler compounds like alcohol or acids.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "bio12_app_m1",
      question: "What is the main advantage of using recombinant DNA technology in medicine?",
      options: ["Production of pure human proteins", "Faster cell division", "Better food taste", "Improved plant growth"],
      correct: "Production of pure human proteins",
      explanation: "Recombinant DNA technology allows for the production of pure human proteins like insulin, growth hormone, and clotting factors using genetically modified organisms.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m2",
      question: "Which enzyme is used to cut DNA at specific sequences?",
      options: ["Restriction endonuclease", "DNA polymerase", "RNA polymerase", "Helicase"],
      correct: "Restriction endonuclease",
      explanation: "Restriction endonucleases are enzymes that cut DNA at specific recognition sequences, making them essential tools in genetic engineering.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m3",
      question: "What is the purpose of PCR (Polymerase Chain Reaction)?",
      options: ["To amplify specific DNA sequences", "To destroy DNA", "To translate proteins", "To synthesize RNA"],
      correct: "To amplify specific DNA sequences",
      explanation: "PCR is a technique used to amplify (make millions of copies of) specific DNA sequences, which is crucial for DNA analysis and genetic testing.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m4",
      question: "Which vector is commonly used to introduce genes into plant cells?",
      options: ["Agrobacterium tumefaciens", "E. coli", "Bacillus subtilis", "Streptococcus"],
      correct: "Agrobacterium tumefaciens",
      explanation: "Agrobacterium tumefaciens is a bacterium that naturally transfers DNA to plant cells, making it an ideal vector for plant genetic engineering.",
      difficulty: "Medium"
    },
    {
      id: "bio12_app_m5",
      question: "What is bioremediation?",
      options: ["Using organisms to clean up environmental pollutants", "Creating new medicines", "Producing food", "Generating electricity"],
      correct: "Using organisms to clean up environmental pollutants",
      explanation: "Bioremediation uses living organisms, especially microorganisms, to remove or neutralize environmental pollutants from contaminated sites.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "bio12_app_h1",
      question: "What is the significance of Ti plasmids in plant genetic engineering?",
      options: ["They naturally transfer DNA to plant cells", "They produce antibiotics", "They kill plant pathogens", "They enhance photosynthesis"],
      correct: "They naturally transfer DNA to plant cells",
      explanation: "Ti (tumor-inducing) plasmids from Agrobacterium tumefaciens have the natural ability to transfer and integrate DNA into plant genomes, making them valuable tools for plant transformation.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h2",
      question: "Which technique is used to analyze protein expression patterns?",
      options: ["Western blotting", "Southern blotting", "Northern blotting", "Eastern blotting"],
      correct: "Western blotting",
      explanation: "Western blotting is a technique used to detect and analyze specific proteins in a sample, allowing researchers to study protein expression patterns.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h3",
      question: "What is CRISPR-Cas9 primarily used for?",
      options: ["Precise gene editing", "Protein synthesis", "Cell division", "Energy production"],
      correct: "Precise gene editing",
      explanation: "CRISPR-Cas9 is a revolutionary gene-editing technology that allows scientists to make precise changes to DNA sequences in living cells.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h4",
      question: "What is the main challenge in gene therapy?",
      options: ["Delivering genes to target cells safely", "Finding the right genes", "Understanding DNA structure", "Producing enough proteins"],
      correct: "Delivering genes to target cells safely",
      explanation: "The main challenge in gene therapy is developing safe and efficient methods to deliver therapeutic genes to the right target cells without causing harmful side effects.",
      difficulty: "Hard"
    },
    {
      id: "bio12_app_h5",
      question: "What is pharmacogenomics?",
      options: ["Study of how genes affect drug response", "Study of drug manufacturing", "Study of plant medicines", "Study of drug side effects"],
      correct: "Study of how genes affect drug response",
      explanation: "Pharmacogenomics is the study of how an individual's genetic makeup affects their response to drugs, enabling personalized medicine approaches.",
      difficulty: "Hard"
    }
  ],
  
  "Unit 2: Microorganisms": [
    // Easy Questions
    {
      id: "bio12_micro_e1",
      question: "What are microorganisms?",
      options: ["Very small living organisms", "Large animals", "Plant organs", "Rock formations"],
      correct: "Very small living organisms",
      explanation: "Microorganisms are living organisms that are too small to be seen with the naked eye and typically require a microscope for observation.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e2",
      question: "Which of the following is NOT a microorganism?",
      options: ["Elephant", "Bacteria", "Virus", "Protozoa"],
      correct: "Elephant",
      explanation: "An elephant is a large mammal, while bacteria, viruses, and protozoa are all examples of microorganisms.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e3",
      question: "What type of cell do bacteria have?",
      options: ["Prokaryotic", "Eukaryotic", "Plant", "Animal"],
      correct: "Prokaryotic",
      explanation: "Bacteria are prokaryotic organisms, meaning their cells lack a membrane-bound nucleus and other membrane-bound organelles.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e4",
      question: "Which microorganism is used to make yogurt?",
      options: ["Lactobacillus", "E. coli", "Influenza virus", "Malaria parasite"],
      correct: "Lactobacillus",
      explanation: "Lactobacillus bacteria are used in yogurt production because they ferment milk sugars and produce lactic acid, which gives yogurt its characteristic taste and texture.",
      difficulty: "Easy"
    },
    {
      id: "bio12_micro_e5",
      question: "What do antibiotics primarily target?",
      options: ["Bacteria", "Viruses", "Fungi", "Protozoa"],
      correct: "Bacteria",
      explanation: "Antibiotics are medications that primarily target bacterial infections by either killing bacteria or inhibiting their growth.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "bio12_micro_m1",
      question: "What is the difference between gram-positive and gram-negative bacteria?",
      options: ["Cell wall structure", "Cell size", "Reproduction method", "Energy source"],
      correct: "Cell wall structure",
      explanation: "Gram-positive bacteria have a thick peptidoglycan layer in their cell wall and retain purple stain, while gram-negative bacteria have a thinner peptidoglycan layer and appear pink after gram staining.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m2",
      question: "Which structure allows some bacteria to survive extreme conditions?",
      options: ["Endospores", "Flagella", "Pili", "Ribosomes"],
      correct: "Endospores",
      explanation: "Endospores are highly resistant structures formed by some bacteria that allow them to survive extreme conditions like heat, radiation, and chemicals.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m3",
      question: "What is the primary function of bacteriophages?",
      options: ["Infect bacteria", "Infect plants", "Infect animals", "Infect fungi"],
      correct: "Infect bacteria",
      explanation: "Bacteriophages are viruses that specifically infect and replicate within bacterial cells, often used in research and potential therapeutic applications.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m4",
      question: "Which process do nitrogen-fixing bacteria perform?",
      options: ["Convert atmospheric nitrogen to ammonia", "Convert ammonia to nitrates", "Convert nitrates to nitrogen gas", "Convert oxygen to nitrogen"],
      correct: "Convert atmospheric nitrogen to ammonia",
      explanation: "Nitrogen-fixing bacteria have the enzyme nitrogenase that converts atmospheric nitrogen gas (N₂) into ammonia (NH₃), which plants can use.",
      difficulty: "Medium"
    },
    {
      id: "bio12_micro_m5",
      question: "What is quorum sensing in bacteria?",
      options: ["Communication between bacterial cells", "Detection of nutrients", "Response to temperature", "DNA replication control"],
      correct: "Communication between bacterial cells",
      explanation: "Quorum sensing is a communication mechanism that allows bacteria to detect and respond to cell population density through signaling molecules.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "bio12_micro_h1",
      question: "What is horizontal gene transfer in bacteria?",
      options: ["Transfer of genes between bacterial cells", "Transfer of genes from parent to offspring", "Transfer of genes within the same cell", "Transfer of genes to viruses"],
      correct: "Transfer of genes between bacterial cells",
      explanation: "Horizontal gene transfer is the movement of genetic material between bacterial cells through mechanisms like conjugation, transformation, and transduction, distinct from vertical inheritance.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h2",
      question: "Which mechanism allows bacteria to develop antibiotic resistance most rapidly?",
      options: ["Plasmid transfer", "Point mutations", "Gene deletion", "Chromosome duplication"],
      correct: "Plasmid transfer",
      explanation: "Plasmid transfer through conjugation allows bacteria to rapidly acquire resistance genes from other bacteria, spreading antibiotic resistance quickly through populations.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h3",
      question: "What is the significance of biofilms in microbiology?",
      options: ["Provide protection and increase antibiotic resistance", "Speed up reproduction", "Increase mobility", "Improve nutrient absorption"],
      correct: "Provide protection and increase antibiotic resistance",
      explanation: "Biofilms are structured communities of microorganisms that provide protection from environmental stresses and significantly increase resistance to antimicrobial agents.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h4",
      question: "What is the lysogenic cycle in viral replication?",
      options: ["Viral DNA integrates into host chromosome", "Virus immediately lyses the host cell", "Virus replicates outside the host", "Virus transforms into bacteria"],
      correct: "Viral DNA integrates into host chromosome",
      explanation: "In the lysogenic cycle, viral DNA integrates into the host cell's chromosome and remains dormant until activated to enter the lytic cycle.",
      difficulty: "Hard"
    },
    {
      id: "bio12_micro_h5",
      question: "What role do archaebacteria play in extreme environments?",
      options: ["They thrive in conditions lethal to other organisms", "They cool down hot environments", "They produce oxygen", "They consume all nutrients"],
      correct: "They thrive in conditions lethal to other organisms",
      explanation: "Archaebacteria (archaea) are extremophiles that can survive and thrive in extreme conditions like high temperature, high salinity, or extreme pH that would kill most other organisms.",
      difficulty: "Hard"
    }
  ],

  "Unit 3: Energy transformation": [
    // Easy Questions
    {
      id: "bio12_energy_e1",
      question: "What is photosynthesis?",
      options: ["Process plants use to make food from sunlight", "Process animals use to digest food", "Process bacteria use to reproduce", "Process fungi use to decompose"],
      correct: "Process plants use to make food from sunlight",
      explanation: "Photosynthesis is the process by which plants and some other organisms use sunlight, carbon dioxide, and water to produce glucose and oxygen.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e2",
      question: "What gas do plants release during photosynthesis?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
      correct: "Oxygen",
      explanation: "During photosynthesis, plants release oxygen as a byproduct while converting carbon dioxide and water into glucose using sunlight.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e3",
      question: "What is cellular respiration?",
      options: ["Process that breaks down glucose to release energy", "Process that makes glucose", "Process that absorbs sunlight", "Process that produces proteins"],
      correct: "Process that breaks down glucose to release energy",
      explanation: "Cellular respiration is the process by which cells break down glucose and other organic molecules to release energy in the form of ATP.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e4",
      question: "Where does photosynthesis occur in plant cells?",
      options: ["Chloroplasts", "Mitochondria", "Nucleus", "Ribosomes"],
      correct: "Chloroplasts",
      explanation: "Photosynthesis occurs in chloroplasts, organelles that contain chlorophyll and other pigments necessary for capturing light energy.",
      difficulty: "Easy"
    },
    {
      id: "bio12_energy_e5",
      question: "What is ATP?",
      options: ["Energy currency of cells", "A type of protein", "A type of carbohydrate", "A type of lipid"],
      correct: "Energy currency of cells",
      explanation: "ATP (Adenosine Triphosphate) is often called the energy currency of cells because it stores and provides energy for cellular processes.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "bio12_energy_m1",
      question: "What are the two main stages of photosynthesis?",
      options: ["Light reactions and Calvin cycle", "Glycolysis and fermentation", "Krebs cycle and electron transport", "DNA replication and transcription"],
      correct: "Light reactions and Calvin cycle",
      explanation: "Photosynthesis consists of light-dependent reactions (light reactions) that capture energy and the Calvin cycle (light-independent reactions) that fix carbon dioxide.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m2",
      question: "Where does the Calvin cycle take place?",
      options: ["Stroma of chloroplasts", "Thylakoid membranes", "Mitochondrial matrix", "Cell membrane"],
      correct: "Stroma of chloroplasts",
      explanation: "The Calvin cycle occurs in the stroma, the fluid-filled space surrounding the thylakoids in chloroplasts.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m3",
      question: "What is the main purpose of the electron transport chain in cellular respiration?",
      options: ["Generate ATP through chemiosmosis", "Break down glucose", "Produce carbon dioxide", "Create water molecules"],
      correct: "Generate ATP through chemiosmosis",
      explanation: "The electron transport chain creates a proton gradient that drives ATP synthesis through chemiosmosis, producing most of the ATP in cellular respiration.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m4",
      question: "What happens during glycolysis?",
      options: ["Glucose is broken down into pyruvate", "Pyruvate enters the Krebs cycle", "ATP is produced by oxygen", "Carbon dioxide is released"],
      correct: "Glucose is broken down into pyruvate",
      explanation: "Glycolysis is the first stage of cellular respiration where glucose is broken down into two pyruvate molecules, producing some ATP and NADH.",
      difficulty: "Medium"
    },
    {
      id: "bio12_energy_m5",
      question: "What is the relationship between photosynthesis and cellular respiration?",
      options: ["They are complementary processes", "They are identical processes", "They never occur together", "They only occur in different organisms"],
      correct: "They are complementary processes",
      explanation: "Photosynthesis and cellular respiration are complementary processes: photosynthesis stores energy by making glucose, while cellular respiration releases energy by breaking down glucose.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "bio12_energy_h1",
      question: "What is the net gain of ATP molecules from one glucose molecule during cellular respiration?",
      options: ["36-38 ATP", "2 ATP", "4 ATP", "100 ATP"],
      correct: "36-38 ATP",
      explanation: "The complete oxidation of one glucose molecule through glycolysis, Krebs cycle, and electron transport chain yields approximately 36-38 ATP molecules.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h2",
      question: "What is the role of NADPH in photosynthesis?",
      options: ["Provides reducing power for carbon fixation", "Absorbs light energy", "Transports electrons", "Produces oxygen"],
      correct: "Provides reducing power for carbon fixation",
      explanation: "NADPH produced in the light reactions provides the reducing power (electrons) needed to convert carbon dioxide into glucose during the Calvin cycle.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h3",
      question: "What is photorespiration and why is it problematic?",
      options: ["When RuBisCO fixes oxygen instead of CO2, reducing efficiency", "When plants respire too much", "When light intensity is too high", "When photosynthesis stops completely"],
      correct: "When RuBisCO fixes oxygen instead of CO2, reducing efficiency",
      explanation: "Photorespiration occurs when RuBisCO enzyme fixes oxygen instead of carbon dioxide, leading to energy loss and reduced photosynthetic efficiency.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h4",
      question: "How do C4 plants minimize photorespiration?",
      options: ["Spatial separation of carbon fixation", "Temporal separation of processes", "Higher light requirements", "Lower temperature tolerance"],
      correct: "Spatial separation of carbon fixation",
      explanation: "C4 plants minimize photorespiration by spatially separating initial carbon fixation in mesophyll cells from the Calvin cycle in bundle sheath cells.",
      difficulty: "Hard"
    },
    {
      id: "bio12_energy_h5",
      question: "What drives ATP synthesis in both photosynthesis and cellular respiration?",
      options: ["Proton gradient across membranes", "Direct energy transfer", "Enzyme activation", "Temperature changes"],
      correct: "Proton gradient across membranes",
      explanation: "Both processes use chemiosmosis, where a proton gradient across membranes (thylakoids in photosynthesis, inner mitochondrial membrane in respiration) drives ATP synthesis.",
      difficulty: "Hard"
    }
  ],

  "Unit 4: Evolution": [
    // Easy Questions
    {
      id: "bio12_evol_e1",
      question: "What is evolution?",
      options: ["Change in species over time", "Growth of an individual", "Daily changes in behavior", "Seasonal migrations"],
      correct: "Change in species over time",
      explanation: "Evolution is the process by which species change over long periods of time through genetic variation and natural selection.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e2",
      question: "Who proposed the theory of evolution by natural selection?",
      options: ["Charles Darwin", "Albert Einstein", "Isaac Newton", "Marie Curie"],
      correct: "Charles Darwin",
      explanation: "Charles Darwin proposed the theory of evolution by natural selection based on his observations and research, published in 'On the Origin of Species' in 1859.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e3",
      question: "What is natural selection?",
      options: ["Survival of organisms best adapted to their environment", "Random changes in DNA", "Selective breeding by humans", "Migration to new habitats"],
      correct: "Survival of organisms best adapted to their environment",
      explanation: "Natural selection is the process where organisms with favorable traits are more likely to survive and reproduce, passing these traits to their offspring.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e4",
      question: "What are fossils?",
      options: ["Preserved remains of ancient organisms", "Living organisms", "Modern bones", "Plant seeds"],
      correct: "Preserved remains of ancient organisms",
      explanation: "Fossils are preserved remains, impressions, or traces of organisms that lived in the past, providing evidence for evolution.",
      difficulty: "Easy"
    },
    {
      id: "bio12_evol_e5",
      question: "What is adaptation?",
      options: ["Traits that help organisms survive in their environment", "Daily behavioral changes", "Seasonal color changes", "Learning new skills"],
      correct: "Traits that help organisms survive in their environment",
      explanation: "Adaptations are inherited characteristics that increase an organism's chances of survival and reproduction in its specific environment.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "bio12_evol_m1",
      question: "What is genetic drift?",
      options: ["Random changes in allele frequencies", "Directed changes by natural selection", "Gene flow between populations", "Mutation rates"],
      correct: "Random changes in allele frequencies",
      explanation: "Genetic drift refers to random changes in allele frequencies in a population, particularly significant in small populations.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m2",
      question: "What evidence supports evolution?",
      options: ["Fossil record, comparative anatomy, molecular biology", "Only fossil records", "Only DNA evidence", "Only behavioral observations"],
      correct: "Fossil record, comparative anatomy, molecular biology",
      explanation: "Evolution is supported by multiple lines of evidence including fossils, comparative anatomy, embryology, biogeography, and molecular biology.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m3",
      question: "What are homologous structures?",
      options: ["Structures with similar origin but different functions", "Structures with different origins but similar functions", "Identical structures in all species", "Structures that serve no purpose"],
      correct: "Structures with similar origin but different functions",
      explanation: "Homologous structures are anatomical features that share a common evolutionary origin but may have different functions in different species.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m4",
      question: "What is speciation?",
      options: ["Formation of new species", "Death of species", "Migration of species", "Hybridization of species"],
      correct: "Formation of new species",
      explanation: "Speciation is the evolutionary process by which populations evolve to become distinct species, usually through reproductive isolation.",
      difficulty: "Medium"
    },
    {
      id: "bio12_evol_m5",
      question: "What is the founder effect?",
      options: ["Genetic drift in small founding populations", "Natural selection in new environments", "Mutation in isolated populations", "Gene flow between populations"],
      correct: "Genetic drift in small founding populations",
      explanation: "The founder effect occurs when a small group establishes a new population, leading to reduced genetic diversity and potential genetic drift.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "bio12_evol_h1",
      question: "What is the Hardy-Weinberg principle?",
      options: ["Describes allele frequencies in non-evolving populations", "Explains natural selection", "Describes mutation rates", "Explains speciation"],
      correct: "Describes allele frequencies in non-evolving populations",
      explanation: "The Hardy-Weinberg principle describes the genetic equilibrium in populations where allele frequencies remain constant in the absence of evolutionary forces.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h2",
      question: "What is convergent evolution?",
      options: ["Independent evolution of similar traits", "Evolution of species from common ancestor", "Reverse evolution", "Rapid evolutionary change"],
      correct: "Independent evolution of similar traits",
      explanation: "Convergent evolution occurs when unrelated species independently develop similar characteristics due to similar environmental pressures.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h3",
      question: "What is coevolution?",
      options: ["Reciprocal evolutionary changes between interacting species", "Evolution of multiple traits simultaneously", "Evolution in the same direction", "Evolution at the same rate"],
      correct: "Reciprocal evolutionary changes between interacting species",
      explanation: "Coevolution occurs when two or more species influence each other's evolutionary development through close ecological interactions.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h4",
      question: "What is punctuated equilibrium?",
      options: ["Rapid evolutionary change followed by stability", "Gradual continuous change", "Extinction events", "Genetic bottlenecks"],
      correct: "Rapid evolutionary change followed by stability",
      explanation: "Punctuated equilibrium suggests that evolution occurs in rapid bursts of change followed by long periods of stability, rather than gradual continuous change.",
      difficulty: "Hard"
    },
    {
      id: "bio12_evol_h5",
      question: "What role does sexual selection play in evolution?",
      options: ["Drives evolution of traits that increase mating success", "Only affects reproductive organs", "Has no evolutionary impact", "Only occurs in mammals"],
      correct: "Drives evolution of traits that increase mating success",
      explanation: "Sexual selection drives the evolution of traits that increase an individual's chances of mating and reproductive success, even if they don't improve survival.",
      difficulty: "Hard"
    }
  ],

  "Unit 5: Human Body System": [
    // Easy Questions
    {
      id: "bio12_human_e1",
      question: "What is the main function of the circulatory system?",
      options: ["Transport blood throughout the body", "Digest food", "Filter air", "Produce hormones"],
      correct: "Transport blood throughout the body",
      explanation: "The circulatory system's primary function is to transport blood, nutrients, oxygen, and waste products throughout the body.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e2",
      question: "What organ pumps blood in the human body?",
      options: ["Heart", "Liver", "Kidney", "Lung"],
      correct: "Heart",
      explanation: "The heart is a muscular organ that pumps blood through blood vessels to circulate nutrients and oxygen throughout the body.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e3",
      question: "What is the main function of the respiratory system?",
      options: ["Exchange oxygen and carbon dioxide", "Digest nutrients", "Filter blood", "Produce energy"],
      correct: "Exchange oxygen and carbon dioxide",
      explanation: "The respiratory system's main function is to facilitate gas exchange, bringing oxygen into the body and removing carbon dioxide.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e4",
      question: "Which organ filters waste from the blood?",
      options: ["Kidney", "Heart", "Lung", "Stomach"],
      correct: "Kidney",
      explanation: "The kidneys filter waste products and excess water from the blood to produce urine, maintaining the body's chemical balance.",
      difficulty: "Easy"
    },
    {
      id: "bio12_human_e5",
      question: "What is the basic unit of the nervous system?",
      options: ["Neuron", "Muscle cell", "Blood cell", "Bone cell"],
      correct: "Neuron",
      explanation: "Neurons are the basic functional units of the nervous system, specialized for transmitting electrical and chemical signals.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "bio12_human_m1",
      question: "What are the four chambers of the human heart?",
      options: ["Two atria and two ventricles", "Four ventricles", "Four atria", "Two hearts with two chambers each"],
      correct: "Two atria and two ventricles",
      explanation: "The human heart has four chambers: the right and left atria (upper chambers) and the right and left ventricles (lower chambers).",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m2",
      question: "What is the role of hemoglobin in blood?",
      options: ["Carry oxygen", "Fight infections", "Clot blood", "Carry nutrients"],
      correct: "Carry oxygen",
      explanation: "Hemoglobin is a protein in red blood cells that binds to oxygen in the lungs and transports it to tissues throughout the body.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m3",
      question: "What is the function of alveoli in the lungs?",
      options: ["Gas exchange between air and blood", "Warm incoming air", "Filter particles", "Produce mucus"],
      correct: "Gas exchange between air and blood",
      explanation: "Alveoli are tiny air sacs in the lungs where gas exchange occurs, allowing oxygen to enter the blood and carbon dioxide to be removed.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m4",
      question: "What is homeostasis?",
      options: ["Maintaining stable internal conditions", "Growth and development", "Reproduction", "Digestion of food"],
      correct: "Maintaining stable internal conditions",
      explanation: "Homeostasis is the process by which the body maintains stable internal conditions such as temperature, pH, and blood sugar levels.",
      difficulty: "Medium"
    },
    {
      id: "bio12_human_m5",
      question: "What is the role of insulin in the body?",
      options: ["Regulate blood sugar levels", "Digest proteins", "Fight infections", "Transport oxygen"],
      correct: "Regulate blood sugar levels",
      explanation: "Insulin is a hormone produced by the pancreas that regulates blood glucose levels by facilitating glucose uptake by cells.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "bio12_human_h1",
      question: "What is the difference between the sympathetic and parasympathetic nervous systems?",
      options: ["Sympathetic prepares for action, parasympathetic promotes rest", "Both have the same function", "Sympathetic controls digestion, parasympathetic controls movement", "They work in different organs"],
      correct: "Sympathetic prepares for action, parasympathetic promotes rest",
      explanation: "The sympathetic nervous system prepares the body for 'fight or flight' responses, while the parasympathetic system promotes 'rest and digest' activities.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h2",
      question: "What is the nephron and its function?",
      options: ["Functional unit of kidney that filters blood", "Blood vessel in the heart", "Air sac in lungs", "Nerve cell in brain"],
      correct: "Functional unit of kidney that filters blood",
      explanation: "The nephron is the basic functional unit of the kidney, consisting of a glomerulus and tubules that filter blood and produce urine.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h3",
      question: "How does the immune system distinguish between self and non-self?",
      options: ["Through MHC molecules and antigen recognition", "By cell size", "By location in body", "By cellular activity"],
      correct: "Through MHC molecules and antigen recognition",
      explanation: "The immune system uses Major Histocompatibility Complex (MHC) molecules and antigen recognition to distinguish between the body's own cells and foreign substances.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h4",
      question: "What is the role of the hypothalamus in hormone regulation?",
      options: ["Links nervous and endocrine systems", "Produces digestive enzymes", "Filters blood", "Stores nutrients"],
      correct: "Links nervous and endocrine systems",
      explanation: "The hypothalamus serves as a crucial link between the nervous and endocrine systems, controlling hormone release from the pituitary gland.",
      difficulty: "Hard"
    },
    {
      id: "bio12_human_h5",
      question: "What is autoimmunity?",
      options: ["Immune system attacks body's own cells", "Enhanced immune response", "Complete lack of immunity", "Immunity to all diseases"],
      correct: "Immune system attacks body's own cells",
      explanation: "Autoimmunity occurs when the immune system mistakenly attacks and destroys the body's own healthy cells and tissues.",
      difficulty: "Hard"
    }
  ],

  "Unit 6: Climate Change": [
    // Easy Questions
    {
      id: "bio12_climate_e1",
      question: "What is climate change?",
      options: ["Long-term changes in global weather patterns", "Daily weather variations", "Seasonal changes", "Ocean currents"],
      correct: "Long-term changes in global weather patterns",
      explanation: "Climate change refers to long-term shifts in global or regional climate patterns, primarily attributed to increased levels of greenhouse gases.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e2",
      question: "What is the main cause of current climate change?",
      options: ["Human activities releasing greenhouse gases", "Natural solar variations", "Volcanic eruptions", "Ocean temperature changes"],
      correct: "Human activities releasing greenhouse gases",
      explanation: "The current climate change is primarily caused by human activities, especially the burning of fossil fuels, which releases greenhouse gases into the atmosphere.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e3",
      question: "Which gas is the most significant greenhouse gas?",
      options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      correct: "Carbon dioxide",
      explanation: "Carbon dioxide (CO₂) is the most significant greenhouse gas contributing to climate change, primarily from burning fossil fuels.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e4",
      question: "What is the greenhouse effect?",
      options: ["Trapping of heat in Earth's atmosphere", "Growing plants in greenhouses", "Effect of green plants on climate", "Cooling of the atmosphere"],
      correct: "Trapping of heat in Earth's atmosphere",
      explanation: "The greenhouse effect is the process by which certain gases in the atmosphere trap heat from the sun, warming the Earth's surface.",
      difficulty: "Easy"
    },
    {
      id: "bio12_climate_e5",
      question: "What happens to coral reefs due to ocean warming?",
      options: ["Coral bleaching", "Faster coral growth", "Increased biodiversity", "Better coral health"],
      correct: "Coral bleaching",
      explanation: "Ocean warming causes coral bleaching, where corals expel symbiotic algae and turn white, often leading to coral death.",
      difficulty: "Easy"
    },
    // Medium Questions
    {
      id: "bio12_climate_m1",
      question: "How does deforestation contribute to climate change?",
      options: ["Reduces CO₂ absorption and releases stored carbon", "Increases rainfall", "Cools the atmosphere", "Improves air quality"],
      correct: "Reduces CO₂ absorption and releases stored carbon",
      explanation: "Deforestation contributes to climate change by removing trees that absorb CO₂ and releasing the carbon stored in trees and soil.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m2",
      question: "What is ocean acidification?",
      options: ["Decrease in ocean pH due to CO₂ absorption", "Increase in ocean temperature", "Pollution by acid rain", "Changes in ocean currents"],
      correct: "Decrease in ocean pH due to CO₂ absorption",
      explanation: "Ocean acidification occurs when the ocean absorbs excess CO₂ from the atmosphere, forming carbonic acid and lowering ocean pH.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m3",
      question: "How does climate change affect species migration?",
      options: ["Forces species to move to suitable habitats", "Stops all migration", "Makes migration unnecessary", "Only affects marine species"],
      correct: "Forces species to move to suitable habitats",
      explanation: "Climate change alters habitats, forcing many species to migrate to areas with suitable temperature, precipitation, and food sources.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m4",
      question: "What is a carbon footprint?",
      options: ["Total greenhouse gases produced by human activities", "Footprint left by carbon-based life", "Size of carbon molecules", "Amount of carbon in soil"],
      correct: "Total greenhouse gases produced by human activities",
      explanation: "A carbon footprint measures the total amount of greenhouse gases produced directly and indirectly by human activities, expressed as CO₂ equivalent.",
      difficulty: "Medium"
    },
    {
      id: "bio12_climate_m5",
      question: "How do melting ice caps affect global sea levels?",
      options: ["Cause sea levels to rise", "Cause sea levels to fall", "Have no effect on sea levels", "Only affect local water levels"],
      correct: "Cause sea levels to rise",
      explanation: "Melting ice caps and glaciers add water to the oceans, causing global sea levels to rise and threatening coastal communities.",
      difficulty: "Medium"
    },
    // Hard Questions
    {
      id: "bio12_climate_h1",
      question: "What are climate feedback loops?",
      options: ["Processes that amplify or reduce climate change effects", "Weather prediction models", "Ocean current patterns", "Seasonal climate variations"],
      correct: "Processes that amplify or reduce climate change effects",
      explanation: "Climate feedback loops are processes where climate change triggers changes that either amplify (positive feedback) or reduce (negative feedback) the original change.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h2",
      question: "What is the albedo effect in climate change?",
      options: ["Reflection of solar radiation by Earth's surfaces", "Absorption of heat by greenhouse gases", "Emission of infrared radiation", "Formation of cloud cover"],
      correct: "Reflection of solar radiation by Earth's surfaces",
      explanation: "The albedo effect refers to how much solar radiation is reflected by Earth's surfaces; ice reflects more heat than dark surfaces, affecting global temperature.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h3",
      question: "How does climate change affect the water cycle?",
      options: ["Alters precipitation patterns and evaporation rates", "Stops the water cycle completely", "Only affects ocean water", "Makes all areas wetter"],
      correct: "Alters precipitation patterns and evaporation rates",
      explanation: "Climate change intensifies the water cycle, leading to more extreme precipitation events, droughts in some areas, and floods in others.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h4",
      question: "What is the concept of climate tipping points?",
      options: ["Thresholds beyond which climate changes become irreversible", "Daily temperature variations", "Seasonal climate changes", "Weather prediction accuracy"],
      correct: "Thresholds beyond which climate changes become irreversible",
      explanation: "Climate tipping points are critical thresholds beyond which climate systems undergo rapid, potentially irreversible changes.",
      difficulty: "Hard"
    },
    {
      id: "bio12_climate_h5",
      question: "How do urban heat islands contribute to local climate change?",
      options: ["Cities become warmer than surrounding areas", "Cities become cooler than rural areas", "Cities have no temperature difference", "Only affects building temperatures"],
      correct: "Cities become warmer than surrounding areas",
      explanation: "Urban heat islands occur when cities experience higher temperatures than surrounding rural areas due to concrete, asphalt, and reduced vegetation.",
      difficulty: "Hard"
    }
  ]
};

export const getGrade12BiologyQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 15): BiologyQuestion[] => {
  console.log('Getting Grade 12 Biology questions for:', { chapter, difficulty, count });
  
  const chapterQuestions = grade12BiologyQuestions[chapter];
  if (!chapterQuestions) {
    console.log('Chapter not found:', chapter);
    console.log('Available chapters:', Object.keys(grade12BiologyQuestions));
    return [];
  }

  // Filter questions by difficulty
  const difficultyLevel = difficulty.charAt(0).toUpperCase() + difficulty.slice(1) as 'Easy' | 'Medium' | 'Hard';
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === difficultyLevel);
  
  console.log(`Found ${filteredQuestions.length} ${difficultyLevel} questions for ${chapter}`);
  
  // Shuffle and return requested count
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
