import axios from 'axios';
const MASTER_URL = 'http://localhost:1234';

export const login = async (username, password) => {
    console.log(username, password)
    try {
        const response = await axios.post(`${MASTER_URL}/admin_login`, { username, password });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const contactUs = async () => {
    try {
        const response = await axios.post(`${MASTER_URL}/getContactUs`, {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const getUser = async () => {
    try {
        const response = await axios.post(`${MASTER_URL}/getUser`, {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const addProduct = async (body) => {
    let data;
    if(body.id){
        console.log("first")
        data = {
           productId:body.id, productName: body.productName, description: body.description, size: body.size, discountPrice: body.discountPrice, price: body.price, color: body.color, productImage: body.productImage
        }
    }else{
        console.log("first12")
        data = {
            productName: body.productName, description: body.productDesc, size: body.productSize, discountPrice: body.productDiscount, price: body.productPrice, color: body.productColor, productImage: body.productImage
        }
    }
    console.log("first",body)
    try {
        const response = await axios.post(`${MASTER_URL}/product/add_product`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getProduct = async () => {
    try {
        const response = await axios.post(`${MASTER_URL}/product/get_product`, {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const deleteProduct = async (id) => {
    try {
        const response = await axios.post(`${MASTER_URL}/product/delete_ProductbyId`, { productId: id });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};