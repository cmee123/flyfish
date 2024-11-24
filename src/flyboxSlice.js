import { createSlice } from '@reduxjs/toolkit'

export const flyboxSlice = createSlice({
    name: 'flybox',
    initialState: {
        1: {
            FPC: 8,
            CC: 0.1,
            name: "Woolly Bugger",
            rarity: "Common",
            equipped: 0,
            unlocked: 0
        },
        2: {
            FPC: 15,
            CC: 0.2,
            name: "Woolly Bugger",
            rarity: "Uncommon",
            equipped: 0,
            unlocked: 0
        },
        3: {
            FPC: 50,
            CC: 0.3,
            name: "Woolly Bugger",
            rarity: "Rare",
            equipped: 0,
            unlocked: 0
        },
        4: {
            FPC: 200,
            CC: 0.4,
            name: "Woolly Bugger",
            rarity: "Epic",
            equipped: 0,
            unlocked: 0
        },
        5: {
            FPC: 1000,
            CC: 0.5,
            name: "Woolly Bugger",
            rarity: "Legendary",
            equipped: 0,
            unlocked: 0
        },
        6: {
            FPC: 4,
            CC: 0.1,
            name: "Hopper",
            rarity: "Common",
            equipped: 0,
            unlocked: 0
        },
        7: {
            FPC: 15,
            CC: 0.2,
            name: "Hopper",
            rarity: "Uncommon",
            equipped: 0,
            unlocked: 0
        },
        8: {
            FPC: 10,
            CC: 0.3,
            name: "Hopper",
            rarity: "Rare",
            equipped: 0,
            unlocked: 0
        },
        9: {
            FPC: 150,
            CC: 0.4,
            name: "Hopper",
            rarity: "Epic",
            equipped: 0,
            unlocked: 0
        },
        10: {
            FPC: 1500,
            CC: 0.5,
            name: "Hopper",
            rarity: "Legendary",
            equipped: 0,
            unlocked: 0
        },
        11: {
            FPC: 7,
            CC: 0.4,
            name: "Prince Nymph",
            rarity: "Common",
            equipped: 0,
            unlocked: 0
        },
        12: {
            FPC: 3,
            CC: 0.5,
            name: "Prince Nymph",
            rarity: "Uncommon",
            equipped: 0,
            unlocked: 0
        },
        13: {
            FPC: 100,
            CC: 0.4,
            name: "Prince Nymph",
            rarity: "Rare",
            equipped: 0,
            unlocked: 0
        },
        14: {
            FPC: 1000,
            CC: 0.6,
            name: "Prince Nymph",
            rarity: "Epic",
            equipped: 0,
            unlocked: 0
        },
        15: {
            FPC: 100000,
            CC: 0.4,
            name: "Prince Nymph",
            rarity: "Legendary",
            equipped: 0,
            unlocked: 0
        },
        16: {
            FPC: 7,
            CC: 0.4,
            name: "Blue-Winged Olive",
            rarity: "Common",
            equipped: 0,
            unlocked: 0
        },
        17: {
            FPC: 30,
            CC: 0.5,
            name: "Blue-Winged Olive",
            rarity: "Uncommon",
            equipped: 0,
            unlocked: 0
        },
        18: {
            FPC: 100,
            CC: 0.4,
            name: "Blue-Winged Olive",
            rarity: "Rare",
            equipped: 0,
            unlocked: 0
        },
        19: {
            FPC: 7000,
            CC: 0.6,
            name: "Blue-Winged Olive",
            rarity: "Epic",
            equipped: 0,
            unlocked: 0
        },
        20: {
            FPC: 15000,
            CC: 0.4,
            name: "Blue-Winged Olive",
            rarity: "Legendary",
            equipped: 0,
            unlocked: 0
        },
        21: {
            FPC: 20,
            CC: 0.1,
            name: "Flying Goat Streamer",
            rarity: "Common",
            equipped: 0,
            unlocked: 0
        },
        22: {
            FPC: 200,
            CC: 0.1,
            name: "Flying Goat Streamer",
            rarity: "Uncommon",
            equipped: 0,
            unlocked: 0
        },
        23: {
            FPC: 2000,
            CC: 0.1,
            name: "Flying Goat Streamer",
            rarity: "Rare",
            equipped: 0,
            unlocked: 0
        },
        24: {
            FPC: 20000,
            CC: 0.1,
            name: "Flying Goat Streamer",
            rarity: "Epic",
            equipped: 0,
            unlocked: 0
        },
        25: {
            FPC: 50000,
            CC: 0.1,
            name: "Flying Goat Streamer",
            rarity: "Legendary",
            equipped: 0,
            unlocked: 0
        }
    },
    reducers: {
        loadFlyboxData: (state, input) => {
            let data = input.payload;
            for(let i=1; i<= 25; i++) {
                state[i].FPC = data[i].FPC;
                state[i].CC = data[i].CC;
                state[i].equipped = data[i].equipped;
                state[i].unlocked = data[i].unlocked;
            }
        },
        equip: (state, fly) => {
            state[fly.payload].equipped = 1;
        },
        unequip: (state, fly) => {
            state[fly.payload].equipped = 0;
        },
        unlock: (state, fly) => {
            state[fly.payload].unlocked = 1;
        }
    }
  })

export const { equip, unequip, unlock, loadFlyboxData } = flyboxSlice.actions

export const selectFlybox = state => state.flybox

export default flyboxSlice.reducer