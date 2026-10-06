/* ==========================================================================
   FUTURE MUSEUM - CURATED MUSEUM DATABASE
   "ANCIENT OBJECTS. MODERN INTERFACE. FUTURE INTERACTION."
   ========================================================================== */

export const collectionsData = [
  {
    id: "ancient-civilizations",
    number: "01",
    title: "Ancient Civilizations",
    era: "3000 BCE — 500 BCE",
    image: "./assets/ancient-tut-mask.jpg",
    description: "The dawn of human ingenuity, divine monuments, and the immortal pursuit of eternity.",
    curatorialEssay: "Across the fertile riverbanks of the Nile, Euphrates, and Indus, early human societies codified the infinite through gold, basalt, and sacred geometry. This gallery assembles masterworks that defied millennia to speak directly to the modern era.",
    artifactsCount: 24,
    featuredArtifactId: "tutankhamun-mask",
    tags: ["Gold", "Dynastic", "Ritual", "Immortality"]
  },
  {
    id: "classical-antiquity",
    number: "02",
    title: "Classical Antiquity",
    era: "500 BCE — 476 CE",
    image: "./assets/winged-victory.jpg",
    description: "Greco-Roman philosophy carved in marble, celebrating the sublime proportions of the human form.",
    curatorialEssay: "In ancient Athens and imperial Rome, artists and mathematicians uncovered the Golden Ratio. Sculpture ceased to be merely representational—it became an ontological inquiry into divine tension, civic balance, and bodily perfection.",
    artifactsCount: 38,
    featuredArtifactId: "winged-victory",
    tags: ["Marble", "Philosophy", "Proportion", "Empire"]
  },
  {
    id: "medieval-world",
    number: "03",
    title: "Medieval World",
    era: "476 CE — 1400 CE",
    image: "./assets/medieval-armour.jpg",
    description: "Gothic transcendence, sacred illuminated relics, and ceremonial armor forged in steel and gold.",
    curatorialEssay: "Far from an era of darkness, the medieval millennium witnessed the birth of monumental cathedrals, intricate filigree metalwork, and profound theological contemplation embodied in chivalric craft and gilded sanctuaries.",
    artifactsCount: 19,
    featuredArtifactId: "gothic-ceremonial-armour",
    tags: ["Steel", "Gothic", "Sanctuary", "Heraldry"]
  },
  {
    id: "age-of-invention",
    number: "04",
    title: "Age of Invention",
    era: "1400 CE — 1850 CE",
    image: "./assets/astrolabe-invention.jpg",
    description: "The Renaissance awakening of mechanics, celestial navigation, and observational science.",
    curatorialEssay: "When observational optics met artisan precision, humanity mapped both the cosmos and the anatomy. From Da Vinci’s kinetic geometries to brass astrolabes, tools transformed our perception of destiny.",
    artifactsCount: 31,
    featuredArtifactId: "da-vinci-astrolabe",
    tags: ["Astrolabe", "Renaissance", "Optics", "Mechanics"]
  },
  {
    id: "digital-era",
    number: "05",
    title: "Digital Era",
    era: "1950 CE — 2030 CE",
    image: "./assets/renaissance-portrait.jpg",
    description: "The transition from physical canvas to silicon circuits, algorithms, and interconnected memory.",
    curatorialEssay: "The convergence of electronic computation and human culture transformed artifacts into digital substrates. We explore how physical masterpieces were preserved and reconstituted in crystalline data formats.",
    artifactsCount: 16,
    featuredArtifactId: "renaissance-portrait",
    tags: ["Computation", "Preservation", "Silicon", "Synthesis"]
  },
  {
    id: "future-visions",
    number: "06",
    title: "Beyond The Physical",
    era: "2030 CE — 3000 CE",
    image: "./assets/celestial-codex-future.jpg",
    description: "Trans-material art, quantum holographic lattices, and the immortal archives of humanity's tomorrow.",
    curatorialEssay: "When physical decay is transcended by light matrices and quantum magnetic suspension, art enters a post-material continuum. Here, future antiquities exist as kinetic mathematical poetry.",
    artifactsCount: 12,
    featuredArtifactId: "celestial-codex",
    tags: ["Quantum", "Holography", "Levitation", "Tomorrow"]
  }
];

