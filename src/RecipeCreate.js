import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
            <tr>
              <td>
                <label htmlFor="name">
                  <input id="name" name="name" placeholder="Name" onChange={handleChange} value={formData.name}/>
                </label>
              </td>
              <td>
                <label htmlFor="cuisine">
                  <input id="cuisine" name="cuisine" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}/>
                </label>
              </td>
              <td>
                <label htmlFor="photo">
                  <input id="photo" name="photo" type="url" placeholder="URL" onChange={handleChange} value={formData.photo}/>
                </label>
              </td>
              <td>
                <textarea  id="ingredients" name="ingredients" placeholder="Ingredients" rows="2" onChange={handleChange} value={formData.ingredients}>
                </textarea>
              </td>
              <td>
                <textarea id="preparation" name="preparation" placeholder="Preparation" rows="2" onChange={handleChange} value={formData.preparation}>
                </textarea>
              </td>
              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
