import {useEffect, useState} from "react";
import {getGifts} from "../helpers/getGifs.js";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const getImages = async () => {
        const newImages = await getGifts(category)
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}