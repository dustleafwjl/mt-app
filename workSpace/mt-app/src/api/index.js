import axios from '@/axios.js';


let api = {
    getSearchHotWord(params) {
        return axios.get('/api/meituan/header/searchHotWords.json', params);
    },
    getSearchWords(params) {
        return axios.get('/api/meituan/header/search.json', params);
    },
    getMenuList() {
        return axios.get('/api/meituan/index/nav.json');
    },
    getResultsByKeywords() {
        return axios.get('/api/meituan/index/resultsByKeywords.json');
    },
    getProductsList() {
        return axios.get('/api/meituan/list/goodsList.json');
    },
    getHotCity() {
        return axios.get('/api/meituan/city/hot.json');
    },
    getRecentCity() {
        return axios.get('/api/meituan/city/recents.json')
    },
    getProvince() {
        return axios.get('/api/meituan/city/province.json');
    },
    getPosition() {
        return axios.get('/api/meituan/city/getPosition.json');
    },
    getCityList() {
        return axios.get('/api/meituan/city/cityList.json');
    },
    login(params) {
        return axios.get('/api/meituan/login', params);
    },
    register(params) {
        return axios.get('/api/meituan/register', params);
    }
}
export default api;