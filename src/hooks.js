import { useState } from 'react';
import axios from "axios";
import {v4 as uuidv4} from "uuid";

const useFlip = () => {
    const [state, setState] = useState(true);
    const flipState = () => {
        setState(state => !state)
    }
    return [state, flipState]
}

const useAxios = (baseUrl) => {
    
    const [items, setItems] = useState([]);

    const addItem = async (optionalUrl = null) => {

        let url = optionalUrl && typeof optionalUrl === 'string' && optionalUrl.trim() !== ""
            ? `${baseUrl}\\${optionalUrl.trim()}\\`
            : baseUrl;
        
        const response = await axios.get(url);
        
        setItems(items => [...items, { ...response.data, id: uuidv4() }]);
    };

    return [items, addItem]
}
    
export { useFlip, useAxios };
