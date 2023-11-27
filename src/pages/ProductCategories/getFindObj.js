export const getFindObj = (menuItems) => {
    let findObj = null
    menuItems.forEach(item => {
        if (item.submenu) {
            let subItem = item.submenu.find(subItem => {
                return location.pathname === `/${subItem.url}`
            })
            if (subItem) {
                findObj = subItem
            }
        } else {
            if (location.pathname === `/${item.url}`) {
                findObj = item
            }
        }
    })

    return findObj
}