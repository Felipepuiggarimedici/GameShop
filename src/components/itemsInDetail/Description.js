import React from "react";
import "./../../styles/itemDetails/description.scss"

const Description = (description) => {
    let counter = 0;
    const arrayForEachDescriptionClause = [[]];
    //Iterating over the description object and placing it in the right or in the left depending if its odd or even.
    for (const key in description.descriptionObj) {
        arrayForEachDescriptionClause[counter] = [];
        arrayForEachDescriptionClause[counter].push(counter % 2 + 1);
        arrayForEachDescriptionClause[counter].push(`${key}`);
        arrayForEachDescriptionClause[counter].push(`${description.descriptionObj[key]}`)
        counter++;
    }

    return <>
        {arrayForEachDescriptionClause.map((descriptionItem) => (
            <div className={`contianerOfDescriptionItemType${descriptionItem[0]} generalContainerOfDescriptions`}>
                <h3 class="subtitleInDescription">{descriptionItem[1]}</h3>
                <p class="descriptionBulletPoint">{descriptionItem[2]}</p>
            </div>
        ))}
    </>
}

export default Description;