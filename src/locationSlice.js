import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        name: "Mississippi River",
        CCBonus: 0,
        FPCBonus: 0,
        waterQuality: 0,
        habitatQuality: 0,
        wildlifeDiversity: 0,
        fishAbundance: 0
    },
    reducers: {
      loadLocationData: (state, input) => {
        let data = input.payload;
        state.CCBonus = data.CCBonus;
        state.FPCBonus = data.FPCBonus;
        state.waterQuality = data.waterQuality;
        state.habitatQuality = data.habitatQuality;
        state.wildlifeDiversity = data.wildlifeDiversity;
        state.fishAbundance = data.fishAbundance;
      },
      increaseLevel: (state, lvl) => {
        state[lvl.payload] += 1;
      },
      updateCCBonus: (state, amt) => {
        state.CCBonus += amt.payload;
        if(state.CCBonus > 0.8) {
            state.CCBonus = 0.8
        }
      },
      updateFPCBonus: (state, amt) => {
        state.FPCBonus += amt.payload;
      }
    }
  })

export const { increaseLevel, updateCCBonus, updateFPCBonus, loadLocationData } = locationSlice.actions

export const selectLocation = state => state.location

export default locationSlice.reducer