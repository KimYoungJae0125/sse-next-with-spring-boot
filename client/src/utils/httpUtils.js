import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data)
export const useGet = (url) => {
    const { data, error } = useSWR('/api/message', fetcher)

    return data;
}

export const post = async (url, body) => {
    return await axios.post(url).then(res => res.data).then(res => res.json());
}
