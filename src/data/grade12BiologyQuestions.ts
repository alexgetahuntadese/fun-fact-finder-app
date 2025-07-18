
export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

export const grade12BiologyQuestions: { [unit: string]: { [difficulty: string]: Question[] } } = {
  'Unit 1: Cell Biology': {
    easy: [
      {
        id: 'g12_bio_u1_e1',
        question: 'What is the basic unit of life?',
        options: ['Cell', 'Tissue', 'Organ', 'Organism'],
        correct: 'Cell',
        explanation: 'The cell is the smallest structural and functional unit of all living organisms.'
      },
      {
        id: 'g12_bio_u1_e2',
        question: 'Which organelle is known as the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
        correct: 'Mitochondria',
        explanation: 'Mitochondria produce ATP through cellular respiration, providing energy for cellular processes.'
      },
      {
        id: 'g12_bio_u1_e3',
        question: 'What structure controls what enters and exits the cell?',
        options: ['Cell wall', 'Cell membrane', 'Nucleus', 'Cytoplasm'],
        correct: 'Cell membrane',
        explanation: 'The cell membrane is selectively permeable and regulates the passage of substances.'
      },
      {
        id: 'g12_bio_u1_e4',
        question: 'Where is genetic material stored in eukaryotic cells?',
        options: ['Cytoplasm', 'Mitochondria', 'Nucleus', 'Ribosome'],
        correct: 'Nucleus',
        explanation: 'The nucleus contains the cell\'s DNA and controls cellular activities.'
      },
      {
        id: 'g12_bio_u1_e5',
        question: 'What process do plants use to make food?',
        options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
        correct: 'Photosynthesis',
        explanation: 'Photosynthesis converts sunlight, carbon dioxide, and water into glucose and oxygen.'
      },
      {
        id: 'g12_bio_u1_e6',
        question: 'Which organelle is responsible for protein synthesis?',
        options: ['Nucleus', 'Ribosome', 'Lysosome', 'Vacuole'],
        correct: 'Ribosome',
        explanation: 'Ribosomes are the sites where proteins are synthesized from amino acids.'
      },
      {
        id: 'g12_bio_u1_e7',
        question: 'What is the main difference between prokaryotic and eukaryotic cells?',
        options: ['Size', 'Presence of nucleus', 'Cell wall', 'Reproduction method'],
        correct: 'Presence of nucleus',
        explanation: 'Eukaryotic cells have a membrane-bound nucleus, while prokaryotic cells do not.'
      },
      {
        id: 'g12_bio_u1_e8',
        question: 'Which process moves water across cell membranes?',
        options: ['Active transport', 'Osmosis', 'Diffusion', 'Endocytosis'],
        correct: 'Osmosis',
        explanation: 'Osmosis is the passive movement of water across a semipermeable membrane.'
      },
      {
        id: 'g12_bio_u1_e9',
        question: 'What is the jelly-like substance inside cells called?',
        options: ['Nucleus', 'Cytoplasm', 'Membrane', 'Organelle'],
        correct: 'Cytoplasm',
        explanation: 'Cytoplasm is the gel-like substance that fills the cell and surrounds organelles.'
      },
      {
        id: 'g12_bio_u1_e10',
        question: 'Which organelle digests waste materials in the cell?',
        options: ['Ribosome', 'Lysosome', 'Golgi apparatus', 'Endoplasmic reticulum'],
        correct: 'Lysosome',
        explanation: 'Lysosomes contain digestive enzymes that break down waste materials and worn-out organelles.'
      }
    ],
    medium: [
      {
        id: 'g12_bio_u1_m1',
        question: 'What is the function of the rough endoplasmic reticulum?',
        options: ['Lipid synthesis', 'Protein synthesis', 'ATP production', 'DNA replication'],
        correct: 'Protein synthesis',
        explanation: 'The rough ER has ribosomes attached and is involved in protein synthesis and modification.'
      },
      {
        id: 'g12_bio_u1_m2',
        question: 'Which transport process requires energy?',
        options: ['Simple diffusion', 'Facilitated diffusion', 'Active transport', 'Osmosis'],
        correct: 'Active transport',
        explanation: 'Active transport moves substances against their concentration gradient and requires ATP.'
      },
      {
        id: 'g12_bio_u1_m3',
        question: 'What happens during the G1 phase of the cell cycle?',
        options: ['DNA replication', 'Cell growth', 'Mitosis', 'Cytokinesis'],
        correct: 'Cell growth',
        explanation: 'During G1 phase, the cell grows in size and accumulates materials needed for replication.'
      },
      {
        id: 'g12_bio_u1_m4',
        question: 'Which enzyme is responsible for unwinding DNA during replication?',
        options: ['DNA polymerase', 'Helicase', 'Ligase', 'Primase'],
        correct: 'Helicase',
        explanation: 'Helicase unwinds the double helix structure of DNA to allow replication to occur.'
      },
      {
        id: 'g12_bio_u1_m5',
        question: 'What is the main function of the Golgi apparatus?',
        options: ['Protein synthesis', 'ATP production', 'Protein modification and packaging', 'DNA storage'],
        correct: 'Protein modification and packaging',
        explanation: 'The Golgi apparatus modifies, packages, and ships proteins from the endoplasmic reticulum.'
      },
      {
        id: 'g12_bio_u1_m6',
        question: 'During which phase of mitosis do chromosomes align at the cell center?',
        options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
        correct: 'Metaphase',
        explanation: 'During metaphase, chromosomes align at the metaphase plate in the center of the cell.'
      },
      {
        id: 'g12_bio_u1_m7',
        question: 'What is the purpose of the cell cycle checkpoints?',
        options: ['Speed up division', 'Ensure proper division', 'Stop division', 'Start division'],
        correct: 'Ensure proper division',
        explanation: 'Cell cycle checkpoints monitor and ensure that each phase is completed correctly before proceeding.'
      },
      {
        id: 'g12_bio_u1_m8',
        question: 'Which process allows large molecules to enter the cell?',
        options: ['Diffusion', 'Osmosis', 'Endocytosis', 'Active transport'],
        correct: 'Endocytosis',
        explanation: 'Endocytosis is the process by which cells engulf large molecules or particles.'
      },
      {
        id: 'g12_bio_u1_m9',
        question: 'What is the role of centrioles in cell division?',
        options: ['DNA replication', 'Spindle fiber organization', 'Chromosome condensation', 'Nuclear envelope breakdown'],
        correct: 'Spindle fiber organization',
        explanation: 'Centrioles help organize the spindle fibers that separate chromosomes during mitosis.'
      },
      {
        id: 'g12_bio_u1_m10',
        question: 'Which phase of cellular respiration produces the most ATP?',
        options: ['Glycolysis', 'Krebs cycle', 'Electron transport chain', 'Fermentation'],
        correct: 'Electron transport chain',
        explanation: 'The electron transport chain produces approximately 32-34 ATP molecules, the most of any phase.'
      }
    ],
    hard: [
      {
        id: 'g12_bio_u1_h1',
        question: 'What is the significance of the fluid mosaic model?',
        options: ['Describes DNA structure', 'Explains membrane structure', 'Models protein folding', 'Describes cell division'],
        correct: 'Explains membrane structure',
        explanation: 'The fluid mosaic model describes the cell membrane as a flexible structure with embedded proteins.'
      },
      {
        id: 'g12_bio_u1_h2',
        question: 'Which mechanism explains how tumor suppressor genes prevent cancer?',
        options: ['Promote cell division', 'Inhibit cell division', 'Repair DNA damage', 'Both B and C'],
        correct: 'Both B and C',
        explanation: 'Tumor suppressor genes like p53 can halt cell division and activate DNA repair mechanisms.'
      },
      {
        id: 'g12_bio_u1_h3',
        question: 'What is the role of telomeres in cell aging?',
        options: ['Prevent DNA replication', 'Shorten with each division', 'Cause immediate death', 'Have no effect'],
        correct: 'Shorten with each division',
        explanation: 'Telomeres shorten with each cell division, eventually leading to cellular senescence.'
      },
      {
        id: 'g12_bio_u1_h4',
        question: 'How does the sodium-potassium pump maintain cell potential?',
        options: ['Moves 2Na+ in, 3K+ out', 'Moves 3Na+ out, 2K+ in', 'Moves equal amounts', 'Uses no energy'],
        correct: 'Moves 3Na+ out, 2K+ in',
        explanation: 'The Na+/K+ pump maintains membrane potential by moving 3Na+ out and 2K+ in per ATP used.'
      },
      {
        id: 'g12_bio_u1_h5',
        question: 'What is the function of cyclin-dependent kinases (CDKs)?',
        options: ['DNA repair', 'Cell cycle regulation', 'Protein synthesis', 'Membrane transport'],
        correct: 'Cell cycle regulation',
        explanation: 'CDKs phosphorylate target proteins to drive progression through cell cycle phases.'
      },
      {
        id: 'g12_bio_u1_h6',
        question: 'Which process is responsible for generating cellular diversity during development?',
        options: ['Mitosis', 'Meiosis', 'Differentiation', 'Apoptosis'],
        correct: 'Differentiation',
        explanation: 'Cell differentiation involves changes in gene expression that create specialized cell types.'
      },
      {
        id: 'g12_bio_u1_h7',
        question: 'What is the primary cause of oncogene activation?',
        options: ['DNA repair', 'Mutations', 'Normal cell division', 'Apoptosis'],
        correct: 'Mutations',
        explanation: 'Oncogenes are activated by mutations that cause them to promote excessive cell division.'
      },
      {
        id: 'g12_bio_u1_h8',
        question: 'How do gap junctions contribute to cellular communication?',
        options: ['Hormone secretion', 'Direct cytoplasmic connection', 'Membrane fusion', 'Protein binding'],
        correct: 'Direct cytoplasmic connection',
        explanation: 'Gap junctions form channels that allow direct exchange of small molecules between cells.'
      },
      {
        id: 'g12_bio_u1_h9',
        question: 'What is the role of autophagy in cellular homeostasis?',
        options: ['Cell division', 'Waste removal', 'Protein synthesis', 'DNA replication'],
        correct: 'Waste removal',
        explanation: 'Autophagy is the process by which cells break down and recycle damaged organelles and proteins.'
      },
      {
        id: 'g12_bio_u1_h10',
        question: 'Which factor determines the rate of simple diffusion?',
        options: ['ATP availability', 'Concentration gradient', 'Temperature only', 'Cell size only'],
        correct: 'Concentration gradient',
        explanation: 'Simple diffusion rate depends on the concentration gradient, temperature, and molecular size.'
      }
    ]
  },
  'Unit 2: Genetics': {
    easy: [
      {
        id: 'g12_bio_u2_e1',
        question: 'What is a gene?',
        options: ['A unit of heredity', 'A type of protein', 'A cell organelle', 'A chromosome'],
        correct: 'A unit of heredity',
        explanation: 'A gene is a unit of heredity that determines specific traits in organisms.'
      },
      {
        id: 'g12_bio_u2_e2',
        question: 'How many chromosomes do humans normally have?',
        options: ['23', '44', '46', '48'],
        correct: '46',
        explanation: 'Humans have 46 chromosomes arranged in 23 pairs.'
      },
      {
        id: 'g12_bio_u2_e3',
        question: 'What does DNA stand for?',
        options: ['Deoxyribose Nucleic Acid', 'Deoxyribonucleic Acid', 'Dual Nucleic Acid', 'Double Nucleic Acid'],
        correct: 'Deoxyribonucleic Acid',
        explanation: 'DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic information.'
      },
      {
        id: 'g12_bio_u2_e4',
        question: 'What are the four bases in DNA?',
        options: ['A, T, G, C', 'A, U, G, C', 'A, T, G, U', 'T, U, G, C'],
        correct: 'A, T, G, C',
        explanation: 'DNA contains four bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C).'
      },
      {
        id: 'g12_bio_u2_e5',
        question: 'What is an allele?',
        options: ['A chromosome', 'A variant of a gene', 'A protein', 'A cell type'],
        correct: 'A variant of a gene',
        explanation: 'An allele is an alternative form or variant of a gene.'
      },
      {
        id: 'g12_bio_u2_e6',
        question: 'What is the process of copying DNA called?',
        options: ['Translation', 'Transcription', 'Replication', 'Mutation'],
        correct: 'Replication',
        explanation: 'DNA replication is the process of copying DNA to produce identical copies.'
      },
      {
        id: 'g12_bio_u2_e7',
        question: 'What determines the sex of offspring in humans?',
        options: ['X chromosome only', 'Y chromosome only', 'Combination of X and Y', 'Environmental factors'],
        correct: 'Combination of X and Y',
        explanation: 'Sex is determined by the combination of X and Y chromosomes (XX for female, XY for male).'
      },
      {
        id: 'g12_bio_u2_e8',
        question: 'What is a dominant allele?',
        options: ['Always harmful', 'Expressed when present', 'Only in males', 'Recessive trait'],
        correct: 'Expressed when present',
        explanation: 'A dominant allele is expressed in the phenotype when present, even with only one copy.'
      },
      {
        id: 'g12_bio_u2_e9',
        question: 'What is heredity?',
        options: ['Cell division', 'Passing traits to offspring', 'Protein synthesis', 'Energy production'],
        correct: 'Passing traits to offspring',
        explanation: 'Heredity is the passing of traits from parents to their offspring through genes.'
      },
      {
        id: 'g12_bio_u2_e10',
        question: 'What is a mutation?',
        options: ['Normal gene function', 'Change in DNA sequence', 'Protein production', 'Cell division'],
        correct: 'Change in DNA sequence',
        explanation: 'A mutation is a change in the DNA sequence that can alter gene function.'
      }
    ],
    medium: [
      {
        id: 'g12_bio_u2_m1',
        question: 'What is the probability of two heterozygous parents (Aa × Aa) having a homozygous recessive offspring?',
        options: ['0%', '25%', '50%', '75%'],
        correct: '25%',
        explanation: 'In a Punnett square for Aa × Aa, there is a 1/4 or 25% chance of producing aa offspring.'
      },
      {
        id: 'g12_bio_u2_m2',
        question: 'What is incomplete dominance?',
        options: ['One allele masks another', 'Both alleles are expressed equally', 'Blending of traits', 'No expression occurs'],
        correct: 'Blending of traits',
        explanation: 'Incomplete dominance results in a blended phenotype when neither allele is completely dominant.'
      },
      {
        id: 'g12_bio_u2_m3',
        question: 'What is the function of mRNA?',
        options: ['Store genetic information', 'Carry genetic code to ribosomes', 'Build proteins', 'Replicate DNA'],
        correct: 'Carry genetic code to ribosomes',
        explanation: 'mRNA carries the genetic code from DNA to ribosomes for protein synthesis.'
      },
      {
        id: 'g12_bio_u2_m4',
        question: 'What is a Punnett square used for?',
        options: ['DNA sequencing', 'Predicting inheritance patterns', 'Measuring mutations', 'Counting chromosomes'],
        correct: 'Predicting inheritance patterns',
        explanation: 'A Punnett square is used to predict the probability of traits in offspring.'
      },
      {
        id: 'g12_bio_u2_m5',
        question: 'What is codominance?',
        options: ['One allele is dominant', 'Both alleles are expressed simultaneously', 'No alleles are expressed', 'Alleles blend together'],
        correct: 'Both alleles are expressed simultaneously',
        explanation: 'In codominance, both alleles are fully expressed in the phenotype simultaneously.'
      },
      {
        id: 'g12_bio_u2_m6',
        question: 'What is the process that produces gametes?',
        options: ['Mitosis', 'Meiosis', 'Binary fission', 'Budding'],
        correct: 'Meiosis',
        explanation: 'Meiosis is the process that produces gametes (sex cells) with half the chromosome number.'
      },
      {
        id: 'g12_bio_u2_m7',
        question: 'What happens during crossing over?',
        options: ['Chromosomes duplicate', 'Homologous chromosomes exchange segments', 'Cells divide', 'DNA mutates'],
        correct: 'Homologous chromosomes exchange segments',
        explanation: 'Crossing over is the exchange of genetic material between homologous chromosomes during meiosis.'
      },
      {
        id: 'g12_bio_u2_m8',
        question: 'What is a pedigree chart used for?',
        options: ['DNA analysis', 'Tracking inheritance in families', 'Counting genes', 'Measuring proteins'],
        correct: 'Tracking inheritance in families',
        explanation: 'A pedigree chart traces the inheritance of traits through generations of a family.'
      },
      {
        id: 'g12_bio_u2_m9',
        question: 'What is the difference between genotype and phenotype?',
        options: ['No difference', 'Genotype is genetic makeup, phenotype is observable traits', 'Genotype is visible, phenotype is hidden', 'They are the same thing'],
        correct: 'Genotype is genetic makeup, phenotype is observable traits',
        explanation: 'Genotype refers to the genetic constitution, while phenotype refers to observable characteristics.'
      },
      {
        id: 'g12_bio_u2_m10',
        question: 'What is polygenic inheritance?',
        options: ['Single gene controls trait', 'Multiple genes control one trait', 'One gene controls multiple traits', 'No genes involved'],
        correct: 'Multiple genes control one trait',
        explanation: 'Polygenic inheritance involves multiple genes contributing to a single trait.'
      }
    ],
    hard: [
      {
        id: 'g12_bio_u2_h1',
        question: 'What is the molecular basis of sickle cell anemia?',
        options: ['Chromosome deletion', 'Single nucleotide substitution', 'Gene duplication', 'Chromosomal inversion'],
        correct: 'Single nucleotide substitution',
        explanation: 'Sickle cell anemia results from a single nucleotide change causing glutamic acid to be replaced by valine in hemoglobin.'
      },
      {
        id: 'g12_bio_u2_h2',
        question: 'What is epistasis?',
        options: ['Gene mutation', 'Gene interaction where one gene masks another', 'Chromosome abnormality', 'DNA replication error'],
        correct: 'Gene interaction where one gene masks another',
        explanation: 'Epistasis occurs when the expression of one gene is modified by one or more other genes.'
      },
      {
        id: 'g12_bio_u2_h3',
        question: 'What is the significance of the Hardy-Weinberg principle?',
        options: ['Predicts evolution', 'Describes population equilibrium', 'Explains mutations', 'Models natural selection'],
        correct: 'Describes population equilibrium',
        explanation: 'The Hardy-Weinberg principle describes conditions under which allele frequencies remain constant in a population.'
      },
      {
        id: 'g12_bio_u2_h4',
        question: 'What is genomic imprinting?',
        options: ['DNA copying', 'Parent-specific gene expression', 'Chromosome pairing', 'Gene silencing'],
        correct: 'Parent-specific gene expression',
        explanation: 'Genomic imprinting is the differential expression of genes depending on their parent of origin.'
      },
      {
        id: 'g12_bio_u2_h5',
        question: 'What is the role of enhancers in gene regulation?',
        options: ['Inhibit transcription', 'Increase transcription rate', 'Replicate DNA', 'Translate mRNA'],
        correct: 'Increase transcription rate',
        explanation: 'Enhancers are DNA sequences that increase the rate of transcription of genes.'
      },
      {
        id: 'g12_bio_u2_h6',
        question: 'What is alternative splicing?',
        options: ['DNA repair mechanism', 'Process creating protein variants from one gene', 'Chromosome separation', 'Gene duplication'],
        correct: 'Process creating protein variants from one gene',
        explanation: 'Alternative splicing allows one gene to produce multiple protein variants by including or excluding different exons.'
      },
      {
        id: 'g12_bio_u2_h7',
        question: 'What is the molecular mechanism of X-inactivation?',
        options: ['Chromosome deletion', 'Random silencing of one X chromosome', 'Gene mutation', 'Protein synthesis error'],
        correct: 'Random silencing of one X chromosome',
        explanation: 'X-inactivation involves random silencing of one X chromosome in female mammals to achieve dosage compensation.'
      },
      {
        id: 'g12_bio_u2_h8',
        question: 'What is the difference between point mutations and chromosomal aberrations?',
        options: ['No difference', 'Point mutations affect single nucleotides, aberrations affect chromosome structure', 'Point mutations are harmful, aberrations are not', 'They occur in different cells'],
        correct: 'Point mutations affect single nucleotides, aberrations affect chromosome structure',
        explanation: 'Point mutations involve changes in single nucleotides, while chromosomal aberrations involve changes in chromosome structure or number.'
      },
      {
        id: 'g12_bio_u2_h9',
        question: 'What is the molecular basis of anticipation in genetic diseases?',
        options: ['Gene deletion', 'Trinucleotide repeat expansion', 'Chromosome inversion', 'Point mutation'],
        correct: 'Trinucleotide repeat expansion',
        explanation: 'Anticipation in genetic diseases often results from trinucleotide repeat expansions that increase in size through generations.'
      },
      {
        id: 'g12_bio_u2_h10',
        question: 'What is the role of microRNAs in gene regulation?',
        options: ['Enhance transcription', 'Post-transcriptional gene silencing', 'DNA repair', 'Protein folding'],
        correct: 'Post-transcriptional gene silencing',
        explanation: 'MicroRNAs regulate gene expression by binding to mRNAs and either degrading them or blocking their translation.'
      }
    ]
  },
  'Unit 3: Evolution': {
    easy: [
      {
        id: 'g12_bio_u3_e1',
        question: 'What is evolution?',
        options: ['Change in species over time', 'Growth of organisms', 'Cell division', 'Energy production'],
        correct: 'Change in species over time',
        explanation: 'Evolution is the change in heritable traits of biological populations over successive generations.'
      },
      {
        id: 'g12_bio_u3_e2',
        question: 'Who proposed the theory of evolution by natural selection?',
        options: ['Gregor Mendel', 'Charles Darwin', 'Louis Pasteur', 'Alfred Wegener'],
        correct: 'Charles Darwin',
        explanation: 'Charles Darwin proposed the theory of evolution by natural selection in his book "On the Origin of Species".'
      },
      {
        id: 'g12_bio_u3_e3',
        question: 'What is natural selection?',
        options: ['Random changes', 'Survival of the fittest', 'Artificial breeding', 'Genetic engineering'],
        correct: 'Survival of the fittest',
        explanation: 'Natural selection is the process where organisms with favorable traits are more likely to survive and reproduce.'
      },
      {
        id: 'g12_bio_u3_e4',
        question: 'What are fossils?',
        options: ['Living organisms', 'Preserved remains of ancient life', 'Modern bones', 'Rock formations'],
        correct: 'Preserved remains of ancient life',
        explanation: 'Fossils are preserved remains or traces of organisms from the past.'
      },
      {
        id: 'g12_bio_u3_e5',
        question: 'What is adaptation?',
        options: ['Learning new skills', 'Traits that help survival', 'Growing larger', 'Changing color'],
        correct: 'Traits that help survival',
        explanation: 'Adaptation refers to traits that have evolved to help organisms survive and reproduce in their environment.'
      },
      {
        id: 'g12_bio_u3_e6',
        question: 'What is a species?',
        options: ['A group of similar organisms that can interbreed', 'Any group of animals', 'Plants only', 'Extinct organisms'],
        correct: 'A group of similar organisms that can interbreed',
        explanation: 'A species is typically defined as a group of organisms that can interbreed and produce fertile offspring.'
      },
      {
        id: 'g12_bio_u3_e7',
        question: 'What provides evidence for evolution?',
        options: ['Fossils only', 'DNA only', 'Fossils, DNA, and anatomy', 'None of these'],
        correct: 'Fossils, DNA, and anatomy',
        explanation: 'Multiple lines of evidence including fossils, DNA sequences, and anatomical structures support evolution.'
      },
      {
        id: 'g12_bio_u3_e8',
        question: 'What is extinction?',
        options: ['Birth of new species', 'Death of all members of a species', 'Migration', 'Hibernation'],
        correct: 'Death of all members of a species',
        explanation: 'Extinction occurs when all members of a species die out completely.'
      },
      {
        id: 'g12_bio_u3_e9',
        question: 'What is variation?',
        options: ['All organisms being identical', 'Differences among individuals', 'Only genetic differences', 'Environmental changes'],
        correct: 'Differences among individuals',
        explanation: 'Variation refers to differences in traits among individuals in a population.'
      },
      {
        id: 'g12_bio_u3_e10',
        question: 'What is the age of the Earth approximately?',
        options: ['6,000 years', '1 million years', '4.6 billion years', '100 billion years'],
        correct: '4.6 billion years',
        explanation: 'Earth is approximately 4.6 billion years old based on radiometric dating of rocks and meteorites.'
      }
    ],
    medium: [
      {
        id: 'g12_bio_u3_m1',
        question: 'What is the mechanism of speciation?',
        options: ['Genetic drift only', 'Natural selection only', 'Reproductive isolation leading to genetic divergence', 'Environmental change only'],
        correct: 'Reproductive isolation leading to genetic divergence',
        explanation: 'Speciation occurs when populations become reproductively isolated and diverge genetically over time.'
      },
      {
        id: 'g12_bio_u3_m2',
        question: 'What is genetic drift?',
        options: ['Directed evolution', 'Random changes in allele frequencies', 'Natural selection', 'Mutation rate'],
        correct: 'Random changes in allele frequencies',
        explanation: 'Genetic drift refers to random changes in allele frequencies in a population, especially in small populations.'
      },
      {
        id: 'g12_bio_u3_m3',
        question: 'What are homologous structures?',
        options: ['Identical functions', 'Similar origin, different functions', 'Different origin, same function', 'No relationship'],
        correct: 'Similar origin, different functions',
        explanation: 'Homologous structures have similar evolutionary origin but may have different functions in different species.'
      },
      {
        id: 'g12_bio_u3_m4',
        question: 'What is convergent evolution?',
        options: ['Species becoming identical', 'Unrelated species developing similar traits', 'Species diverging', 'Extinction'],
        correct: 'Unrelated species developing similar traits',
        explanation: 'Convergent evolution occurs when unrelated species independently develop similar traits due to similar environmental pressures.'
      },
      {
        id: 'g12_bio_u3_m5',
        question: 'What is the bottleneck effect?',
        options: ['Population expansion', 'Severe reduction in population size', 'Migration', 'Mutation increase'],
        correct: 'Severe reduction in population size',
        explanation: 'The bottleneck effect occurs when a population size is significantly reduced, reducing genetic diversity.'
      },
      {
        id: 'g12_bio_u3_m6',
        question: 'What is adaptive radiation?',
        options: ['One species evolving into many', 'Species going extinct', 'Random mutations', 'Population decline'],
        correct: 'One species evolving into many',
        explanation: 'Adaptive radiation is the rapid evolution of many species from a single ancestral species.'
      },
      {
        id: 'g12_bio_u3_m7',
        question: 'What is the founder effect?',
        options: ['Large population growth', 'Small group establishing new population', 'Species extinction', 'Environmental change'],
        correct: 'Small group establishing new population',
        explanation: 'The founder effect occurs when a small group of individuals establishes a new population in a new location.'
      },
      {
        id: 'g12_bio_u3_m8',
        question: 'What are vestigial structures?',
        options: ['Highly functional organs', 'Reduced or non-functional remnants', 'New evolutionary features', 'Perfect adaptations'],
        correct: 'Reduced or non-functional remnants',
        explanation: 'Vestigial structures are reduced or non-functional remnants of organs that were functional in ancestors.'
      },
      {
        id: 'g12_bio_u3_m9',
        question: 'What is sexual selection?',
        options: ['Random mating', 'Selection based on mating success', 'Asexual reproduction', 'Gender determination'],
        correct: 'Selection based on mating success',
        explanation: 'Sexual selection is a form of natural selection based on an individual\'s ability to obtain mates.'
      },
      {
        id: 'g12_bio_u3_m10',
        question: 'What is punctuated equilibrium?',
        options: ['Constant evolutionary rate', 'Rapid evolution followed by stability', 'No evolution', 'Backwards evolution'],
        correct: 'Rapid evolution followed by stability',
        explanation: 'Punctuated equilibrium suggests that evolution occurs in rapid bursts followed by long periods of stability.'
      }
    ],
    hard: [
      {
        id: 'g12_bio_u3_h1',
        question: 'What is the molecular clock hypothesis?',
        options: ['DNA replication timing', 'Protein synthesis rate', 'Constant rate of molecular evolution', 'Cell division timing'],
        correct: 'Constant rate of molecular evolution',
        explanation: 'The molecular clock hypothesis suggests that DNA and protein sequences evolve at a relatively constant rate over time.'
      },
      {
        id: 'g12_bio_u3_h2',
        question: 'What is horizontal gene transfer?',
        options: ['Vertical inheritance', 'Gene transfer between unrelated organisms', 'Sexual reproduction', 'Chromosome duplication'],
        correct: 'Gene transfer between unrelated organisms',
        explanation: 'Horizontal gene transfer is the movement of genetic material between organisms other than by descent.'
      },
      {
        id: 'g12_bio_u3_h3',
        question: 'What is the neutral theory of molecular evolution?',
        options: ['All mutations are harmful', 'Most molecular evolution is due to neutral mutations', 'Only beneficial mutations occur', 'No mutations occur'],
        correct: 'Most molecular evolution is due to neutral mutations',
        explanation: 'The neutral theory proposes that most evolutionary changes at the molecular level are caused by neutral mutations.'
      },
      {
        id: 'g12_bio_u3_h4',
        question: 'What is allopatric speciation?',
        options: ['Speciation in same geographic area', 'Speciation due to geographic separation', 'Instant speciation', 'Speciation reversal'],
        correct: 'Speciation due to geographic separation',
        explanation: 'Allopatric speciation occurs when populations are geographically separated and diverge into separate species.'
      },
      {
        id: 'g12_bio_u3_h5',
        question: 'What is the Red Queen hypothesis?',
        options: ['Species remain static', 'Constant evolutionary arms race', 'Rapid extinction', 'Perfect adaptation'],
        correct: 'Constant evolutionary arms race',
        explanation: 'The Red Queen hypothesis suggests organisms must constantly evolve to maintain their fitness relative to co-evolving organisms.'
      },
      {
        id: 'g12_bio_u3_h6',
        question: 'What is gene flow?',
        options: ['DNA replication', 'Movement of genes between populations', 'Protein synthesis', 'Cell division'],
        correct: 'Movement of genes between populations',
        explanation: 'Gene flow is the transfer of genetic variation from one population to another through migration and reproduction.'
      },
      {
        id: 'g12_bio_u3_h7',
        question: 'What is the difference between microevolution and macroevolution?',
        options: ['No difference', 'Small vs. large scale evolutionary changes', 'Fast vs. slow evolution', 'Beneficial vs. harmful changes'],
        correct: 'Small vs. large scale evolutionary changes',
        explanation: 'Microevolution refers to small-scale changes within species, while macroevolution refers to large-scale evolutionary changes above the species level.'
      },
      {
        id: 'g12_bio_u3_h8',
        question: 'What is coevolution?',
        options: ['Independent evolution', 'Reciprocal evolutionary influence between species', 'Parallel evolution', 'Convergent evolution'],
        correct: 'Reciprocal evolutionary influence between species',
        explanation: 'Coevolution is the reciprocal evolutionary change in interacting species due to natural selection imposed by each other.'
      },
      {
        id: 'g12_bio_u3_h9',
        question: 'What is the role of Hox genes in evolution?',
        options: ['Energy production', 'Body plan development', 'Immune response', 'Reproductive success'],
        correct: 'Body plan development',
        explanation: 'Hox genes are crucial for body plan development and their evolution has been key to the diversity of animal body forms.'
      },
      {
        id: 'g12_bio_u3_h10',
        question: 'What is sympatric speciation?',
        options: ['Speciation with geographic separation', 'Speciation without geographic separation', 'Artificial speciation', 'Extinct speciation'],
        correct: 'Speciation without geographic separation',
        explanation: 'Sympatric speciation occurs when new species evolve from a common ancestor while inhabiting the same geographic region.'
      }
    ]
  },
  'Unit 4: Ecology': {
    easy: [
      {
        id: 'g12_bio_u4_e1',
        question: 'What is ecology?',
        options: ['Study of cells', 'Study of organisms and their environment', 'Study of genetics', 'Study of evolution'],
        correct: 'Study of organisms and their environment',
        explanation: 'Ecology is the scientific study of interactions between organisms and their environment.'
      },
      {
        id: 'g12_bio_u4_e2',
        question: 'What is an ecosystem?',
        options: ['Only living organisms', 'Only non-living factors', 'Living and non-living components interacting', 'Just plants'],
        correct: 'Living and non-living components interacting',
        explanation: 'An ecosystem includes all living organisms and non-living components in a specific area and their interactions.'
      },
      {
        id: 'g12_bio_u4_e3',
        question: 'What is a food chain?',
        options: ['Random feeding', 'Linear sequence of who eats whom', 'Circle of animals', 'Plant growth'],
        correct: 'Linear sequence of who eats whom',
        explanation: 'A food chain is a linear sequence showing the transfer of energy and nutrients from one organism to another.'
      },
      {
        id: 'g12_bio_u4_e4',
        question: 'What are producers in an ecosystem?',
        options: ['Animals that hunt', 'Organisms that make their own food', 'Decomposers', 'Consumers'],
        correct: 'Organisms that make their own food',
        explanation: 'Producers are organisms, typically plants, that make their own food through photosynthesis.'
      },
      {
        id: 'g12_bio_u4_e5',
        question: 'What is a habitat?',
        options: ['Food source', 'Place where an organism lives', 'Breeding behavior', 'Migration route'],
        correct: 'Place where an organism lives',
        explanation: 'A habitat is the natural environment where an organism lives and meets its needs.'
      },
      {
        id: 'g12_bio_u4_e6',
        question: 'What are decomposers?',
        options: ['Primary producers', 'Organisms that break down dead material', 'Top predators', 'Herbivores'],
        correct: 'Organisms that break down dead material',
        explanation: 'Decomposers are organisms that break down dead organic matter and recycle nutrients.'
      },
      {
        id: 'g12_bio_u4_e7',
        question: 'What is the primary source of energy for most ecosystems?',
        options: ['Wind', 'Water', 'Sun', 'Soil'],
        correct: 'Sun',
        explanation: 'The sun is the primary source of energy for most ecosystems through photosynthesis.'
      },
      {
        id: 'g12_bio_u4_e8',
        question: 'What is a population?',
        options: ['All species in an area', 'All individuals of one species in an area', 'Only animals', 'Only plants'],
        correct: 'All individuals of one species in an area',
        explanation: 'A population consists of all individuals of the same species living in a specific area.'
      },
      {
        id: 'g12_bio_u4_e9',
        question: 'What is biodiversity?',
        options: ['Number of ecosystems', 'Variety of life forms', 'Population size', 'Habitat size'],
        correct: 'Variety of life forms',
        explanation: 'Biodiversity refers to the variety of life forms including species, genetic, and ecosystem diversity.'
      },
      {
        id: 'g12_bio_u4_e10',
        question: 'What is conservation?',
        options: ['Using all resources', 'Protecting and preserving nature', 'Hunting animals', 'Clearing forests'],
        correct: 'Protecting and preserving nature',
        explanation: 'Conservation is the protection and preservation of natural resources and ecosystems.'
      }
    ],
    medium: [
      {
        id: 'g12_bio_u4_m1',
        question: 'What is the 10% rule in energy transfer?',
        options: ['90% energy is transferred', 'Only 10% energy passes to next level', '10% energy is lost', 'All energy is conserved'],
        correct: 'Only 10% energy passes to next level',
        explanation: 'The 10% rule states that only about 10% of energy is transferred from one trophic level to the next.'
      },
      {
        id: 'g12_bio_u4_m2',
        question: 'What is carrying capacity?',
        options: ['Maximum population an environment can support', 'Minimum population needed', 'Average population size', 'Population growth rate'],
        correct: 'Maximum population an environment can support',
        explanation: 'Carrying capacity is the maximum population size an environment can sustain indefinitely.'
      },
      {
        id: 'g12_bio_u4_m3',
        question: 'What is the difference between a food web and a food chain?',
        options: ['No difference', 'Food web is more complex with interconnected chains', 'Food web has fewer organisms', 'Food chain is circular'],
        correct: 'Food web is more complex with interconnected chains',
        explanation: 'A food web consists of multiple interconnected food chains showing complex feeding relationships.'
      },
      {
        id: 'g12_bio_u4_m4',
        question: 'What is symbiosis?',
        options: ['Competition between species', 'Close relationship between different species', 'Individual organisms', 'Population growth'],
        correct: 'Close relationship between different species',
        explanation: 'Symbiosis is a close and often long-term biological interaction between different species.'
      },
      {
        id: 'g12_bio_u4_m5',
        question: 'What is succession?',
        options: ['Population decline', 'Gradual change in species composition over time', 'Seasonal changes', 'Daily cycles'],
        correct: 'Gradual change in species composition over time',
        explanation: 'Succession is the gradual change in species composition and community structure over time.'
      },
      {
        id: 'g12_bio_u4_m6',
        question: 'What is a keystone species?',
        options: ['Most abundant species', 'Species with disproportionate ecological impact', 'Largest species', 'Rarest species'],
        correct: 'Species with disproportionate ecological impact',
        explanation: 'A keystone species has a disproportionately large effect on ecosystem structure and function relative to its abundance.'
      },
      {
        id: 'g12_bio_u4_m7',
        question: 'What is the nitrogen cycle?',
        options: ['Movement of water', 'Circulation of nitrogen through ecosystems', 'Carbon movement', 'Oxygen circulation'],
        correct: 'Circulation of nitrogen through ecosystems',
        explanation: 'The nitrogen cycle is the circulation of nitrogen through the atmosphere, terrestrial, and marine ecosystems.'
      },
      {
        id: 'g12_bio_u4_m8',
        question: 'What is eutrophication?',
        options: ['Water purification', 'Excessive nutrient enrichment in water bodies', 'Water shortage', 'Clean water'],
        correct: 'Excessive nutrient enrichment in water bodies',
        explanation: 'Eutrophication is the excessive richness of nutrients in water bodies, often causing algal blooms.'
      },
      {
        id: 'g12_bio_u4_m9',
        question: 'What is an ecological niche?',
        options: ['Physical location only', 'Role and position of species in ecosystem', 'Population size', 'Breeding ground'],
        correct: 'Role and position of species in ecosystem',
        explanation: 'An ecological niche is the role and position a species has in its environment, including all its interactions.'
      },
      {
        id: 'g12_bio_u4_m10',
        question: 'What is biomagnification?',
        options: ['Increase in population', 'Concentration of toxins up food chain', 'Growth of organisms', 'Ecosystem expansion'],
        correct: 'Concentration of toxins up food chain',
        explanation: 'Biomagnification is the increasing concentration of toxins at higher levels of the food chain.'
      }
    ],
    hard: [
      {
        id: 'g12_bio_u4_h1',
        question: 'What is the intermediate disturbance hypothesis?',
        options: ['No disturbance increases diversity', 'Moderate disturbance maximizes diversity', 'Severe disturbance increases diversity', 'Disturbance has no effect'],
        correct: 'Moderate disturbance maximizes diversity',
        explanation: 'The intermediate disturbance hypothesis suggests that moderate levels of disturbance maximize species diversity.'
      },
      {
        id: 'g12_bio_u4_h2',
        question: 'What is the competitive exclusion principle?',
        options: ['All species can coexist', 'Two species with identical niches cannot coexist', 'Competition is beneficial', 'No competition occurs'],
        correct: 'Two species with identical niches cannot coexist',
        explanation: 'The competitive exclusion principle states that two species competing for identical resources cannot coexist indefinitely.'
      },
      {
        id: 'g12_bio_u4_h3',
        question: 'What is the paradox of the plankton?',
        options: ['Too many plankton species', 'High diversity despite limited resources', 'No plankton diversity', 'Plankton extinction'],
        correct: 'High diversity despite limited resources',
        explanation: 'The paradox of the plankton refers to the high diversity of phytoplankton despite apparently limited resources.'
      },
      {
        id: 'g12_bio_u4_h4',
        question: 'What is the relationship between species diversity and ecosystem stability?',
        options: ['No relationship', 'More diversity generally increases stability', 'Diversity decreases stability', 'Only genetic diversity matters'],
        correct: 'More diversity generally increases stability',
        explanation: 'Higher species diversity generally increases ecosystem stability and resilience to disturbances.'
      },
      {
        id: 'g12_bio_u4_h5',
        question: 'What is metapopulation dynamics?',
        options: ['Single population growth', 'Dynamics of interconnected local populations', 'Global population trends', 'Extinct populations'],
        correct: 'Dynamics of interconnected local populations',
        explanation: 'Metapopulation dynamics refers to the dynamics of spatially separated populations connected by migration.'
      },
      {
        id: 'g12_bio_u4_h6',
        question: 'What is the role of edge effects in fragmented habitats?',
        options: ['No effects', 'Altered conditions at habitat boundaries', 'Increased core habitat', 'Habitat improvement'],
        correct: 'Altered conditions at habitat boundaries',
        explanation: 'Edge effects are changes in population or community structures at the boundary between habitats.'
      },
      {
        id: 'g12_bio_u4_h7',
        question: 'What is the difference between r-selected and K-selected species?',
        options: ['No difference', 'r-selected reproduce rapidly, K-selected have stable populations', 'Both are identical', 'Only size matters'],
        correct: 'r-selected reproduce rapidly, K-selected have stable populations',
        explanation: 'r-selected species reproduce rapidly with many offspring, while K-selected species have fewer offspring and stable populations near carrying capacity.'
      },
      {
        id: 'g12_bio_u4_h8',
        question: 'What is the green world hypothesis?',
        options: ['Plants are always green', 'Predators control herbivores, protecting plants', 'No plant-animal interactions', 'All organisms are plants'],
        correct: 'Predators control herbivores, protecting plants',
        explanation: 'The green world hypothesis suggests that predators control herbivore populations, preventing overgrazing of plants.'
      },
      {
        id: 'g12_bio_u4_h9',
        question: 'What is ecological restoration?',
        options: ['Preventing all change', 'Assisting recovery of degraded ecosystems', 'Creating new ecosystems', 'Stopping succession'],
        correct: 'Assisting recovery of degraded ecosystems',
        explanation: 'Ecological restoration is the process of assisting the recovery of degraded, damaged, or destroyed ecosystems.'
      },
      {
        id: 'g12_bio_u4_h10',
        question: 'What is the concept of ecosystem services?',
        options: ['Services to ecosystems', 'Benefits humans derive from ecosystems', 'Ecosystem maintenance', 'Natural disasters'],
        correct: 'Benefits humans derive from ecosystems',
        explanation: 'Ecosystem services are the benefits that humans derive from ecosystems, including provisioning, regulating, cultural, and supporting services.'
      }
    ]
  },
  'Unit 5: Human Biology': {
    easy: [
      {
        id: 'g12_bio_u5_e1',
        question: 'What is the main function of the circulatory system?',
        options: ['Digestion', 'Transport nutrients and oxygen', 'Breathing', 'Thinking'],
        correct: 'Transport nutrients and oxygen',
        explanation: 'The circulatory system transports nutrients, oxygen, hormones, and waste products throughout the body.'
      },
      {
        id: 'g12_bio_u5_e2',
        question: 'Which organ pumps blood through the body?',
        options: ['Lungs', 'Heart', 'Brain', 'Liver'],
        correct: 'Heart',
        explanation: 'The heart is a muscular organ that pumps blood throughout the body via the circulatory system.'
      },
      {
        id: 'g12_bio_u5_e3',
        question: 'What is the main function of red blood cells?',
        options: ['Fight infection', 'Carry oxygen', 'Digest food', 'Store energy'],
        correct: 'Carry oxygen',
        explanation: 'Red blood cells contain hemoglobin, which carries oxygen from the lungs to tissues throughout the body.'
      },
      {
        id: 'g12_bio_u5_e4',
        question: 'Which system is responsible for breathing?',
        options: ['Digestive system', 'Respiratory system', 'Nervous system', 'Muscular system'],
        correct: 'Respiratory system',
        explanation: 'The respiratory system is responsible for taking in oxygen and removing carbon dioxide from the body.'
      },
      {
        id: 'g12_bio_u5_e5',
        question: 'What is the largest organ in the human body?',
        options: ['Heart', 'Brain', 'Liver', 'Skin'],
        correct: 'Skin',
        explanation: 'The skin is the largest organ of the human body, covering the entire surface and protecting internal organs.'
      },
      {
        id: 'g12_bio_u5_e6',
        question: 'Which system breaks down food?',
        options: ['Respiratory system', 'Digestive system', 'Nervous system', 'Skeletal system'],
        correct: 'Digestive system',
        explanation: 'The digestive system breaks down food into nutrients that can be absorbed and used by the body.'
      },
      {
        id: 'g12_bio_u5_e7',
        question: 'What controls body functions and responses?',
        options: ['Digestive system', 'Respiratory system', 'Nervous system', 'Circulatory system'],
        correct: 'Nervous system',
        explanation: 'The nervous system controls and coordinates body functions and responses to stimuli.'
      },
      {
        id: 'g12_bio_u5_e8',
        question: 'Which organs filter waste from blood?',
        options: ['Lungs', 'Kidneys', 'Heart', 'Stomach'],
        correct: 'Kidneys',
        explanation: 'The kidneys filter waste products and excess water from the blood to form urine.'
      },
      {
        id: 'g12_bio_u5_e9',
        question: 'What gives structure and support to the body?',
        options: ['Muscular system', 'Skeletal system', 'Nervous system', 'Digestive system'],
        correct: 'Skeletal system',
        explanation: 'The skeletal system provides structure, support, and protection for the body\'s organs.'
      },
      {
        id: 'g12_bio_u5_e10',
        question: 'What system produces hormones?',
        options: ['Digestive system', 'Endocrine system', 'Respiratory system', 'Muscular system'],
        correct: 'Endocrine system',
        explanation: 'The endocrine system produces and secretes hormones that regulate various body functions.'
      }
    ],
    medium: [
      {
        id: 'g12_bio_u5_m1',
        question: 'What is the function of hemoglobin?',
        options: ['Fight bacteria', 'Carry oxygen and carbon dioxide', 'Clot blood', 'Digest proteins'],
        correct: 'Carry oxygen and carbon dioxide',
        explanation: 'Hemoglobin is a protein in red blood cells that binds and transports oxygen and carbon dioxide.'
      },
      {
        id: 'g12_bio_u5_m2',
        question: 'What happens during inspiration (inhalation)?',
        options: ['Diaphragm moves up', 'Diaphragm moves down, lungs expand', 'Heart rate increases', 'Blood pressure drops'],
        correct: 'Diaphragm moves down, lungs expand',
        explanation: 'During inspiration, the diaphragm contracts and moves down, causing the lungs to expand and air to flow in.'
      },
      {
        id: 'g12_bio_u5_m3',
        question: 'What is the role of insulin?',
        options: ['Increase blood sugar', 'Decrease blood sugar', 'Increase heart rate', 'Regulate breathing'],
        correct: 'Decrease blood sugar',
        explanation: 'Insulin is a hormone that lowers blood glucose levels by facilitating glucose uptake by cells.'
      },
      {
        id: 'g12_bio_u5_m4',
        question: 'What is the function of the nephron?',
        options: ['Produce hormones', 'Filter blood and produce urine', 'Pump blood', 'Process food'],
        correct: 'Filter blood and produce urine',
        explanation: 'The nephron is the functional unit of the kidney that filters blood and produces urine.'
      },
      {
        id: 'g12_bio_u5_m5',
        question: 'What is homeostasis?',
        options: ['Growth process', 'Maintaining stable internal conditions', 'Energy production', 'Waste removal'],
        correct: 'Maintaining stable internal conditions',
        explanation: 'Homeostasis is the process of maintaining stable internal conditions despite external changes.'
      },
      {
        id: 'g12_bio_u5_m6',
        question: 'What is the difference between arteries and veins?',
        options: ['No difference', 'Arteries carry blood away from heart, veins toward heart', 'Arteries are smaller', 'Veins carry oxygen'],
        correct: 'Arteries carry blood away from heart, veins toward heart',
        explanation: 'Arteries carry oxygenated blood away from the heart, while veins carry deoxygenated blood back to the heart.'
      },
      {
        id: 'g12_bio_u5_m7',
        question: 'What is the role of white blood cells?',
        options: ['Carry oxygen', 'Fight infections', 'Clot blood', 'Transport nutrients'],
        correct: 'Fight infections',
        explanation: 'White blood cells are part of the immune system and help defend the body against infections and diseases.'
      },
      {
        id: 'g12_bio_u5_m8',
        question: 'What happens during digestion in the stomach?',
        options: ['Only mechanical breakdown', 'Only chemical breakdown', 'Both mechanical and chemical breakdown', 'No digestion occurs'],
        correct: 'Both mechanical and chemical breakdown',
        explanation: 'The stomach performs both mechanical breakdown through churning and chemical breakdown through gastric acid and enzymes.'
      },
      {
        id: 'g12_bio_u5_m9',
        question: 'What is the function of the cerebellum?',
        options: ['Memory storage', 'Balance and coordination', 'Breathing control', 'Hormone production'],
        correct: 'Balance and coordination',
        explanation: 'The cerebellum is responsible for balance, coordination, and fine motor control.'
      },
      {
        id: 'g12_bio_u5_m10',
        question: 'What is the role of the liver in digestion?',
        options: ['Produce stomach acid', 'Store food', 'Produce bile', 'Absorb nutrients'],
        correct: 'Produce bile',
        explanation: 'The liver produces bile, which helps emulsify fats and aids in their digestion and absorption.'
      }
    ],
    hard: [
      {
        id: 'g12_bio_u5_h1',
        question: 'What is the mechanism of action potentials in neurons?',
        options: ['Chemical signals only', 'Electrical signals via ion movements', 'Mechanical vibrations', 'Light signals'],
        correct: 'Electrical signals via ion movements',
        explanation: 'Action potentials are electrical signals generated by the movement of sodium and potassium ions across the neuron membrane.'
      },
      {
        id: 'g12_bio_u5_h2',
        question: 'What is the Frank-Starling mechanism?',
        options: ['Lung capacity regulation', 'Heart output regulation based on venous return', 'Kidney filtration control', 'Brain activity control'],
        correct: 'Heart output regulation based on venous return',
        explanation: 'The Frank-Starling mechanism describes how the heart adjusts its output based on the amount of blood returning to it.'
      },
      {
        id: 'g12_bio_u5_h3',
        question: 'What is the role of aldosterone in kidney function?',
        options: ['Increase water excretion', 'Regulate sodium and potassium balance', 'Filter glucose', 'Produce red blood cells'],
        correct: 'Regulate sodium and potassium balance',
        explanation: 'Aldosterone regulates sodium reabsorption and potassium excretion in the kidneys, affecting blood pressure and fluid balance.'
      },
      {
        id: 'g12_bio_u5_h4',
        question: 'What is the oxygen-hemoglobin dissociation curve?',
        options: ['Linear relationship', 'S-shaped curve showing oxygen binding', 'Inverse relationship', 'No relationship'],
        correct: 'S-shaped curve showing oxygen binding',
        explanation: 'The oxygen-hemoglobin dissociation curve is S-shaped and shows the relationship between oxygen partial pressure and hemoglobin saturation.'
      },
      {
        id: 'g12_bio_u5_h5',
        question: 'What is the mechanism of synaptic transmission?',
        options: ['Direct electrical connection', 'Chemical neurotransmitter release', 'Physical contact only', 'Magnetic signals'],
        correct: 'Chemical neurotransmitter release',
        explanation: 'Synaptic transmission occurs through the release of chemical neurotransmitters that bind to receptors on the postsynaptic neuron.'
      },
      {
        id: 'g12_bio_u5_h6',
        question: 'What is the role of the hypothalamic-pituitary axis?',
        options: ['Control digestion', 'Integrate nervous and endocrine systems', 'Regulate breathing', 'Control muscle movement'],
        correct: 'Integrate nervous and endocrine systems',
        explanation: 'The hypothalamic-pituitary axis integrates the nervous and endocrine systems to regulate hormone production and release.'
      },
      {
        id: 'g12_bio_u5_h7',
        question: 'What is the mechanism of antibody-antigen interaction?',
        options: ['Random binding', 'Specific shape complementarity', 'Size matching only', 'Color recognition'],
        correct: 'Specific shape complementarity',
        explanation: 'Antibodies bind to antigens through specific shape complementarity between the antibody\'s variable region and the antigen\'s epitope.'
      },
      {
        id: 'g12_bio_u5_h8',
        question: 'What is the role of surfactant in the lungs?',
        options: ['Increase surface tension', 'Reduce surface tension', 'Produce mucus', 'Filter air'],
        correct: 'Reduce surface tension',
        explanation: 'Surfactant reduces surface tension in the alveoli, preventing them from collapsing and facilitating gas exchange.'
      },
      {
        id: 'g12_bio_u5_h9',
        question: 'What is the mechanism of glucose reabsorption in kidneys?',
        options: ['Passive diffusion only', 'Active transport with glucose transporters', 'Osmosis', 'Filtration'],
        correct: 'Active transport with glucose transporters',
        explanation: 'Glucose is reabsorbed in the kidneys through active transport using sodium-glucose co-transporters in the proximal tubule.'
      },
      {
        id: 'g12_bio_u5_h10',
        question: 'What is the role of memory T cells in immunity?',
        options: ['Immediate response only', 'Long-term immune memory', 'Antibody production', 'Inflammation only'],
        correct: 'Long-term immune memory',
        explanation: 'Memory T cells provide long-term immune memory, enabling faster and stronger responses to previously encountered antigens.'
      }
    ]
  },
  'Unit 6: Climate Change': {
    easy: [
      {
        id: 'g12_bio_u6_e1',
        question: 'What is climate change?',
        options: ['Daily weather changes', 'Long-term changes in global climate patterns', 'Seasonal variations', 'Local temperature changes'],
        correct: 'Long-term changes in global climate patterns',
        explanation: 'Climate change refers to long-term shifts and alterations in global or regional climate patterns.'
      },
      {
        id: 'g12_bio_u6_e2',
        question: 'What is the main cause of current climate change?',
        options: ['Solar radiation', 'Human activities', 'Natural cycles', 'Volcanic activity'],
        correct: 'Human activities',
        explanation: 'Current climate change is primarily caused by human activities, especially the emission of greenhouse gases.'
      },
      {
        id: 'g12_bio_u6_e3',
        question: 'What is the greenhouse effect?',
        options: ['Cooling of Earth', 'Trapping of heat in atmosphere', 'Formation of clouds', 'Wind patterns'],
        correct: 'Trapping of heat in atmosphere',
        explanation: 'The greenhouse effect is the process by which greenhouse gases trap heat in Earth\'s atmosphere.'
      },
      {
        id: 'g12_bio_u6_e4',
        question: 'Which gas is the main contributor to greenhouse effect?',
        options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
        correct: 'Carbon dioxide',
        explanation: 'Carbon dioxide is the primary greenhouse gas contributing to human-caused climate change.'
      },
      {
        id: 'g12_bio_u6_e5',
        question: 'What is global warming?',
        options: ['Local temperature increase', 'Increase in Earth\'s average temperature', 'Summer heat waves', 'Urban heat islands'],
        correct: 'Increase in Earth\'s average temperature',
        explanation: 'Global warming refers to the long-term increase in Earth\'s average surface temperature.'
      },
      {
        id: 'g12_bio_u6_e6',
        question: 'How does deforestation contribute to climate change?',
        options: ['Reduces oxygen production', 'Reduces carbon dioxide absorption', 'Increases rainfall', 'Decreases temperature'],
        correct: 'Reduces carbon dioxide absorption',
        explanation: 'Deforestation reduces the number of trees that can absorb carbon dioxide from the atmosphere.'
      },
      {
        id: 'g12_bio_u6_e7',
        question: 'What is a major effect of sea level rise?',
        options: ['Increased fish populations', 'Coastal flooding', 'Better shipping routes', 'More beaches'],
        correct: 'Coastal flooding',
        explanation: 'Sea level rise leads to coastal flooding and threatens low-lying areas and communities.'
      },
      {
        id: 'g12_bio_u6_e8',
        question: 'What can individuals do to reduce climate change?',
        options: ['Use more energy', 'Reduce energy consumption', 'Burn more fossil fuels', 'Ignore the problem'],
        correct: 'Reduce energy consumption',
        explanation: 'Individuals can help by reducing energy consumption, using renewable energy, and adopting sustainable practices.'
      },
      {
        id: 'g12_bio_u6_e9',
        question: 'What are renewable energy sources?',
        options: ['Coal and oil', 'Solar and wind', 'Natural gas', 'Nuclear only'],
        correct: 'Solar and wind',
        explanation: 'Renewable energy sources like solar and wind can be replenished naturally and produce little to no greenhouse gases.'
      },
      {
        id: 'g12_bio_u6_e10',
        question: 'What is happening to polar ice caps?',
        options: ['Growing larger', 'Melting', 'Staying the same', 'Moving locations'],
        correct: 'Melting',
        explanation: 'Polar ice caps are melting due to rising global temperatures caused by climate change.'
      }
    ],
    medium: [
      {
        id: 'g12_bio_u6_m1',
        question: 'What is the carbon cycle?',
        options: ['Movement of water', 'Circulation of carbon through Earth systems', 'Plant growth only', 'Rock formation'],
        correct: 'Circulation of carbon through Earth systems',
        explanation: 'The carbon cycle is the circulation of carbon through the atmosphere, biosphere, hydrosphere, and geosphere.'
      },
      {
        id: 'g12_bio_u6_m2',
        question: 'What is ocean acidification?',
        options: ['Ocean becoming more basic', 'Ocean becoming more acidic due to CO2 absorption', 'Ocean temperature rise', 'Ocean level rise'],
        correct: 'Ocean becoming more acidic due to CO2 absorption',
        explanation: 'Ocean acidification occurs when the ocean absorbs carbon dioxide from the atmosphere, forming carbonic acid.'
      },
      {
        id: 'g12_bio_u6_m3',
        question: 'What is a positive feedback loop in climate change?',
        options: ['Good effects only', 'Self-reinforcing process that amplifies change', 'Negative effects', 'Stable conditions'],
        correct: 'Self-reinforcing process that amplifies change',
        explanation: 'A positive feedback loop is a process that amplifies or accelerates climate change effects.'
      },
      {
        id: 'g12_bio_u6_m4',
        question: 'What is the albedo effect?',
        options: ['Heat absorption', 'Reflection of solar radiation', 'Cloud formation', 'Wind generation'],
        correct: 'Reflection of solar radiation',
        explanation: 'The albedo effect refers to the reflection of solar radiation by Earth\'s surfaces, with lighter surfaces reflecting more.'
      },
      {
        id: 'g12_bio_u6_m5',
        question: 'How do aerosols affect climate?',
        options: ['Always warm the atmosphere', 'Can both cool and warm atmosphere', 'Have no effect', 'Only affect local weather'],
        correct: 'Can both cool and warm atmosphere',
        explanation: 'Aerosols can have both cooling effects (by reflecting sunlight) and warming effects (by absorbing heat).'
      },
      {
        id: 'g12_bio_u6_m6',
        question: 'What is climate adaptation?',
        options: ['Preventing climate change', 'Adjusting to climate change effects', 'Ignoring climate change', 'Reversing climate change'],
        correct: 'Adjusting to climate change effects',
        explanation: 'Climate adaptation involves adjusting systems and practices to minimize damage from climate change effects.'
      },
      {
        id: 'g12_bio_u6_m7',
        question: 'What is the difference between weather and climate?',
        options: ['No difference', 'Weather is short-term, climate is long-term patterns', 'Weather is global, climate is local', 'Climate changes daily'],
        correct: 'Weather is short-term, climate is long-term patterns',
        explanation: 'Weather refers to short-term atmospheric conditions, while climate refers to long-term weather patterns.'
      },
      {
        id: 'g12_bio_u6_m8',
        question: 'What is geoengineering?',
        options: ['Natural climate regulation', 'Deliberate intervention to counteract climate change', 'Weather prediction', 'Geological studies'],
        correct: 'Deliberate intervention to counteract climate change',
        explanation: 'Geoengineering involves deliberate, large-scale interventions to counteract climate change effects.'
      },
      {
        id: 'g12_bio_u6_m9',
        question: 'How does methane contribute to climate change?',
        options: ['Cooling effect only', 'Potent greenhouse gas', 'No effect on climate', 'Reduces other greenhouse gases'],
        correct: 'Potent greenhouse gas',
        explanation: 'Methane is a potent greenhouse gas, approximately 25 times more effective at trapping heat than CO2.'
      },
      {
        id: 'g12_bio_u6_m10',
        question: 'What are tipping points in climate systems?',
        options: ['Gradual changes', 'Thresholds leading to irreversible changes', 'Temperature measurements', 'Weather predictions'],
        correct: 'Thresholds leading to irreversible changes',
        explanation: 'Climate tipping points are thresholds beyond which changes become self-sustaining and potentially irreversible.'
      }
    ],
    hard: [
      {
        id: 'g12_bio_u6_h1',
        question: 'What is the thermohaline circulation?',
        options: ['Atmospheric circulation', 'Ocean circulation driven by temperature and salinity', 'Wind patterns', 'Solar radiation patterns'],
        correct: 'Ocean circulation driven by temperature and salinity',
        explanation: 'Thermohaline circulation is the global ocean circulation driven by differences in water density due to temperature and salinity.'
      },
      {
        id: 'g12_bio_u6_h2',
        question: 'What is radiative forcing?',
        options: ['Solar energy production', 'Measure of climate change factors influence', 'Temperature measurement', 'Wind force measurement'],
        correct: 'Measure of climate change factors influence',
        explanation: 'Radiative forcing measures the difference between energy absorbed and energy radiated back to space due to various factors.'
      },
      {
        id: 'g12_bio_u6_h3',
        question: 'What is the ice-albedo feedback?',
        options: ['Ice formation process', 'Melting ice reduces reflection, increasing warming', 'Ice preservation method', 'Temperature regulation'],
        correct: 'Melting ice reduces reflection, increasing warming',
        explanation: 'The ice-albedo feedback occurs when melting ice reduces surface reflectivity, leading to more heat absorption and further warming.'
      },
      {
        id: 'g12_bio_u6_h4',
        question: 'What is carbon sequestration?',
        options: ['Carbon production', 'Long-term storage of carbon dioxide', 'Carbon consumption', 'Carbon circulation'],
        correct: 'Long-term storage of carbon dioxide',
        explanation: 'Carbon sequestration is the long-term storage of carbon dioxide to mitigate climate change.'
      },
      {
        id: 'g12_bio_u6_h5',
        question: 'What is the role of clouds in climate change?',
        options: ['Only cooling effect', 'Complex effects - both cooling and warming', 'Only warming effect', 'No effect on climate'],
        correct: 'Complex effects - both cooling and warming',
        explanation: 'Clouds have complex effects on climate, providing both cooling (by reflecting sunlight) and warming (by trapping heat) effects.'
      },
      {
        id: 'g12_bio_u6_h6',
        question: 'What is the Atlantic Meridional Overturning Circulation (AMOC)?',
        options: ['Atmospheric circulation', 'Ocean circulation system in Atlantic', 'Wind pattern', 'Temperature gradient'],
        correct: 'Ocean circulation system in Atlantic',
        explanation: 'AMOC is a large-scale ocean circulation pattern in the Atlantic that plays a crucial role in global climate regulation.'
      },
      {
        id: 'g12_bio_u6_h7',
        question: 'What is climate sensitivity?',
        options: ['Weather variability', 'Temperature response to CO2 doubling', 'Seasonal changes', 'Local climate variations'],
        correct: 'Temperature response to CO2 doubling',
        explanation: 'Climate sensitivity is the amount of global warming expected from a doubling of atmospheric CO2 concentrations.'
      },
      {
        id: 'g12_bio_u6_h8',
        question: 'What is the role of permafrost in climate change?',
        options: ['No role', 'Contains carbon that can be released when thawed', 'Only cooling effect', 'Absorbs greenhouse gases'],
        correct: 'Contains carbon that can be released when thawed',
        explanation: 'Permafrost contains large amounts of carbon that can be released as CO2 and methane when it thaws due to warming.'
      },
      {
        id: 'g12_bio_u6_h9',
        question: 'What is mitigation in climate change context?',
        options: ['Adapting to changes', 'Reducing greenhouse gas emissions', 'Ignoring the problem', 'Studying climate'],
        correct: 'Reducing greenhouse gas emissions',
        explanation: 'Climate mitigation involves actions to reduce greenhouse gas emissions and slow the rate of climate change.'
      },
      {
        id: 'g12_bio_u6_h10',
        question: 'What is the commitment to warming?',
        options: ['Future temperature goals', 'Warming already locked in by past emissions', 'Temperature predictions', 'Seasonal warming'],
        correct: 'Warming already locked in by past emissions',
        explanation: 'Commitment to warming refers to the additional warming that will occur due to greenhouse gases already in the atmosphere.'
      }
    ]
  }
};

export const getGrade12BiologyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  console.log('Getting Grade 12 Biology questions for:', { unit, difficulty });
  
  if (grade12BiologyQuestions[unit] && grade12BiologyQuestions[unit][difficulty]) {
    return grade12BiologyQuestions[unit][difficulty];
  }
  
  console.log('No questions found for:', unit, difficulty);
  console.log('Available units:', Object.keys(grade12BiologyQuestions));
  return [];
};
