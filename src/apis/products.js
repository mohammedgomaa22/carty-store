// src/apis/products.js
import { USE_DUMMY_DATA } from './config.js';

export async function fetchProducts() {
    if (USE_DUMMY_DATA) {
        const response = await fetch('/src/data/dummy-products.json');
        return await response.json();
    } else {
        const response = await fetch('https://your-real-api.com/products');
        return await response.json();
    }
}
