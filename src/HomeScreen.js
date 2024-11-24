import "./styles.css";
import React, { useState, useEffect } from "react";

// Currency Images
import brown from "./Images/CurrencyImages/brown.png";
import dnrB from "./Images/CurrencyImages/images (1).jpg";
import shill from "./Images/CurrencyImages/shillingCoin.png";

import BMFSLogo from "./Images/BMFSImages/BMFSLogo.jpg";

// Lootbox Images
import commonLB from "./Images/LootboxImages/rareLootbox.png";
import rareLB from "./Images/LootboxImages/commonLootBox.png";
import epicLB from "./Images/LootboxImages/epicLootbox.png";
import legendaryLB from "./Images/LootboxImages/legendaryLootbox.png";

// Navigation Icon Images
import flyboxImg from "./Images/IconImages/flyboxImg.jpg";
import profile from "./Images/IconImages/profileImg1.jpg";
import dnrHQ from "./Images/IconImages/DNRHQ2.jpg";
import fishMarket from "./Images/IconImages/fishMarket2.jpg";
import saveIcon from "./Images/IconImages/download.png"

// Fly Images
import WB from "./Images/FlyImages/woolybuggerfinally.png";
import DF from "./Images/FlyImages/dryfly.png";
import CF from "./Images/FlyImages/flycool.png";
import hopper from "./Images/FlyImages/Hopper2.png";
import PN from "./Images/FlyImages/PrinceNymph22.png";

// Background Images
import stream1 from "./Images/BackgroundImages/stream1.png";
import stream4 from "./Images/BackgroundImages/stream4.png";
import stream5 from "./Images/BackgroundImages/stream5.png";
import stream6 from "./Images/BackgroundImages/stream6.png";
import stream7 from "./Images/BackgroundImages/stream7.png";

import lockIcon from "./Images/IconImages/LockIcon.png";
import qmark from "./Images/IconImages/QuestionMark.png";
import sound from "./Images/IconImages/Sound.png";
import noSound from "./Images/IconImages/NoSound.png";

//
import waterQuality from "./Images/IconImages/waterQualityIcon.jpg";
import habitatQuality from "./Images/IconImages/habitatQuality.jpg";
import fishAbundance from "./Images/IconImages/fishAbundance.jpg";
import wildlifeDiversity from "./Images/IconImages/wildlifeDiversity.jpg";

import fishStocking from "./Images/IconImages/fishStocking.jpg";
import habitatRestoration from "./Images/IconImages/habitatRestoration.jpg";
import citizenEducation from "./Images/IconImages/education.png";
import parkBuilding from "./Images/IconImages/parkBuilding.jpg";

import anglerRod from "./Images/IconImages/anglerRod.png";
import anglerBoat from "./Images/IconImages/anglerBoat.png";
import anglerBook from "./Images/IconImages/anglerBook.png";
import anglerBoots from "./Images/IconImages/anglerBoots.jpg";
import anglerFlybox from "./Images/IconImages/anglerFlybox.jpeg";
import anglerHat from "./Images/IconImages/anglerHat.jpg";
import anglerPliers from "./Images/IconImages/anglerPliers.png";
import anglerVest from "./Images/IconImages/anglerVest.jpg";
import anglerWaders from "./Images/IconImages/anglerWaders.png";

// BMFS Images
import rodIcon from "./Images/BMFSImages/rodIcon.jpg";
import netIcon from "./Images/BMFSImages/netIcon.png";
import vestIcon from "./Images/BMFSImages/vestIcon.jpg";

import stickPole from "./Images/BMFSImages/StickPole.jpeg";
import kiddiePole from "./Images/BMFSImages/KiddiePole.jpeg";
import woodPole from "./Images/BMFSImages/WoodenPole.jpeg";
import graphitePole from "./Images/BMFSImages/GraphitePole.jpeg";
import goldenPole from "./Images/BMFSImages/GoldenPole.jpeg";

import bowlNet from "./Images/BMFSImages/BowlNet.jpeg";
import starterNet from "./Images/BMFSImages/BeginnerNet.jpeg";
import normalNet from "./Images/BMFSImages/NormalNet.jpeg";
import carbonNet from "./Images/BMFSImages/CarbonFiberNet.jpg";
import enchantedNet from "./Images/BMFSImages/EnchantedNet.jpg";
import stealthNet from "./Images/BMFSImages/StealthNet.jpg";
import lightningNet from "./Images/BMFSImages/LightningNet.jpg";

import holeyVest from "./Images/BMFSImages/holeyVest.jpg";
import basementVest from "./Images/BMFSImages/oldVest.jpg";
import woodVest from "./Images/BMFSImages/woodVest.jpg";
import orvisVest from "./Images/BMFSImages/orvisVest.jpg";
import carbonVest from "./Images/BMFSImages/CarbonFiberVest.jpeg";
import tacticalVest from "./Images/BMFSImages/tacticalVest.jpg";
import goldVest from "./Images/BMFSImages/goldVest.jpg";

import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";

import { useSelector, useDispatch } from "react-redux";
import {
  updateSellFishAmts,
  ranProductTour,
  catchFish,
  sellFish,
  spendFish,
  getFish,
  spendShillings,
  getShillings,
  spendDNRBucks,
  getDNRBucks,
  updateFPS,
  increaseCatchChance,
  increaseFPC,
  decreaseCatchChance,
  decreaseFPC,
  increaseFPCMultiplier,
  decreaseFPCMultiplier,
  selectCurrencies,
  increaseDPS,
  updateProfileImg,
  setUserID,
  currenciesSlice,
  loadCurrenciesData
} from "./currenciesSlice";

import { loadAutoData, hire, selectAnglers, trainAngler } from "./autoSlice";
import { equip, unequip, unlock, selectFlybox, loadFlyboxData } from "./flyboxSlice";
import { selectDNR, improveDNR, loadDNRData } from "./dnrSlice";

import { selectLootbox, buyBox, loadLootboxData } from "./lootboxSlice";

import {
  selectLocation,
  increaseLevel,
  updateCCBonus,
  updateFPCBonus,
  loadLocationData
} from "./locationSlice";

import { unlockItem, equipItem, unequipItem, selectBMFS, loadBMFSData } from "./BMFSSlice";

//Popup library
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Joyride, { STATUS, EVENTS, ACTIONS } from "react-joyride";

// Sound imports
import useSound from "use-sound";
import hireAnglerSound from "./Images/hireAngler.wav";
import cartoonPop from "./Images/cartoonPop.mp3";
import sellFishSound from "./Images/marketSold.flac";
import equipFlySound from "./Images/FlySound.wav";

// Background Music 
import bgTrack from "./Images/bgAudio.mp3";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc, setDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

{
  /*

  TODO:
  - Fix hover for modals

  - Make some animation so the user knows that anglers are catching fish
  - Make some small animation for the currencies getting bigger?? (no clue what this means)
  - More responsive

  - Go crazy with some animations

  Functionality to add:
  - Games to gamble/invest fish
  - Have fish species to unlock
  - Gallery of all the fish you have caught
  X Bob mitchells fly shop (user can buy flies, buy lootboxes?, buy gear, etc)
  - Multiple locations
  - More animations
  - Fishing licenses and random events (HATCH!!)
  - Add profile functionality
*/
}

const steps = [
  {
    target: ".castWrapper",
    content:
      "This river is full of fish. Click the water to cast your line and catch them!",
    placement: "left",
    disableBeacon: true,
  },
  {
    target: "#gameInfoSection",
    content:
      "Here you can see your Catch Chance and Fish Per Cast. Right now, you have a 30% chance of catching 1 fish on every cast.",
    placement: "bottom",
  },
  {
    target: "#marketNavButton",
    content:
      "First, let's take a trip to the market and see what we can do with today's catch.",
    hideFooter: true,
    placement: "left",
    spotlightClicks: true,
  },
  {
    target: ".sellFishWrapper",
    content:
      "Welcome to the Market! I'm sure you'll be familiar with this place very soon. In this section, you can sell various amounts of Fish for Shillings.",
    disableBeacon: true,
    placement: "right",
  },
  {
    target: "#lootboxWrapperId",
    content:
      "You can also use Fish to purchase Lootboxes. Lootboxes will either give you a new Fly or Shillings.",
    disableBeacon: true,
    placement: "right",
  },
  {
    target: "#flyboxNavButton",
    content: "Next, let's open your Flybox!",
    hideFooter: true,
    placement: "left",
    spotlightClicks: true,
  },
  {
    target: ".flyboxWrapper",
    content:
      "The flybox contains all the flies you need for your fishing journey. Equip a fly to boost your Catch Chance and Fish Per Cast.",
    placement: "right",
  },
  {
    target: "#anglersHeader",
    content:
      "You can use your shillings to hire Anglers. These talented fly fishers will catch Fish for you! Just make sure you have enough shillings to pay their wages. And, watch out for the Rampant Environmentalist.",
    placement: "left",
  },
  {
    target: "#fpsAmt",
    content: "Hiring Anglers will boost your Fish Per Second.",
    placement: "bottom",
  },
  {
    target: "#dnrNavButton",
    content: "Now, let's pay a visit to our friends at the DNR",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
    hideFooter: true,
    placement: "left",
    spotlightClicks: true,
  },
  {
    target: ".dnrUpgrades",
    content:
      "The DNR (Department of Natural Resources) will prove to be absolutely pivotal in your ability to catch fish. Fund the DNR with your shillings so it can begin producing DNR Bucks.",
    placement: "right",  
  },
  {
    target: ".locationUpgrades",
    content: "You can use these DNR Bucks to improve your Location.",
    placement: "right",
  },
  {
    target: ".anglerUpgrades",
    content:
      "The DNR also sells equipment you can buy for your Anglers to improve their efficiency.",
    placement: "right",  
  },
  {
    target: "#bmfsNavButton",
    content:
      "Now let's take a trip to Bob Mitchell's Fly Shop to stock up on gear.",
    disableBeacon: true,
    disableOverlayClose: true,
    hideCloseButton: true,
    hideFooter: true,
    placement: "left",
    spotlightClicks: true,
  },
  {
    target: "#BMFSHeader",
    content:
      "At Bob Mitchell's Fly Shop, you can purchase new equipment such as fly rods, nets, and vests. Each new piece of gear will wildly increase your efficiency when casting.",
    placement: "right",
  },
  {
    target: ".header",
    content:
      "That's everything you need to know! You can find more help and sound effects in the top left corner. Happy Fishing!",
    placement: "center",
  },
];

