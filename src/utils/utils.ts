type TagsObject = { [key: string]: string[] }

export function processTags(tags: string[][]): TagsObject {
    const finalObject: TagsObject = {};
    for (const tagValue of tags) {
        if(tagValue[0] === "") continue;
        const tagLabel = tagValue.shift()!

        if (tagLabel !== "") {
            finalObject[tagLabel] = []
            for (const tagValueElement of tagValue) {
                finalObject[tagLabel].push(tagValueElement)
            }
        }
    }

    return finalObject
}