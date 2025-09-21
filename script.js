// Grab DOM elements
document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll(".element-name[title]");
	const jar1 = document.getElementById("jar1");
	const jar2 = document.getElementById("jar2");
	const jarMix = document.getElementById("jarMix");

	const fill1 = document.getElementById("fill1");
	const fill2 = document.getElementById("fill2");
	const fillMix = document.getElementById("fillMix");

	const detailsCard = document.getElementById("details");
	const clearBtn = document.getElementById("clearBtn");
	const helpBtn = document.getElementById("helpBtn");

	let selected = [];

	// === Element Info Library ===
	const elementData = {
	  H:  { number: 1, name: "Hydrogen", group: "Nonmetal", state: "Gas", use: "Used in fuel cells, rocket fuel, and ammonia production" },
	  He: { number: 2, name: "Helium", group: "Noble Gas", state: "Gas", use: "Used in balloons, cryogenics, and cooling MRI machines" },
	  Li: { number: 3, name: "Lithium", group: "Alkali Metal", state: "Solid", use: "Used in rechargeable batteries and psychiatric medication" },
	  Be: { number: 4, name: "Beryllium", group: "Alkaline Earth Metal", state: "Solid", use: "Used in aerospace materials and X-ray windows" },
	  B:  { number: 5, name: "Boron", group: "Metalloid", state: "Solid", use: "Used in glass, ceramics, and detergents" },
	  C:  { number: 6, name: "Carbon", group: "Nonmetal", state: "Solid", use: "Basis of organic life, used in fuels, graphite, diamonds" },
	  N:  { number: 7, name: "Nitrogen", group: "Nonmetal", state: "Gas", use: "Used in fertilizers, explosives, and as a protective atmosphere" },
	  O:  { number: 8, name: "Oxygen", group: "Nonmetal", state: "Gas", use: "Essential for respiration, steelmaking, welding" },
	  F:  { number: 9, name: "Fluorine", group: "Halogen", state: "Gas", use: "Used in toothpaste, Teflon, and refrigerants" },
	  Ne: { number: 10, name: "Neon", group: "Noble Gas", state: "Gas", use: "Used in neon signs and high-voltage indicators" },
	  Na: { number: 11, name: "Sodium", group: "Alkali Metal", state: "Solid", use: "Used in table salt, street lights, and heat exchangers" },
	  Mg: { number: 12, name: "Magnesium", group: "Alkaline Earth Metal", state: "Solid", use: "Used in fireworks, airplanes, and medicine" },
	  Al: { number: 13, name: "Aluminium", group: "Post-transition Metal", state: "Solid", use: "Used in packaging, airplanes, and construction" },
	  Si: { number: 14, name: "Silicon", group: "Metalloid", state: "Solid", use: "Used in electronics, solar panels, and glass" },
	  P:  { number: 15, name: "Phosphorus", group: "Nonmetal", state: "Solid", use: "Used in fertilizers, detergents, and matches" },
	  S:  { number: 16, name: "Sulfur", group: "Nonmetal", state: "Solid", use: "Used in sulfuric acid, rubber vulcanization, and fungicides" },
	  Cl: { number: 17, name: "Chlorine", group: "Halogen", state: "Gas", use: "Used in disinfectants, PVC, and water purification" },
	  Ar: { number: 18, name: "Argon", group: "Noble Gas", state: "Gas", use: "Used in welding, light bulbs, and as inert atmosphere" },
	  K:  { number: 19, name: "Potassium", group: "Alkali Metal", state: "Solid", use: "Used in fertilizers, explosives, and biological functions" },
	  Ca: { number: 20, name: "Calcium", group: "Alkaline Earth Metal", state: "Solid", use: "Used in cement, bones, and signaling in cells" },
	  Sc: { number: 21, name: "Scandium", group: "Transition Metal", state: "Solid", use: "Used in aerospace and high-intensity lamps" },
	  Ti: { number: 22, name: "Titanium", group: "Transition Metal", state: "Solid", use: "Used in aircraft, implants, and strong alloys" },
	  V:  { number: 23, name: "Vanadium", group: "Transition Metal", state: "Solid", use: "Used in steel alloys and catalysts" },
	  Cr: { number: 24, name: "Chromium", group: "Transition Metal", state: "Solid", use: "Used in stainless steel and chrome plating" },
	  Mn: { number: 25, name: "Manganese", group: "Transition Metal", state: "Solid", use: "Used in steel production and batteries" },
	  Fe: { number: 26, name: "Iron", group: "Transition Metal", state: "Solid", use: "Used in construction, tools, and blood hemoglobin" },
	  Co: { number: 27, name: "Cobalt", group: "Transition Metal", state: "Solid", use: "Used in batteries, magnets, and pigments" },
	  Ni: { number: 28, name: "Nickel", group: "Transition Metal", state: "Solid", use: "Used in coins, stainless steel, and batteries" },
	  Cu: { number: 29, name: "Copper", group: "Transition Metal", state: "Solid", use: "Used in wiring, plumbing, and coins" },
	  Zn: { number: 30, name: "Zinc", group: "Transition Metal", state: "Solid", use: "Used in galvanization, alloys, and health supplements" },
	  Ga: { number: 31, name: "Gallium", group: "Post-transition Metal", state: "Solid", use: "Used in semiconductors and LEDs" },
	  Ge: { number: 32, name: "Germanium", group: "Metalloid", state: "Solid", use: "Used in semiconductors and fiber optics" },
	  As: { number: 33, name: "Arsenic", group: "Metalloid", state: "Solid", use: "Used in pesticides, semiconductors, and alloys" },
	  Se: { number: 34, name: "Selenium", group: "Nonmetal", state: "Solid", use: "Used in photocells, glass, and pigments" },
	  Br: { number: 35, name: "Bromine", group: "Halogen", state: "Liquid", use: "Used in flame retardants and photography" },
	  Kr: { number: 36, name: "Krypton", group: "Noble Gas", state: "Gas", use: "Used in lighting and lasers" },
	  Rb: { number: 37, name: "Rubidium", group: "Alkali Metal", state: "Solid", use: "Used in research and electronics" },
	  Sr: { number: 38, name: "Strontium", group: "Alkaline Earth Metal", state: "Solid", use: "Used in fireworks and ceramics" },
	  Y:  { number: 39, name: "Yttrium", group: "Transition Metal", state: "Solid", use: "Used in LEDs and superconductors" },
	  Zr: { number: 40, name: "Zirconium", group: "Transition Metal", state: "Solid", use: "Used in nuclear reactors and ceramics" },
	  Nb: { number: 41, name: "Niobium", group: "Transition Metal", state: "Solid", use: "Used in superconductors and alloys" },
	  Mo: { number: 42, name: "Molybdenum", group: "Transition Metal", state: "Solid", use: "Used in steel alloys and enzymes" },
	  Tc: { number: 43, name: "Technetium", group: "Transition Metal", state: "Solid", use: "Used in medical imaging" },
	  Ru: { number: 44, name: "Ruthenium", group: "Transition Metal", state: "Solid", use: "Used in electronics and catalysts" },
	  Rh: { number: 45, name: "Rhodium", group: "Transition Metal", state: "Solid", use: "Used in catalytic converters and jewelry" },
	  Pd: { number: 46, name: "Palladium", group: "Transition Metal", state: "Solid", use: "Used in electronics, jewelry, and catalysts" },
	  Ag: { number: 47, name: "Silver", group: "Transition Metal", state: "Solid", use: "Used in jewelry, electronics, and photography" },
	  Cd: { number: 48, name: "Cadmium", group: "Transition Metal", state: "Solid", use: "Used in batteries and pigments" },
	  In: { number: 49, name: "Indium", group: "Post-transition Metal", state: "Solid", use: "Used in touchscreens and semiconductors" },
	  Sn: { number: 50, name: "Tin", group: "Post-transition Metal", state: "Solid", use: "Used in alloys and tin cans" },
	  Sb: { number: 51, name: "Antimony", group: "Metalloid", state: "Solid", use: "Used in flame retardants and semiconductors" },
	  Te: { number: 52, name: "Tellurium", group: "Metalloid", state: "Solid", use: "Used in solar panels and alloys" },
	  I:  { number: 53, name: "Iodine", group: "Halogen", state: "Solid", use: "Used in disinfectants and medicine" },
	  Xe: { number: 54, name: "Xenon", group: "Noble Gas", state: "Gas", use: "Used in lamps and anesthesia" },
	  Cs: { number: 55, name: "Cesium", group: "Alkali Metal", state: "Solid", use: "Used in atomic clocks and drilling fluids" },
	  Ba: { number: 56, name: "Barium", group: "Alkaline Earth Metal", state: "Solid", use: "Used in X-rays and fireworks" },
	  La: { number: 57, name: "Lanthanum", group: "Lanthanide", state: "Solid", use: "Used in optics and batteries" },
	  Ce: { number: 58, name: "Cerium", group: "Lanthanide", state: "Solid", use: "Used in catalysts and glass polishing" },
	  Pr: { number: 59, name: "Praseodymium", group: "Lanthanide", state: "Solid", use: "Used in magnets and glass coloring" },
	  Nd: { number: 60, name: "Neodymium", group: "Lanthanide", state: "Solid", use: "Used in strong magnets and lasers" },
	  Pm: { number: 61, name: "Promethium", group: "Lanthanide", state: "Solid", use: "Used in luminous paint and research" },
	  Sm: { number: 62, name: "Samarium", group: "Lanthanide", state: "Solid", use: "Used in magnets and nuclear reactors" },
	  Eu: { number: 63, name: "Europium", group: "Lanthanide", state: "Solid", use: "Used in phosphors for TV screens" },
	  Gd: { number: 64, name: "Gadolinium", group: "Lanthanide", state: "Solid", use: "Used in MRI contrast agents" },
	  Tb: { number: 65, name: "Terbium", group: "Lanthanide", state: "Solid", use: "Used in green phosphors and lasers" },
	  Dy: { number: 66, name: "Dysprosium", group: "Lanthanide", state: "Solid", use: "Used in magnets and nuclear reactors" },
	  Ho: { number: 67, name: "Holmium", group: "Lanthanide", state: "Solid", use: "Used in lasers and nuclear control rods" },
	  Er: { number: 68, name: "Erbium", group: "Lanthanide", state: "Solid", use: "Used in fiber optics and lasers" },
	  Tm: { number: 69, name: "Thulium", group: "Lanthanide", state: "Solid", use: "Used in lasers and portable X-ray machines" },
	  Yb: { number: 70, name: "Ytterbium", group: "Lanthanide", state: "Solid", use: "Used in stainless steel and lasers" },
	  Lu: { number: 71, name: "Lutetium", group: "Lanthanide", state: "Solid", use: "Used in catalysts and cancer therapy" },
	  Hf: { number: 72, name: "Hafnium", group: "Transition Metal", state: "Solid", use: "Used in nuclear control rods and alloys" },
	  Ta: { number: 73, name: "Tantalum", group: "Transition Metal", state: "Solid", use: "Used in electronics and medical implants" },
	  W:  { number: 74, name: "Tungsten", group: "Transition Metal", state: "Solid", use: "Used in light bulb filaments and cutting tools" },
	  Re: { number: 75, name: "Rhenium", group: "Transition Metal", state: "Solid", use: "Used in jet engines and catalysts" },
	  Os: { number: 76, name: "Osmium", group: "Transition Metal", state: "Solid", use: "Used in fountain pen tips and electrical contacts" },
	  Ir: { number: 77, name: "Iridium", group: "Transition Metal", state: "Solid", use: "Used in spark plugs and deep-sea equipment" },
	  Pt: { number: 78, name: "Platinum", group: "Transition Metal", state: "Solid", use: "Used in jewelry, catalysts, and fuel cells" },
	  Au: { number: 79, name: "Gold", group: "Transition Metal", state: "Solid", use: "Used in jewelry, electronics, and currency" },
	  Hg: { number: 80, name: "Mercury", group: "Transition Metal", state: "Liquid", use: "Used in thermometers and lamps" },
	  Tl: { number: 81, name: "Thallium", group: "Post-transition Metal", state: "Solid", use: "Used in electronics and glass" },
	  Pb: { number: 82, name: "Lead", group: "Post-transition Metal", state: "Solid", use: "Used in batteries, radiation shielding, and pipes" },
	  Bi: { number: 83, name: "Bismuth", group: "Post-transition Metal", state: "Solid", use: "Used in medicine and cosmetics" },
	  Po: { number: 84, name: "Polonium", group: "Metalloid", state: "Solid", use: "Used in anti-static devices and research" },
	  At: { number: 85, name: "Astatine", group: "Halogen", state: "Solid", use: "Used in cancer therapy and research" },
	  Rn: { number: 86, name: "Radon", group: "Noble Gas", state: "Gas", use: "Used in cancer therapy and research" },
	  Fr: { number: 87, name: "Francium", group: "Alkali Metal", state: "Solid", use: "Used in research only" },
	  Ra: { number: 88, name: "Radium", group: "Alkaline Earth Metal", state: "Solid", use: "Used in cancer therapy and luminous paints" },
	  Ac: { number: 89, name: "Actinium", group: "Actinide", state: "Solid", use: "Used in cancer therapy and research" },
	  Th: { number: 90, name: "Thorium", group: "Actinide", state: "Solid", use: "Used in nuclear fuel and alloys" },
	  Pa: { number: 91, name: "Protactinium", group: "Actinide", state: "Solid", use: "Used in research only" },
	  U:  { number: 92, name: "Uranium", group: "Actinide", state: "Solid", use: "Used in nuclear fuel and weapons" },
	  Np: { number: 93, name: "Neptunium", group: "Actinide", state: "Solid", use: "Used in reactors and research" },
	  Pu: { number: 94, name: "Plutonium", group: "Actinide", state: "Solid", use: "Used in nuclear fuel and weapons" },
	  Am: { number: 95, name: "Americium", group: "Actinide", state: "Solid", use: "Used in smoke detectors and research" },
	  Cm: { number: 96, name: "Curium", group: "Actinide", state: "Solid", use: "Used in space batteries and research" },
	  Bk: { number: 97, name: "Berkelium", group: "Actinide", state: "Solid", use: "Used in research only" },
	  Cf: { number: 98, name: "Californium", group: "Actinide", state: "Solid", use: "Used in neutron sources and cancer treatment" },
	  Es: { number: 99, name: "Einsteinium", group: "Actinide", state: "Solid", use: "Used in research only" },
	  Fm: { number: 100,name: "Fermium", group: "Actinide", state: "Solid", use: "Used in research only" },
	  Md: { number: 101,name: "Mendelevium", group: "Actinide", state: "Solid", use: "Used in research only" },
	  No: { number: 102,name: "Nobelium", group: "Actinide", state: "Solid", use: "Used in research only" },
	  Lr: { number: 103,name: "Lawrencium", group: "Actinide", state: "Solid", use: "Used in research only" },
	  Rf: { number: 104,name: "Rutherfordium", group:"Transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Db: { number: 105,name: "Dubnium", group: "Transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Sg: { number: 106,name: "Seaborgium", group: "Transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Bh: { number: 107,name: "Bohrium", group: "Transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Hs: { number: 108,name: "Hassium", group: "Transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Mt: { number: 109,name: "Meitnerium", group: "Transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Ds: { number: 110,name: "Darmstadtium", group:"Transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Rg: { number: 111,name: "Roentgenium", group: "Transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Cn: { number: 112,name: "Copernicium", group: "Transition Metal", state: "Liquid", use: "Synthetic, used in research only" },
	  Nh: { number: 113,name: "Nihonium", group: "Post-transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Fl: { number: 114,name: "Flerovium", group: "Post-transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Mc: { number: 115,name: "Moscovium", group: "Post-transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Lv: { number: 116,name: "Livermorium", group: "Post-transition Metal", state: "Solid", use: "Synthetic, used in research only" },
	  Ts: { number: 117,name: "Tennessine", group: "Halogen", state: "Solid", use: "Synthetic, used in research only" },
	  Og: { number: 118,name: "Oganesson", group: "Noble Gas", state: "Gas", use: "Synthetic, used in research only" }
	};


	// === Reaction Library 
	const reactions = {
	  "H+O":   { product: "H₂O (Water)", color: "#4db8ff" },
	  "Na+Cl": { product: "NaCl (Salt)", color: "#f2f2f2" },
	  "C+O":   { product: "CO₂ (Carbon Dioxide)", color: "#808080" },
	  "O+Fe":  { product: "Fe₂O₃ (Rust/Iron(III) Oxide)", color: "#b7410e" },
	  "H+Cl":  { product: "HCl (Hydrogen Chloride)", color: "#d9ffb3" },
	  "N+H":   { product: "NH₃ (Ammonia)", color: "#ccffff" },
	  "Ca+O":  { product: "CaO (Quicklime)", color: "#f0f0f0" },
	  "C+H":   { product: "CH₄ (Methane)", color: "#e6ffe6" },
	  "O+S":   { product: "SO₂ (Sulfur Dioxide)", color: "#ffffcc" },
	  "Na+O":  { product: "Na₂O (Sodium Oxide)", color: "#ffe6cc" },
	  "Mg+O":  { product: "MgO (Magnesium Oxide)", color: "#e6e6e6" },
	  "K+Cl":  { product: "KCl (Potassium Chloride)", color: "#fafafa" },
	  "H+S": { "product": "H₂S (Hydrogen Sulfide)", "color": "#ffff66" },
	  "Li+O": { "product": "Li₂O (Lithium Oxide)", "color": "#ff9999" },
	  "K+O": { "product": "K₂O (Potassium Oxide)", "color": "#ffcc99" },
	  "Ca+S": { "product": "CaS (Calcium Sulfide)", "color": "#ff9966" },
	  "Al+O": { "product": "Al₂O₃ (Aluminum Oxide)", "color": "#cccccc" },
	  "Zn+O": { "product": "ZnO (Zinc Oxide)", "color": "#cccccc" },
	  "Cu+S": { "product": "CuS (Copper(II) Sulfide)", "color": "#996633" },
	  "Fe+Cl": { "product": "FeCl₂ (Iron(II) Chloride)", "color": "#666666" },
	  "C+S": { "product": "CS₂ (Carbon Disulfide)", "color": "#999966" },
	  "N+H": { "product": "NH₃ (Ammonia)", "color": "#99ccff" },
	  "P+Cl": { "product": "PCl₃ (Phosphorus Trichloride)", "color": "#ff9966" },
	  "P+O": { "product": "P₄O₁₀ (Phosphorus Pentoxide)", "color": "#ffcc66" },
	  "Si+O": { "product": "SiO₂ (Silicon Dioxide)", "color": "#cccccc" },
	  "B+O": { "product": "B₂O₃ (Boron Trioxide)", "color": "#ffcc99" },
	  "Cl+F": { "product": "ClF (Chlorine Monofluoride)", "color": "#ff9999" },
	  "Br+F": { "product": "BrF₃ (Bromine Trifluoride)", "color": "#ff6666" },
	  "I+F": { "product": "IF₇ (Iodine Heptafluoride)", "color": "#ff6666" }
	};

	// === Element Click Handler ===
	elements.forEach(el => {
	  el.addEventListener("click", () => {
		const symbol = el.querySelector(".element-name").innerText.trim();
		const data = elementData[symbol];
		const color = window.getComputedStyle(el).backgroundColor;

		showDetails(symbol, data);

		if (selected.length < 2) {
		  selected.push({ symbol, color });
		  updateJars();
		}

		if (selected.length === 2) {
		  mixReaction();
		}
	  });
	});

	// === Show Details in Side Panel ===
	function showDetails(symbol) {
	  const data = elementData[symbol];
	  if (!data) return;
	  detailsCard.innerHTML = `
		<h3>${data.name} (${symbol})</h3>
		<div class="info">
		  <div><b>No:</b> ${data.number}</div>
		  <div><b>Group:</b> ${data.group}</div>
		  <div><b>State:</b> ${data.state}</div>
		  <div><b>Use:</b> ${data.use}</div>
		</div>
	  `;
	}


	function fillJar(jar, fill, symbol) {
	  fill.style.height = "100%";
	  jar.querySelector("b").textContent = symbol;
	}

	function clearJars() {
	  [fill1, fill2, fillMix].forEach(f => f.style.height = "0");
	  jar1.querySelector("b").textContent = "Empty";
	  jar2.querySelector("b").textContent = "Empty";
	  jarMix.querySelector("b").textContent = "—";
	  selected = [];
	}

	function checkReaction() {
	  if (selected.length < 2) return;
	  const key1 = `${selected[0]}+${selected[1]}`;
	  const key2 = `${selected[1]}+${selected[0]}`;
	  const reaction = reactions[key1] || reactions[key2];
	  if (reaction) {
		fillMix.style.height = "100%";
		fillMix.style.background = reaction.color;
		jarMix.querySelector("b").textContent = reaction.product;
	  } else {
		jarMix.querySelector("b").textContent = "No reaction";
	  }
	}

	// Click element
	elements.forEach(el => {
	  el.addEventListener("click", () => {
		const symbol = el.textContent.trim();
		showDetails(symbol);

		if (selected.length === 0) {
		  selected.push(symbol);
		  fillJar(jar1, fill1, symbol);
		} else if (selected.length === 1) {
		  selected.push(symbol);
		  fillJar(jar2, fill2, symbol);
		  checkReaction();
		}
	  });
	});


	// === Update Jars ===
	function updateJars() {
	  if (selected[0]) {
		jar1.querySelector("b").innerText = selected[0].symbol;
		fill1.style.height = "100%";
		fill1.style.backgroundColor = selected[0].color;
	  }
	  if (selected[1]) {
		jar2.querySelector("b").innerText = selected[1].symbol;
		fill2.style.height = "100%";
		fill2.style.backgroundColor = selected[1].color;
	  }
	}

	// === Try to Mix ===
	function mixReaction() {
	  const [a, b] = selected;
	  const key1 = `${a.symbol}+${b.symbol}`;
	  const key2 = `${b.symbol}+${a.symbol}`;

	  let reaction = reactions[key1] || reactions[key2];

	  if (reaction) {
		jarMix.querySelector("b").innerText = reaction.result;
		fillMix.style.height = "100%";
		fillMix.style.background = reaction.color;
	  } else {
		jarMix.querySelector("b").innerText = `${a.symbol} + ${b.symbol} (No Reaction)`;
		fillMix.style.height = "100%";
		fillMix.style.background = `linear-gradient(135deg, ${a.color}, ${b.color})`;
	  }
	}

	// === Clear Button ===
	clearBtn.addEventListener("click", () => {
	  selected = [];
	  [fill1, fill2, fillMix].forEach(f => {
		f.style.height = "0%";
		f.style.background = " ";
	  });
	  [jar1, jar2, jarMix].forEach(j => j.querySelector("b").innerText = "Empty");
	  detailsCard.innerHTML = `<h3>Element Details</h3><div class="muted">Select an element to see its info.</div>`;
	});

	// === Help Button ===
	helpBtn.addEventListener("click", () => {
	  alert("Tip: Click on an element to see its properties.\nSelect two elements to see if they react!\n\nExamples:\nNa + Cl → Salt\nH + O → Water\nFe + O → Rust");
	});

});