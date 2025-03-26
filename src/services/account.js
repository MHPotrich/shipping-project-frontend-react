export async function login(){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://localhost:${process.env.PORT}/api/v1/login`);
            const data = await response.json();

            // data = { "isCorrect": true }
            resolve(data);   
        } catch(error) {
            reject(error);
        }
    });
}

export async function update_account(user_id, { password }){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://localhost:${process.env.PORT}/api/v1/user/${user_id}`, {
                method: "POST",
                body: JSON.stringify({
                    password
                })
            });
            const data = await response.json();
    
            // data = {
            //    "acknowledged": true,
            //    "modifiedCount": 1,
            //    "upsertedId": null,
            //    "upsertedCount": 0,
            //    "matchedCount": 1
            // }
            resolve(data); 
        } catch(error){
            reject(error);
        }      
    });
}

export async function delete_account(user_id){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://localhost:${process.env.PORT}/api/v1/user/${user_id}`, {
                method: "DELETE"
            });
    
            resolve(response.status == 200);  
        } catch(error) {
            reject(error);
        } 
    });
}

export async function get_user(user_id){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://localhost:${process.env.PORT}/api/v1/user/${user_id}`);
            const data = await response.json();

            // data = { "id": 1, "firstName": "name", "lastName": "last name", "password": "password"}
            resolve(data);   
        } catch(error) {
            reject(error);
        }
    });
}

export async function get_all_user(){
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`https://localhost:${process.env.PORT}/api/v1/user`);
            const data = await response.json();

            // data = [{ "id": 1, "firstName": "name", "lastName": "last name", "password": "password"}]
            resolve(data);   
        } catch(error) {
            reject(error);
        }
    });
}