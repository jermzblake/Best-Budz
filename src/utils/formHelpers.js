// Form options
export let positiveEffects = ["Euphoria", "Body High", "Calm", "Uplifting", "Sociable", "Energetic", "Giggly", "Creative", "Relaxed", "Sleepy", "Clear Headed", "Invigorating"]
export let negativeEffects = ["Red Eyes", "Dry Mouth", "Headache", "Sleeplessness", "Anxious"]
export let flavours = ["Fruity", "Earthy", "Woody", "Citrus", "Spicy", "Skunk", "Cheese", "Floral", "Tonic", "Sweet" ]
export let method = ["Dried Flower", "Pill", "Oil", "Beverage", "Edible"]

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