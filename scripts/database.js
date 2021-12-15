const database = {
  paintColors: [
    { id: 1, color: "Silver", price: 5000 },
    { id: 2, color: "Midnight Blue", price: 6000 },
    { id: 3, color: "Firebrick Red", price: 7500 },
    { id: 4, color: "Spring Green", price: 8000 },
  ],
  interiors: [
    { id: 1, type: "Beige Fabric", price: 500 },
    { id: 2, type: "Charcoal Fabric", price: 450 },
    { id: 3, type: "White Leather", price: 750 },
    { id: 4, type: "Black Leather", price: 800 },
  ],
  technologies: [
    { id: 1, type: "Basic Package", price: 1000 },
    { id: 2, type: "Navigation Package", price: 1250 },
    { id: 3, type: "Visibility Package", price: 1500 },
    { id: 4, type: "Ultra Package", price: 1800 },
  ],
  wheels: [
    { id: 1, type: "17-inch Pair Radial", price: 1000 },
    { id: 2, type: "17-inch Pair Radial Black", price: 1200 },
    { id: 3, type: "18-inch Pair Spoke Silver", price: 1400 },
    { id: 4, type: "18-inch Pair Spoke Black", price: 1600 },
  ],
  customOrders: [
    {
    id: 1,
      paintId: 2,
      interiorId: 3,
      technologyId: 4,
      wheelId: 2,
      timestamp: 1614659931693,
      totalPrice: 9750,
    },
  ],
  orderBuilder: 
    {

    }
  
};
export const getPaintColors = () => {
  return database.paintColors.map((paintColor) => ({ ...paintColor }));
};

export const getInteriors = () => {
  return database.interiors.map((interior) => ({ ...interior }));
};

export const getTechnologies = () => {
  return database.technologies.map((technology) => ({ ...technology }));
};

export const getWheels = () => {
  return database.wheels.map((wheel) => ({ ...wheel }));
};

export const getOrders = () => {
  return database.customOrders.map((customOrder) => ({ ...customOrder }));
};

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}