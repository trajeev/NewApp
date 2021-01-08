export const removeForm = (lists, listToRemove) => {
    return lists.filter(list => (
        list.id === listToRemove
    ))
}
