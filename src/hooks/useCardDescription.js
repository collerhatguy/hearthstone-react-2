
function useCardDescription(card) {
    // const renderHealth = () => {
    //     if (card.health) {
    //         return <div className="card-property">Health: {card.health}</div>
    //     }
    // } 
    // const renderAttack = () => {
    //     if (card.attack) {
    //         return <div className="card-property">Attack: {card.attack}</div>
    //     }
    // }  
    // const renderCost = () => {
    //     if (card.cost) {
    //         return <div className="card-property">Cost: {card.cost}</div>
    //     }
    // }   
    // const renderText = () => {
    //     if (card.text) {
    //         return <div className="card-property">Text: {card.text}</div>
    //     }
    // }   
    // const renderType = () => {
    //     if (card.type) {
    //         return <div className="card-property">Type: {card.type}</div>
    //     }
    // }   
    // const renderRace = () => {
    //     if (card.race) {
    //         return <div className="card-property">Race: {card.race}</div>
    //     }
    // }   
    // const renderRarity = () => {
    //     if (card.rarity) {
    //         return <div className="card-property">Rarity: {card.rarity}</div>
    //     }
    // }   
    const renderArtist= () => {
        if (card.artist) {
            return  <div className="card-artist">Artist: {card.artist}</div>
        }
    }   
    const renderFlavor = () => {
        if (card.flavor) {
            return <div className="card-flavor">Flavor: {card.flavor}</div>
        }
    }   
    const renderImage = () => {
        if (card.img) {
            return <div className="card-image">
                        <img src={card.img} />
                    </div>
        }
    }   
    return [renderImage, renderArtist, renderFlavor]
}
export default useCardDescription;