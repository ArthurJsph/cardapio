import axios from "axios"
import { FoodData } from "../interface/FoodData";
import { AxiosPromise } from "axios";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';
const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/cardapio/food');
    console.log((await response).data)
    return response;
}
export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    });

    return {
        data: query.data,}
    }; 