import React from "react";


function Recipe({recipe, index, deleteRecipe}) {

    if(recipe){
        const {name, cuisine, photo, ingredients, preparation} = recipe;
    
        return (
            <tr key={index}>
                <td key={name}>{name}</td>
                <td key={cuisine}>{cuisine}</td>
                <td key={photo}><img src={photo} alt=""/></td>
                <td className="content_td" key={ingredients}><p>{ingredients}</p></td>
                <td className="content_td" key={preparation}><p>{preparation}</p></td>
                <td><button name="delete" id={index} onClick={deleteRecipe}>Delete</button></td>
            </tr>
        )
    }
  }
  
  export default Recipe;