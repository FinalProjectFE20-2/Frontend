export const getCategories = (store) => {
    return store.categories.categories
}
export const getCategoryById = (store) => {
    return store.categories.categoryById
}
export const getProductsByCategory = (store) => {
    return store.categories.filterProductsByCategory
}
export const getIsLoading = (store) => {
    return store.categories.isLoading
}