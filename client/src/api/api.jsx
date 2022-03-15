import axios from "axios";

export const getBooksFromServer = async () => {
    try {
        const { data } = await axios("http://localhost:3001/books")
        return data
    } catch (e) {
        console.log(e.message)
    }
}

export const getMagazinesFromServer = async () => {
    try {
        const { data } = await axios("http://localhost:3001/magazines")
        return data
    } catch (e) {
        console.log(e.message)
    }
}