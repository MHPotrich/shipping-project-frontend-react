export function create_shipping({ destination, send_by_id, send_for_id }){
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                destination,
                sendById: send_by_id,
                sendForId: send_for_id
            };
            const response = await fetch(`http://localhost:${process.env.PORT}/api/v1/shipping`, {
                method: "POST",
                body: JSON.stringify(body)
            });
            const data = await response.json();

            /*
            data = {
                "shipping": {
                    "acknowledged": true,
                    "insertedId": "id"
                },
                "address": {
                    "acknowledged": true,
                    "insertedId": "id"
                }
            }
            */
            resolve(data);
        } catch(error) {
            reject(error);
        }
    });
}

export function get_all_shippings(){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`http://localhost:${process.env.PORT}/api/v1/shipping`);
            const data = await response.json();

            /*
            [
                {
                    "_id": "id",
                    "shippingCode": 00001,
                    "status": "CREATED",
                    "sendedBy": 00001,
                    "sendedFor": 00001,
                    "locationHistory": null,
                    "destination": 00001
                }
            ]
            */
            resolve(data);
        } catch(error) {
            reject(error);
        }
    });
}

export function get_shipping(shipping_id){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`http://localhost:${process.env.PORT}/api/v1/shipping/${shipping_id}`);
            const data = await response.json();

            /*
            {
                "_id": "id",
                "shippingCode": 00001,
                "status": "CREATED",
                "sendedBy": 00001,
                "sendedFor": 00001,
                "locationHistory": null,
                "destination": 00001
            }
            */
            resolve(data);
        } catch(error) {
            reject(error);
        }
    });
}

export function update_shippings(shipping_id, { destination, send_by_id, send_for_id }){
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                destination,
                sendById: send_by_id,
                sendForId: send_for_id
            };
            const response = await fetch(`http://localhost:${process.env.PORT}/api/v1/shipping/${shipping_id}`, {
                method: "PUT",
                body
            });
            const data = await response.json();

            /*
            {
                "acknowledged": true,
                "modifiedCount": 1,
                "upsertedId": null,
                "upsertedCount": 0,
                "matchedCount": 1
            }
            */
            resolve(data);
        } catch(error) {
            reject(error);
        }
    });
}

export function delete_shipping(shipping_id){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`http://localhost:${process.env.PORT}/api/v1/shipping/${shipping_id}`, {
                method: "DELETE"
            });
            const data = await response.json();

            /*
            {
                "acknowledged": true,
                "deletedCount": 1
            }
            */
            resolve(data);
        } catch(error) {
            reject(error);
        }
    });
}