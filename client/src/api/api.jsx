import axios from "axios";
import { useQuery } from "react-query";

export const getItemsFromServer = async (name) => {
    try {
        const { data } = await axios(`http://localhost:3001/${name}`)
        return data
    } catch (e) {
        console.log(e.message)
    }
}

export const useGetItemsFromQueryServer = (name) => {
    return useQuery(name, () => getItemsFromServer(name), {
        staleTime: 1000 * 60
    })
}
