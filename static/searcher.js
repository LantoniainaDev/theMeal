
/**
 * filtre les plats qui satisfont la recherche
 * @param {Oject} param0 
 * @param {String} searchValue 
 * @return {Boolean}
 */
export const filtreDeRecherche = ({strMeal},searchValue)=>{
    const titre = strMeal.toLowerCase().includes(searchValue);
    return titre ;
}