function HomeScreen() {

  const currencies = useSelector(selectCurrencies);

  const [currentSong, setCurrentSong] = useState(bgTrack);
  const [playSFX, setPlaySFX] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { stop, pause }] = useSound(currentSong, { volume: 0.2, loop: true });

  const [catchSoundEffect] = useSound(cartoonPop, { volume: 0.25 });

  const [hireAnglerSoundEffect] = useSound(hireAnglerSound, { volume: 0.1 });

  const [sellFishSoundEffect] = useSound(sellFishSound, { volume: 0.2 });

  const [equipFlySoundEffect] = useSound(equipFlySound, { volume: 0.6 });

  const toggleBgMusic = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
    setPlaySFX(!playSFX);
  };

  const renderStartButton = () => {
    document.querySelector("#loadingText").style.display = "none";
    document.querySelector("#startButton").style.display = "block";
  };

  const clearLoadPage = () => {
    document.querySelector(".loadingScreen").style.display = "none";
    startSetUserID();
    equipFlyInitial();
    setTimeout(() => {
      setRunProductTour(currencies.fish == 0 ? true : false);
    }, 1000);
  };

  const handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];
    const eventsStatuses = [EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND];

    if (finishedStatuses.includes(status)) {
      setRunProductTour(false);
      setStepIndex(0);
    } else if (eventsStatuses.includes(type)) {
      const nextStepIndex = index + (action === ACTIONS.PREV ? -1 : 1);
      // If you are on step 2 and the market is open, continue with the tour
      if (showMarket && index === 2) {
        setTimeout(() => {
          setRunProductTour(true);
        }, 400);
        // When you reach step 4, 'close' the market
      } else if (showMarket && index === 3) {
        setRunProductTour(false);
        setStepIndex(nextStepIndex);
        setTimeout(() => {
          setRunProductTour(true);
        }, 400);
      } else if (showFlybox && index === 5) {
        setTimeout(() => {
          setRunProductTour(true);
        }, 400);
      } else if (showDNR && index === 9) {
        setTimeout(() => {
          setRunProductTour(true);
        }, 400);
      } else if (showBMFS && index === 13) {
        setRunProductTour(false);
        setStepIndex(nextStepIndex);
        setTimeout(() => {
          setRunProductTour(true);
        }, 400);
      } else {
        // Update state to advance the tour
        setStepIndex(nextStepIndex);
        setRunProductTour(true);
      }
    }
  };

  const findMin = (a, b) => {
    return a < b ? a : b;
  };

  const dispatch = useDispatch();

  // Page Screens
  const [showMarket, setShowMarket] = useState(true);
  const [showDNR, setShowDNR] = useState(false);
  const [showFlybox, setShowFlybox] = useState(false);
  const [showBMFS, setShowBMFS] = useState(false);

  // Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAXtoah3vnPEEzNdim_zMOCIqUFpwsyKqU",
    authDomain: "taptapflyfish.firebaseapp.com",
    projectId: "taptapflyfish",
    storageBucket: "taptapflyfish.firebasestorage.app",
    messagingSenderId: "206290565432",
    appId: "1:206290565432:web:1a7954326fd753563ce9cd",
    measurementId: "G-QM0GJQZZ1K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  function Str_Random(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    // Loop to generate characters for the specified length
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
  }

  const [userIDTemp, setUserIDTemp] = useState("");

  async function createUserID() {
    let userIDTest = Str_Random(5);
    let docRef = doc(db, "Users", userIDTest);
    let docSnap = await getDoc(docRef);

    while(true) {
      if(!docSnap.exists()) {
        setUserIDTemp(userIDTest);
        dispatch(setUserID(userIDTest));
        break;
      } else {
        userIDTest = Str_Random(5);
        docRef = doc(db, "Users", userIDTest);
        docSnap = await getDoc(docRef);
      }
    }
  }

  const startSetUserID = () => {
    if (currencies.userID == "") {
      setTimeout(() => {
        createUserID();
      }, 400);
    }
  }

  const copyUserID = () => {
    navigator.clipboard.writeText(currencies.userID);
  }

  async function loadDatabaseData() {
    let code = document.getElementById("saveCode").value;
    if(code != "") {
      const docRef = doc(db, "Users", code);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        // TODO: Correctly dispatch the data to the redux store
        dispatch(loadCurrenciesData(docSnap.data().currencies));
        dispatch(loadAutoData(docSnap.data().anglers));
        dispatch(loadBMFSData(docSnap.data().bmfs));
        dispatch(loadDNRData(docSnap.data().dnr));
        dispatch(loadFlyboxData(docSnap.data().flies));
        dispatch(loadLocationData(docSnap.data().location));
        dispatch(loadLootboxData(docSnap.data().lootboxes));
        document.getElementById("loadDatabaseFlex").style.display = "none"
        document.getElementById("showLoadedConfirmationFlex").style.display = "flex"
      }
    }
  }

  async function writeDatabaseData() {
    await setDoc(doc(db, "Users", currencies.userID), {
      currencies: currencies,
      anglers: anglers,
      flies: flies,
      dnr: dnr,
      lootboxes: lootboxes,
      location: location,
      bmfs: BMFSItems
    });
    document.getElementById("saveProgressBtn").style.display = "none"
    document.getElementById("showSaveConfirmationFlex").style.display = "flex"
  }

  // Animations

  const expandItem = (id) => {
    document.querySelector(`#${id}Amt`).classList.add("expandMode");
    setTimeout(() => {
      document.querySelector(`#${id}Amt`).classList.remove("expandMode");
    }, 400);
  };

  const fishGrow = () => {
    document.querySelector(`#fishAmt`).classList.add("expandFish");
    setTimeout(() => {
      document.querySelector(`#fishAmt`).classList.remove("expandFish");
    }, 200);
  };

  //currencies

  const [runProductTour, setRunProductTour] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const getHelp = () => {
    setRunProductTour(true);
  };

  const updateStreamImage = () => {
    const total =
      1 +
      location.waterQuality +
      location.wildlifeDiversity +
      location.fishAbundance +
      location.habitatQuality;
    if (total < 5) {
      setCurrentStream(stream1);
    } else if (total < 10) {
      setCurrentStream(stream4);
    } else if (total < 20) {
      setCurrentStream(stream5);
    } else if (total < 30) {
      setCurrentStream(stream6);
    } else {
      setCurrentStream(stream7);
    }
  };

  // Save Functionality
  const showCode = () => {
    document.getElementById("getCodeBtn").style.display = "none"
    document.getElementById("showCodeFlex").style.display = "flex"
  }

  //Current stream picture
  const [currentStream, setCurrentStream] = useState(stream1);

  //Anglers
  const anglers = useSelector(selectAnglers);

  const anglerUpgradePrices = {
    1: [
      100, 500, 10000, 100000, 10000000, 100000000, 1000000000, 10000000000,
      1000000000000,
    ],
    2: [
      1000, 5000, 50000, 5000000, 500000000, 50000000000, 50000000000000,
      50000000000000000, 50000000000000000000,
    ],
    3: [
      11000, 55000, 550000, 55000000, 5500000000, 550000000000, 550000000000000,
      550000000000000000, 550000000000000000000,
    ],
    4: [
      120000, 600000, 6000000, 600000000, 60000000000, 6000000000000,
      6000000000000000, 6000000000000000000, 6000000000000000000000,
    ],
    5: [
      1300000, 6500000, 65000000, 6500000000, 650000000000, 65000000000000,
      65000000000000000, 65000000000000000000, 65000000000000000000000,
    ],
    6: [
      200000000, 1000000000, 10000000000, 1000000000000, 100000000000000,
      10000000000000000, 10000000000000000000, 10000000000000000000000,
      10000000000000000000000000,
    ],
    7: [
      3300000000, 16500000000, 165000000000, 16500000000000, 1650000000000000,
      165000000000000000, 165000000000000000000, 165000000000000000000000,
      165000000000000000000000000,
    ],
    8: [
      51000000000, 255000000000, 2550000000000, 255000000000000,
      25500000000000000, 2550000000000000000, 2550000000000000000000,
      2550000000000000000000000, 2550000000000000000000000000,
    ],
    9: [
      750000000000, 3750000000000, 37500000000000, 3750000000000000,
      375000000000000000, 37500000000000000000, 37500000000000000000000,
      37500000000000000000000000, 37500000000000000000000000000,
    ],
    10: [
      10000000000000, 50000000000000, 500000000000000, 50000000000000000,
      5000000000000000000, 500000000000000000000, 500000000000000000000000,
      500000000000000000000000000, 500000000000000000000000000000,
    ],
    11: [
      140000000000000, 700000000000000, 7000000000000000, 700000000000000000,
      70000000000000000000, 7000000000000000000000, 7000000000000000000000000,
      7000000000000000000000000000, 7000000000000000000000000000000,
    ],
    12: [1.7e15, 8.5e15, 85e15, 8.5e18, 85e18, 85e21, 85e24, 85e27, 85e30],
    13: [
      21e15, 105e15, 1.05e18, 105e18, 10.5e21, 1.05e24, 1.05e27, 1.05e30,
      1.05e33,
    ],
    14: [260e15, 1.3e18, 13e18, 1.3e21, 130e21, 13e24, 13e27, 13e30, 13e33],
    15: [
      3.1e18, 15.5e18, 155e18, 15.5e21, 1.55e24, 155e24, 155e27, 155e30, 155e33,
    ],
    16: [
      710e18, 3.55e21, 35.5e21, 3.55e24, 355e24, 35.5e27, 35.5e30, 35.5e33,
      35.5e36,
    ],
    17: [120e21, 600e21, 6e24, 600e24, 60e27, 6e30, 6e33, 6e36, 6e39],
    18: [19e24, 95e24, 950e24, 95e27, 9.5e30, 950e30, 950e33, 950e36, 950e39],
    19: [5.4e27, 27e27, 270e27, 27e30, 2.7e33, 270e33, 270e36, 270e39, 270e39],
    20: [5.4e27, 27e27, 270e27, 27e30, 2.7e33, 270e33, 270e36, 270e39, 270e39],
  };

  const anglerUpgradeImages = {
    1: {
      src: anglerPliers,
      text1: "New pliers allow ",
      text2: "s to wildly increase fly tying efficiency",
    },
    2: {
      src: anglerHat,
      text1: "New hat allows ",
      text2: "s to spend way more time in the sun",
    },
    3: {
      src: anglerBoots,
      text1: "New boots stop ",
      text2: "s from getting blisters",
    },
    4: {
      src: anglerVest,
      text1: "New vest allows ",
      text2: "s to carry WAY more supplies",
    },
    5: {
      src: anglerWaders,
      text1: "New waders stop ",
      text2: "s from getting hypothermia in the winter",
    },
    6: {
      src: anglerFlybox,
      text1: "New flybox lets ",
      text2: "s choose from many more flies",
    },
    7: {
      src: anglerBook,
      text1: "New book of fly fishing knowledge teaches ",
      text2: "s everything they need to know",
    },
    8: {
      src: anglerRod,
      text1: "New rod allows ",
      text2: "s to catch bigger and more fish",
    },
    9: {
      src: anglerBoat,
      text1: "New boat allows ",
      text2: "s to fish new secret spots on the river",
    },
  };

  const anglerUpgradesOrder = {
    1: [4, 9, 6, 3, 1, 5, 2, 8, 7],
    2: [2, 9, 5, 4, 6, 8, 1, 3, 7],
    3: [6, 2, 3, 8, 4, 1, 9, 7, 5],
    4: [8, 1, 4, 5, 6, 3, 2, 7, 9],
    5: [2, 3, 5, 6, 9, 4, 1, 7, 8],
    6: [5, 6, 4, 7, 1, 9, 3, 2, 8],
    7: [2, 7, 5, 8, 3, 9, 6, 4, 1],
    8: [3, 5, 2, 8, 9, 6, 1, 7, 4],
    9: [1, 3, 2, 6, 4, 7, 5, 9, 8],
    10: [2, 1, 5, 9, 8, 7, 4, 6, 3],
    11: [2, 1, 4, 3, 5, 6, 8, 9, 7],
    12: [1, 3, 7, 6, 5, 9, 8, 2, 4],
    13: [8, 2, 4, 5, 7, 9, 6, 1, 3],
    14: [8, 6, 9, 5, 3, 2, 1, 4, 7],
    15: [7, 8, 5, 6, 2, 3, 1, 9, 4],
    16: [7, 6, 8, 3, 2, 9, 4, 1, 5],
    17: [1, 5, 7, 3, 6, 4, 2, 9, 8],
    18: [3, 2, 9, 5, 6, 4, 8, 7, 1],
    19: [6, 7, 9, 3, 8, 4, 5, 1, 2],
    20: [9, 5, 3, 8, 6, 1, 7, 4, 2],
  };

  const anglersThreshold = [1, 10, 25, 50, 100, 150, 200, 300, 500];

  const upgradeAngler = (e, id) => {
    let n = e.target.id;
    if (
      currencies.shillings >=
        anglerUpgradePrices[n][anglers[n].multiplier - 1] &&
      anglers[n].multiplier - 1 <= 9
    ) {
      if (playSFX) {
        sellFishSoundEffect();
      }
      dispatch(trainAngler(n));
      dispatch(
        spendShillings(anglerUpgradePrices[n][anglers[n].multiplier - 1])
      );
      calculateFPS(0, n);
      expandItem("shill");
    }
  };

  const findLowestAngler = () => {
    let upgradeAnglers = [];
    let ind = 1;
    let x = 0;
    let lowestCost = anglerUpgradePrices[1][x];
    while (upgradeAnglers.length < 4 && x < 9) {
      // If index is in bounds
      if (ind <= 20) {
        if (
          anglerUpgradePrices[ind][anglers[ind].multiplier - 1] < lowestCost &&
          !upgradeAnglers.includes(ind) &&
          anglersThreshold[anglers[ind].multiplier - 1] <=
            anglers[ind].quantity &&
          anglers[ind].multiplier <= 9
        ) {
          upgradeAnglers.push(ind);
        }
      } else {
        // Otherwise start searching from the beginning
        // and looking for the next lowest multiplier
        ind = 0;
        x += 1;
        lowestCost = anglerUpgradePrices[1][x];
      }
      ind += 1;
    }
    if (upgradeAnglers.length < 4) {
      while (upgradeAnglers.length < 4) {
        upgradeAnglers.push(0);
      }
    }
    return upgradeAnglers;
  };

  // Flies
  const flies = useSelector(selectFlybox);
  const [equippedFly, setEquippedFly] = useState(0);

  const checkEquippedFlies = () => {
    for (let i = 1; i <= 15; i++) {
      if (flies[i].equipped) {
        setEquippedFly(i);
        break;
      }
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const flyImages = {
    1: WB,
    2: WB,
    3: WB,
    4: WB,
    5: WB,
    6: hopper,
    7: hopper,
    8: hopper,
    9: hopper,
    10: hopper,
    11: PN,
    12: PN,
    13: PN,
    14: PN,
    15: PN,
    16: DF,
    17: DF,
    18: DF,
    19: DF,
    20: DF,
    21: CF,
    22: CF,
    23: CF,
    24: CF,
    25: CF,
  };

  // DNR
  const dnr = useSelector(selectDNR);
  const dnrPrices = [
    100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000,
    10000000,
  ];
  const [lowestUpgradeLevel, setLowestUpgradeLevel] = useState(
    findMin(
      findMin(dnr.fishStocking, dnr.habitatRestoration),
      findMin(dnr.citizenEducation, dnr.parkBuilding)
    )
  );
  const [lowestUpgradeName, setLowestUpgradeName] = useState(
    dnr.fishStocking == lowestUpgradeLevel
      ? "stocking"
      : dnr.habitatRestoration == lowestUpgradeLevel
      ? "habitatRestoration"
      : dnr.citizenEducation == lowestUpgradeLevel
      ? "education"
      : "parkBuilding"
  );

  const dnrImages = {
    fishStocking: {
      src: fishStocking,
    },
    habitatRestoration: {
      src: habitatRestoration,
    },
    citizenEducation: {
      src: citizenEducation,
    },
    parkBuilding: {
      src: parkBuilding,
    },
  };

  const upgradeDNR = (e, id) => {
    let n = e.target.id;
    if (
      currencies.shillings / dnr.conversionRate >= dnrPrices[dnr[n]] &&
      dnr[n] < 10
    ) {
      if (playSFX) {
        sellFishSoundEffect();
      }
      dispatch(improveDNR(n));
      expandItem("budget");
      expandItem("pr");
      dispatch(spendShillings(dnrPrices[dnr[n]] * dnr.conversionRate));
      expandItem("shill");
      dispatch(increaseDPS());
    }
  };

  //Lootboxes
  const lootboxes = useSelector(selectLootbox);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [lbModalText, setLbModalText] = useState("");
  const [lbFly, setLbFly] = useState(0);

  const lootboxImages = {
    Common: commonLB,
    Rare: rareLB,
    Epic: epicLB,
    Legendary: legendaryLB,
  };

  // Location
  const location = useSelector(selectLocation);
  const locationPrice = [
    50, 100, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000,
    10000000,
  ];
  const locationImages = {
    waterQuality: {
      src: waterQuality,
    },
    wildlifeDiversity: {
      src: wildlifeDiversity,
    },
    fishAbundance: {
      src: fishAbundance,
    },
    habitatQuality: {
      src: habitatQuality,
    },
  };

  // BMFS
  const BMFSItems = useSelector(selectBMFS);
  const [equippedRod, setEquippedRod] = useState(0);
  const [equippedNet, setEquippedNet] = useState(0);
  const [equippedVest, setEquippedVest] = useState(0);

  const checkEquippedGear = () => {
    for (let i = 1; i <= 19; i++) {
      if (BMFSItems[i].Equipped) {
        if (i <= 5) {
          setEquippedRod(i);
        } else if (i <= 12) {
          setEquippedNet(i);
        } else {
          setEquippedVest(i);
        }
        break;
      }
    }
  };

  const [file, setFile] = useState(
    currencies.profileImg == "" ? profile : currencies.profileImg
  );
  const [profileImg, setProfileImg] = useState(
    currencies.profileImg == "" ? profile : currencies.profileImg
  );

  function handleChange(e) {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
      // you can use this method to get file and perform respective operations
      setFile(URL.createObjectURL(input.files[0]));
    };
    input.click();
  }

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const profileImg = await getCroppedImg(file, croppedAreaPixels, 0);
      setProfileImg(profileImg);
      dispatch(updateProfileImg(profileImg));
    } catch (e) {
      console.error(e);
    }
  };

  const BMFSImages = {
    1: {
      src: stickPole,
    },
    2: {
      src: kiddiePole,
    },
    3: {
      src: woodPole,
    },
    4: {
      src: graphitePole,
    },
    5: {
      src: goldenPole,
    },
    6: {
      src: bowlNet,
    },
    7: {
      src: starterNet,
    },
    8: {
      src: normalNet,
    },
    9: {
      src: carbonNet,
    },
    10: {
      src: enchantedNet,
    },
    11: {
      src: stealthNet,
    },
    12: {
      src: lightningNet,
    },
    13: {
      src: holeyVest,
    },
    14: {
      src: basementVest,
    },
    15: {
      src: woodVest,
    },
    16: {
      src: orvisVest,
    },
    17: {
      src: carbonVest,
    },
    18: {
      src: tacticalVest,
    },
    19: {
      src: goldVest,
    },
  };

  const dnrClick = () => {
    if (playSFX) {
      sellFishSoundEffect();
    }
    setRunProductTour(stepIndex === 9 ? false : runProductTour);
    setShowMarket(false);
    setShowFlybox(false);
    setShowBMFS(false);
    setShowDNR(true);
    setStepIndex(stepIndex === 9 ? 10 : stepIndex);
  };
  const marketClick = () => {
    if (playSFX) {
      sellFishSoundEffect();
    }
    setRunProductTour(stepIndex === 2 ? false : runProductTour);
    setShowMarket(true);
    setShowDNR(false);
    setShowFlybox(false);
    setShowBMFS(false);
    setStepIndex(stepIndex === 2 ? 3 : stepIndex);
  };
  const flyboxClick = () => {
    if (playSFX) {
      sellFishSoundEffect();
    }
    setRunProductTour(stepIndex === 5 ? false : runProductTour);
    setShowDNR(false);
    setShowMarket(false);
    setShowBMFS(false);
    setShowFlybox(true);
    setStepIndex(stepIndex === 5 ? 6 : stepIndex);
  };
  const BMFSClick = () => {
    if (playSFX) {
      sellFishSoundEffect();
    }
    setRunProductTour(stepIndex === 13 ? false : runProductTour);
    setShowDNR(false);
    setShowMarket(false);
    setShowFlybox(false);
    setShowBMFS(true);
    setStepIndex(stepIndex === 13 ? 14 : stepIndex);
  };

  const truncateNum = (num, places) => {
    let returnVal =
      num == -16000
        ? "-16K"
        : num == -1600000000
        ? "-1.6B"
        : num == -4000
        ? "-4k"
        : num == -400000000
        ? "-400M"
        : num < 1000
        ? Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places)
        : num < 1000000
        ? Math.trunc((parseInt(num) / 1000) * Math.pow(10, places)) /
            Math.pow(10, places) +
          "K"
        : num < 1000000000
        ? Math.trunc((parseInt(num) / 1000000) * Math.pow(10, places)) /
            Math.pow(10, places) +
          "M"
        : num < 1000000000000
        ? Math.trunc((parseInt(num) / 1000000000) * Math.pow(10, places)) /
            Math.pow(10, places) +
          "B"
        : num < 1000000000000000
        ? Math.trunc((parseInt(num) / 1000000000000) * Math.pow(10, places)) /
            Math.pow(10, places) +
          "T"
        : num < 1000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000) * Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AA"
        : num < 1000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000) * Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AB"
        : num < 1000000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000000) * Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AC"
        : num < 1000000000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000000000) * Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AD"
        : num < 1000000000000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000000000000) *
              Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AE"
        : num < 1000000000000000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000000000000000) *
              Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AF"
        : num < 1000000000000000000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000000000000000000) *
              Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AG"
        : num < 1000000000000000000000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000000000000000000000) *
              Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AH"
        : num < 1000000000000000000000000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000000000000000000000000) *
              Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AI"
        : num < 1000000000000000000000000000000000000000000000
        ? Math.trunc(
            (parseInt(num) / 1000000000000000000000000000000000000000000) *
              Math.pow(10, places)
          ) /
            Math.pow(10, places) +
          "AJ"
        : num;
    return returnVal;
  };

  //Get idle currencies
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getFish());
      dispatch(getDNRBucks());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateSellFishAmts());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      startHatch();
    }, 1800000);

    return () => clearInterval(interval);
  }, []);

  const calculateFPS = (addedAmt, anglerMult) => {
    let tempFPS = 0;
    Object.entries(anglers).map(([n, angler]) => {
      if (n == anglerMult) {
        tempFPS += angler.fps * angler.quantity * 2;
      } else {
        tempFPS += angler.fps * angler.quantity;
      }
    });
    dispatch(updateFPS(tempFPS + addedAmt));
    expandItem("fps");
  };

  const cast = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    if (randomNumber <= currencies.catchChance * 10) {
      fishGrow();
      if (playSFX) {
        catchSoundEffect();
      }
      const fishContainer = document.getElementById("castWrapper");
      const fish = document.createElement("img");
      fish.classList.add("caughtFish");
      fish.src = brown; // Replace with your fish image path
      const randomLeft = Math.random() * 90; // 90% to leave some space at the edges
      fish.style.left = `${randomLeft}%`;
      fish.style.zIndex = 4;
      fishContainer.appendChild(fish);
      fish.style.bottom = "-40px";
      //Add bonus text to the header
      const head = document.getElementById("fishTextBubble");
      const bonus = document.createElement("p");
      bonus.appendChild(
        document.createTextNode(
          `+${truncateNum(currencies.FPC * currencies.FPCMultiplier, 3)}`
        )
      );
      bonus.classList.add("catchText");
      bonus.style.left = `${(randomLeft / 70) * 85}%`;
      bonus.style.top = `${100 - (randomLeft / 70) * 20}%`;
      head.appendChild(bonus);
      dispatch(catchFish());
      setTimeout(() => {
        head.removeChild(bonus);
      }, 1000);
      setTimeout(() => {
        fishContainer.removeChild(fish);
      }, 2000);
    }
  };

  const startHatch = () => {

    let timer;
    let counter = 0; 

    function startTimer() {
      timer = setInterval(function() {
        if(counter >= 200) {
          stopTimer();
          headerFish.classList.remove("bigHatchFish");
          hatchScreen.style.display = "none";
          hatchModal.style.display = "none";
          dispatch(decreaseFPCMultiplier(10));
          dispatch(decreaseCatchChance({CC: 100}));
        }
        const bugContainer = document.getElementById("screenContentWrapper");
        const bug = document.createElement("div");
        bug.classList.add("hatchBug");
        const randomLeft = Math.random() * 98;
        const randomWidth = Math.random() * 8 + 2;
        bug.style.left = `${randomLeft}%`;
        bug.style.width = `${randomWidth}px`;
        bug.style.height = `${randomWidth}px`;

        bugContainer.appendChild(bug);

        counter += 1;

        setTimeout(() => {
          bugContainer.removeChild(bug);
        }, 2500);
      }, 75)
    }

    function stopTimer() {
      clearInterval(timer);
    }

    const hatchModal = document.getElementById("hatchModal");
    hatchModal.style.display ="block";

    const headerFish = document.getElementById("fishAmt");
    headerFish.classList.add("bigHatchFish");

    const hatchScreen = document.getElementById("hatchScreen");
    hatchScreen.style.display = "block";
    
    expandItem("fpc");
    dispatch(increaseFPCMultiplier(10));
    dispatch(increaseCatchChance(100));


    // Add bonus to FPS?
    // I think this would use the calculate FPS function but seems complex

    startTimer();
  };

  const convertFish = (amt) => {
    if (currencies.fish >= amt) {
      if (playSFX) {
        sellFishSoundEffect();
      }
      dispatch(sellFish(amt));
      expandItem("shill");
    }
  };

  const equipFly = (e, id) => {
    let n = e.target.id;
    if (flies[n].unlocked) {
      if (playSFX) {
        equipFlySoundEffect();
      }
      if (equippedFly > 0) {
        //Remove impact of the currently equipped fly
        dispatch(unequip(equippedFly));
        dispatch(decreaseCatchChance(flies[equippedFly]));
        dispatch(decreaseFPC(flies[equippedFly]));
      }
      // Update multipliers
      dispatch(increaseCatchChance(flies[n].CC));
      dispatch(increaseFPC(flies[n].FPC));
      //Equip the new fly
      dispatch(equip(n));
      setEquippedFly(n);
    }
    expandItem("equippedFly");
    expandItem("cc");
    expandItem("fpc");
  };

  const equipFlyInitial = () => {
    for(let n=1; n<=25; n++) {
      if (flies[n].unlocked) {
        //Equip the new fly
        dispatch(equip(n));
        setEquippedFly(n);
        break;
      }
    }
  };

  const hireAngler = (e, id) => {
    let n = e.target.id;
    if (anglers[n].price <= currencies.shillings) {
      if (playSFX) {
        hireAnglerSoundEffect();
      }
      document
        .querySelector(".automationList")
        .querySelector(`#aq${n}`)
        .classList.add("wobbleMode");
      expandItem("shill");
      expandItem("fps");
      dispatch(hire(n));
      dispatch(spendShillings(anglers[n].price));
      calculateFPS(anglers[n].fps, 0);
      setTimeout(() => {
        document
          .querySelector(".automationList")
          .querySelector(`#aq${n}`)
          .classList.remove("wobbleMode");
      }, 400);
    }
  };

  const scrollToAngler = (n) => {
    setTimeout(() => {
      var element = document.getElementById("autoListId");
      element.scrollTop = element.scrollHeight;
    }, 200);
  };

  const gearTypes = ["Rod", "Net", "Vest"];

  const equipGear = (e, id) => {
    let n = e.target.id;
    if (BMFSItems[n].Unlocked) {
      if (playSFX) {
        equipFlySoundEffect();
      }
      const element = document.getElementById("BMFSHeader");
      element.scrollIntoView({ behavior: "smooth" });
      // Equip the new item
      dispatch(equipItem(n));
      expandItem("fpc");
      // Figure out which type of item the user is equipping
      switch (BMFSItems[n].Type) {
        case "Rod":
          if (equippedRod > 0) {
            // Remove the impact of the current rod
            dispatch(
              decreaseFPCMultiplier(BMFSItems[equippedRod].FPCMultiplier)
            );
            // Unequip the current rod
            dispatch(unequipItem(equippedRod));
          }
          // Update the current rod
          setEquippedRod(n);
          // Update the current FPC
          dispatch(increaseFPCMultiplier(BMFSItems[n].FPCMultiplier));
          break;
        case "Net":
          if (equippedNet > 0) {
            // Remove the impact of the current net
            dispatch(
              decreaseFPCMultiplier(BMFSItems[equippedNet].FPCMultiplier)
            );
            // Unequip the current net
            dispatch(unequipItem(equippedNet));
          }
          // Update the current net
          setEquippedNet(n);
          // Update the current FPC
          dispatch(increaseFPCMultiplier(BMFSItems[n].FPCMultiplier));
          break;
        case "Vest":
          if (equippedVest > 0) {
            // Remove the impact of the current net
            dispatch(
              decreaseFPCMultiplier(BMFSItems[equippedVest].FPCMultiplier)
            );
            // Unequip the current net
            dispatch(unequipItem(equippedVest));
          }
          // Update the current net
          setEquippedVest(n);
          // Update the current FPC
          dispatch(increaseFPCMultiplier(BMFSItems[n].FPCMultiplier));
          break;
      }
    }
  };

  const buyGear = (e, id) => {
    let n = e.target.id;
    if (BMFSItems[n].Price <= currencies.shillings) {
      if (playSFX) {
        equipFlySoundEffect();
      }
      dispatch(unlockItem(n));
      dispatch(spendShillings(BMFSItems[n].Price));
      expandItem("shill");
    }
  };

  const buyLootbox = (e) => {
    let n = e.target.id;
    if (
      currencies.fish >= parseInt(lootboxes[n].price * lootboxes[n].multiplier)
    ) {
      if (playSFX) {
        sellFishSoundEffect();
      }
      dispatch(
        spendFish(parseInt(lootboxes[n].price * lootboxes[n].multiplier))
      );
      dispatch(buyBox(n));
      let nFlies = 0;
      for(let i=1; i<=25; i++) {
        if(flies[i].unlocked) {
          nFlies += 1;
        }
      }
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      if(nFlies == 0) {
        let commonFlies = [1, 6, 11, 16, 21];
        commonFlies = shuffleArray(commonFlies);
        setLbFly(commonFlies[0]);
        dispatch(unlock(commonFlies[0]));
        setLbModalText(
          "New Fly!! You have unlocked a Common " +
            flies[commonFlies[0]].name +
            "."
        );
      } else if (randomNumber <= lootboxes[n].cChance) {
        let commonFlies = [1, 6, 11, 16, 21];
        commonFlies = shuffleArray(commonFlies);
        if (!flies[commonFlies[0]].unlocked) {
          setLbFly(commonFlies[0]);
          dispatch(unlock(commonFlies[0]));
          setLbModalText(
            "New Fly!! You have unlocked a Common " +
              flies[commonFlies[0]].name +
              "."
          );
        } else {
          setLbFly(0);
          dispatch(
            getShillings(
              parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2)
            )
          );
          expandItem("shill");
          setLbModalText(
            "Fly already owned. You have recieved " +
              truncateNum(
                parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2),
                2
              ) +
              " shillings."
          );
        }
      } else if (randomNumber <= lootboxes[n].cChance + lootboxes[n].ucChance) {
        let uncommonFlies = [2, 7, 12, 17, 22];
        uncommonFlies = shuffleArray(uncommonFlies);
        if (!flies[uncommonFlies[0]].unlocked) {
          setLbFly(uncommonFlies[0]);
          dispatch(unlock(uncommonFlies[0]));
          setLbModalText(
            "New Fly!! You have unlocked an Uncommon " +
              flies[uncommonFlies[0]].name +
              "."
          );
        } else {
          setLbFly(0);
          dispatch(
            getShillings(
              parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2)
            )
          );
          expandItem("shill");
          setLbModalText(
            "Fly already owned. You have recieved " +
              truncateNum(
                parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2),
                2
              ) +
              " shillings."
          );
        }
      } else if (
        randomNumber <=
        lootboxes[n].cChance + lootboxes[n].ucChance + lootboxes[n].rChance
      ) {
        let rareFlies = [3, 8, 13, 18, 23];
        rareFlies = shuffleArray(rareFlies);
        if (!flies[rareFlies[0]].unlocked) {
          setLbFly(rareFlies[0]);
          dispatch(unlock(rareFlies[0]));
          setLbModalText(
            "New Fly!! You have unlocked a Rare " +
              flies[rareFlies[0]].name +
              "."
          );
        } else {
          setLbFly(0);
          dispatch(
            getShillings(
              parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2)
            )
          );
          expandItem("shill");
          setLbModalText(
            "Fly already owned. You have recieved " +
              truncateNum(
                parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2),
                2
              ) +
              " shillings."
          );
        }
      } else if (
        randomNumber <=
        lootboxes[n].cChance +
          lootboxes[n].ucChance +
          lootboxes[n].rChance +
          lootboxes[n].eChance
      ) {
        let epicFlies = [4, 9, 14, 19, 24];
        epicFlies = shuffleArray(epicFlies);
        if (!flies[epicFlies[0]].unlocked) {
          setLbFly(epicFlies[0]);
          dispatch(unlock(epicFlies[0]));
          setLbModalText(
            "New Fly!! You have unlocked an Epic " +
              flies[epicFlies[0]].name +
              "."
          );
        } else {
          setLbFly(0);
          dispatch(
            getShillings(
              parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2)
            )
          );
          expandItem("shill");
          setLbModalText(
            "Fly already owned. You have recieved " +
              truncateNum(
                parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2),
                2
              ) +
              " shillings."
          );
        }
      } else if (
        randomNumber <=
        lootboxes[n].cChance +
          lootboxes[n].ucChance +
          lootboxes[n].rChance +
          lootboxes[n].eChance +
          lootboxes[n].lChance
      ) {
        let legendaryFlies = [5, 10, 15, 20, 25];
        legendaryFlies = shuffleArray(legendaryFlies);
        if (!flies[legendaryFlies[0]].unlocked) {
          setLbFly(legendaryFlies[0]);
          dispatch(unlock(legendaryFlies[0]));
          setLbModalText(
            "New Fly!! You have unlocked a Legendary " +
              flies[legendaryFlies[0]].name +
              "."
          );
        } else {
          setLbFly(0);
          dispatch(
            getShillings(
              parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2)
            )
          );
          expandItem("shill");
          setLbModalText(
            "Fly already owned. You have recieved " +
              truncateNum(
                parseInt(lootboxes[n].price * lootboxes[n].multiplier * 1.2),
                2
              ) +
              " shillings."
          );
        }
      } else {
        setLbFly(0);
        dispatch(
          getShillings(
            parseInt((lootboxes[n].price * lootboxes[n].multiplier) / 2)
          )
        );
        expandItem("shill");
        setLbModalText(
          "No fly was found in this box. You have recieved " +
            truncateNum(
              parseInt((lootboxes[n].price * lootboxes[n].multiplier) / 2),
              2
            ) +
            " shillings."
        );
      }
    } else {
      setLbFly(0);
      setLbModalText("Not enough fish!");
    }
    setOpen((o) => !o);
  };

  const upgradeLocation = (e) => {
    let n = e.target.id;
    if (currencies.DNRBucks >= locationPrice[location[n]] && location[n] < 10) {
      if (playSFX) {
        sellFishSoundEffect();
      }
      dispatch(spendDNRBucks(locationPrice[location[n]]));
      expandItem("dnrb");
      dispatch(increaseLevel(n));
      updateStreamImage();
      const total =
        location.waterQuality +
        location.habitatQuality +
        location.wildlifeDiversity +
        location.fishAbundance;
      if (currencies.catchChance + total / 100 > 1) {
        dispatch(increaseCatchChance(1 - currencies.catchChance));
      } else {
        dispatch(increaseCatchChance(total / 500));
      }
      expandItem("cc");

      dispatch(updateCCBonus(total / 500));
      expandItem("ccbonus");
      dispatch(updateFPCBonus(total * 5));
      expandItem("fpcbonus");

      dispatch(increaseFPC(total * 5));
      expandItem("fpc");
    }
  };

  return (
    <div>
      <div className="screenBackground">
        <div className="loadingScreen">
          <div className="flex">
            <p className="noMargin">Welcome to Tap Tap Fly Fish</p>
            <img src={brown} onAnimationEnd={renderStartButton} />
            <p id="loadingText">Loading...</p>
            <button
              className="solidButton"
              id="startButton"
              onClick={clearLoadPage}
            >
              START
            </button>
          </div>
        </div>
        <div className="screenContentContainer">
          <div className="hatchScreen" id="hatchScreen"></div>
          <Joyride
            run={runProductTour}
            disableScrolling={true}
            steps={steps}
            stepIndex={stepIndex}
            continuous
            showSkipButton
            showProgress
            hideCloseButton
            disableBeacon
            disableOverlayClose
            callback={handleJoyrideCallback}
            styles={{
              options: {
                arrowColor: "#333",
                backgroundColor: "#a1a1a1",
                primaryColor: "#333",
                textColor: "#333",
                height: "auto",
                overflow: "hidden",
              },
              overlay: {
                height: '100%',
                width: '100%'
              },
              buttonNext: {
                fontFamily: "komu-a, sans-serif",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "hsl(210, 22%, 49%)",
              },
              buttonSkip: {
                fontFamily: "komu-a, sans-serif",
                fontSize: "20px",
                color: "hsl(210, 22%, 49%)",
              },
              buttonBack: {
                fontFamily: "komu-a, sans-serif",
                fontSize: "20px",
                color: "hsl(210, 22%, 49%)",
              },
              tooltipContent: {
                fontFamily: "komu-a, sans-serif",
                fontSize: "22px",
                padding: "10px",
              },
              tooltip: {
                padding: "10px",
                border: "7px solid #333",
              },
            }}
          />
          <div className="screenContentWrapper" id="screenContentWrapper">
            <div className="dividerLineHorizontal" />
            <div className="header">
              <img src={qmark} className="helpBtn" onClick={(e) => getHelp()} />
              <img
                src={isPlaying ? sound : noSound}
                className="helpBtn"
                id="soundBtn"
                onClick={toggleBgMusic}
              />
              <Popup
                trigger={
                  <img
                    src={saveIcon}
                    className="helpBtn"
                    id="saveBtn"
                  />
                }
                modal
                nested
                overlayStyle={{
                  width: "100%",
                  margin: "auto",
                  backgroundColor: "transparent",
                }}
                contentStyle={{ width: "400px", backgroundColor: "#a1a1a1", border: "7px solid #333" }}
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <p className="darkText" style={{fontSize: "28px"}}>Save Progress</p>
                      <p className="smallText">Input your save code to restore cloud-saved progress.</p>
        
                      <div className="flex" style={{gap: "10px", marginTop: "10px"}}>                        
                      </div>
                      <div className="flex" style={{marginTop: "10px"}}>
                        <div className="flex" id="loadDatabaseFlex" style={{gap: "10px"}}>
                          <input type="text" id="saveCode" placeholder="SAVE CODE" style={{textTransform: "uppercase"}} />
                          <button
                              className="solidButton"
                              style={{margin: "0px"}}
                              onClick={loadDatabaseData}
                            >
                              GO
                            </button>
                        </div>
                        <div className="flex" id="showLoadedConfirmationFlex" style={{display: "none"}}>
                          <p className="darkText" style={{fontSize: "25px"}}>Success!</p>
                        </div>
                      </div>
                      <p className="smallText" style={{marginTop: "15px"}}>Click below to show the save code for this device. Keep the code in an accessible place in case you need to restore progress.</p>
                      <div className="flex" style={{marginTop: "10px"}}>
                      <button
                          className="solidButton"
                          id="getCodeBtn"
                          style={{margin: "0px"}}
                          onClick={showCode}
                        >
                          SHOW CODE
                        </button>
                        <div className="flex" id="showCodeFlex" style={{gap: "10px", display: "none"}}>
                          <p style={{fontSize: "25px"}}>{currencies.userID}</p>
                          <button
                            className="solidButton"
                            style={{margin: "0px", width: "45px", height: "30px"}}
                            onClick={copyUserID}
                          >
                            COPY
                          </button>
                        </div>
                      </div>
                      <p style={{marginTop: "15px"}}>Data is automatically saved locally. If you want to save to the cloud and continue on another device, you must press the "SAVE PROGRESS" button.</p>
                      <div className="flex" style={{marginTop: "10px"}}>
                      <button
                          className="solidButton"
                          id="saveProgressBtn"
                          style={{margin: "0px", width: "110px"}}
                          onClick={writeDatabaseData}
                        >
                          SAVE PROGRESS
                        </button>
                        <div className="flex" id="showSaveConfirmationFlex" style={{display: "none"}}>
                          <p className="darkText" style={{fontSize: "25px"}}>Saved!</p>
                        </div>
                      </div>
                      <div className="flex">
                        <button
                          className="solidButton centered"
                          style={{marginTop: "15px", width: "45px", height: "30px"}}
                          onClick={() => close()}
                        >
                          DONE
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
              <div className="container">
                <div className="flex">
                  <div className="dividerLine" />
                  <div className="grid">
                    <div className="flex flexRow">
                      <div className="profileImgWrapper">
                        <div className="flex">
                          <img
                            src={profileImg ? profileImg : profile}
                            onClick={BMFSClick}
                          ></img>
                        </div>
                      </div>
                      <div className="headerFlex importantCurrencies">
                        <div className="flex currencySection noMargin">
                          <div className="headerItem" id="shillAmt">
                            <img src={shill} alt="none"></img>
                            <p className="largeText noMargin">
                              {truncateNum(currencies.shillings, 2)}
                            </p>
                          </div>
                          <div className="headerItem" id="dnrbAmt">
                            <img src={dnrB} alt="none"></img>
                            <p className="largeText noMargin">
                              {truncateNum(currencies.DNRBucks, 2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="headerItem largeCurrency fishCurrency">
                      <img src={brown} alt="none" id="fishAmt"></img>
                      <div
                        className="currencyBubble"
                        id="fishTextBubble"
                        style={{
                          width:
                            currencies.fish < 100
                              ? "30px"
                              : currencies.fish < 1000
                              ? "50px"
                              : currencies.fish < 100000
                              ? "100px"
                              : "120px",
                        }}
                      >
                        <p className="largeText noMargin centered">
                          {currencies.fish >= 1000
                            ? truncateNum(currencies.fish, 3)
                            : parseInt(currencies.fish)}
                        </p>
                      </div>
                    </div>
                    <div className="currencySection" id="gameInfoSection">
                      <div className="flex">
                        <div className="headerItem" id="fpsAmt">
                          <p className="darkText noMargin headerItemLabel">
                            FPS
                          </p>
                          <p className="largeText noMargin">
                            {truncateNum(currencies.FPS, 2)}
                          </p>
                        </div>
                        <div className="headerItem" id="ccAmt">
                          <p className="darkText noMargin headerItemLabel">
                            CC
                          </p>
                          <p className="largeText noMargin">
                            {parseInt(currencies.catchChance * 100) > 100
                              ? 100
                              : parseInt(currencies.catchChance * 100) < 30
                              ? 30
                              : parseInt(currencies.catchChance * 100)}
                            %
                          </p>
                        </div>
                        <div className="headerItem" id="fpcAmt">
                          <p className="darkText noMargin headerItemLabel">
                            FPC
                          </p>
                          <p className="largeText noMargin">
                            {truncateNum(
                              currencies.FPC * currencies.FPCMultiplier,
                              2
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dividerLine" />
                </div>
              </div>
            </div>
            <div className="dividerLineHorizontal" />
            <div className="homeLayout" onLoad={updateStreamImage}>
              <div className="flex">
                <div className="dividerLine" />
                {showMarket && (
                  <div className="sidebarWrapper market">
                    <div className="flex">
                      <div className="sidebarHeader">
                        <p>Fish Market</p>
                      </div>
                      <div className="sellFishWrapper">
                        <div className="grid">
                          <div
                            className="solidButton"
                            onClick={(e) =>
                              convertFish(currencies.sellFishAmts[0])
                            }
                          >
                            <div className="flex">
                              {truncateNum(currencies.sellFishAmts[0], 2)}
                              <img src={brown} />
                            </div>
                          </div>
                          <div
                            className="solidButton"
                            onClick={(e) =>
                              convertFish(currencies.sellFishAmts[1])
                            }
                          >
                            <div className="flex">
                              {truncateNum(currencies.sellFishAmts[1], 2)}
                              <img src={brown} />
                            </div>
                          </div>
                          <div
                            className="solidButton"
                            onClick={(e) =>
                              convertFish(currencies.sellFishAmts[2])
                            }
                          >
                            <div className="flex">
                              {truncateNum(currencies.sellFishAmts[2], 2)}
                              <img src={brown} />
                            </div>
                          </div>
                          <div
                            className="solidButton"
                            onClick={(e) =>
                              convertFish(currencies.sellFishAmts[3])
                            }
                          >
                            <div className="flex">
                              {truncateNum(currencies.sellFishAmts[3], 2)}
                              <img src={brown} />
                            </div>
                          </div>
                          <div
                            className="solidButton"
                            onClick={(e) =>
                              convertFish(currencies.sellFishAmts[4])
                            }
                          >
                            <div className="flex">
                              {truncateNum(currencies.sellFishAmts[4], 2)}
                              <img src={brown} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid" id="lootboxWrapperId">
                        {Object.entries(lootboxes).map(([n, box]) => (
                          <div className="lootboxWrapper">
                            <div className="flex">
                              <img src={lootboxImages[box.name]} />
                              <button
                                className="solidButton"
                                onClick={(e) => buyLootbox(e, "id")}
                                id={n}
                              >
                                {truncateNum(
                                  parseInt(box.price * box.multiplier),
                                  2
                                )}{" "}
                                <img className="buttonImg" src={brown} id={n} />
                              </button>
                              <Popup
                                open={open}
                                closeOnDocumentClick
                                onClose={closeModal}
                                className="flyPopup"
                                overlayStyle={{
                                  width: "100%",
                                  margin: "auto",
                                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                                  padding: "0px",
                                }}
                              >
                                {(close) => (
                                  <div className="modal lbModal">
                                    <div className="content">
                                      <div className="flex">
                                        {lbFly > 0 ? (
                                          <div
                                            className="flyImgWrapper"
                                            style={
                                              flies[lbFly].rarity == "Common"
                                                ? {
                                                    boxShadow:
                                                      "0 0 10px 8px rgba(0, 0, 0, 0.5)",
                                                  }
                                                : flies[lbFly].rarity ==
                                                  "Uncommon"
                                                ? {
                                                    boxShadow:
                                                      "0 0 10px 8px rgba(49,146,54, 0.5)",
                                                  }
                                                : flies[lbFly].rarity == "Rare"
                                                ? {
                                                    boxShadow:
                                                      "0 0 10px 8px rgba(76,81,247, 0.5)",
                                                  }
                                                : flies[lbFly].rarity == "Epic"
                                                ? {
                                                    boxShadow:
                                                      "0 0 10px 8px rgba(157,77,187, 0.5)",
                                                  }
                                                : {
                                                    boxShadow:
                                                      "0 0 10px 8px rgba(243,175,25, 0.3)",
                                                  }
                                            }
                                          >
                                            <div className="flex">
                                              <img
                                                src={flyImages[lbFly]}
                                                className="centered"
                                              />
                                            </div>
                                          </div>
                                        ) : (
                                          false
                                        )}
                                        <p className="smallHeader">
                                          {lbModalText}
                                        </p>
                                        <div
                                          className="solidButton centered"
                                          onClick={() => close()}
                                        >
                                          CLOSE
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </Popup>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {/* Fly Box Page */}
                {showFlybox && (
                  <div className="sidebarWrapper flybox">
                    <div className="flex">
                      <div className="sidebarHeader">
                        <p>Fly Box</p>
                      </div>
                      <div className="flyboxWrapper">
                        <div className="grid">
                          {Object.entries(flies).map(([n, fly]) => (
                            <Popup
                              trigger={
                                fly.unlocked ? (
                                  <img
                                    src={
                                      (n >= 1) & (n <= 5)
                                        ? WB
                                        : (n >= 6) & (n <= 10)
                                        ? hopper
                                        : (n >= 11) & (n <= 15)
                                        ? PN
                                        : (n >= 16) & (n <= 20)
                                        ? DF
                                        : CF
                                    }
                                    id={n}
                                    onClick={(e) => equipFly(e, "id")}
                                    className={
                                      fly.unlocked
                                        ? "flyHoverable centered"
                                        : "centered"
                                    }
                                  ></img>
                                ) : (
                                  <img
                                    src={
                                      (n >= 1) & (n <= 5)
                                        ? WB
                                        : (n >= 6) & (n <= 10)
                                        ? hopper
                                        : (n >= 11) & (n <= 15)
                                        ? PN
                                        : (n >= 16) & (n <= 20)
                                        ? DF
                                        : CF
                                    }
                                    className="centered locked"
                                    style={{ filter: "brightness(0%)" }}
                                  ></img>
                                )
                              }
                              position="top center"
                              on={["hover", "focus"]}
                              contentStyle={{ width: "120px" }}
                            >
                              {fly.unlocked ? (
                                <div>
                                  <p className="fbTitle bolded">
                                    {flies[n].name}
                                  </p>
                                  <p>FPC Bonus: {truncateNum(fly.FPC, 2)}</p>
                                  <p>CC Bonus: {fly.CC * 100}%</p>
                                  {fly.rarity == "Common" ? (
                                    <p
                                      style={{
                                        backgroundColor: "lightGray",
                                        color: "black",
                                      }}
                                    >
                                      Common
                                    </p>
                                  ) : fly.rarity == "Uncommon" ? (
                                    <p
                                      style={{
                                        backgroundColor: "lightGreen",
                                        color: "black",
                                      }}
                                    >
                                      Uncommon
                                    </p>
                                  ) : fly.rarity == "Rare" ? (
                                    <p
                                      style={{
                                        backgroundColor: "lightBlue",
                                        color: "black",
                                      }}
                                    >
                                      Rare
                                    </p>
                                  ) : fly.rarity == "Epic" ? (
                                    <p
                                      style={{
                                        backgroundColor: "#CBC3E3",
                                        color: "black",
                                      }}
                                    >
                                      Epic
                                    </p>
                                  ) : (
                                    <p
                                      style={{
                                        backgroundColor: "#FFD580",
                                        color: "black",
                                      }}
                                    >
                                      Legendary
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <p className="fbTitle">{flies[n].name}</p>
                                  <img
                                    src={lockIcon}
                                    style={{
                                      height: "45px",
                                      margin: "5px 37.5px",
                                    }}
                                  ></img>
                                  {fly.rarity == "Common" ? (
                                    <p
                                      style={{
                                        backgroundColor: "lightGray",
                                        color: "black",
                                      }}
                                    >
                                      Common
                                    </p>
                                  ) : fly.rarity == "Uncommon" ? (
                                    <p
                                      style={{
                                        backgroundColor: "lightGreen",
                                        color: "black",
                                      }}
                                    >
                                      Uncommon
                                    </p>
                                  ) : fly.rarity == "Rare" ? (
                                    <p
                                      style={{
                                        backgroundColor: "lightBlue",
                                        color: "black",
                                      }}
                                    >
                                      Rare
                                    </p>
                                  ) : fly.rarity == "Epic" ? (
                                    <p
                                      style={{
                                        backgroundColor: "#CBC3E3",
                                        color: "black",
                                      }}
                                    >
                                      Epic
                                    </p>
                                  ) : (
                                    <p
                                      style={{
                                        backgroundColor: "#FFD580",
                                        color: "black",
                                      }}
                                    >
                                      Legendary
                                    </p>
                                  )}
                                </div>
                              )}
                            </Popup>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {showDNR && (
                  <div className="sidebarWrapper dnr">
                    <div className="dnrWrapper flex">
                      <div className="upgradesWrapper dnrUpgrades">
                        <div className="sidebarHeader">
                          <img src={dnrB} />
                          <p>Minnesota Department of Natural Resources</p>
                        </div>
                        <div className="upgradesStats">
                          <div className="flex">
                            <p
                              className="tinyText noMargin darkText"
                              id="budgetAmt"
                            >
                              Budget: $
                              {truncateNum(
                                currencies.shillings / dnr.conversionRate,
                                2
                              )}
                            </p>
                            <p
                              className="tinyText noMargin darkText"
                              id="prAmt"
                            >
                              Production Rate:{" "}
                              {truncateNum(dnr.productionRate, 2)} DNRB/s
                            </p>
                          </div>
                        </div>
                        <div className="upgradesContainer centered">
                          <div className="flex">
                            {Object.entries(dnr).map(([n, level]) => {
                              if (
                                n != "conversionRate" &&
                                n != "productionRate"
                              ) {
                                let ind;
                                for (let k = 1; k < n.length; k++) {
                                  if (n[k] == n[k].toUpperCase()) {
                                    ind = k;
                                  }
                                }
                                let label =
                                  n[0].toUpperCase() +
                                  n.slice(1, ind) +
                                  " " +
                                  n.slice(ind);
                                return (
                                  <Popup
                                    trigger={
                                      currencies.shillings /
                                        dnr.conversionRate >=
                                        dnrPrices[dnr[n]] && dnr[n] < 10 ? (
                                        <div className="upgradesItem smallHoverable">
                                          <img
                                            src={dnrImages[n].src}
                                            onClick={(e) => upgradeDNR(e, "id")}
                                            id={n}
                                          />
                                        </div>
                                      ) : (
                                        <div className="upgradesItem dark">
                                          <img src={dnrImages[n].src} id={n} />
                                        </div>
                                      )
                                    }
                                    position="bottom center"
                                    on={["hover", "focus"]}
                                    contentStyle={{ width: "120px" }}
                                  >
                                    <p className="smallHeader">{label}</p>
                                    <p className="smallText">Level: {dnr[n]}</p>
                                    <p
                                      className="smallText"
                                      style={
                                        currencies.shillings /
                                          dnr.conversionRate >=
                                        dnrPrices[level]
                                          ? { color: "green" }
                                          : { color: "red" }
                                      }
                                    >
                                      ${truncateNum(dnrPrices[level], 2)}
                                    </p>
                                  </Popup>
                                );
                              } else {
                                return false;
                              }
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="upgradesWrapper locationUpgrades">
                        <div className="sidebarHeader">
                          <p>Location Upgrades </p>
                        </div>
                        <div className="upgradesStats">
                          <div className="flex">
                            <p
                              className="tinyText noMargin darkText"
                              id="ccbonusAmt"
                            >
                              CC Bonus: {parseInt(location.CCBonus * 100)}%
                            </p>
                            <p
                              className="tinyText noMargin darkText"
                              id="fpcbonusAmt"
                            >
                              FPC Bonus: {truncateNum(location.FPCBonus, 2)}{" "}
                              Fish
                            </p>
                          </div>
                        </div>
                        <div className="upgradesContainer centered">
                          <div className="flex">
                            {Object.entries(location).map(([n, level]) => {
                              if (
                                n != "name" &&
                                n != "CCBonus" &&
                                n != "FPCBonus"
                              ) {
                                let ind;
                                for (let k = 1; k < n.length; k++) {
                                  if (n[k] == n[k].toUpperCase()) {
                                    ind = k;
                                  }
                                }
                                let label =
                                  n[0].toUpperCase() +
                                  n.slice(1, ind) +
                                  " " +
                                  n.slice(ind);
                                return (
                                  <Popup
                                    trigger={
                                      currencies.DNRBucks >=
                                      locationPrice[level] ? (
                                        <div className="upgradesItem smallHoverable">
                                          <img
                                            src={locationImages[n].src}
                                            onClick={(e) =>
                                              upgradeLocation(e, "id")
                                            }
                                            id={n}
                                          />
                                        </div>
                                      ) : (
                                        <div className="upgradesItem dark">
                                          <img
                                            src={locationImages[n].src}
                                            id={n}
                                            className="dark"
                                          />
                                        </div>
                                      )
                                    }
                                    position="bottom center"
                                    on={["hover", "focus"]}
                                    contentStyle={{ width: "120px" }}
                                  >
                                    <p className="smallHeader">{label}</p>
                                    <p className="smallText">
                                      Level: {location[n]}
                                    </p>
                                    <div
                                      className="flex"
                                      style={{
                                        flexDirection: "row",
                                        margin: "5px 0px",
                                      }}
                                    >
                                      <img className="currencyImg" src={dnrB} />
                                      <p
                                        className="smallText"
                                        style={
                                          currencies.DNRBucks >=
                                          locationPrice[level]
                                            ? { color: "green" }
                                            : { color: "red" }
                                        }
                                      >
                                        {truncateNum(locationPrice[level], 2)}
                                      </p>
                                    </div>
                                  </Popup>
                                );
                              } else {
                                return false;
                              }
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="upgradesWrapper anglerUpgrades">
                        <div className="sidebarHeader">
                          <p>Angler Upgrades </p>
                        </div>
                        <div className="upgradesContainer centered">
                          <div className="flex">
                            {findLowestAngler().map((n) => {
                              if (n > 0) {
                                return (
                                  <Popup
                                    trigger={
                                      currencies.shillings >=
                                      anglerUpgradePrices[n][
                                        anglers[n].multiplier - 1
                                      ] ? (
                                        <div className="upgradesItem smallHoverable">
                                          <img
                                            src={
                                              anglerUpgradeImages[
                                                anglerUpgradesOrder[n][
                                                  anglers[n].multiplier - 1
                                                ]
                                              ].src
                                            }
                                            onClick={(e) =>
                                              upgradeAngler(e, "id")
                                            }
                                            id={n}
                                          />
                                        </div>
                                      ) : (
                                        <div className="upgradesItem dark">
                                          <img
                                            src={
                                              anglerUpgradeImages[
                                                anglerUpgradesOrder[n][
                                                  anglers[n].multiplier - 1
                                                ]
                                              ].src
                                            }
                                            id={n}
                                          />
                                        </div>
                                      )
                                    }
                                    position="top center"
                                    on={["hover", "focus"]}
                                    contentStyle={{ width: "160px" }}
                                  >
                                    <p className="smallHeader bolded">
                                      {anglers[n].name}
                                    </p>
                                    <p className="smallText">FPS Mult: 2x</p>
                                    <p className="tinyText">
                                      {anglerUpgradeImages[
                                        anglerUpgradesOrder[n][
                                          anglers[n].multiplier - 1
                                        ]
                                      ].text1 +
                                        anglers[n].name +
                                        anglerUpgradeImages[
                                          anglerUpgradesOrder[n][
                                            anglers[n].multiplier - 1
                                          ]
                                        ].text2}
                                    </p>
                                    <div
                                      className="flex"
                                      style={{
                                        flexDirection: "row",
                                        margin: "5px 0px",
                                      }}
                                    >
                                      <img
                                        className="currencyImg"
                                        src={shill}
                                      />
                                      <p
                                        className="smallText"
                                        style={
                                          currencies.shillings >=
                                          anglerUpgradePrices[n][
                                            anglers[n].multiplier - 1
                                          ]
                                            ? { color: "green" }
                                            : { color: "red" }
                                        }
                                      >
                                        {truncateNum(
                                          anglerUpgradePrices[n][
                                            anglers[n].multiplier - 1
                                          ],
                                          2
                                        )}
                                      </p>
                                    </div>
                                  </Popup>
                                );
                              } else {
                                return (
                                  <div className="upgradesItem">
                                    <img
                                      src={lockIcon}
                                      id={n}
                                      className="dark"
                                    />
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {showBMFS && (
                  <div className="sidebarWrapper BMFS">
                    <div className="BMFSContent">
                      <div className="sidebarHeader" id="BMFSHeader">
                        <img src={BMFSLogo} />
                        <p>Bob Mitchell's Fly Shop</p>
                      </div>
                      <div className="editProfileWrapper">
                        <div className="flex">
                          <div className="editImageWrapper">
                            <img src={profileImg ? profileImg : profile} />
                            <Popup
                              trigger={
                                <button className="solidButton"> EDIT </button>
                              }
                              modal
                              nested
                              overlayStyle={{
                                width: "100%",
                                margin: "auto",
                                backgroundColor: "transparent",
                              }}
                              contentStyle={{ width: "500px", height: "350px" }}
                            >
                              {(close) => (
                                <div className="modal">
                                  <div className="content">
                                    {file ? (
                                      <div className="editImageContent">
                                        <div className="cropContainer">
                                          <Cropper
                                            className="cropper"
                                            image={file}
                                            crop={crop}
                                            zoom={zoom}
                                            aspect={1 / 1}
                                            onCropChange={setCrop}
                                            onCropComplete={onCropComplete}
                                            onZoomChange={setZoom}
                                          />
                                        </div>
                                        <div className="flex">
                                          <button
                                            onClick={handleChange}
                                            className="closeCropper solidButton noMargin"
                                          >
                                            UPLOAD IMAGE
                                          </button>
                                          <button
                                            onClick={() => {
                                              showCroppedImage();
                                              close();
                                            }}
                                            className="closeCropper solidButton noMargin"
                                          >
                                            DONE
                                          </button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="controls">
                                        <input
                                          type="file"
                                          onChange={handleChange}
                                        />
                                        <img src={file} />
                                        {profileImg ? (
                                          <img src={profileImg} />
                                        ) : (
                                          <p>no image</p>
                                        )}
                                        <button
                                          className="closeModal"
                                          onClick={() => close()}
                                        >
                                          Close modal
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                            </Popup>
                          </div>
                          <div className="statsWrapper">
                            <p className="tinyText">
                              Total Fish Caught:{" "}
                              {truncateNum(currencies.totalFish, 3)}
                            </p>
                            <p className="tinyText">
                              Idle Fish Caught:{" "}
                              {truncateNum(currencies.totalAutoFish, 3)}
                            </p>
                            <p className="tinyText">
                              Total Fish Clicked:{" "}
                              {truncateNum(currencies.totalClickedFish, 3)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="equippedGearWrapper"
                        onLoad={checkEquippedGear}
                      >
                        <div className="flex">
                          <div>
                            <img src={rodIcon} className="labelIcon" />
                            <div className="gearCell">
                              <Popup
                                trigger={
                                  equippedRod > 0 ? (
                                    <img
                                      src={BMFSImages[equippedRod].src}
                                      className="smallHoverable"
                                    />
                                  ) : (
                                    <img src={rodIcon} />
                                  )
                                }
                                position="bottom center"
                                on={["hover", "focus"]}
                                contentStyle={{ width: "120px" }}
                              >
                                {equippedRod > 0 ? (
                                  <div>
                                    <p className="smallText bolded">
                                      Fly Fishing Rod
                                    </p>
                                    <p className="tinyText">
                                      {BMFSItems[equippedRod].Name}
                                    </p>
                                    <p className="tinyText">
                                      FPC Mult:{" "}
                                      {BMFSItems[equippedRod].FPCMultiplier}x
                                    </p>
                                  </div>
                                ) : (
                                  <div>
                                    <p className="smallText bolded">Fly Rod</p>
                                    <p className="tinyText">Not Equipped</p>
                                  </div>
                                )}
                              </Popup>
                            </div>
                          </div>
                          <div>
                            <img src={netIcon} className="labelIcon" />
                            <div className="gearCell">
                              <Popup
                                trigger={
                                  equippedNet > 0 ? (
                                    <img
                                      src={BMFSImages[equippedNet].src}
                                      className="smallHoverable"
                                    />
                                  ) : (
                                    <img src={netIcon} />
                                  )
                                }
                                position="bottom center"
                                on={["hover", "focus"]}
                                contentStyle={{ width: "120px" }}
                              >
                                {equippedNet > 0 ? (
                                  <div>
                                    <p className="smallText bolded">
                                      Fly Fishing Net
                                    </p>
                                    <p className="tinyText">
                                      {BMFSItems[equippedNet].Name}
                                    </p>
                                    <p className="tinyText">
                                      FPC Mult:{" "}
                                      {BMFSItems[equippedNet].FPCMultiplier}x
                                    </p>
                                  </div>
                                ) : (
                                  <div>
                                    <p className="smallText bolded">Net</p>
                                    <p className="tinyText">Not Equipped</p>
                                  </div>
                                )}
                              </Popup>
                            </div>
                          </div>
                          <div>
                            <img src={vestIcon} className="labelIcon" />
                            <div className="gearCell">
                              <Popup
                                trigger={
                                  equippedVest > 0 ? (
                                    <img
                                      src={BMFSImages[equippedVest].src}
                                      className="smallHoverable"
                                    />
                                  ) : (
                                    <img src={vestIcon} />
                                  )
                                }
                                position="bottom center"
                                on={["hover", "focus"]}
                                contentStyle={{ width: "120px" }}
                              >
                                {equippedVest > 0 ? (
                                  <div>
                                    <p className="smallText bolded">
                                      Fly Fishing Vest
                                    </p>
                                    <p className="tinyText">
                                      {BMFSItems[equippedVest].Name}
                                    </p>
                                    <p className="tinyText">
                                      FPC Mult:{" "}
                                      {BMFSItems[equippedVest].FPCMultiplier}x
                                    </p>
                                  </div>
                                ) : (
                                  <div>
                                    <p className="smallText bolded">Fly Vest</p>
                                    <p className="tinyText">Not Equipped</p>
                                  </div>
                                )}
                              </Popup>
                            </div>
                          </div>
                        </div>
                        <p className="centered noMargin multiplierTotalText">
                          Total FPC Multiplier:{" "}
                          {truncateNum(currencies.FPCMultiplier, 1)}x
                        </p>
                      </div>
                      <div className="gearWrapper">
                        <div className="sidebarHeader">
                          <p>Fly Fishing Rods</p>
                        </div>
                        <div className="grid centered">
                          {Object.entries(BMFSItems).map(([n, item]) =>
                            n <= 5 ? (
                              <Popup
                                trigger={
                                  item.Unlocked ? (
                                    <img
                                      className="centered smallHoverable"
                                      src={BMFSImages[n].src}
                                      id={n}
                                      onClick={(e) => equipGear(e, "id")}
                                    />
                                  ) : (
                                    <img
                                      className="centered veryDark smallHoverable"
                                      src={BMFSImages[n].src}
                                      id={n}
                                      onClick={(e) => buyGear(e, "id")}
                                    />
                                  )
                                }
                                position="top center"
                                on={["hover", "focus"]}
                                contentStyle={{ width: "120px" }}
                              >
                                {item.Unlocked ? (
                                  <div>
                                    <p className="tinyText">{item.Name}</p>
                                    <p className="tinyText">
                                      FPC Mult: {item.FPCMultiplier}x
                                    </p>
                                    {item.Equipped ? (
                                      <p className="tinyText">Equipped</p>
                                    ) : (
                                      <p className="tinyText">Click to Equip</p>
                                    )}
                                  </div>
                                ) : (
                                  <div>
                                    <p className="smallText">{item.Name}</p>
                                    <div
                                      className="flex"
                                      style={{
                                        flexDirection: "row",
                                        margin: "5px 0px",
                                      }}
                                    >
                                      <img
                                        className="currencyImg"
                                        src={shill}
                                      />
                                      <p
                                        className="smallText"
                                        style={
                                          currencies.shillings >= item.Price
                                            ? { color: "green" }
                                            : { color: "red" }
                                        }
                                      >
                                        {truncateNum(item.Price, 2)}
                                      </p>
                                    </div>
                                    <p className="tinyText">Click to Unlock</p>
                                  </div>
                                )}
                              </Popup>
                            ) : (
                              false
                            )
                          )}
                        </div>
                        <div className="sidebarHeader">
                          <p>Fly Fishing Nets</p>
                        </div>
                        <div className="grid centered">
                          {Object.entries(BMFSItems).map(([n, item]) =>
                            n > 5 && n <= 12 ? (
                              <Popup
                                trigger={
                                  item.Unlocked ? (
                                    <img
                                      className="centered smallHoverable"
                                      src={BMFSImages[n].src}
                                      id={n}
                                      onClick={(e) => equipGear(e, "id")}
                                    />
                                  ) : (
                                    <img
                                      className="centered veryDark smallHoverable"
                                      src={BMFSImages[n].src}
                                      id={n}
                                      onClick={(e) => buyGear(e, "id")}
                                    />
                                  )
                                }
                                position="top center"
                                on={["hover", "focus"]}
                                contentStyle={{ width: "120px" }}
                              >
                                {item.Unlocked ? (
                                  <div>
                                    <p className="tinyText">{item.Name}</p>
                                    <p className="tinyText">
                                      FPC Mult: {item.FPCMultiplier}x
                                    </p>
                                    {item.Equipped ? (
                                      <p className="tinyText">Equipped</p>
                                    ) : (
                                      <p className="tinyText">Click to Equip</p>
                                    )}
                                  </div>
                                ) : (
                                  <div>
                                    <p className="smallText">{item.Name}</p>
                                    <div
                                      className="flex"
                                      style={{
                                        flexDirection: "row",
                                        margin: "5px 0px",
                                      }}
                                    >
                                      <img
                                        className="currencyImg"
                                        src={shill}
                                      />
                                      <p
                                        className="smallText"
                                        style={
                                          currencies.shillings >= item.Price
                                            ? { color: "green" }
                                            : { color: "red" }
                                        }
                                      >
                                        {truncateNum(item.Price, 2)}
                                      </p>
                                    </div>
                                    <p className="tinyText">Click to Unlock</p>
                                  </div>
                                )}
                              </Popup>
                            ) : (
                              false
                            )
                          )}
                        </div>
                        <div className="sidebarHeader">
                          <p>Fly Fishing Vests</p>
                        </div>
                        <div className="grid centered">
                          {Object.entries(BMFSItems).map(([n, item]) =>
                            n > 12 ? (
                              <Popup
                                trigger={
                                  item.Unlocked ? (
                                    <img
                                      className="centered smallHoverable"
                                      src={BMFSImages[n].src}
                                      id={n}
                                      onClick={(e) => equipGear(e, "id")}
                                    />
                                  ) : (
                                    <img
                                      className="centered veryDark smallHoverable"
                                      src={BMFSImages[n].src}
                                      id={n}
                                      onClick={(e) => buyGear(e, "id")}
                                    />
                                  )
                                }
                                position="top center"
                                on={["hover", "focus"]}
                                contentStyle={{ width: "120px" }}
                              >
                                {item.Unlocked ? (
                                  <div>
                                    <p className="tinyText">{item.Name}</p>
                                    <p className="tinyText">
                                      FPC Mult: {item.FPCMultiplier}x
                                    </p>
                                    {item.Equipped ? (
                                      <p className="tinyText">Equipped</p>
                                    ) : (
                                      <p className="tinyText">Click to Equip</p>
                                    )}
                                  </div>
                                ) : (
                                  <div>
                                    <p className="smallText">{item.Name}</p>
                                    <div
                                      className="flex"
                                      style={{
                                        flexDirection: "row",
                                        margin: "5px 0px",
                                      }}
                                    >
                                      <img
                                        className="currencyImg"
                                        src={shill}
                                      />
                                      <p
                                        className="smallText"
                                        style={
                                          currencies.shillings >= item.Price
                                            ? { color: "green" }
                                            : { color: "red" }
                                        }
                                      >
                                        {truncateNum(item.Price, 2)}
                                      </p>
                                    </div>
                                    <p className="tinyText">Click to Unlock</p>
                                  </div>
                                )}
                              </Popup>
                            ) : (
                              false
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="dividerLine" />
                <div className="castWrapper" id="castWrapper">
                  <img src={currentStream} onClick={cast} />
                  <div className="hatchModal" id="hatchModal">
                    <p className="darkText noMargin" style={{fontSize: "25px"}}>HATCH!!!</p>
                    <p className="noMargin" style={{fontSize: "22px"}}>FPS x2 and FPC x10 for 15 seconds</p>
                  </div>
                  <Popup
                    trigger={
                      <div
                        className="flyBioWrapper card"
                        onClick={flyboxClick}
                        onLoad={checkEquippedFlies}
                        id="equippedFlyAmt"
                        style={
                          equippedFly > 0
                            ? flies[equippedFly].rarity == "Common"
                              ? {
                                  border: "3px solid rgba(0, 0, 0, 1)",
                                  boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.5)",
                                }
                              : flies[equippedFly].rarity == "Uncommon"
                              ? {
                                  border: "3px solid rgba(49,146,54, 1)",
                                  boxShadow:
                                    "0 0 10px 5px rgba(49,146,54, 0.5)",
                                }
                              : flies[equippedFly].rarity == "Rare"
                              ? {
                                  border: "3px solid rgba(76,81,247, 1)",
                                  boxShadow:
                                    "0 0 10px 5px rgba(76,81,247, 0.5)",
                                }
                              : flies[equippedFly].rarity == "Epic"
                              ? {
                                  border: "3px solid rgba(157,77,187, 1)",
                                  boxShadow:
                                    "0 0 10px 5px rgba(157,77,187, 0.5)",
                                }
                              : {
                                  border: "3px solid rgba(243,175,25, 0.3)",
                                  boxShadow:
                                    "0 0 10px 5px rgba(243,175,25, 0.3)",
                                }
                            : {
                                border: "3px solid rgba(0, 0, 0, 1)",
                                boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.5)",
                              }
                        }
                      >
                        {equippedFly > 0 ? (
                          <div className="flex flexRow">
                            <img
                              src={
                                flies[equippedFly].name == "Woolly Bugger"
                                  ? WB
                                  : flies[equippedFly].name == "Hopper"
                                  ? hopper
                                  : flies[equippedFly].name == "Prince Nymph"
                                  ? PN
                                  : flies[equippedFly].name ==
                                    "Blue-Winged Olive"
                                  ? DF
                                  : CF
                              }
                              style={{ transform: "rotate(-115deg)" }}
                            ></img>
                          </div>
                        ) : (
                          <div className="flex">
                            <p className="flyBioText">No Fly Equipped</p>
                          </div>
                        )}
                      </div>
                    }
                    position="bottom center"
                    on={["hover", "focus"]}
                    contentStyle={{ width: "180px" }}
                  >
                    {equippedFly > 0 ? (
                      <div className="flex">
                        <div className="flyTextWrapper">
                          <div className="flex">
                            <p className="flyTitle">
                              {flies[equippedFly].name}
                            </p>
                            <p className="subtext">
                              Rarity: {flies[equippedFly].rarity}
                            </p>
                            <p className="subtext">
                              Catch Chance Bonus:{" "}
                              {parseInt(flies[equippedFly].CC * 100)}%
                            </p>
                            <p className="subtext">
                              Fish Per Cast Bonus:{" "}
                              {truncateNum(flies[equippedFly].FPC, 2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex">
                        <div className="flyTextWrapper">
                          <div className="flex">
                            <p className="flyTitle">
                              Visit the flybox to equip a fly!!
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>

                <div className="dividerLine" />

                <div className="autoInfoWrapper">
                  <div className="flex">
                    <div className="navigationWrapper">
                      <div className="grid">
                        <div
                          className="navigationItem centered"
                          id="marketNavButton"
                          onClick={marketClick}
                        >
                          <div className="flex centered">
                            <img src={fishMarket} />
                            <p className="noMargin">Market</p>
                          </div>
                        </div>
                        <div
                          className="navigationItem centered"
                          id="dnrNavButton"
                          onClick={dnrClick}
                        >
                          <div className="flex centered">
                            <img src={dnrHQ} />
                            <p className="noMargin">DNR</p>
                          </div>
                        </div>
                        <div
                          className="navigationItem centered"
                          id="flyboxNavButton"
                          onClick={flyboxClick}
                        >
                          <div className="flex centered">
                            <img src={flyboxImg} />
                            <p className="noMargin">Flybox</p>
                          </div>
                        </div>
                        <div
                          className="navigationItem centered"
                          id="bmfsNavButton"
                          onClick={BMFSClick}
                        >
                          <div className="flex centered">
                            <img src={profile} />
                            <p className="noMargin">BMFS</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dividerLineHorizontal" />

                    <div className="automationList" id="autoListId">
                      <div className="autoWrapper flex centered">
                        <div className="sidebarHeader" id="anglersHeader">
                          <p>Anglers</p>
                        </div>
                        {Object.entries(anglers).map(([n, angler]) =>
                          (n == 1) | (anglers[n].quantity > 0) ? (
                            <div className="automationItem" id={n}>
                              <p className="autoQuantity" id={`aq${n}`}>
                                {angler.quantity}
                              </p>
                              <div className="flex">
                                <p className="autoTitle">{angler.name}</p>
                                <div className="subtextFlex">
                                  <img className="subImg" src={shill}></img>
                                  <p className="mediumText">
                                    {truncateNum(angler.price, 2)}
                                  </p>
                                  <p
                                    className="mediumText"
                                    style={{ marginLeft: "15px" }}
                                  >
                                    FPS: {truncateNum(angler.fps, 2)}
                                  </p>
                                </div>
                              </div>
                              <button
                                className="autoHire"
                                onClick={(e) => hireAngler(e, "id")}
                                id={n}
                              >
                                Hire
                              </button>
                            </div>
                          ) : anglers[n - 1].quantity >= 1 ? (
                            <div
                              className="automationItem"
                              id={n}
                              onLoad={scrollToAngler}
                            >
                              <p className="autoQuantity" id={`aq${n}`}>
                                {angler.quantity}
                              </p>
                              <div className="flex">
                                <p className="autoTitle">{angler.name}</p>
                                <div className="subtextFlex">
                                  <img className="subImg" src={shill}></img>
                                  <p className="mediumText">
                                    {truncateNum(angler.price, 2)}
                                  </p>
                                </div>
                              </div>
                              <button
                                className="autoHire"
                                onClick={(e) => hireAngler(e, "id")}
                                id={n}
                              >
                                Hire
                              </button>
                            </div>
                          ) : (
                            false
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dividerLine" />
              </div>
            </div>
            <div className="dividerLineHorizontal" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
