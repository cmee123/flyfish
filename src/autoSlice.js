import { createSlice } from '@reduxjs/toolkit'

export const autoSlice = createSlice({
    name: 'automation',
    initialState: {
        1: {fps: 0.2, quantity: 0, name: 'Fishing Bum', price: 10, unlocked: 1, multiplier: 1},
        2: {fps: 1, quantity: 0, name: 'Wall Street Tycoon', price: 100, unlocked: 0, multiplier: 1},
        3: {fps: 8, quantity: 0, name: 'Meek Toddler', price: 1100, unlocked: 0, multiplier: 1},
        4: {fps: 47, quantity: 0, name: 'Henry Norton Bower', price: 12000, unlocked: 0, multiplier: 1},
        5: {fps: 260, quantity: 0, name: 'Olaf Hall Holt', price: 130000, unlocked: 0, multiplier: 1},
        6: {fps: 4977, quantity: 0, name: 'Discord Mod', price: 1400000, unlocked: 0, multiplier: 1},
        7: {fps: -4000, quantity: 0, name: 'Rampant Environmentalist', price: 2000000, unlocked: 0, multiplier: 1},
        8: {fps: 7800, quantity: 0, name: 'Exhausted Stav Worker', price: 20000000, unlocked: 0, multiplier: 1},
        9: {fps: 44000, quantity: 0, name: 'Grace Chandler', price: 330000000, unlocked: 0, multiplier: 1},
        10: {fps: 260000, quantity: 0, name: 'Commercial Fisher', price: 5100000000, unlocked: 0, multiplier: 1},
        11: {fps: 1600000, quantity: 0, name: 'Under Paid Teacher', price: 75000000000, unlocked: 0, multiplier: 1},
        12: {fps: 10000000, quantity: 0, name: 'World Cup Skier', price: 1000000000000, unlocked: 0, multiplier: 1},
        13: {fps: 65000000, quantity: 0, name: 'Clown', price: 14000000000000, unlocked: 0, multiplier: 1},
        14: {fps: 430000000, quantity: 0, name: 'IF4 Critic', price: 170000000000000, unlocked: 0, multiplier: 1},
        15: {fps: -400000000, quantity: 0, name: 'Vegan Mom', price: 300000000000000, unlocked: 0, multiplier: 1},
        16: {fps: 2900000000, quantity: 0, name: 'Cathal Mee', price: 2100000000000000, unlocked: 0, multiplier: 1},
        17: {fps: 21000000000, quantity: 0, name: 'Energetic Pre Teen', price: 26000000000000000, unlocked: 0, multiplier: 1},
        18: {fps: 150000000000, quantity: 0, name: 'Guy From Michigan', price: 31000000000000000, unlocked: 0, multiplier: 1},
        19: {fps: 1100000000000, quantity: 0, name: 'Pro Angler', price: 71000000000000000000, unlocked: 0, multiplier: 1},
        20: {fps: 8300000000000, quantity: 0, name: 'Local Grandpa', price: 12000000000000000000000, unlocked: 0, multiplier: 1}
    },
    reducers: {
      loadAutoData: (state, input) => {
        let data = input.payload;
        for(let i=1; i<=20; i++) {
          state[i].fps = data[i].fps;
          state[i].quantity = data[i].quantity;
          state[i].price = data[i].price;
          state[i].unlocked = data[i].unlocked;
          state[i].multiplier = data[i].multiplier;
        }
      },
      hire: (state, angler) => {
        state[angler.payload].quantity += 1;
        state[angler.payload].price *= 1.15;
      }, 
      trainAngler: (state, angler) => {
        state[angler.payload].multiplier += 1;
        state[angler.payload].fps *= 2;
      }
    }
  })

export const { loadAutoData, hire, trainAngler } = autoSlice.actions

export const selectAnglers = state => state.automation

export default autoSlice.reducer