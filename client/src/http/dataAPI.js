import {$host} from './index.js'

export const fetchData = async (p) =>{
    console.log(p)
    const {data} = await $host.get('/?'+'page='+p)
    return data
}