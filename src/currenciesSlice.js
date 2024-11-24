import { createSlice } from '@reduxjs/toolkit'

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
      userID: "",
      totalFish: 0,
      totalAutoFish: 0,
      totalClickedFish: 0,
      fish: 0,
      shillings: 0,
      DNRBucks: 0,
      FPC: 1,
      FPCMultiplier: 1,
      catchChance: 0.3,
      FPS: 0,
      DPS: 0,
      sellFishAmts: [10, 100, 1000, 50000, 100000],
      productTourRuns: 0,
      profileImg: ''
    },
    reducers: {
      loadCurrenciesData: (state, input) => {
        let data = input.payload;
        state.userID = data.userID;
        state.totalFish = data.totalFish;
        state.totalAutoFish = data.totalAutoFish;
        state.totalClickedFish = data.totalClickedFish;
        state.fish = data.fish;
        state.shillings = data.shillings;
        state.DNRBucks = data.DNRBucks;
        state.FPC = data.FPC;
        state.FPCMultiplier = data.FPCMultiplier;
        state.catchChance = data.catchChance;
        state.FPS = data.FPS;
        state.DPS = data.DPS;
        state.sellFishAmts = data.sellFishAmts;
        state.productTourRuns = data.productTourRuns;
        state.profileImg = data.profileImg;
      },
      setUserID: (state, id) => {
        state.userID = id.payload;
      },
      catchFish: state => {
        state.fish += state.FPC * state.FPCMultiplier;
        state.totalFish += state.FPC * state.FPCMultiplier;
        state.totalClickedFish += state.FPC * state.FPCMultiplier;
      },
      getFish: (state) => {
        state.fish += state.FPS/10;
        state.totalFish += state.FPS/10;
        state.totalAutoFish += state.FPS/10;
      },
      sellFish: (state, amt) => {
        let cr = Math.random() * (2.5 - 1) + 1;
        state.fish -= amt.payload;
        state.shillings += parseInt(amt.payload*cr);
      },
      spendFish: (state, amt) => {
        state.fish -= amt.payload;
      },
      spendShillings: (state, amt) => {
        state.shillings -= amt.payload;
      },
      getShillings: (state, amt) => {
        state.shillings += amt.payload;
      },
      spendDNRBucks: (state, amt) => {
        state.DNRBucks -= amt.payload;
      },
      getDNRBucks: (state) => {
        state.DNRBucks += state.DPS/10;
      },
      updateFPS: (state, amt) => {
        state.FPS = amt.payload;
      },
      increaseFPC: (state, fly) => {
        state.FPC += fly.payload;
      },
      increaseCatchChance: (state,  fly) => {
        state.catchChance +=  fly.payload;
      },
      decreaseFPC: (state,  fly) => {
        state.FPC -=  fly.payload.FPC;
      },
      decreaseCatchChance: (state,  fly) => {
        state.catchChance -=  fly.payload.CC;
      },
      increaseDPS: state => {
        state.DPS += 1;
      },
      decreaseFPCMultiplier: (state,  amt) => {
        state.FPCMultiplier -=  amt.payload;
      },
      increaseFPCMultiplier: (state,  amt) => {
        state.FPCMultiplier +=  amt.payload;
      },
      updateSellFishAmts: state => {
        if(state.fish > 10000) {
          state.sellFishAmts = [state.fish/100, state.fish/10, state.fish, state.fish*2, state.fish*10];
        } else {
          state.sellFishAmts = [10, 100, 1000, 50000, 100000];
        }
      },
      ranProductTour: state => {
        state.productTourRuns += 1;
      },
      updateProfileImg: (state, img) => {
        state.profileImg = img.payload;
      }
    }
  })

export const { loadCurrenciesData, setUserID, updateProfileImg, ranProductTour, updateSellFishAmts, catchFish, sellFish, increaseDPS, getFish, spendFish, spendShillings, getShillings, spendDNRBucks, getDNRBucks, updateFPS, increaseCatchChance, increaseFPC, decreaseCatchChance, decreaseFPC, increaseFPCMultiplier, decreaseFPCMultiplier } = currenciesSlice.actions

export const selectCurrencies = state => state.currencies;

export default currenciesSlice.reducer