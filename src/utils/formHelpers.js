// Form options
export let positiveEffects = ["Euphoria", "Body High", "Calm", "Uplifting", "Sociable", "Energetic", "Giggly", "Creative", "Relaxed", "Sleepy", "Clear Headed", "Invigorating", "None"]
export let negativeEffects = ["Red Eyes", "Dry Mouth", "Headache", "Sleeplessness", "Anxious", "None"]
export let flavours = ["Fruity", "Earthy", "Woody", "Citrus", "Spicy", "Skunk", "Cheese", "Floral", "Tonic", "Sweet", "None"]
export let method = ["Dried Flower", "Pill", "Oil", "Beverage", "Edible", "Other"]
export let types = ["Sativa", "Indica", "Hybrid"]
export let rating = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"]
export let intervals = ["Immediate", "< 30mins", "30mins > 60mins", "30mins > 60mins", "90mins > 120mins", "120mins > 180mins", "> 180mins"]

// Form initial state functions
export function positiveInitialState() {
    const effectArray = positiveEffects.map(
      (effect) => ({ [effect]: false })
    );
    return {positiveEffects: effectArray};
  }

export function negativeInitialState() {
    const effectArray = negativeEffects.map(
      (effect) => ({ [effect]: false })
    );
    return {negativeEffects: effectArray};
}

export function flavourInitialState() {
    const flavourArray = flavours.map(
      (flavour) => ({ [flavour]: false })
    );
    return {flavours: flavourArray};
  }