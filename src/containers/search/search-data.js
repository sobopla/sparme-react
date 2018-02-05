export const modelOptions = [
	{ _id: '0120', make: 'Honda', name: "Honda", label: "Accord", type: 'car' },
	{ _id: '0121', make: 'Honda', name: "Civic", label: "Civic", type: 'car' },
	{ _id: '0122', make: 'Honda', name: "Fit", label: "Fit", type: 'car' },
	{ _id: '0123', make: 'Honda', name: "HR-V", label: "HR-V", type: 'suv' },
	{ _id: '0124', make: 'Honda', name: "CR-V", label: "CR-V", type: 'car'},
	{ _id: '0125', make: 'Honda', name: "Pilot", label: "Pilot", type: 'suv' },
	{ _id: '0126', make: 'Honda', name: "Odyssey", label: "Odyssey", type: 'suv' },
	{ _id: '0127', make: 'Honda', name: "Ridgeline", label: "Ridgeline", type: 'truck'},
	{ _id: '0128', make: 'Ford', name: 'Explorer', label: 'Explorer', type: 'suv'},
	{ _id: '0129', make: 'Ford', name: 'Fiesta', label: 'Fiesta', type: 'car'},
	{ _id: '0130', make: 'Ford', name: 'Ranger', label: 'Ranger', type: 'truck'},
	{ _id: '0131', make: 'Ford', name: "Focus", label: "Focus", type: 'car' },
	{ _id: '0132', make: 'Ford', name: "Fusion", label: "Fusion", type: 'car' },
	{ _id: '0133', make: 'Ford', name: "C-MAX", label: "C-MAX", type: 'car'},
	{ _id: '0134', make: 'Ford', name: "Mustang", label: "Mustang", type: 'car' },
	{ _id: '0135', make: 'Ford', name: "Taurus", label: "Taurus", type: 'suv' },
	{ _id: '0136', make: 'Ford', name: "Ecosport", label: "Ecosport", type: 'suv'},
	{ _id: '0137', make: 'Ford', name: "Escape", label: "Escape", type: 'suv' },
	{ _id: '0138', make: 'Ford', name: "Transit Connect", label: "Transit Connect", type: 'suv' },
	{ _id: '0139', make: 'Ford', name: "Edge", label: "Edge", type: 'suv'},
	{ _id: '0140', make: 'Ford', name: "Flex", label: "Flex", type: 'suv' },
	{ _id: '0141', make: 'Ford', name: "Expedition", label: "Expedition", type: 'suv'},
	{ _id: '0142', make: 'Ford', name: "F-150", label: "F-150", type: 'truck' },
	{ _id: '0143', make: 'Ford', name: "Transit", label: "Transit", type: 'truck' },
	{ _id: '0144', make: 'Ford', name: "Super Duty", label: "Super Duty", type: 'truck'},
	{ _id: '0145', make: 'Ford', name: "C-Max Hybrid SE", label: "C-Max Hybrid SE", type: 'hybrid' },
	{ _id: '0146', make: 'Ford', name: "Fusion Hybrid SE", label: "Fusion Hybrid SE", type: 'hybrid' },
	{ _id: '0147', make: 'Ford', name: "C-Max Energi SE", label: "C-Max Energi SE", type: 'hybrid'},
	{ _id: '0148', make: 'Ford', name: "Focus Electric", label: "Focus Electric", type: 'hybrid' },
	{ _id: '0149', make: 'Ford', name: "Fusion Energi SE", label: "Fusion Energi SE", type: 'hybrid' },
	{ _id: '0150', make: 'Subaru', name: "Impreza", label: "Impreza", type: 'van' },
	{ _id: '0151', make: 'Subaru', name: "Legacy", label: "Legacy", type: 'car' },
	{ _id: '0152', make: 'Subaru', name: "Crosstrek", label: "Crosstrek", type: 'van'},
	{ _id: '0153', make: 'Subaru', name: "Forester", label: "Forester", type: 'van' },
	{ _id: '0154', make: 'Subaru', name: "Outback", label: "Outback", type: 'car' },
	{ _id: '0155', make: 'Subaru', name: "BRZ", label: "BRZ", type: 'car'},
	{ _id: '0156', make: 'Subaru', name: "WRX", label: "WRX", type: 'car' },
	{ _id: '0157', make: 'Subaru', name: "Ascent", label: "Ascent", type: 'suv' },
	{ _id: '0158', make: 'Ford', name: 'Stripped Chassis', label: 'Stripped Chassis', type: 'commercial'}
];

export const makeOptions = [
	{ name: "Honda", label: "Honda", typesAvailable: ["car", "suv", "truck"]},
	{ name: "Ford", label: "Ford", typesAvailable: ["car", "suv", "van", "hybrid", "truck", "commercial"] },
	{ name: "Subaru", label: "Subaru", typesAvailable: ["car", "van", "suv"] }
];

export const typeOptions = [
	// { name: "coupe", label: "Coupe" },
	{ name: "car", label: "Car" },
	{ name: 'hybrid', label: "Hybrid"},
	{ name: "truck", label: "Truck" },
	{ name: "suv", label: "SUV" },
	{ name: "van", label: "Van / Wagon"},
	{ name: "commercial", label: 'Commercial'}
];

export const priceOptions = [
	{ name: "$", label: "$" },
	{ name: "$$", label: "$$" },
	{ name: "$$$", label: "$$$" },
	{ name: "$$$$", label: "$$$$" }
];
