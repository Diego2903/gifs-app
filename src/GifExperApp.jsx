import { useState } from "react";
import { AddCategory } from "./component/AddCategory";
import { GifGrid } from "./component/GifGrid";


export const GifExperApp = () => {

    const [categories, setCategorias] = useState(['Dragon ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategorias([newCategory, ...categories,]);
    }

    const deleteCategory = (category) => {

        
         const filter = categories.filter((categoryFound) => categoryFound != category)
          
        setCategorias(filter);
    }


    return (
        <>
            <h1>Gif-Animation-App</h1>



            <AddCategory
                onNewCategory={onAddCategory}

            />


            {
                categories.map((category) => (
                    <GifGrid key={category}
                        category={category}
                        deleteCategory={deleteCategory} />
                ))
            }


        </>

    )
}
