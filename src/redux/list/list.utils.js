export const editListFromLists = (lists, newList) => {
    const foundList = lists.find(list => list.storeId === newList.storeId)
    for (const key in foundList) {
        foundList[key] = newList[key]
    }
    return lists
}
