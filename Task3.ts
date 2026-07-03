type UserResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
};

// function getZipCode (response : UserResponse) : string {
// const result = response?.info?.address?.zipCode ? response.info.address.zipCode : "00000"

// return result;
// }

function getZipCode (response : UserResponse) : string {

return response.info?.address?.zipCode ?? "00000";

}


const Response1: UserResponse = {
    info: {
        address: {
            zipCode : "abcd"
        }
    }
}

console.log(getZipCode(Response1))