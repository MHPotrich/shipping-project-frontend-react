import axios from "axios";

const shippingBackendPath = process.env.BACKEND_HOST + "/api/v1/shipping/";

export function getShipping(shippingCode) {
	return new Promise((resolve, reject) => {
		axios
			.get(shippingBackendPath + shippingCode)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export function createShipping(sendById, sendForId, destination) {
	const newShipping = {
		destination: {
			address1: destination.address1,
			address2: destination.address2,
			state: destination.state,
			city: destination.city,
			country: destination.country,
			zipCode: destination.zipCode,
		},
		sendById: sendById,
		sendForId: sendForId,
	};

	return new Promise((resolve, reject) => {
		axios
			.post(shippingBackendPath, newShipping)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export function deleteShipping(shippingCode) {
	return new Promise((resolve, reject) => {
		axios
			.delete(shippingBackendPath + shippingCode)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export function updateShipping(shippingCode, updatedShipping) {
	return new Promise((resolve, reject) => {
		axios
			.put(shippingBackendPath + shippingCode, updatedShipping)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
}
