import React from "react";
import "./../../styles/itemDetails/description.scss"

const Description = (description) => {
    let counter = 0;
    const arrayForEachDescriptionClause = [[]];
    //Iterating over the description object and placing it in the right or in the left depending if its odd or even.
    for (const key in description.descriptionObj) {
        arrayForEachDescriptionClause[counter] = [];
        arrayForEachDescriptionClause[counter].push(`${key}`);
        arrayForEachDescriptionClause[counter].push(`${description.descriptionObj[key]}`)
        counter++;
    }

    return <div className="descriptionContainer">
        <div key="descriptionCentre" className="centreDescription">
            {arrayForEachDescriptionClause.map((descriptionItem) => (
                <div key={descriptionItem[0]} className="innerContainerOfDescription">
                    <div key={descriptionItem[0]} className={`containerOfTextInDescriptionItem`}>
                        <h3 className="subtitleInDescription">{descriptionItem[0]}</h3>
                        <p className="descriptionBulletPoint">{descriptionItem[1]}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Description;