import firebase from 'firebase'
const config = {
	apiKey: "AIzaSyBct6xxar44n9R5TGiOm8G1u0mcD2JnzJQ",
	authDomain: "how2car-e7eb3.firebaseapp.com",
	databaseURL: "",
	projectId: "how2car-e7eb3"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
	if(user) {
		console.log('you are logged in now!')
	  // get user data from db
	}
	 else {
		console.log("not logged in")
	}
})

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const providers = { 'google': googleProvider, 'facebook': facebookProvider}
export const auth = firebase.auth();
export default firebase;