export const artifactsData = [
  {
    id: "david",
    name: "David",
    creator: "Michelangelo Buonarroti",
    date: "1501 — 1504 CE",
    period: "High Renaissance",
    origin: "Florence, Republic of Florence",
    material: "Carrara Marble",
    dimensions: "517 cm × 198 cm",
    archiveCode: "ARCHIVE / 001",
    collectionId: "classical-antiquity",
    image: "./assets/hero-david.jpg",
    heroHighlight: true,
    description: "A supreme masterpiece of Renaissance sculpture, capturing the biblical hero David not after triumph, but in the contemplative instant before casting his stone. In marble, Michelangelo achieved a living pulse of tension, anatomical equilibrium, and supreme human dignity.",
    significance: "Stands as the definitive icon of High Renaissance humanism, representing the triumph of intellect and moral fortitude over sheer tyrannical force.",
    curatorialNote: "Preserved under multi-spectral laser scanning to monitor stress fractures within Carrara quarry veins. Displayed here with interactive celestial harmonic projection.",
    flipFact: {
      tag: "ARCHIVAL REVELATION",
      title: "MARBLE WAS NOT ALWAYS WHITE.",
      desc: "Classical antiquities were originally painted in vivid vermilion, lapis lazuli, and gilded bronze leaf. Centuries of weathering and Renaissance misinterpretation created the myth of unblemished monochromatic stone."
    },
    dossier: {
      catalogNumber: "ARC-1501-DAV",
      provenance: "Piazza della Signoria, Florence",
      condition: "Pristine / Stabilized Micro-Atmosphere",
      restorationYear: "2024 Spectral Restoration",
      curator: "Dr. Elena Vance"
    }
  },
  {
    id: "tutankhamun-mask",
    name: "Mask of Tutankhamun",
    creator: "Royal Goldsmiths of Thebes",
    date: "1323 BCE",
    period: "New Kingdom (18th Dynasty)",
    origin: "Valley of the Kings, Egypt",
    material: "Solid Gold, Lapis Lazuli, Turquoise, Obsidian",
    dimensions: "54 cm × 39.3 cm × 49 cm",
    archiveCode: "ARCHIVE / 002",
    collectionId: "ancient-civilizations",
    image: "./assets/ancient-tut-mask.jpg",
    description: "Forged from two sheets of beaten high-karat gold with inlaid vitreous glass paste and semiprecious stones. The serene countenance depicts the youthful king bearing the nemes headdress, the uraeus cobra, and the royal vulture.",
    significance: "The foremost emblem of Egyptian metallurgy and divine kingship, bridging mortal vulnerability with immortal solar divinity.",
    curatorialNote: "Exhibited within an oxygen-depleted argon vitrine at 19.5°C to preserve ancient organic adhesives holding the lapis brows.",
    flipFact: {
      tag: "METALLURGIC SECRET",
      title: "EXTRATERRESTRIAL BLADES",
      desc: "Within the pharaoh's sarcophagus, alongside this golden mask, lay a ceremonial dagger forged from nickel-rich meteoritic iron—a celestial metal prized above gold by ancient kingdoms."
    },
    dossier: {
      catalogNumber: "ARC-1323-TUT",
      provenance: "KV62, Luxor, Egypt",
      condition: "Flawless Solar Patina",
      restorationYear: "1925 Carter Documentation / 2022 Laser Scan",
      curator: "Prof. Tariq Mansoor"
    }
  },
  {
    id: "winged-victory",
    name: "Winged Victory of Samothrace",
    creator: "Pythokritos of Rhodes (Attributed)",
    date: "190 BCE",
    period: "Hellenistic Greece",
    origin: "Sanctuary of the Great Gods, Samothrace",
    material: "Parian Marble & Lartos Marble Base",
    dimensions: "244 cm (Statue) × 557 cm (Total with Ship Prow)",
    archiveCode: "ARCHIVE / 003",
    collectionId: "classical-antiquity",
    image: "./assets/winged-victory.jpg",
    description: "Nike, the goddess of naval triumph, descending onto the prow of a warship. The wind whips her sheer chiton against her torso with extraordinary naturalism and explosive dynamism.",
    significance: "Represents the summit of Hellenistic theatrical motion, shattering the rigid symmetry of earlier archaic sculpture.",
    curatorialNote: "Positioned atop a black basalt ramp to recreate the oceanic cliff-side elevation of its original Aegean sanctuary.",
    flipFact: {
      tag: "MYSTERY OF THE FORM",
      title: "THE MISSING HEAD & HANDS",
      desc: "In 1950, archaeologists excavated Nike's right hand on Samothrace: its fingers were gently uncurled in a gesture of peaceful salutation, proving she held neither horn nor wreath."
    },
    dossier: {
      catalogNumber: "ARC-0190-NIK",
      provenance: "Aegean Sea, Greece",
      condition: "Fragmentary Masterpiece",
      restorationYear: "2014 Cleaning & Stabilization",
      curator: "Dr. Camille Laurent"
    }
  },
  {
    id: "celestial-codex",
    name: "The Celestial Codex",
    creator: "Autonomous Synthetic Foundry",
    date: "2088 CE",
    period: "Post-Physical Continuum",
    origin: "Antarctic Magnetic Observatory",
    material: "Levitating Quartz Crystal, Gold Nanowires, Superconducting Core",
    dimensions: "45 cm × 45 cm × 45 cm",
    archiveCode: "ARCHIVE / 006",
    collectionId: "future-visions",
    image: "./assets/celestial-codex-future.jpg",
    description: "Suspended in a perpetual quantum Meissner effect field, this dodecahedral artifact encodes the combined biological and literary memory of humanity in laser-etched photonic lattices.",
    significance: "The definitive monument of the 21st century transition from fragile physical libraries to immortal quantum storage.",
    curatorialNote: "Maintained at 4.2 Kelvin by quiet cryogenic helium loops within a custom anti-vibration glass vitrine.",
    flipFact: {
      tag: "QUANTUM HORIZON",
      title: "A MILLION YEARS OF MEMORY",
      desc: "Unlike paper which oxidizes in centuries or digital hard drives that degrade in decades, 5D optical storage quartz preserves quintillions of bytes for over 13 billion years without degradation."
    },
    dossier: {
      catalogNumber: "ARC-2088-CDX",
      provenance: "Amundsen-Scott Quantum Array",
      condition: "Active Quantum Coherence",
      restorationYear: "Continuous Self-Repair Protocol",
      curator: "Dr. Alistair Thorne"
    }
  },
  {
    id: "marcus-aurelius",
    name: "Bust of Marcus Aurelius",
    creator: "Imperial Sculptors of Rome",
    date: "161 — 180 CE",
    period: "Antonine Roman Empire",
    origin: "Rome, Italian Peninsula",
    material: "Pentelic Marble",
    dimensions: "84 cm × 62 cm",
    archiveCode: "ARCHIVE / 004",
    collectionId: "classical-antiquity",
    image: "./assets/marcus-aurelius.jpg",
    description: "The Philosopher-Emperor depicted with profound, melancholic introspection. The deeply undercut curly hair and contemplative gaze embody the Stoic Meditations recorded along the Danube frontiers.",
    significance: "A rare fusion of supreme imperial command and radical philosophical humility.",
    curatorialNote: "Showcased with directional warm raking light that accentuates the drill-work in the emperor's iconic beard.",
    flipFact: {
      tag: "STOIC HERITAGE",
      title: "WRITTEN IN THE SHADOW OF WAR",
      desc: "Marcus Aurelius never intended his 'Meditations' to be published. They were personal self-admonitions scribbled in Greek by candlelight during freezing campaigns against Germanic tribes."
    },
    dossier: {
      catalogNumber: "ARC-0176-AUR",
      provenance: "Palatine Hill, Rome",
      condition: "Intact with Soft Imperial Patina",
      restorationYear: "1998 Laser De-crusting",
      curator: "Dr. Matteo Rossi"
    }
  },
  {
    id: "da-vinci-astrolabe",
    name: "Planetary Astrolabe & Armillary",
    creator: "Leonardo da Vinci Workshop Guild",
    date: "1508 CE",
    period: "High Renaissance",
    origin: "Milan, Duchy of Milan",
    material: "Chased Brass, Gilded Bronze, Steel Pivots",
    dimensions: "62 cm Diameter × 78 cm Height",
    archiveCode: "ARCHIVE / 005",
    collectionId: "age-of-invention",
    image: "./assets/astrolabe-invention.jpg",
    description: "An intricate multi-ringed astronomical computing device featuring engraved stereographic stereograms of the Mediterranean sky, movable rete pointers for 28 stellar constellations, and an armillary meridian circle.",
    significance: "The physical predecessor to modern navigation computers, enabling trans-oceanic exploration and astronomical measurement.",
    curatorialNote: "Gears and dials are calibrated weekly with microscopic lubricant to ensure celestial accuracy.",
    flipFact: {
      tag: "COSMIC GEOMETRY",
      title: "THE SKY IN YOUR HAND",
      desc: "An astrolabe allowed an ancient navigator to determine exact solar time, predict sunrise, measure mountain elevations, and locate true magnetic north using only the angle of the stars."
    },
    dossier: {
      catalogNumber: "ARC-1508-AST",
      provenance: "Castello Sforzesco, Milan",
      condition: "Functional Antique Mechanical Assembly",
      restorationYear: "2018 Ultrasonic Cleanse",
      curator: "Dr. Beatrice Bellini"
    }
  },
  {
    id: "gothic-ceremonial-armour",
    name: "Ceremonial Gilded Field Armour",
    creator: "Master Anton Peffenhauser",
    date: "1548 CE",
    period: "Late Gothic / Northern Renaissance",
    origin: "Augsburg, Holy Roman Empire",
    material: "Fluted Tempered Steel, 24k Gold Inlay, Velvet",
    dimensions: "188 cm Height (Mannequin)",
    archiveCode: "ARCHIVE / 007",
    collectionId: "medieval-world",
    image: "./assets/medieval-armour.jpg",
    description: "A complete harness of parade armor adorned with gold damascening, acanthus foliate scrollwork, and mythological vignettes. Designed to offer both supreme kinetic protection and magnificent courtly splendor.",
    significance: "Demonstrates the pinnacle of Renaissance metallurgical hardening and decorative engraving.",
    curatorialNote: "Supported by an internal carbon-fiber articulated skeleton to eliminate mechanical pressure on original joints.",
    flipFact: {
      tag: "BATTLEFIELD GENIUS",
      title: "LIGHTER THAN MODERN INFANTRY GEAR",
      desc: "A custom tailored medieval suit of full plate armor weighed between 20 to 25 kg—significantly lighter and more evenly distributed across the body than the 35+ kg packs carried by contemporary soldiers."
    },
    dossier: {
      catalogNumber: "ARC-1548-ARM",
      provenance: "Imperial Armory of Maximilian II",
      condition: "Immaculate Guilded Finish",
      restorationYear: "2011 Non-Invasive Conservation",
      curator: "Dr. Wolfgang Weber"
    }
  },
  {
    id: "renaissance-portrait",
    name: "Portrait of a Noblewoman",
    creator: "Workshop of Raphael Sanzio",
    date: "1512 CE",
    period: "High Renaissance",
    origin: "Urbino, Italy",
    material: "Oil and Tempera on Poplar Panel",
    dimensions: "72 cm × 54 cm",
    archiveCode: "ARCHIVE / 008",
    collectionId: "digital-era",
    image: "./assets/renaissance-portrait.jpg",
    description: "Exemplifies the sfumato glaze technique where tones melt imperceptibly into shadows. The noblewoman's serene gaze, velvet sleeves, and gold-embroidered bodice showcase psychological depth and spatial harmony.",
    significance: "A crucial milestone in secular portraiture celebrating individual interiority and psychological presence.",
    curatorialNote: "Preserved behind anti-reflective museum opti-glass with humidity micro-climate monitored via smart sensor arrays.",
    flipFact: {
      tag: "THE SECRET LAYER",
      title: "HIDDEN UNDERDRAWINGS",
      desc: "Infrared reflectography revealed a completely different earlier composition beneath this painting—a depiction of an open landscape balcony with a falcon before the artist reworked it."
    },
    dossier: {
      catalogNumber: "ARC-1512-PRT",
      provenance: "Ducal Palace of Urbino",
      condition: "Stable Craquelure Network",
      restorationYear: "2016 Varnishing & Spectral Analysis",
      curator: "Dr. Sophia Castiglione"
    }
  }
];

