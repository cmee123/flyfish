import { createSlice } from '@reduxjs/toolkit'

export const BMFSSlice = createSlice({
    name: 'BMFS',
    initialState: {
        1: {
            Name: "Stick",
            Type: "Rod",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 1.1,
            Price: 100
        },
        2: {
            Name: "Kiddie Pole",
            Type: "Rod",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 2,
            Price: 10000
        },
        3: {
            Name: "Wooden Fly Rod",
            Type: "Rod",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 5,
            Price: 1000000
        },
        4: {
            Name: "Graphite Fly Rod",
            Type: "Rod",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 10,
            Price: 1000000000
        },
        5: {
            Name: "Golden Fly Rod",
            Type: "Rod",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 20,
            Price: 10000000000000
        },
        6: {
            Name: "Bowl",
            Type: "Net",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 1.1,
            Price: 10000
        },
        7: {
            Name: "Starter Net",
            Type: "Net",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 4,
            Price: 10000000
        },
        8: {
            Name: "Normal Fly Net",
            Type: "Net",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 10,
            Price: 10000000000
        },
        9: {
            Name: "Carbon Fiber Net",
            Type: "Net",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 40,
            Price: 100000000000
        },
        10: {
            Name: "Enchanted Net",
            Type: "Net",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 60,
            Price: 1000000000000000
        },
        11: {
            Name: "Stealth Net",
            Type: "Net",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 200,
            Price: 100000000000000000
        },
        12: {
            Name: "Lightning Net",
            Type: "Net",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 1000,
            Price: 100000000000000000000
        },
        13: {
            Name: "Holey Vest",
            Type: "Vest",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 1.3,
            Price: 10000
        },
        14: {
            Name: "Basement Vest",
            Type: "Vest",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 2,
            Price: 10000000
        },
        15: {
            Name: "Wooden Vest",
            Type: "Vest",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 3,
            Price: 10000000000000
        },
        16: {
            Name: "Orvis Vest",
            Type: "Vest",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 5,
            Price: 10000000000000000
        },
        17: {
            Name: "Carbon Fiber Vest",
            Type: "Vest",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 5,
            Price: 10000000000000000000
        },
        18: {
            Name: "Tactical Vest",
            Type: "Vest",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 18,
            Price: 100000000000000000000
        },
        19: {
            Name: "Golden Vest",
            Type: "Vest",
            Unlocked: 0,
            Equipped: 0,
            FPCMultiplier: 20000,
            Price: 900000000000000000000
        }
    },
    reducers: {
        loadBMFSData: (state, input) => {
            let data = input.payload;
            for(let i=1; i<=19; i++) {
                state[i].Unlocked = data[i].Unlocked;
                state[i].Equipped = data[i].Equipped;
            }
        },
        unlockItem: (state, item) => {
            state[item.payload].Unlocked = 1;
        },
        equipItem: (state, item) => {
            state[item.payload].Equipped = 1;
        },
        unequipItem: (state, item) => {
            state[item.payload].Equipped = 0;
        },
    }
  })

export const { loadBMFSData, unlockItem, equipItem, unequipItem } = BMFSSlice.actions

export const selectBMFS = state => state.BMFS

export default BMFSSlice.reducer