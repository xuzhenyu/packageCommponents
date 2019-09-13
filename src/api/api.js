function setApi(path){
    return path;
}

const api={
    province:setApi('base/base/areadefine/province'),
    blog:setApi('https://restapi.amap.com/v3/config/district?keywords=%E6%B1%9F%E8%8B%8F&subdistrict=2&key=ad6234a1b53b24bbf8051d9b9a0c0cff')
}

export default api