export const timelineData = [
  {
    id: "ancient",
    title: "Ancient Dawn",
    dates: "3000 BCE — 500 BCE",
    shortDesc: "Monumental stone masonry, hieroglyphic memory, and the solar alignment of pyramids.",
    representativeArtifact: "Mask of Tutankhamun",
    image: "./assets/ancient-tut-mask.jpg",
    highlights: ["First written alphabets in Sumer & Egypt", "Lost-wax bronze metallurgy", "Astrological star charts"]
  },
  {
    id: "classical",
    title: "Classical Antiquity",
    dates: "500 BCE — 476 CE",
    shortDesc: "The Golden Ratio, philosophical dialogue, and Athenian democratic assemblies in marble.",
    representativeArtifact: "Winged Victory of Samothrace",
    image: "./assets/winged-victory.jpg",
    highlights: ["Parthenon architectural optical corrections", "Roman arch & hydraulic concrete", "Stoic philosophy"]
  },
  {
    id: "medieval",
    title: "Medieval Splendor",
    dates: "476 CE — 1400 CE",
    shortDesc: "Flying buttresses, illuminated manuscripts, and the spiritual transcendence of Gothic arches.",
    representativeArtifact: "Ceremonial Gilded Armor",
    image: "./assets/medieval-armour.jpg",
    highlights: ["Sainte-Chapelle stained glass", "Monastic preservation of classical texts", "Chivalric heraldry"]
  },
  {
    id: "renaissance",
    title: "High Renaissance",
    dates: "1400 CE — 1650 CE",
    shortDesc: "The rebirth of scientific observation, anatomical dissection, linear perspective, and humanism.",
    representativeArtifact: "David by Michelangelo",
    image: "./assets/hero-david.jpg",
    highlights: ["Brunelleschi's Florentine dome", "Gutenberg moveable type printing", "Scientific empiricism"]
  },
  {
    id: "industrial",
    title: "Age of Invention",
    dates: "1760 CE — 1950 CE",
    shortDesc: "Steam locomotion, photography, electromagnetic telegraphy, and mass mechanized craft.",
    representativeArtifact: "Planetary Astrolabe",
    image: "./assets/astrolabe-invention.jpg",
    highlights: ["Electrification of world capitals", "First daguerreotype photographs", "Modern industrial design"]
  },
  {
    id: "digital",
    title: "Silicon Dawn",
    dates: "1950 CE — 2030 CE",
    shortDesc: "Microchips, global neural internet, digitized archives, and synthetic intelligence.",
    representativeArtifact: "Noblewoman Portrait Archive",
    image: "./assets/renaissance-portrait.jpg",
    highlights: ["Hypertext global web", "High-fidelity digital preservation", "Quantum computational arrays"]
  },
  {
    id: "future",
    title: "Beyond The Physical",
    dates: "2030 CE — 3000 CE",
    shortDesc: "Trans-material sculptures, holographic memories, and post-biological archives of civilization.",
    representativeArtifact: "The Celestial Codex",
    image: "./assets/celestial-codex-future.jpg",
    highlights: ["5D quartz permanent archives", "Magnetic levitation exhibition vitrines", "Synthesized temporal galleries"]
  }
];

