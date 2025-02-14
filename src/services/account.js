import axios from "axios";

const shippingBackendPath = process.env.BACKEND_HOST + "/api/v1/user/";

export function getAccount(accountId){
    return new Promise((resolve, reject) => {
        axios.get(shippingBackendPath + accountId).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export function createAccount(newUser){
    return new Promise((resolve, reject) => {
        axios.post(shippingBackendPath, {
            "FirstName": newUser.FirstName,
            "lastName": newUser.lastName
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export function deleteAccount(accountId){
    return new Promise((resolve, reject) => {
        axios.delete(shippingBackendPath + accountId).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export function updateAccount(accountId, updatedAccount){
    return new Promise((resolve, reject) => {
        axios.put(shippingBackendPath + accountId, updatedAccount).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}