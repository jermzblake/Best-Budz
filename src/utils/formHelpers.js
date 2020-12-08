// Form options
export let positiveEffects = ["Euphoria", "Body High", "Calm", "Uplifting", "Sociable", "Energetic", "Giggly", "Creative", "Relaxed", "Sleepy", "Clear Headed", "Invigorating"]
export let negativeEffects = ["Red Eyes", "Dry Mouth", "Headache", "Sleeplessness", "Anxious"]
export let flavour = ["Fruity", "Earthy", "Woody", "Citrus", "Spicy", "Skunk", "Cheese", "Floral", "Tonic", "Sweet" ]
export let method = ["Dried Flower", "Pill", "Oil", "Beverage", "Edible"]

// Form initial state functions
export function positiveInitialState() {
    let initialState = {};
    positiveEffects.forEach(
      (effect) => (initialState = { ...initialState, [effect]: false })
    );
    return initialState;
  }

export function negativeInitialState() {
    let initialState = {};
    negativeEffects.forEach(
      (effect) => (initialState = { ...initialState, [effect]: false })
    );
    return initialState;
}

export function flavourInitialState() {
    let initialState = {};
    flavour.forEach(
      (effect) => (initialState = { ...initialState, [effect]: false })
    );
    return initialState;
  }