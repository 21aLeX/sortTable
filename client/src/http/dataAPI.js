import { $host } from './index.js'

export const fetchData = async (p) => {
    const { data } = await $host.get('/?' + 'page=' + p)
    return data
}