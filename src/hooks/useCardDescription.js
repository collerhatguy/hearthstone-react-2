
function useCardDescription(card) {
    const renderHealth = () => {
        if (card.health) {
            return <div>Health: {card.health}</div>
        }
    } 
    const renderAttack = () => {
        if (card.attack) {
            return <div>Attack: {card.attack}</div>
        }
    }  
    const renderCost = () => {
        if (card.cost) {
            return <div>Cost: {card.cost}</div>
        }
    }   
    const renderText = () => {
        if (card.text) {
            return <div>Text: {card.text}</div>
        }
    }   
    const renderType = () => {
        if (card.type) {
            return <div>Type: {card.type}</div>
        }
    }   
    const renderRace = () => {
        if (card.race) {
            return <div>Race: {card.race}</div>
        }
    }   
    const renderRarity = () => {
        if (card.rarity) {
            return <div>Rarity: {card.rarity}</div>
        }
    }   
    return [renderHealth, renderAttack, renderCost, renderType, renderText, renderRace, renderRarity]
}
export default useCardDescription;