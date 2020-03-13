import baseService from './base.service'

export function getAllTree(){
    return baseService.post('/category/getAllTree', {});
}
