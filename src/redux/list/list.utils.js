export const editListFromLists = (lists, newList) => {
    const foundList = lists.find(list => list.id === newList.id)
    for (const key in foundList) {
        foundList[key] = newList[key]
    }
    return lists
}
