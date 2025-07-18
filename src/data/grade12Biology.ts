
import { Question } from './naturalScienceQuizzes';

export const grade12BiologyQuestions: { [unit: string]: { [difficulty: string]: Question[] } } = {
  'Unit 1: Application of Biology': {
    easy: [
      {
        id: 'g12bio_u1_e1',
        question: 'What is biotechnology?',
        options: ['Study of rocks', 'Use of living organisms for technology', 'Study of weather', 'Computer science'],
        correct: 'Use of living organisms for technology',
        explanation: 'Biotechnology is the use of living organisms or their products to develop or make products for specific use.'
      },
      {
        id: 'g12bio_u1_e2',
        question: 'What is genetic engineering?',
        options: ['Building machines', 'Modifying genes', 'Studying rocks', 'Weather prediction'],
        correct: 'Modifying genes',
        explanation: 'Genetic engineering is the direct manipulation of genes using biotechnology.'
      },
      {
        id: 'g12bio_u1_e3',
        question: 'What does PCR stand for?',
        options: ['Polymerase Chain Reaction', 'Protein Cell Research', 'Plant Cell Replication', 'Public Cell Registry'],
        correct: 'Polymerase Chain Reaction',
        explanation: 'PCR (Polymerase Chain Reaction) is a technique used to amplify DNA sequences.'
      },
      {
        id: 'g12bio_u1_e4',
        question: 'What is a GMO?',
        options: ['Great Medical Operation', 'Genetically Modified Organism', 'Global Molecular Organization', 'General Medical Office'],
        correct: 'Genetically Modified Organism',
        explanation: 'A GMO is an organism whose genetic material has been artificially manipulated in a laboratory.'
      },
      {
        id: 'g12bio_u1_e5',
        question: 'What is tissue culture?',
        options: ['Growing cells in laboratory', 'Studying animal behavior', 'Weather monitoring', 'Rock formation'],
        correct: 'Growing cells in laboratory',
        explanation: 'Tissue culture is the growth of tissues or cells in an artificial medium separate from the parent organism.'
      },
      {
        id: 'g12bio_u1_e6',
        question: 'What is bioremediation?',
        options: ['Using organisms to clean pollution', 'Making medicine', 'Growing crops', 'Weather control'],
        correct: 'Using organisms to clean pollution',
        explanation: 'Bioremediation uses living organisms to remove or neutralize contaminants from polluted areas.'
      },
      {
        id: 'g12bio_u1_e7',
        question: 'What is fermentation?',
        options: ['Rock weathering', 'Metabolic process without oxygen', 'Weather pattern', 'Cell division'],
        correct: 'Metabolic process without oxygen',
        explanation: 'Fermentation is a metabolic process that converts sugar to acids, gases, or alcohol without oxygen.'
      },
      {
        id: 'g12bio_u1_e8',
        question: 'What is cloning?',
        options: ['Creating identical copies', 'Cell division', 'Weather prediction', 'Rock formation'],
        correct: 'Creating identical copies',
        explanation: 'Cloning is the process of producing genetically identical individuals or copies.'
      },
      {
        id: 'g12bio_u1_e9',
        question: 'What is gene therapy?',
        options: ['Physical exercise', 'Treating disease by modifying genes', 'Weather control', 'Rock study'],
        correct: 'Treating disease by modifying genes',
        explanation: 'Gene therapy involves introducing genetic material into a patient\'s cells to treat disease.'
      },
      {
        id: 'g12bio_u1_e10',
        question: 'What is bioinformatics?',
        options: ['Computer analysis of biological data', 'Weather forecasting', 'Rock analysis', 'Physical therapy'],
        correct: 'Computer analysis of biological data',
        explanation: 'Bioinformatics is the application of computer technology to manage and analyze biological data.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u1_m1',
        question: 'What is CRISPR technology used for?',
        options: ['Weather prediction', 'Precise gene editing', 'Rock formation', 'Cell counting'],
        correct: 'Precise gene editing',
        explanation: 'CRISPR is a revolutionary gene-editing technology that allows precise modification of DNA sequences.'
      },
      {
        id: 'g12bio_u1_m2',
        question: 'What is the role of restriction enzymes in genetic engineering?',
        options: ['Cut DNA at specific sequences', 'Join DNA fragments', 'Replicate DNA', 'Translate DNA'],
        correct: 'Cut DNA at specific sequences',
        explanation: 'Restriction enzymes cut DNA at specific recognition sequences, creating fragments for genetic manipulation.'
      },
      {
        id: 'g12bio_u1_m3',
        question: 'What is a vector in genetic engineering?',
        options: ['DNA carrier', 'Protein enzyme', 'Cell organelle', 'Amino acid'],
        correct: 'DNA carrier',
        explanation: 'A vector is a DNA molecule used to carry foreign DNA into a host cell for cloning or expression.'
      },
      {
        id: 'g12bio_u1_m4',
        question: 'What is gel electrophoresis used for?',
        options: ['Separating DNA fragments', 'Growing bacteria', 'Counting cells', 'Measuring temperature'],
        correct: 'Separating DNA fragments',
        explanation: 'Gel electrophoresis separates DNA fragments based on their size using an electric field.'
      },
      {
        id: 'g12bio_u1_m5',
        question: 'What is transformation in bacteria?',
        options: ['Shape change', 'Uptake of foreign DNA', 'Cell division', 'Protein synthesis'],
        correct: 'Uptake of foreign DNA',
        explanation: 'Transformation is the uptake of foreign DNA by bacterial cells, often used in genetic engineering.'
      },
      {
        id: 'g12bio_u1_m6',
        question: 'What is recombinant DNA?',
        options: ['Natural DNA', 'DNA from different sources joined together', 'Damaged DNA', 'Synthetic protein'],
        correct: 'DNA from different sources joined together',
        explanation: 'Recombinant DNA is formed by joining DNA from different sources using molecular cloning techniques.'
      },
      {
        id: 'g12bio_u1_m7',
        question: 'What is the purpose of a plasmid in genetic engineering?',
        options: ['Energy storage', 'Cloning vector', 'Cell membrane', 'Enzyme function'],
        correct: 'Cloning vector',
        explanation: 'Plasmids are small DNA molecules that serve as vectors for carrying foreign genes into bacterial cells.'
      },
      {
        id: 'g12bio_u1_m8',
        question: 'What is antisense therapy?',
        options: ['Using complementary RNA to block gene expression', 'Protein therapy', 'Cell therapy', 'Enzyme therapy'],
        correct: 'Using complementary RNA to block gene expression',
        explanation: 'Antisense therapy uses short DNA or RNA sequences complementary to mRNA to block gene expression.'
      },
      {
        id: 'g12bio_u1_m9',
        question: 'What is the significance of stem cells in biotechnology?',
        options: ['Can differentiate into various cell types', 'Only divide once', 'Cannot be cultured', 'Only found in plants'],
        correct: 'Can differentiate into various cell types',
        explanation: 'Stem cells have the ability to differentiate into various specialized cell types, making them valuable for regenerative medicine.'
      },
      {
        id: 'g12bio_u1_m10',
        question: 'What is pharmacogenomics?',
        options: ['Study of drug-gene interactions', 'Drug manufacturing', 'Gene therapy', 'Protein analysis'],
        correct: 'Study of drug-gene interactions',
        explanation: 'Pharmacogenomics studies how genetic variations affect individual responses to drugs.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u1_h1',
        question: 'How does CRISPR-Cas9 achieve precise gene editing?',
        options: ['Random DNA cutting', 'Guide RNA directs Cas9 to specific DNA sequence', 'Protein binding only', 'Chemical modification'],
        correct: 'Guide RNA directs Cas9 to specific DNA sequence',
        explanation: 'CRISPR-Cas9 uses guide RNA to direct the Cas9 nuclease to specific DNA sequences for precise cutting and editing.'
      },
      {
        id: 'g12bio_u1_h2',
        question: 'What are the ethical considerations in genetic engineering?',
        options: ['No concerns', 'Safety, consent, and societal impact', 'Only cost considerations', 'Technical difficulty only'],
        correct: 'Safety, consent, and societal impact',
        explanation: 'Genetic engineering raises ethical concerns about safety, informed consent, equity, and long-term societal impacts.'
      },
      {
        id: 'g12bio_u1_h3',
        question: 'How does RNA interference (RNAi) work in gene silencing?',
        options: ['Degrades specific mRNA', 'Blocks transcription', 'Prevents translation', 'All of the above'],
        correct: 'All of the above',
        explanation: 'RNAi can work through multiple mechanisms including mRNA degradation, transcriptional silencing, and translational repression.'
      },
      {
        id: 'g12bio_u1_h4',
        question: 'What is the significance of induced pluripotent stem cells (iPSCs)?',
        options: ['Cannot differentiate', 'Adult cells reprogrammed to stem cell state', 'Only found in embryos', 'Synthetic cells'],
        correct: 'Adult cells reprogrammed to stem cell state',
        explanation: 'iPSCs are adult cells that have been genetically reprogrammed to return to an embryonic stem cell-like state.'
      },
      {
        id: 'g12bio_u1_h5',
        question: 'How does gene drive technology work?',
        options: ['Random gene inheritance', 'Biases inheritance to spread genes through populations', 'Prevents gene expression', 'Blocks DNA replication'],
        correct: 'Biases inheritance to spread genes through populations',
        explanation: 'Gene drives are genetic systems that bias inheritance to increase the likelihood of a gene being passed to offspring.'
      },
      {
        id: 'g12bio_u1_h6',
        question: 'What is synthetic biology?',
        options: ['Engineering biological systems with novel functions', 'Studying natural biology', 'Growing plants', 'Animal breeding'],
        correct: 'Engineering biological systems with novel functions',
        explanation: 'Synthetic biology involves engineering biological systems and organisms to have new abilities and functions not found in nature.'
      },
      {
        id: 'g12bio_u1_h7',
        question: 'How do monoclonal antibodies work in medical applications?',
        options: ['Target specific antigens', 'Boost immune system generally', 'Kill all cells', 'Prevent cell division'],
        correct: 'Target specific antigens',
        explanation: 'Monoclonal antibodies are designed to bind to specific antigens, making them useful for targeted therapy and diagnostics.'
      },
      {
        id: 'g12bio_u1_h8',
        question: 'What is the role of bioreactors in biotechnology?',
        options: ['Controlled environment for biological processes', 'Storage containers', 'Microscopes', 'DNA sequencers'],
        correct: 'Controlled environment for biological processes',
        explanation: 'Bioreactors provide controlled environmental conditions for optimizing biological processes like fermentation and cell culture.'
      },
      {
        id: 'g12bio_u1_h9',
        question: 'How does personalized medicine utilize genetic information?',
        options: ['Ignores genetic differences', 'Tailors treatment based on individual genetic profile', 'Uses same treatment for everyone', 'Focuses only on symptoms'],
        correct: 'Tailors treatment based on individual genetic profile',
        explanation: 'Personalized medicine uses an individual\'s genetic information to customize medical treatment and prevention strategies.'
      },
      {
        id: 'g12bio_u1_h10',
        question: 'What are the challenges in gene therapy delivery?',
        options: ['No challenges exist', 'Targeting specific cells, avoiding immune response, ensuring expression', 'Only cost issues', 'Technical simplicity'],
        correct: 'Targeting specific cells, avoiding immune response, ensuring expression',
        explanation: 'Gene therapy faces challenges including precise delivery to target cells, avoiding immune reactions, and ensuring proper gene expression.'
      }
    ]
  },
  'Unit 2: Microorganisms': {
    easy: [
      {
        id: 'g12bio_u2_e1',
        question: 'What are microorganisms?',
        options: ['Large animals', 'Microscopic living organisms', 'Non-living particles', 'Plants only'],
        correct: 'Microscopic living organisms',
        explanation: 'Microorganisms are living organisms that are too small to be seen with the naked eye.'
      },
      {
        id: 'g12bio_u2_e2',
        question: 'Which of the following is a prokaryote?',
        options: ['Bacteria', 'Plants', 'Animals', 'Fungi'],
        correct: 'Bacteria',
        explanation: 'Bacteria are prokaryotes, meaning they lack a membrane-bound nucleus.'
      },
      {
        id: 'g12bio_u2_e3',
        question: 'What is the main difference between prokaryotes and eukaryotes?',
        options: ['Size only', 'Presence of nucleus', 'Color', 'Shape'],
        correct: 'Presence of nucleus',
        explanation: 'Eukaryotes have a membrane-bound nucleus, while prokaryotes do not.'
      },
      {
        id: 'g12bio_u2_e4',
        question: 'What is a virus?',
        options: ['Living organism', 'Non-living infectious agent', 'Type of bacteria', 'Plant disease'],
        correct: 'Non-living infectious agent',
        explanation: 'Viruses are non-living infectious agents that require a host cell to reproduce.'
      },
      {
        id: 'g12bio_u2_e5',
        question: 'What is fermentation?',
        options: ['Aerobic respiration', 'Anaerobic respiration without oxygen', 'Photosynthesis', 'Cell division'],
        correct: 'Anaerobic respiration without oxygen',
        explanation: 'Fermentation is a metabolic process that occurs without oxygen, often producing alcohol or acid.'
      },
      {
        id: 'g12bio_u2_e6',
        question: 'What are antibiotics?',
        options: ['Vitamins', 'Substances that kill or inhibit bacteria', 'Types of viruses', 'Plant nutrients'],
        correct: 'Substances that kill or inhibit bacteria',
        explanation: 'Antibiotics are medicines that fight bacterial infections by killing bacteria or stopping their growth.'
      },
      {
        id: 'g12bio_u2_e7',
        question: 'What is pasteurization?',
        options: ['Freezing food', 'Heating to kill harmful microorganisms', 'Adding salt', 'Drying food'],
        correct: 'Heating to kill harmful microorganisms',
        explanation: 'Pasteurization is a heat treatment process that kills harmful microorganisms in food and beverages.'
      },
      {
        id: 'g12bio_u2_e8',
        question: 'What are probiotics?',
        options: ['Harmful bacteria', 'Beneficial bacteria', 'Viruses', 'Antibiotics'],
        correct: 'Beneficial bacteria',
        explanation: 'Probiotics are live beneficial bacteria that provide health benefits when consumed.'
      },
      {
        id: 'g12bio_u2_e9',
        question: 'What is a pathogen?',
        options: ['Beneficial organism', 'Disease-causing organism', 'Food source', 'Oxygen producer'],
        correct: 'Disease-causing organism',
        explanation: 'A pathogen is any organism that can cause disease in its host.'
      },
      {
        id: 'g12bio_u2_e10',
        question: 'What is binary fission?',
        options: ['Sexual reproduction', 'Asexual reproduction in bacteria', 'Cell death', 'Energy production'],
        correct: 'Asexual reproduction in bacteria',
        explanation: 'Binary fission is the asexual reproduction process by which bacteria divide into two identical cells.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u2_m1',
        question: 'What is the role of microorganisms in the nitrogen cycle?',
        options: ['No role', 'Convert nitrogen to usable forms', 'Only consume nitrogen', 'Destroy nitrogen'],
        correct: 'Convert nitrogen to usable forms',
        explanation: 'Microorganisms play crucial roles in nitrogen fixation, nitrification, and denitrification in the nitrogen cycle.'
      },
      {
        id: 'g12bio_u2_m2',
        question: 'What is quorum sensing in bacteria?',
        options: ['Cell counting', 'Communication based on population density', 'Energy sensing', 'Nutrient detection'],
        correct: 'Communication based on population density',
        explanation: 'Quorum sensing allows bacteria to detect and respond to cell population density through chemical signaling.'
      },
      {
        id: 'g12bio_u2_m3',
        question: 'What is antibiotic resistance?',
        options: ['Immunity to all diseases', 'Ability of bacteria to survive antibiotic treatment', 'Vitamin deficiency', 'Allergic reaction'],
        correct: 'Ability of bacteria to survive antibiotic treatment',
        explanation: 'Antibiotic resistance occurs when bacteria evolve mechanisms to survive exposure to antibiotics.'
      },
      {
        id: 'g12bio_u2_m4',
        question: 'What is a biofilm?',
        options: ['Single bacteria', 'Community of microorganisms in protective matrix', 'Virus particle', 'Dead tissue'],
        correct: 'Community of microorganisms in protective matrix',
        explanation: 'A biofilm is a structured community of microorganisms embedded in a protective matrix they produce.'
      },
      {
        id: 'g12bio_u2_m5',
        question: 'How do viruses reproduce?',
        options: ['Binary fission', 'Sexual reproduction', 'Hijacking host cell machinery', 'Budding'],
        correct: 'Hijacking host cell machinery',
        explanation: 'Viruses reproduce by infecting host cells and using the host\'s cellular machinery to make copies of themselves.'
      },
      {
        id: 'g12bio_u2_m6',
        question: 'What is horizontal gene transfer?',
        options: ['Vertical inheritance', 'Transfer of genes between organisms', 'Mutation only', 'Cell division'],
        correct: 'Transfer of genes between organisms',
        explanation: 'Horizontal gene transfer is the movement of genetic material between organisms, common in bacteria.'
      },
      {
        id: 'g12bio_u2_m7',
        question: 'What is the difference between gram-positive and gram-negative bacteria?',
        options: ['Size difference', 'Cell wall structure difference', 'DNA content', 'Reproduction method'],
        correct: 'Cell wall structure difference',
        explanation: 'Gram-positive bacteria have thick peptidoglycan cell walls, while gram-negative bacteria have thinner walls with an outer membrane.'
      },
      {
        id: 'g12bio_u2_m8',
        question: 'What is lysogeny in viral life cycles?',
        options: ['Immediate cell death', 'Viral DNA integrates into host genome', 'Virus leaves immediately', 'Host becomes immune'],
        correct: 'Viral DNA integrates into host genome',
        explanation: 'Lysogeny is when viral DNA integrates into the host genome and remains dormant until activated.'
      },
      {
        id: 'g12bio_u2_m9',
        question: 'What is the role of microorganisms in food production?',
        options: ['Only cause spoilage', 'Fermentation and preservation', 'No beneficial role', 'Only contamination'],
        correct: 'Fermentation and preservation',
        explanation: 'Microorganisms are essential in food production through fermentation processes and can help preserve food.'
      },
      {
        id: 'g12bio_u2_m10',
        question: 'What is microbial ecology?',
        options: ['Study of large organisms', 'Study of microorganisms in their environment', 'Weather patterns', 'Rock formation'],
        correct: 'Study of microorganisms in their environment',
        explanation: 'Microbial ecology studies the relationships between microorganisms and their environment.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u2_h1',
        question: 'How do bacteria develop antibiotic resistance mechanisms?',
        options: ['Only through mutation', 'Mutation, gene transfer, and enzyme production', 'Cannot develop resistance', 'Only environmental factors'],
        correct: 'Mutation, gene transfer, and enzyme production',
        explanation: 'Bacteria develop antibiotic resistance through various mechanisms including mutations, horizontal gene transfer, and enzyme production.'
      },
      {
        id: 'g12bio_u2_h2',
        question: 'What is the significance of the microbiome in human health?',
        options: ['No significance', 'Affects immunity, digestion, and disease', 'Only causes disease', 'Only in digestive system'],
        correct: 'Affects immunity, digestion, and disease',
        explanation: 'The human microbiome plays crucial roles in immune function, digestion, metabolism, and protection against disease.'
      },
      {
        id: 'g12bio_u2_h3',
        question: 'How do extremophiles survive in harsh environments?',
        options: ['Cannot survive', 'Special adaptations like heat-stable proteins', 'Only temporary survival', 'Avoid harsh conditions'],
        correct: 'Special adaptations like heat-stable proteins',
        explanation: 'Extremophiles have specialized adaptations such as heat-stable proteins, unique membrane compositions, and specialized metabolisms.'
      },
      {
        id: 'g12bio_u2_h4',
        question: 'What is the role of bacteriophages in bacterial population control?',
        options: ['No effect', 'Kill bacteria and maintain ecological balance', 'Only help bacteria', 'Cause disease in humans'],
        correct: 'Kill bacteria and maintain ecological balance',
        explanation: 'Bacteriophages (viruses that infect bacteria) help control bacterial populations and maintain ecological balance.'
      },
      {
        id: 'g12bio_u2_h5',
        question: 'How do microorganisms contribute to biogeochemical cycles?',
        options: ['No contribution', 'Drive nutrient cycling and energy flow', 'Only consume nutrients', 'Disrupt cycles'],
        correct: 'Drive nutrient cycling and energy flow',
        explanation: 'Microorganisms are essential drivers of biogeochemical cycles, facilitating the recycling of carbon, nitrogen, sulfur, and other elements.'
      },
      {
        id: 'g12bio_u2_h6',
        question: 'What is the mechanism of viral latency?',
        options: ['Virus dies', 'Virus remains dormant in host cells', 'Virus leaves host', 'Virus mutates rapidly'],
        correct: 'Virus remains dormant in host cells',
        explanation: 'Viral latency involves the virus remaining dormant within host cells, with the potential to reactivate later.'
      },
      {
        id: 'g12bio_u2_h7',
        question: 'How do microorganisms adapt to antibiotic pressure?',
        options: ['Cannot adapt', 'Rapid evolution and genetic exchange', 'Only die', 'Become immune permanently'],
        correct: 'Rapid evolution and genetic exchange',
        explanation: 'Microorganisms adapt to antibiotic pressure through rapid evolution, genetic exchange, and selection of resistant variants.'
      },
      {
        id: 'g12bio_u2_h8',
        question: 'What is the significance of microbial symbiosis?',
        options: ['Always harmful', 'Can be mutualistic, commensalistic, or parasitic', 'Only occurs in plants', 'Temporary only'],
        correct: 'Can be mutualistic, commensalistic, or parasitic',
        explanation: 'Microbial symbiosis encompasses various relationships including mutualistic (beneficial), commensalistic (neutral), and parasitic (harmful) interactions.'
      },
      {
        id: 'g12bio_u2_h9',
        question: 'How do viruses contribute to horizontal gene transfer?',
        options: ['They do not', 'Act as vectors carrying genes between hosts', 'Only vertical transfer', 'Prevent gene transfer'],
        correct: 'Act as vectors carrying genes between hosts',
        explanation: 'Viruses can act as vectors for horizontal gene transfer by carrying genetic material from one host to another.'
      },
      {
        id: 'g12bio_u2_h10',
        question: 'What is the role of microorganisms in bioremediation?',
        options: ['Cannot clean pollution', 'Break down pollutants and restore environments', 'Only cause more pollution', 'Temporarily hide pollution'],
        correct: 'Break down pollutants and restore environments',
        explanation: 'Microorganisms can break down various pollutants and contaminants, making them valuable tools for environmental cleanup and restoration.'
      }
    ]
  },
  'Unit 3: Energy Transformation': {
    easy: [
      {
        id: 'g12bio_u3_e1',
        question: 'What is photosynthesis?',
        options: ['Breaking down food', 'Plants making food using sunlight', 'Animal respiration', 'Water cycle'],
        correct: 'Plants making food using sunlight',
        explanation: 'Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce glucose and oxygen.'
      },
      {
        id: 'g12bio_u3_e2',
        question: 'What is cellular respiration?',
        options: ['Breathing', 'Breaking down glucose for energy', 'Photosynthesis', 'Cell division'],
        correct: 'Breaking down glucose for energy',
        explanation: 'Cellular respiration is the process of breaking down glucose to release energy for cellular activities.'
      },
      {
        id: 'g12bio_u3_e3',
        question: 'What is ATP?',
        options: ['A protein', 'Energy currency of cells', 'A vitamin', 'A hormone'],
        correct: 'Energy currency of cells',
        explanation: 'ATP (Adenosine Triphosphate) is the primary energy currency used by cells for various metabolic processes.'
      },
      {
        id: 'g12bio_u3_e4',
        question: 'Where does photosynthesis occur in plant cells?',
        options: ['Nucleus', 'Chloroplasts', 'Mitochondria', 'Ribosomes'],
        correct: 'Chloroplasts',
        explanation: 'Photosynthesis occurs in chloroplasts, which contain chlorophyll and other pigments necessary for capturing light energy.'
      },
      {
        id: 'g12bio_u3_e5',
        question: 'Where does cellular respiration occur?',
        options: ['Chloroplasts', 'Mitochondria', 'Nucleus', 'Cell membrane'],
        correct: 'Mitochondria',
        explanation: 'Cellular respiration primarily occurs in mitochondria, the powerhouses of the cell.'
      },
      {
        id: 'g12bio_u3_e6',
        question: 'What is chlorophyll?',
        options: ['A protein', 'Green pigment that captures light', 'A sugar', 'An enzyme'],
        correct: 'Green pigment that captures light',
        explanation: 'Chlorophyll is the green pigment in plants that absorbs light energy for photosynthesis.'
      },
      {
        id: 'g12bio_u3_e7',
        question: 'What are the products of photosynthesis?',
        options: ['Carbon dioxide and water', 'Glucose and oxygen', 'ATP and water', 'Proteins and lipids'],
        correct: 'Glucose and oxygen',
        explanation: 'Photosynthesis produces glucose (sugar) and oxygen as its main products.'
      },
      {
        id: 'g12bio_u3_e8',
        question: 'What are the reactants needed for cellular respiration?',
        options: ['Glucose and oxygen', 'Water and carbon dioxide', 'ATP and glucose', 'Oxygen and water'],
        correct: 'Glucose and oxygen',
        explanation: 'Cellular respiration requires glucose and oxygen as reactants to produce energy.'
      },
      {
        id: 'g12bio_u3_e9',
        question: 'What is an enzyme?',
        options: ['Energy molecule', 'Protein that speeds up reactions', 'Sugar molecule', 'Waste product'],
        correct: 'Protein that speeds up reactions',
        explanation: 'Enzymes are proteins that act as catalysts, speeding up biochemical reactions without being consumed.'
      },
      {
        id: 'g12bio_u3_e10',
        question: 'What is metabolism?',
        options: ['Cell division', 'All chemical reactions in an organism', 'Breathing', 'Growth only'],
        correct: 'All chemical reactions in an organism',
        explanation: 'Metabolism encompasses all the chemical reactions that occur within an organism to maintain life.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u3_m1',
        question: 'What are the two main stages of photosynthesis?',
        options: ['Light and dark reactions', 'Aerobic and anaerobic', 'Input and output', 'Fast and slow'],
        correct: 'Light and dark reactions',
        explanation: 'Photosynthesis consists of light-dependent reactions (photo reactions) and light-independent reactions (Calvin cycle).'
      },
      {
        id: 'g12bio_u3_m2',
        question: 'What is the Calvin cycle?',
        options: ['Light-dependent reactions', 'Light-independent reactions that fix carbon', 'Oxygen production', 'Water splitting'],
        correct: 'Light-independent reactions that fix carbon',
        explanation: 'The Calvin cycle is the light-independent phase of photosynthesis where carbon dioxide is fixed into glucose.'
      },
      {
        id: 'g12bio_u3_m3',
        question: 'What are the three stages of cellular respiration?',
        options: ['Glycolysis, Krebs cycle, electron transport', 'Photosynthesis, respiration, fermentation', 'Input, process, output', 'Fast, medium, slow'],
        correct: 'Glycolysis, Krebs cycle, electron transport',
        explanation: 'Cellular respiration consists of glycolysis, the Krebs cycle, and the electron transport chain.'
      },
      {
        id: 'g12bio_u3_m4',
        question: 'Where does glycolysis occur?',
        options: ['Mitochondria', 'Cytoplasm', 'Nucleus', 'Chloroplasts'],
        correct: 'Cytoplasm',
        explanation: 'Glycolysis occurs in the cytoplasm and breaks down glucose into pyruvate.'
      },
      {
        id: 'g12bio_u3_m5',
        question: 'What is fermentation?',
        options: ['Aerobic process', 'Anaerobic process producing alcohol or lactate', 'Photosynthesis', 'Protein synthesis'],
        correct: 'Anaerobic process producing alcohol or lactate',
        explanation: 'Fermentation is an anaerobic process that occurs when oxygen is not available, producing alcohol or lactate.'
      },
      {
        id: 'g12bio_u3_m6',
        question: 'What is the role of NADH in cellular respiration?',
        options: ['Energy storage', 'Electron carrier', 'Enzyme', 'Waste product'],
        correct: 'Electron carrier',
        explanation: 'NADH acts as an electron carrier, transporting electrons to the electron transport chain.'
      },
      {
        id: 'g12bio_u3_m7',
        question: 'What is chemiosmosis?',
        options: ['Cell movement', 'ATP production using proton gradient', 'DNA replication', 'Protein folding'],
        correct: 'ATP production using proton gradient',
        explanation: 'Chemiosmosis is the process of ATP synthesis driven by a proton gradient across a membrane.'
      },
      {
        id: 'g12bio_u3_m8',
        question: 'What is the difference between anabolic and catabolic reactions?',
        options: ['No difference', 'Anabolic builds up, catabolic breaks down', 'Both break down', 'Both build up'],
        correct: 'Anabolic builds up, catabolic breaks down',
        explanation: 'Anabolic reactions build complex molecules from simpler ones, while catabolic reactions break down complex molecules.'
      },
      {
        id: 'g12bio_u3_m9',
        question: 'What is the role of coenzymes in metabolism?',
        options: ['Main enzymes', 'Helper molecules for enzymes', 'Energy sources', 'Waste products'],
        correct: 'Helper molecules for enzymes',
        explanation: 'Coenzymes are helper molecules that assist enzymes in catalyzing biochemical reactions.'
      },
      {
        id: 'g12bio_u3_m10',
        question: 'What factors affect enzyme activity?',
        options: ['Only temperature', 'Temperature, pH, and substrate concentration', 'Only pH', 'Only time'],
        correct: 'Temperature, pH, and substrate concentration',
        explanation: 'Enzyme activity is affected by temperature, pH, substrate concentration, and other environmental factors.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u3_h1',
        question: 'How is the proton gradient established in chloroplasts?',
        options: ['Random movement', 'Light energy drives proton pumping', 'Passive diffusion only', 'Chemical reactions only'],
        correct: 'Light energy drives proton pumping',
        explanation: 'Light energy captured by photosystems drives the pumping of protons across the thylakoid membrane, establishing a gradient.'
      },
      {
        id: 'g12bio_u3_h2',
        question: 'What is the significance of the electron transport chain?',
        options: ['No significance', 'Generates ATP through oxidative phosphorylation', 'Only transports electrons', 'Waste disposal'],
        correct: 'Generates ATP through oxidative phosphorylation',
        explanation: 'The electron transport chain generates ATP through oxidative phosphorylation by creating a proton gradient.'
      },
      {
        id: 'g12bio_u3_h3',
        question: 'How does metabolic regulation maintain homeostasis?',
        options: ['No regulation needed', 'Feedback mechanisms control enzyme activity', 'Random processes', 'External control only'],
        correct: 'Feedback mechanisms control enzyme activity',
        explanation: 'Metabolic regulation uses feedback mechanisms to control enzyme activity and maintain cellular homeostasis.'
      },
      {
        id: 'g12bio_u3_h4',
        question: 'What is the role of allosteric regulation in enzymes?',
        options: ['No role', 'Binding to sites other than active site affects activity', 'Only competitive inhibition', 'Enzyme destruction'],
        correct: 'Binding to sites other than active site affects activity',
        explanation: 'Allosteric regulation involves molecules binding to sites other than the active site, affecting enzyme activity and shape.'
      },
      {
        id: 'g12bio_u3_h5',
        question: 'How do different metabolic pathways interconnect?',
        options: ['They do not connect', 'Share intermediates and regulation mechanisms', 'Only through DNA', 'Randomly'],
        correct: 'Share intermediates and regulation mechanisms',
        explanation: 'Metabolic pathways interconnect by sharing intermediates, cofactors, and regulatory mechanisms to coordinate cellular metabolism.'
      },
      {
        id: 'g12bio_u3_h6',
        question: 'What is the significance of metabolic flexibility?',
        options: ['No significance', 'Allows adaptation to different conditions', 'Causes confusion', 'Wastes energy'],
        correct: 'Allows adaptation to different conditions',
        explanation: 'Metabolic flexibility allows organisms to adapt their metabolism to different environmental conditions and energy availability.'
      },
      {
        id: 'g12bio_u3_h7',
        question: 'How do uncoupling proteins affect cellular respiration?',
        options: ['No effect', 'Separate electron transport from ATP synthesis', 'Increase ATP production', 'Stop respiration'],
        correct: 'Separate electron transport from ATP synthesis',
        explanation: 'Uncoupling proteins allow protons to bypass ATP synthase, generating heat instead of ATP.'
      },
      {
        id: 'g12bio_u3_h8',
        question: 'What is the role of compartmentalization in metabolism?',
        options: ['No role', 'Separates and coordinates metabolic processes', 'Prevents metabolism', 'Only storage'],
        correct: 'Separates and coordinates metabolic processes',
        explanation: 'Compartmentalization separates different metabolic processes in organelles, allowing for specialized conditions and regulation.'
      },
      {
        id: 'g12bio_u3_h9',
        question: 'How does energy coupling work in cellular processes?',
        options: ['No coupling occurs', 'Links energy-releasing and energy-requiring reactions', 'Only stores energy', 'Wastes energy'],
        correct: 'Links energy-releasing and energy-requiring reactions',
        explanation: 'Energy coupling links exergonic (energy-releasing) reactions with endergonic (energy-requiring) reactions through ATP.'
      },
      {
        id: 'g12bio_u3_h10',
        question: 'What is the significance of metabolic networks?',
        options: ['No significance', 'Provide robustness and flexibility to cellular metabolism', 'Cause problems', 'Only waste products'],
        correct: 'Provide robustness and flexibility to cellular metabolism',
        explanation: 'Metabolic networks provide robustness, redundancy, and flexibility, allowing cells to adapt to changing conditions.'
      }
    ]
  },
  'Unit 4: Evolution': {
    easy: [
      {
        id: 'g12bio_u4_e1',
        question: 'What is evolution?',
        options: ['Change in a species over time', 'Development of an individual', 'Change in weather patterns', 'Formation of mountains'],
        correct: 'Change in a species over time',
        explanation: 'Evolution is the change in the heritable characteristics of biological populations over successive generations.'
      },
      {
        id: 'g12bio_u4_e2',
        question: 'Who proposed the theory of natural selection?',
        options: ['Gregor Mendel', 'Charles Darwin', 'James Watson', 'Francis Crick'],
        correct: 'Charles Darwin',
        explanation: 'Charles Darwin is credited with proposing the theory of natural selection.'
      },
      {
        id: 'g12bio_u4_e3',
        question: 'What is natural selection?',
        options: ['Random survival', 'Survival of organisms best adapted to environment', 'Artificial breeding', 'Genetic engineering'],
        correct: 'Survival of organisms best adapted to environment',
        explanation: 'Natural selection is the process where organisms with favorable traits are more likely to survive and reproduce.'
      },
      {
        id: 'g12bio_u4_e4',
        question: 'What is a mutation?',
        options: ['A change in DNA sequence', 'A new species', 'A type of reproduction', 'A form of energy'],
        correct: 'A change in DNA sequence',
        explanation: 'A mutation is a change in the DNA sequence that can lead to variation in traits.'
      },
      {
        id: 'g12bio_u4_e5',
        question: 'What is adaptation?',
        options: ['A trait that helps survival', 'A type of reproduction', 'A disease', 'A form of energy'],
        correct: 'A trait that helps survival',
        explanation: 'An adaptation is a trait that enhances an organism\'s ability to survive and reproduce in its environment.'
      },
      {
        id: 'g12bio_u4_e6',
        question: 'What is a fossil?',
        options: ['The remains of a dead organism', 'A preserved ancient organism', 'A type of rock', 'A modern organism'],
        correct: 'A preserved ancient organism',
        explanation: 'A fossil is the preserved remains or traces of ancient organisms.'
      },
      {
        id: 'g12bio_u4_e7',
        question: 'What is extinction?',
        options: ['Formation of new species', 'Death of all members of a species', 'Migration of species', 'Hibernation'],
        correct: 'Death of all members of a species',
        explanation: 'Extinction occurs when all members of a species die out permanently.'
      },
      {
        id: 'g12bio_u4_e8',
        question: 'What is heredity?',
        options: ['Passing traits from parents to offspring', 'Learning new behaviors', 'Adapting to environment', 'Forming groups'],
        correct: 'Passing traits from parents to offspring',
        explanation: 'Heredity is the passing of traits from parents to their offspring through genetic material.'
      },
      {
        id: 'g12bio_u4_e9',
        question: 'What is a species?',
        options: ['A group of similar organisms that can interbreed', 'A group of identical organisms', 'A group of organisms in the same habitat', 'A group of organisms with the same diet'],
        correct: 'A group of similar organisms that can interbreed',
        explanation: 'A species is often defined as a group of organisms that can interbreed and produce fertile offspring.'
      },
      {
        id: 'g12bio_u4_e10',
        question: 'What is variation?',
        options: ['Differences among individuals', 'Identical characteristics', 'No differences', 'Only in color'],
        correct: 'Differences among individuals',
        explanation: 'Variation refers to the differences in traits among individuals within a population.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u4_m1',
        question: 'What is genetic drift?',
        options: ['Change in gene frequency due to chance', 'Migration of genes', 'Mutation of genes', 'Selection of genes'],
        correct: 'Change in gene frequency due to chance',
        explanation: 'Genetic drift is the change in the frequency of a gene variant (allele) in a population due to random sampling of organisms.'
      },
      {
        id: 'g12bio_u4_m2',
        question: 'What is speciation?',
        options: ['Formation of new species', 'Extinction of species', 'Migration of species', 'Mutation of species'],
        correct: 'Formation of new species',
        explanation: 'Speciation is the evolutionary process by which new biological species arise.'
      },
      {
        id: 'g12bio_u4_m3',
        question: 'What is the role of mutations in evolution?',
        options: ['Always beneficial', 'Always harmful', 'Source of new genetic variation', 'No role in evolution'],
        correct: 'Source of new genetic variation',
        explanation: 'Mutations are the source of new genetic variation, which can be acted upon by natural selection.'
      },
      {
        id: 'g12bio_u4_m4',
        question: 'What is gene flow?',
        options: ['Movement of genes between populations', 'Gene duplication', 'Gene deletion', 'Gene expression'],
        correct: 'Movement of genes between populations',
        explanation: 'Gene flow is the transfer of genetic material from one population to another, increasing genetic diversity.'
      },
      {
        id: 'g12bio_u4_m5',
        question: 'What is the founder effect?',
        options: ['Large population effect', 'Small population starting new colony', 'Gene mutation effect', 'Natural selection effect'],
        correct: 'Small population starting new colony',
        explanation: 'The founder effect occurs when a small group of individuals establishes a new population, leading to reduced genetic diversity.'
      },
      {
        id: 'g12bio_u4_m6',
        question: 'What is convergent evolution?',
        options: ['Similar traits in related species', 'Similar traits in unrelated species', 'Different traits in related species', 'No evolutionary change'],
        correct: 'Similar traits in unrelated species',
        explanation: 'Convergent evolution occurs when unrelated species develop similar traits due to similar environmental pressures.'
      },
      {
        id: 'g12bio_u4_m7',
        question: 'What is divergent evolution?',
        options: ['Same traits in different species', 'Different traits from common ancestor', 'No evolutionary change', 'Rapid evolution'],
        correct: 'Different traits from common ancestor',
        explanation: 'Divergent evolution occurs when related species develop different traits due to different environmental pressures.'
      },
      {
        id: 'g12bio_u4_m8',
        question: 'What is coevolution?',
        options: ['Evolution of one species', 'Evolution of two interacting species', 'No evolution', 'Reverse evolution'],
        correct: 'Evolution of two interacting species',
        explanation: 'Coevolution is the process where two or more species evolve in response to each other over time.'
      },
      {
        id: 'g12bio_u4_m9',
        question: 'What is sexual selection?',
        options: ['Random mating', 'Selection based on mating success', 'Only natural selection', 'No selection'],
        correct: 'Selection based on mating success',
        explanation: 'Sexual selection is a form of natural selection that focuses on an individual\'s ability to obtain mates and reproduce.'
      },
      {
        id: 'g12bio_u4_m10',
        question: 'What is adaptive radiation?',
        options: ['Single species evolving into multiple species', 'Multiple species becoming one', 'No evolutionary change', 'Extinction of species'],
        correct: 'Single species evolving into multiple species',
        explanation: 'Adaptive radiation is the rapid evolution of many diverse species from a common ancestor, often when colonizing new environments.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u4_h1',
        question: 'Explain the concept of punctuated equilibrium.',
        options: ['Gradual change over time', 'Sudden change followed by stability', 'Constant rate of evolution', 'No change over time'],
        correct: 'Sudden change followed by stability',
        explanation: 'Punctuated equilibrium is a theory that proposes that evolution occurs in rapid bursts of change, followed by long periods of stability.'
      },
      {
        id: 'g12bio_u4_h2',
        question: 'What is the Hardy-Weinberg principle?',
        options: ['Describes evolution in populations', 'Describes equilibrium in populations', 'Describes extinction rates', 'Describes mutation rates'],
        correct: 'Describes equilibrium in populations',
        explanation: 'The Hardy-Weinberg principle describes the conditions under which allele frequencies in a population remain constant from generation to generation.'
      },
      {
        id: 'g12bio_u4_h3',
        question: 'How does geographic isolation lead to speciation?',
        options: ['Prevents gene flow', 'Increases gene flow', 'Has no effect', 'Causes immediate speciation'],
        correct: 'Prevents gene flow',
        explanation: 'Geographic isolation prevents gene flow between populations, allowing them to diverge genetically and potentially form new species.'
      },
      {
        id: 'g12bio_u4_h4',
        question: 'What is the molecular clock hypothesis?',
        options: ['DNA changes at constant rate', 'DNA never changes', 'DNA changes randomly', 'DNA changes only in some species'],
        correct: 'DNA changes at constant rate',
        explanation: 'The molecular clock hypothesis suggests that DNA mutations occur at a relatively constant rate over time, allowing estimation of evolutionary divergence times.'
      },
      {
        id: 'g12bio_u4_h5',
        question: 'How does the endosymbiotic theory explain organelle evolution?',
        options: ['Organelles evolved independently', 'Organelles were engulfed bacteria', 'Organelles are not real', 'Organelles came from viruses'],
        correct: 'Organelles were engulfed bacteria',
        explanation: 'The endosymbiotic theory proposes that organelles like mitochondria and chloroplasts were once free-living bacteria that were engulfed by early eukaryotic cells.'
      },
      {
        id: 'g12bio_u4_h6',
        question: 'What is the neutral theory of molecular evolution?',
        options: ['All mutations are beneficial', 'All mutations are harmful', 'Most mutations are neutral', 'Mutations do not occur'],
        correct: 'Most mutations are neutral',
        explanation: 'The neutral theory proposes that most evolutionary changes at the molecular level are caused by neutral mutations rather than adaptive changes.'
      },
      {
        id: 'g12bio_u4_h7',
        question: 'How does comparative genomics support evolutionary theory?',
        options: ['Shows no relationships', 'Reveals evolutionary relationships through DNA similarities', 'Only shows differences', 'Disproves evolution'],
        correct: 'Reveals evolutionary relationships through DNA similarities',
        explanation: 'Comparative genomics reveals evolutionary relationships by comparing DNA sequences across different species, showing common ancestry.'
      },
      {
        id: 'g12bio_u4_h8',
        question: 'What is the significance of vestigial structures?',
        options: ['No significance', 'Evidence of evolutionary history', 'Fully functional structures', 'Modern adaptations'],
        correct: 'Evidence of evolutionary history',
        explanation: 'Vestigial structures are remnants of structures that were functional in ancestral species, providing evidence of evolutionary history.'
      },
      {
        id: 'g12bio_u4_h9',
        question: 'How do molecular data and morphological data compare in phylogenetic studies?',
        options: ['Always agree', 'Sometimes disagree but complement each other', 'Never useful together', 'Only molecular data matters'],
        correct: 'Sometimes disagree but complement each other',
        explanation: 'Molecular and morphological data may sometimes disagree but generally complement each other in reconstructing evolutionary relationships.'
      },
      {
        id: 'g12bio_u4_h10',
        question: 'What is the role of horizontal gene transfer in evolution?',
        options: ['No role', 'Provides mechanism for rapid genetic change', 'Only vertical inheritance matters', 'Prevents evolution'],
        correct: 'Provides mechanism for rapid genetic change',
        explanation: 'Horizontal gene transfer allows rapid genetic change and evolution, especially in prokaryotes, by transferring genes between organisms.'
      }
    ]
  },
  'Unit 5: Human Body System': {
    easy: [
      {
        id: 'g12bio_u5_e1',
        question: 'What is the function of the heart?',
        options: ['Pump blood', 'Digest food', 'Filter air', 'Produce hormones'],
        correct: 'Pump blood',
        explanation: 'The heart is a muscular organ that pumps blood through the blood vessels by repeated, rhythmic contractions.'
      },
      {
        id: 'g12bio_u5_e2',
        question: 'What is the function of the lungs?',
        options: ['Pump blood', 'Digest food', 'Exchange gases', 'Produce hormones'],
        correct: 'Exchange gases',
        explanation: 'The lungs are responsible for exchanging oxygen and carbon dioxide between the air and the blood.'
      },
      {
        id: 'g12bio_u5_e3',
        question: 'What is the function of the brain?',
        options: ['Pump blood', 'Digest food', 'Control body functions', 'Produce hormones'],
        correct: 'Control body functions',
        explanation: 'The brain is the control center of the body, responsible for coordinating and regulating various functions.'
      },
      {
        id: 'g12bio_u5_e4',
        question: 'What is the function of the kidneys?',
        options: ['Pump blood', 'Digest food', 'Filter waste from blood', 'Produce hormones'],
        correct: 'Filter waste from blood',
        explanation: 'The kidneys filter waste products and excess water from the blood to form urine.'
      },
      {
        id: 'g12bio_u5_e5',
        question: 'What is the function of the liver?',
        options: ['Pump blood', 'Detoxify blood and produce bile', 'Exchange gases', 'Control movement'],
        correct: 'Detoxify blood and produce bile',
        explanation: 'The liver detoxifies harmful substances in the blood and produces bile to help digest fats.'
      },
      {
        id: 'g12bio_u5_e6',
        question: 'What is the function of the stomach?',
        options: ['Pump blood', 'Digest food', 'Filter air', 'Produce hormones'],
        correct: 'Digest food',
        explanation: 'The stomach secretes digestive enzymes and acid to break down food.'
      },
      {
        id: 'g12bio_u5_e7',
        question: 'What is the function of bones?',
        options: ['Support and protect the body', 'Digest food', 'Filter air', 'Produce hormones'],
        correct: 'Support and protect the body',
        explanation: 'Bones provide structural support, protect organs, and serve as attachment points for muscles.'
      },
      {
        id: 'g12bio_u5_e8',
        question: 'What is the function of muscles?',
        options: ['Pump blood', 'Digest food', 'Enable movement', 'Produce hormones'],
        correct: 'Enable movement',
        explanation: 'Muscles contract and relax to produce movement and maintain posture.'
      },
      {
        id: 'g12bio_u5_e9',
        question: 'What is the function of red blood cells?',
        options: ['Fight infections', 'Carry oxygen', 'Clot blood', 'Produce hormones'],
        correct: 'Carry oxygen',
        explanation: 'Red blood cells contain hemoglobin, which binds to oxygen and transports it throughout the body.'
      },
      {
        id: 'g12bio_u5_e10',
        question: 'What is the function of white blood cells?',
        options: ['Carry oxygen', 'Fight infections', 'Clot blood', 'Digest food'],
        correct: 'Fight infections',
        explanation: 'White blood cells are part of the immune system and help defend the body against infections and diseases.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u5_m1',
        question: 'What is homeostasis?',
        options: ['Disease state', 'Maintenance of internal balance', 'Growth process', 'Aging process'],
        correct: 'Maintenance of internal balance',
        explanation: 'Homeostasis is the process by which the body maintains a stable internal environment despite changes in external conditions.'
      },
      {
        id: 'g12bio_u5_m2',
        question: 'What is the role of the endocrine system?',
        options: ['Pump blood', 'Digest food', 'Filter air', 'Produce hormones'],
        correct: 'Produce hormones',
        explanation: 'The endocrine system produces hormones that regulate various body functions, such as growth, metabolism, and reproduction.'
      },
      {
        id: 'g12bio_u5_m3',
        question: 'What is the role of the nervous system?',
        options: ['Pump blood', 'Digest food', 'Transmit signals', 'Produce hormones'],
        correct: 'Transmit signals',
        explanation: 'The nervous system transmits signals between the brain and other parts of the body, allowing for communication and coordination.'
      },
      {
        id: 'g12bio_u5_m4',
        question: 'What is the role of the immune system?',
        options: ['Pump blood', 'Digest food', 'Defend against pathogens', 'Produce hormones'],
        correct: 'Defend against pathogens',
        explanation: 'The immune system defends the body against pathogens, such as bacteria, viruses, and parasites.'
      },
      {
        id: 'g12bio_u5_m5',
        question: 'What is the function of platelets?',
        options: ['Carry oxygen', 'Fight infections', 'Clot blood', 'Produce hormones'],
        correct: 'Clot blood',
        explanation: 'Platelets are cell fragments that help form blood clots to stop bleeding when blood vessels are damaged.'
      },
      {
        id: 'g12bio_u5_m6',
        question: 'What is the function of the spinal cord?',
        options: ['Pump blood', 'Digest food', 'Transmit signals between brain and body', 'Produce hormones'],
        correct: 'Transmit signals between brain and body',
        explanation: 'The spinal cord is a major pathway for transmitting signals between the brain and the rest of the body.'
      },
      {
        id: 'g12bio_u5_m7',
        question: 'What is the cardiac cycle?',
        options: ['Random heart beats', 'Systematic contraction and relaxation of heart', 'Only contraction', 'Only relaxation'],
        correct: 'Systematic contraction and relaxation of heart',
        explanation: 'The cardiac cycle is the sequence of events that occurs during one heartbeat, including both contraction and relaxation phases.'
      },
      {
        id: 'g12bio_u5_m8',
        question: 'What is the role of insulin?',
        options: ['Increases blood sugar', 'Decreases blood sugar', 'No effect on blood sugar', 'Only affects proteins'],
        correct: 'Decreases blood sugar',
        explanation: 'Insulin is a hormone that decreases blood glucose levels by promoting glucose uptake by cells.'
      },
      {
        id: 'g12bio_u5_m9',
        question: 'What is the function of the respiratory system?',
        options: ['Pump blood', 'Gas exchange', 'Digest food', 'Produce hormones'],
        correct: 'Gas exchange',
        explanation: 'The respiratory system facilitates gas exchange, bringing oxygen into the body and removing carbon dioxide.'
      },
      {
        id: 'g12bio_u5_m10',
        question: 'What is the function of the digestive system?',
        options: ['Pump blood', 'Break down and absorb nutrients', 'Exchange gases', 'Fight infections'],
        correct: 'Break down and absorb nutrients',
        explanation: 'The digestive system breaks down food into nutrients that can be absorbed and used by the body.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u5_h1',
        question: 'How does the body regulate blood glucose levels?',
        options: ['No regulation', 'Only by diet', 'By hormones like insulin and glucagon', 'Only by exercise'],
        correct: 'By hormones like insulin and glucagon',
        explanation: 'Blood glucose levels are regulated by hormones like insulin and glucagon, which are produced by the pancreas.'
      },
      {
        id: 'g12bio_u5_h2',
        question: 'How does synaptic transmission work in the nervous system?',
        options: ['Direct electrical connection', 'Chemical transmission via neurotransmitters', 'No transmission occurs', 'Only physical contact'],
        correct: 'Chemical transmission via neurotransmitters',
        explanation: 'Synaptic transmission involves the release of neurotransmitters from one neuron that bind to receptors on another neuron.'
      },
      {
        id: 'g12bio_u5_h3',
        question: 'What is the mechanism of muscle contraction?',
        options: ['Random muscle fiber movement', 'Sliding filament mechanism', 'Muscle fiber fusion', 'Muscle fiber division'],
        correct: 'Sliding filament mechanism',
        explanation: 'Muscle contraction occurs through the sliding filament mechanism, where actin and myosin filaments slide past each other.'
      },
      {
        id: 'g12bio_u5_h4',
        question: 'How does the nephron function in kidney filtration?',
        options: ['No filtration occurs', 'Simple filtration only', 'Filtration, reabsorption, and secretion', 'Only reabsorption'],
        correct: 'Filtration, reabsorption, and secretion',
        explanation: 'The nephron functions through three main processes: filtration of blood, reabsorption of needed substances, and secretion of waste products.'
      },
      {
        id: 'g12bio_u5_h5',
        question: 'What is the mechanism of hormone action?',
        options: ['Hormones work randomly', 'Hormones bind to specific receptors', 'Hormones affect all cells equally', 'Hormones only work on blood cells'],
        correct: 'Hormones bind to specific receptors',
        explanation: 'Hormones exert their effects by binding to specific receptors on target cells, triggering specific cellular responses.'
      },
      {
        id: 'g12bio_u5_h6',
        question: 'What is the role of the blood-brain barrier?',
        options: ['Allows all substances to enter brain', 'Selectively prevents harmful substances from entering brain', 'Has no function', 'Only prevents blood from entering brain'],
        correct: 'Selectively prevents harmful substances from entering brain',
        explanation: 'The blood-brain barrier selectively allows beneficial substances to enter the brain while preventing potentially harmful substances from crossing.'
      },
      {
        id: 'g12bio_u5_h7',
        question: 'How does the body maintain acid-base balance?',
        options: ['No regulation needed', 'Only through breathing', 'Through buffers, lungs, and kidneys', 'Only through diet'],
        correct: 'Through buffers, lungs, and kidneys',
        explanation: 'The body maintains acid-base balance through buffer systems, respiratory regulation (lungs), and renal regulation (kidneys).'
      },
      {
        id: 'g12bio_u5_h8',
        question: 'What are the components of the adaptive immune system?',
        options: ['Only white blood cells', 'B cells, T cells, and antibodies', 'Only antibodies', 'Only barriers'],
        correct: 'B cells, T cells, and antibodies',
        explanation: 'The adaptive immune system consists of B cells (produce antibodies), T cells (cell-mediated immunity), and the antibodies they produce.'
      },
      {
        id: 'g12bio_u5_h9',
        question: 'How does gas exchange occur in the alveoli?',
        options: ['No exchange', 'Passive diffusion across respiratory membrane', 'Active transport only', 'Enzyme-mediated process'],
        correct: 'Passive diffusion across respiratory membrane',
        explanation: 'Gas exchange in the alveoli occurs through passive diffusion of oxygen and carbon dioxide across the thin respiratory membrane.'
      },
      {
        id: 'g12bio_u5_h10',
        question: 'What is the role of the hypothalamus in homeostasis?',
        options: ['No role', 'Integrates and controls various homeostatic processes', 'Only controls temperature', 'Only produces hormones'],
        correct: 'Integrates and controls various homeostatic processes',
        explanation: 'The hypothalamus acts as the control center for homeostasis, integrating neural and hormonal signals to maintain body balance.'
      }
    ]
  },
  'Unit 6: Climate Change': {
    easy: [
      {
        id: 'g12bio_u6_e1',
        question: 'What is climate change?',
        options: ['Daily weather changes', 'Long-term changes in Earth\'s climate', 'Seasonal changes', 'Temperature only'],
        correct: 'Long-term changes in Earth\'s climate',
        explanation: 'Climate change refers to long-term shifts and alterations in temperature and weather patterns on Earth.'
      },
      {
        id: 'g12bio_u6_e2',
        question: 'What is the greenhouse effect?',
        options: ['Cooling of Earth', 'Trapping of heat in atmosphere', 'Only affects plants', 'Ocean currents'],
        correct: 'Trapping of heat in atmosphere',
        explanation: 'The greenhouse effect is the process by which certain gases in the atmosphere trap heat from the sun.'
      },
      {
        id: 'g12bio_u6_e3',
        question: 'What is the main greenhouse gas?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
        correct: 'Carbon dioxide',
        explanation: 'Carbon dioxide is the most abundant greenhouse gas released by human activities.'
      },
      {
        id: 'g12bio_u6_e4',
        question: 'What causes global warming?',
        options: ['Natural processes only', 'Increased greenhouse gases', 'Solar activity only', 'Ocean temperature'],
        correct: 'Increased greenhouse gases',
        explanation: 'Global warming is primarily caused by increased concentrations of greenhouse gases in the atmosphere.'
      },
      {
        id: 'g12bio_u6_e5',
        question: 'How does deforestation contribute to climate change?',
        options: ['No contribution', 'Reduces carbon absorption', 'Increases rainfall', 'Cools the planet'],
        correct: 'Reduces carbon absorption',
        explanation: 'Deforestation reduces the number of trees that can absorb carbon dioxide from the atmosphere.'
      },
      {
        id: 'g12bio_u6_e6',
        question: 'What is ocean acidification?',
        options: ['Ocean becoming basic', 'Ocean becoming more acidic', 'Ocean temperature change', 'Ocean level rise'],
        correct: 'Ocean becoming more acidic',
        explanation: 'Ocean acidification occurs when the ocean absorbs carbon dioxide, making it more acidic.'
      },
      {
        id: 'g12bio_u6_e7',
        question: 'What is sea level rise?',
        options: ['Decrease in sea level', 'Increase in sea level', 'No change in sea level', 'Only affects rivers'],
        correct: 'Increase in sea level',
        explanation: 'Sea level rise is the increase in ocean levels due to thermal expansion and melting ice.'
      },
      {
        id: 'g12bio_u6_e8',
        question: 'How does climate change affect weather patterns?',
        options: ['No effect', 'Makes weather more extreme', 'Makes weather milder', 'Only affects temperature'],
        correct: 'Makes weather more extreme',
        explanation: 'Climate change tends to make weather patterns more extreme, with stronger storms and more intense droughts.'
      },
      {
        id: 'g12bio_u6_e9',
        question: 'What is renewable energy?',
        options: ['Energy that runs out', 'Energy that can be replenished', 'Only fossil fuels', 'Nuclear energy only'],
        correct: 'Energy that can be replenished',
        explanation: 'Renewable energy comes from sources that can be naturally replenished, like solar and wind power.'
      },
      {
        id: 'g12bio_u6_e10',
        question: 'What is carbon footprint?',
        options: ['Size of feet', 'Amount of carbon dioxide produced', 'Type of fossil fuel', 'Plant growth measure'],
        correct: 'Amount of carbon dioxide produced',
        explanation: 'Carbon footprint is the total amount of greenhouse gases produced by human activities.'
      }
    ],
    medium: [
      {
        id: 'g12bio_u6_m1',
        question: 'How do feedback loops affect climate change?',
        options: ['No effect', 'Can amplify or reduce changes', 'Only reduce changes', 'Only amplify changes'],
        correct: 'Can amplify or reduce changes',
        explanation: 'Feedback loops can either amplify (positive feedback) or reduce (negative feedback) climate change effects.'
      },
      {
        id: 'g12bio_u6_m2',
        question: 'What is the albedo effect?',
        options: ['Heat absorption only', 'Light reflection by surfaces', 'Ocean currents', 'Atmospheric pressure'],
        correct: 'Light reflection by surfaces',
        explanation: 'The albedo effect refers to how much sunlight is reflected by Earth\'s surfaces, affecting temperature.'
      },
      {
        id: 'g12bio_u6_m3',
        question: 'How does climate change affect biodiversity?',
        options: ['No effect', 'Can cause species extinction and habitat loss', 'Only helps species', 'Only affects plants'],
        correct: 'Can cause species extinction and habitat loss',
        explanation: 'Climate change can lead to habitat loss, species migration, and potential extinction of vulnerable species.'
      },
      {
        id: 'g12bio_u6_m4',
        question: 'What is carbon sequestration?',
        options: ['Releasing carbon', 'Storing carbon dioxide', 'Using more fossil fuels', 'Burning forests'],
        correct: 'Storing carbon dioxide',
        explanation: 'Carbon sequestration is the process of capturing and storing carbon dioxide to reduce atmospheric levels.'
      },
      {
        id: 'g12bio_u6_m5',
        question: 'How do ice caps affect global climate?',
        options: ['No effect', 'Reflect sunlight and regulate temperature', 'Only affect local weather', 'Absorb all heat'],
        correct: 'Reflect sunlight and regulate temperature',
        explanation: 'Ice caps reflect sunlight back to space and help regulate global temperature through the albedo effect.'
      },
      {
        id: 'g12bio_u6_m6',
        question: 'What is thermal expansion of oceans?',
        options: ['Oceans getting colder', 'Oceans expanding due to warming', 'Oceans shrinking', 'No change in oceans'],
        correct: 'Oceans expanding due to warming',
        explanation: 'Thermal expansion occurs when seawater expands as it warms, contributing to sea level rise.'
      },
      {
        id: 'g12bio_u6_m7',
        question: 'How does agriculture contribute to greenhouse gas emissions?',
        options: ['No contribution', 'Through methane from livestock and farming practices', 'Only helps environment', 'Absorbs all gases'],
        correct: 'Through methane from livestock and farming practices',
        explanation: 'Agriculture contributes through methane from livestock, rice cultivation, and fertilizer use.'
      },
      {
        id: 'g12bio_u6_m8',
        question: 'What is the role of permafrost in climate change?',
        options: ['No role', 'Stores carbon that can be released when melted', 'Only affects local areas', 'Prevents all warming'],
        correct: 'Stores carbon that can be released when melted',
        explanation: 'Permafrost stores large amounts of carbon that can be released as greenhouse gases when it melts.'
      },
      {
        id: 'g12bio_u6_m9',
        question: 'How do ocean currents affect global climate?',
        options: ['No effect', 'Distribute heat around the globe', 'Only affect fish', 'Create wind only'],
        correct: 'Distribute heat around the globe',
        explanation: 'Ocean currents redistribute heat from the equator to the poles, affecting global climate patterns.'
      },
      {
        id: 'g12bio_u6_m10',
        question: 'What is mitigation in climate change context?',
        options: ['Ignoring the problem', 'Reducing greenhouse gas emissions', 'Only adaptation', 'Increasing emissions'],
        correct: 'Reducing greenhouse gas emissions',
        explanation: 'Mitigation involves reducing or preventing greenhouse gas emissions to limit climate change.'
      }
    ],
    hard: [
      {
        id: 'g12bio_u6_h1',
        question: 'How do positive feedback loops accelerate climate change?',
        options: ['They slow change', 'They amplify initial changes', 'They have no effect', 'They only affect oceans'],
        correct: 'They amplify initial changes',
        explanation: 'Positive feedback loops amplify initial changes, such as ice melting leading to more heat absorption and further melting.'
      },
      {
        id: 'g12bio_u6_h2',
        question: 'What is the relationship between climate change and ocean circulation?',
        options: ['No relationship', 'Climate change can disrupt ocean circulation patterns', 'Only local effects', 'Strengthens all currents'],
        correct: 'Climate change can disrupt ocean circulation patterns',
        explanation: 'Climate change can alter ocean circulation patterns by changing water temperature and salinity, affecting global climate.'
      },
      {
        id: 'g12bio_u6_h3',
        question: 'How does the carbon cycle interact with climate change?',
        options: ['No interaction', 'Climate change affects carbon storage and release', 'Only affects plants', 'Prevents carbon movement'],
        correct: 'Climate change affects carbon storage and release',
        explanation: 'Climate change affects the carbon cycle by altering carbon storage in forests, soils, and oceans.'
      },
      {
        id: 'g12bio_u6_h4',
        question: 'What is climate sensitivity?',
        options: ['Emotional response to climate', 'Temperature response to doubled CO2', 'Weather variability', 'Seasonal changes'],
        correct: 'Temperature response to doubled CO2',
        explanation: 'Climate sensitivity is the estimated global temperature increase from doubling atmospheric CO2 concentrations.'
      },
      {
        id: 'g12bio_u6_h5',
        question: 'How do tipping points relate to climate systems?',
        options: ['No relationship', 'Thresholds beyond which changes become irreversible', 'Only affect ice', 'Prevent all change'],
        correct: 'Thresholds beyond which changes become irreversible',
        explanation: 'Tipping points are critical thresholds in climate systems beyond which changes become self-sustaining and potentially irreversible.'
      },
      {
        id: 'g12bio_u6_h6',
        question: 'What is the role of aerosols in climate change?',
        options: ['Only warming effect', 'Can have both cooling and warming effects', 'No climate effect', 'Only local effects'],
        correct: 'Can have both cooling and warming effects',
        explanation: 'Aerosols can have cooling effects by reflecting sunlight or warming effects by absorbing heat, depending on their type.'
      },
      {
        id: 'g12bio_u6_h7',
        question: 'How does climate change affect the hydrological cycle?',
        options: ['No effect', 'Alters precipitation patterns and water availability', 'Only affects rivers', 'Stops all precipitation'],
        correct: 'Alters precipitation patterns and water availability',
        explanation: 'Climate change alters the hydrological cycle by changing evaporation rates, precipitation patterns, and water distribution.'
      },
      {
        id: 'g12bio_u6_h8',
        question: 'What is geoengineering in climate change context?',
        options: ['Natural processes only', 'Deliberate intervention to counteract climate change', 'Building construction', 'Mining activities'],
        correct: 'Deliberate intervention to counteract climate change',
        explanation: 'Geoengineering involves deliberate, large-scale interventions in Earth\'s systems to counteract climate change.'
      },
      {
        id: 'g12bio_u6_h9',
        question: 'How do land-use changes contribute to climate change?',
        options: ['No contribution', 'Affect carbon storage and albedo', 'Only positive effects', 'Only affect local weather'],
        correct: 'Affect carbon storage and albedo',
        explanation: 'Land-use changes affect climate by altering carbon storage in vegetation and soils and changing surface albedo.'
      },
      {
        id: 'g12bio_u6_h10',
        question: 'What is the significance of radiative forcing in climate science?',
        options: ['No significance', 'Measures the effect of factors on Earth\'s energy balance', 'Only affects radiation', 'Prevents climate change'],
        correct: 'Measures the effect of factors on Earth\'s energy balance',
        explanation: 'Radiative forcing measures how different factors (greenhouse gases, aerosols, etc.) affect Earth\'s energy balance and climate.'
      }
    ]
  }
};

export const getGrade12BiologyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  const unitData = grade12BiologyQuestions[unit];
  if (!unitData) {
    console.warn(`No questions found for unit: ${unit}`);
    return [];
  }

  const questions = unitData[difficulty] || [];
  if (questions.length === 0) {
    console.warn(`No ${difficulty} questions found for unit: ${unit}`);
  }

  return questions;
};
