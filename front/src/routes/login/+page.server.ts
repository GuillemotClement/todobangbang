export const actions = {
	default: async ({ request }) => {
		console.log("Action déclenchée !");
		const data = await request.formData();
		const email = data.get("email");
		const password = data.get("password");

		console.log(email);
		console.log(password);
	},
};
