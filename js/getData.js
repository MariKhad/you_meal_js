export const getData = async url => {
	const response = await fetch(url);

	if (response.ok) {
		const result = response.json();
		return result;
	}
}