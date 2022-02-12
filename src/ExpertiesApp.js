import React,{ useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { AllGrid }  from "./components/AllGrid";

const ExpertiesApp = () => {

const [categories, setCategories] = useState (['Pokemon']);
// const handelAdd = (e) => {
//     // setCategories([...categories,'Javier']);
//     setCategories ( categ => [...categ, 'Naruto']);
// }
//  console.log(categories);

    return (

        <div>

            <h2>ExpertiesApp</h2>

            <AddCategory setCategories = { setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category =>( 
                        <AllGrid 
                        key ={ category }
                        category={ category }/>
                    ))

                }

            </ol>

        </div>

    );


}

export default ExpertiesApp;
