
/**
 * @typedef {Array} WineTypes
 * 
 * @property {string} name
 * @property {string} color
 * @property {int} id
 */
const wineTypes = [
  {
    id: 1,
    name: 'Tinto',
    color: '#8c00ff', // purple color
  },
  {
    id: 2,
    name: 'Branco',
    color: '#ffffff', // white color
  },
  {
    id: 3,
    name: 'Rosé',
    color: '#ffc0cb', // pink color
  },
  {
    id: 4,
    name: 'Espumante',
    color: '#ffd700', // gold color
  },
  {
    id: 5,
    name: 'Frisante',
    color: '#ffa500', // orange color
  },
  {
    id: 6,
    name: 'Licorosos',
    color: '#ff0000', // red color
  }
];

/**
 * @typedef {Array} priceRange
 * 
 * @property {int} min
 * @property {int} max
 * @property {string} description
 */
const priceRange = [
  {
    min: 0,
    max: 40,
    description: 'Até R$ 40,00',
  },
  {
    min: 40,
    max: 100,
    description: 'De R$ 40,00 a R$ 100,00',
  },
  {
    min: 100,
    max: 200,
    description: 'De R$ 100,00 a R$ 200,00',
  },
  {
    min: 200,
    max: 500,
    description: 'De R$ 200,00 a R$ 500,00',
  },
  {
    min: 500,
    max: '*',
    description: 'Acima de R$ 500,00',
  }
];

export { wineTypes, priceRange };