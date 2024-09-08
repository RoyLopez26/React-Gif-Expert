import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddcategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory onNewCategory={onAddcategory}/>

            {
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}