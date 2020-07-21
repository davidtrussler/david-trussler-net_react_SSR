import { POSTS } from './dataTypes'; 
import { STORE, GET } from './modelActionTypes'; 

// export const getPosts = () => {
// 	return createSaveEvent(PRODUCTS, product); 
// }

// export const saveSupplier = (supplier) => {
// 	return createSaveEvent(SUPPLIERS, supplier); 
// }

export const getPosts = () => ({
	// type: DELETE, 
	// dataType: PRODUCTS, 
	// payload: product.id
})

// export const deleteSupplier = (supplier) => ({
// 	type: DELETE, 
// 	dataType: SUPPLIERS, 
// 	payload: supplier.id
// })

// const createSaveEvent = (dataType, payload) => {
// 	if (!payload.id) {
// 		return {
// 			type: STORE, 
// 			dataType: dataType, 
// 			payload: {...payload, id: idCounter++}
// 		}
// 	} else {
// 		return {
// 			type: UPDATE, 
// 			dataType: dataType, 
// 			payload: payload
// 		}
// 	}
// }
