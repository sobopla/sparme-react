export const modelOptions = [
	{ _id: '0120', make: 'Honda', name: "Honda", label: "Accord", type: '$5' },
	{ _id: '0121', make: 'Honda', name: "Civic", label: "Civic", type: '$5' },
	{ _id: '0122', make: 'Honda', name: "Fit", label: "Fit", type: '$5' },
	{ _id: '0123', make: 'Honda', name: "HR-V", label: "HR-V", type: '$25' },
	{ _id: '0124', make: 'Honda', name: "CR-V", label: "CR-V", type: '$5'},
	{ _id: '0125', make: 'Honda', name: "Pilot", label: "Pilot", type: '$25' },
	{ _id: '0126', make: 'Honda', name: "Odyssey", label: "Odyssey", type: '$25' },
	{ _id: '0127', make: 'Honda', name: "Ridgeline", label: "Ridgeline", type: '$10'},
	{ _id: '0128', make: 'Ford', name: 'Explorer', label: 'Explorer', type: '$25'},
	{ _id: '0129', make: 'Ford', name: 'Fiesta', label: 'Fiesta', type: '$5'},
	{ _id: '0130', make: 'Ford', name: 'Ranger', label: 'Ranger', type: '$10'},
	{ _id: '0131', make: 'Ford', name: "Focus", label: "Focus", type: '$5' },
	{ _id: '0132', make: 'Ford', name: "Fusion", label: "Fusion", type: '$5' },
	{ _id: '0133', make: 'Ford', name: "C-MAX", label: "C-MAX", type: '$5'},
	{ _id: '0134', make: 'Ford', name: "Mustang", label: "Mustang", type: '$5' },
	{ _id: '0135', make: 'Ford', name: "Taurus", label: "Taurus", type: '$25' },
	{ _id: '0136', make: 'Ford', name: "Ecosport", label: "Ecosport", type: '$25'},
	{ _id: '0137', make: 'Ford', name: "Escape", label: "Escape", type: '$25' },
	{ _id: '0138', make: 'Ford', name: "Transit Connect", label: "Transit Connect", type: '$25' },
	{ _id: '0139', make: 'Ford', name: "Edge", label: "Edge", type: '$25'},
	{ _id: '0140', make: 'Ford', name: "Flex", label: "Flex", type: '$25' },
	{ _id: '0141', make: 'Ford', name: "Expedition", label: "Expedition", type: '$25'},
	{ _id: '0142', make: 'Ford', name: "F-150", label: "F-150", type: '$10' },
	{ _id: '0143', make: 'Ford', name: "Transit", label: "Transit", type: '$10' },
	{ _id: '0144', make: 'Ford', name: "Super Duty", label: "Super Duty", type: '$10'},
	{ _id: '0145', make: 'Ford', name: "C-Max Hybrid SE", label: "C-Max Hybrid SE", type: '$50' },
	{ _id: '0146', make: 'Ford', name: "Fusion Hybrid SE", label: "Fusion Hybrid SE", type: '$50' },
	{ _id: '0147', make: 'Ford', name: "C-Max Energi SE", label: "C-Max Energi SE", type: '$50'},
	{ _id: '0148', make: 'Ford', name: "Focus Electric", label: "Focus Electric", type: '$50' },
	{ _id: '0149', make: 'Ford', name: "Fusion Energi SE", label: "Fusion Energi SE", type: '$50' },
	{ _id: '0150', make: 'Subaru', name: "Impreza", label: "Impreza", type: '$100' },
	{ _id: '0151', make: 'Subaru', name: "Legacy", label: "Legacy", type: '$5' },
	{ _id: '0152', make: 'Subaru', name: "Crosstrek", label: "Crosstrek", type: '$100'},
	{ _id: '0153', make: 'Subaru', name: "Forester", label: "Forester", type: '$100' },
	{ _id: '0154', make: 'Subaru', name: "Outback", label: "Outback", type: '$5' },
	{ _id: '0155', make: 'Subaru', name: "BRZ", label: "BRZ", type: '$5'},
	{ _id: '0156', make: 'Subaru', name: "WRX", label: "WRX", type: '$5' },
	{ _id: '0157', make: 'Subaru', name: "Ascent", label: "Ascent", type: '$25' },
	{ _id: '0158', make: 'Ford', name: 'Stripped Chassis', label: 'Stripped Chassis', type: '$1000'}
];

export const makeOptions = [
	// { name: "Honda", label: "Honda", typesAvailable: ["$5", "$25", "$10"]},
	// { name: "Subaru", label: "Subaru", typesAvailable: ["$5", "$100", "$25"] },
	{ name: "Ford", label: "Ford", typesAvailable: ["$5", "$25", "$100", "$50", "$10", "$1000"] }
];

export const typeOptions = [
	// { name: "coupe", label: "Coupe" },
	{ name: "$5", label: "$5" },
	{ name: '$50', label: "$50"},
	{ name: "$10", label: "$10" },
	{ name: "$25", label: "$25" },
	// { name: "$100", label: "Van / Wagon"},
	{ name: "$1000", label: '$1000'}
];

export const priceOptions = [
	{ name: "$", label: "$" },
	{ name: "$$", label: "$$" },
	{ name: "$$$", label: "$$$" },
	{ name: "$$$$", label: "$$$$" }
];
