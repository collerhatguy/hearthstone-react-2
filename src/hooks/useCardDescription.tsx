import {useState} from "react";
interface card {
    health?: number,
    attack?: number,
    cost?: number,
    text?: String,
    type?: String,
    race?: String,
    rarity?: number,
    artist?: number,
    flavor?: number,
    img?: number,
    imgGold?: number,
}
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
        } else {
            return <div className="card-artist">This card has no registered artist</div>
        }
    }   
    const renderFlavor = () => {
        if (card.flavor) {
            return <div className="card-flavor">Flavor: {card.flavor}</div>
        } else {
            return <div className="card-flavor">This card has no flavor text</div>
        }
    }   

    const [gold, setGold] = useState(false)
    const renderImage = () => {
        if (card.img || card.imgGold) {
            return <div className="card-image">
                        <img
                            style={{ display: gold ? "none" : "block"}} 
                            src={card.img}    
                        />
                        <img 
                            style={{ display: gold ? "block" : "none"}} 
                            src={card.imgGold}
                            alt="there is no golden version of this card" 
                        />
                        <button 
                            className="description-btn"
                            onClick={() => {setGold(!gold);}}
                        >Gold</button>
                    </div>
        } 
    }   
    return [renderImage, renderArtist, renderFlavor]
}
export default useCardDescription;