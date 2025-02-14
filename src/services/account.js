import axios from "axios";

export function getShipping(shippingCode){
    return new Promise((resolve, reject) => {
        axios.get(process.env.BACKEND_HOST + "/shipping/" + shippingCode).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export function createShipping(sendById, sendForId, destination){
    const newShipping = {
        "destination": {
            "address1": destination.address1,
            "address2": destination.address2,
            "state": destination.state,
            "city": destination.city,
            "country": destination.country,
            "zipCode": destination.zipCode
        },
        "sendById": sendById,
        "sendForId": sendForId
    };

    return new Promise((resolve, reject) => {
        axios.post(process.env.BACKEND_HOST + "/shipping", newShipping).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export function deleteShipping(shippingCode){
    return new Promise((resolve, reject) => {
        axios.delete(process.env.BACKEND_HOST + "/shipping/" + shippingCode).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export function updateShipping(updatedShipping){
    return new Promise((resolve, reject) => {
        axios.put(process.env.BACKEND_HOST + "/shipping", updatedShipping).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}