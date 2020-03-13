import baseService from './base.service'

export function getByType(type){
    return baseService.post('/Lookup/GetByType', {type});
}

export function getAllBrands(){
    return baseService.post('/Lookup/GetByType', {type : 1}); //TODO use constant

}