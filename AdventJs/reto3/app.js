/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    return inventory.reduce((a, {name, quantity, category}) => {
        (a[category] ??= {})[name] = (a[category][name] ?? 0 ) + quantity
        return a
    }, {})
}
