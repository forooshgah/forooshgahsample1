import baseService from './base.service'

export function searchProduct(filter = {}){
    return baseService.post('/Product/search', filter);
}

export function mostViewedProduct(){
    return baseService.post('/Product/search', {});
}



