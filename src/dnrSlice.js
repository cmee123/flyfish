import { createSlice } from '@reduxjs/toolkit'

export const dnrSlice = createSlice({
    name: 'dnr',
    initialState: {
        conversionRate: 100,
        productionRate: 0,
        fishStocking: 0,
        habitatRestoration: 0,
        citizenEducation: 0,
        parkBuilding: 0
    },
    reducers: {
      loadDNRData: (state, input) => {
        let data = input.payload;
        state.conversionRate = data.conversionRate;
        state.productionRate = data.productionRate;
        state.fishStocking = data.fishStocking;
        state.habitatRestoration = data.habitatRestoration;
        state.citizenEducation = data.citizenEducation;
        state.parkBuilding = data.parkBuilding;
      },
      improveDNR: (state, aspect) => {
        state[aspect.payload] += 1;
        state.productionRate += 1;
      }
    }
  })

export const { improveDNR, loadDNRData } = dnrSlice.actions

export const selectDNR = state => state.dnr

export default dnrSlice.reducer