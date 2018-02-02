//temporary data - can prob remove some of this tomorrow
//and start calling from actual manufacturer data
export const priceOptions = [
	{ name: "$", label: "$" },
	{ name: "$$", label: "$$" },
	{ name: "$$$", label: "$$$" },
	{ name: "$$$$", label: "$$$$" }
];

export const modelOptions = [
	{ _id: '0123', make: 'jkl', name: "Honda", label: "Accord", type: 'car' },
	{ _id: '0124', make: 'Honda', name: "Civic", label: "Civic", type: 'car' },
	{ _id: '0125', make: 'Honda', name: "Fit", label: "Fit", type: 'car' },
	{ _id: '0126', make: 'Honda', name: "HR-V", label: "HR-V", type: 'suv' },
	{ _id: '0127', make: 'Honda', name: "CR-V", label: "CR-V", type: 'car'},
	{ _id: '0128', make: 'Ford', name: 'Explorer', label: 'Explorer', type: 'truck'},
	{ _id: '0129', make: 'Ford', name: 'Fiesta', label: 'Fiesta', type: 'car'},
	{ _id: '0130', make: 'Ford', name: 'Ranger', label: 'Ranger', type: 'truck'}
];

export const makeOptions = [
	{ name: "Honda", label: "Honda" },
	{ name: "Ford", label: "Ford" },
	{ name: "Subaru", label: "Subaru" }
];

export const typeOptions = [
	{ name: "car", label: "Car" },
	{ name: "truck", label: "Truck" },
	{ name: "suv", label: "SUV" },
	{ name: "van", label: "Van / Wagon"},
	{ name: "commercial", label: 'Commercial'}
];