export const exhibitionsData = [
  {
    id: "the-story-of-humanity",
    title: "The Story of Humanity",
    subtitle: "From Pigment on Cave Stone to Quantum Photons",
    status: "NOW SHOWING — MAIN ROTUNDA",
    dates: "Permanent Installation",
    image: "./assets/hero-cathedral.jpg",
    description: "An epic immersive walkthrough traversing 5,000 years of aesthetic consciousness, showing how every ancient creation anticipated tomorrow's digital universe.",
    galleryHall: "Gallery 01: Grand Oculus Rotunda",
    featuredArtifacts: ["david", "tutankhamun-mask", "winged-victory"]
  },
  {
    id: "machines-that-changed-us",
    title: "Machines That Changed Us",
    subtitle: "Astrolabes, Chronometers & Silicon Thought",
    status: "SPECIAL CURATION — EAST WING",
    dates: "Through December 2026",
    image: "./assets/astrolabe-invention.jpg",
    description: "Explore the precise mechanical and mathematical instruments through which humans transformed our relationship with space, time, and stellar navigation.",
    galleryHall: "Gallery 04: The Hall of Horology",
    featuredArtifacts: ["da-vinci-astrolabe", "celestial-codex"]
  },
  {
    id: "beyond-the-physical",
    title: "Beyond The Physical",
    subtitle: "Trans-Material Archives & Quantum Sculptures",
    status: "EXPERIMENTAL PAVILION",
    dates: "Exclusive 2026 Exhibition",
    image: "./assets/celestial-codex-future.jpg",
    description: "Where classical sculptures meet holographic interference patterns. Witness works that hover weightlessly in silent magnetic cradles.",
    galleryHall: "Gallery 07: Quantum Pavilion",
    featuredArtifacts: ["celestial-codex", "david"]
  },
  {
    id: "the-museum-of-tomorrow",
    title: "The Museum of Tomorrow",
    subtitle: "Preserving Ancient Memory for the Next Millennium",
    status: "ARCHIVAL LAB VISITS",
    dates: "Daily Guided Tours",
    image: "./assets/museum-exterior.jpg",
    description: "Go behind the scenes of our subterranean cryo-preservation vaults and laser restoration studios preserving classical relics against climate and entropy.",
    galleryHall: "Sub-Level B: Conservation Vaults",
    featuredArtifacts: ["gothic-ceremonial-armour", "marcus-aurelius"]
  }
];

export const visitInfoData = {
  institution: "Future Museum Pavilion",
  campus: "Smt. Indira Gandhi College of Engineering",
  address: "Sector 8, Ghansoli, Navi Mumbai, Maharashtra 400701",
  hours: [
    { days: "Tuesday — Friday", time: "10:00 AM — 8:00 PM" },
    { days: "Saturday — Sunday", time: "09:30 AM — 9:30 PM" },
    { days: "Mondays", time: "Closed for Archival Maintenance" }
  ],
  admission: {
    general: "Free Entry / Pre-Booking Recommended",
    immersivePass: "Complimentary for Students & Researchers",
    audioGuide: "Included via Museum Web App"
  },
  accessibility: [
    "Full step-free wheelchair accessibility throughout all galleries",
    "Multi-sensory tactile bronze replicas for visually impaired visitors",
    "Quiet sensory hours every Thursday morning",
    "Complimentary assisted hearing inductive loops in all lecture halls"
  ]
};
