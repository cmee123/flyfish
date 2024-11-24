import { createSlice } from '@reduxjs/toolkit'

export const lootboxSlice = createSlice({
    name: 'lootbox',
    initialState: {
        1: {
          cChance: 30,
          ucChance: 20,
          rChance: 15,
          eChance: 3,
          lChance: 1,
          multiplier: 1,
          name: "Common",
          price: 100
        },
        2: {
          cChance: 55,
          ucChance: 30,
          rChance: 25,
          eChance: 15,
          lChance: 6,
          multiplier: 1,
          name: "Rare",
          price: 300
        },
        3: {
          cChance: 65,
          ucChance: 40,
          rChance: 30,
          eChance: 20,
          lChance: 8,
          multiplier: 1,
          name: "Epic",
          price: 700
        },
        4: {
          cChance: 40,
          ucChance: 30,
          rChance: 20,
          eChance: 20,
          lChance: 10,
          multiplier: 1,
          name: "Legendary",
          price: 1000
        }
    },
    reducers: {
        loadLootboxData: (state, input) => {
          let data = input.payload;
          for(let i=1; i<=4; i++) {
            state[i].multiplier = data[i].multiplier;
            state[i].price = data[i].price;
          }
        },
        buyBox: (state, box) => {
            state[box.payload].multiplier += 1;
            state[box.payload].price *= state[box.payload].multiplier;
        }
    }
  })

export const { buyBox, loadLootboxData } = lootboxSlice.actions

export const selectLootbox = state => state.lootbox

export default lootboxSlice.reducer