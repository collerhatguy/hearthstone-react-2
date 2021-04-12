
function useCardDescription(card) {
    const renderHealth = () => {
        if (card.health) {
            return <div className="card-property">Health: {card.health}</div>
        }
    } 
    const renderAttack = () => {
        if (card.attack) {
            return <div className="card-property">Attack: {card.attack}</div>
        }
    }  
    const renderCost = () => {
        if (card.cost) {
            return <div className="card-property">Cost: {card.cost}</div>
        }
    }   
    const renderText = () => {
        if (card.text) {
            return <div className="card-property">Text: {card.text}</div>
        }
    }   
    const renderType = () => {
        if (card.type) {
            return <div className="card-property">Type: {card.type}</div>
        }
    }   
    const renderRace = () => {
        if (card.race) {
            return <div className="card-property">Race: {card.race}</div>
        }
    }   
    const renderRarity = () => {
        if (card.rarity) {
            return <div className="card-property">Rarity: {card.rarity}</div>
        }
    }   
    return [renderHealth, renderAttack, renderCost, renderType, renderText, renderRace, renderRarity]
}
export default useCardDescription;