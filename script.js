console.log("done");

const rootDiv = document.querySelectorAll(".root-div");

console.log(rootDiv);

const countEl = document.querySelector(".countstate");
const incBtn = document.querySelector(".increment-btn");
const decBtn = document.querySelector(".decrement-btn");
let addNewCountBtn = document.querySelectorAll(".add-counter");

// action indentifier

const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_COUNT = "ADD_COUNT";

// action creator

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const addCount = (id, value) => {
  return {
    type: ADD_COUNT,
    payload: {
      id: id,
      value: value,
    },
  };
};

const initialState = [
  (counter = [
    {
      id: 1,
      value: 0,
    },
  ]),
];

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    case ADD_COUNT:
      return {
        ...state,
        counter: state.push({
          id: action.payload.id,
          value: action.payload.value,
        }),
      };
    default:
      return state;
  }
};

// create redux store
var store = Redux.createStore(countReducer);

// create a function to render the ui

const render = () => {
  const state = store.getState();

  //countEl.innerText = state.value.toString();
};

render();

// subscribe to store
store.subscribe(render);

// click events on the button

incBtn.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decBtn.addEventListener("click", () => {
  store.dispatch(decrement(2));
});

// create element

// add-counter button clicked

document.addEventListener("click", (e) => {
  if (e.target && Array.from(e.target.classList).includes("add-counter")) {
    console.log(addNewCountBtn.length, "el");
    var childDiv = document.createElement("div");

    childDiv.innerHTML += `
 <div class="container text-center p-4 m-3 root-div2">
        <h4 class="text-4xl text-center font-bold countstate" >
          0
        </h4>

        <div class="container text-center">
          <span>
            <button class="p-2 m-2 border increment-btn" >
              increment
            </button>
            <button class="p-2 m-2 border decrement-btn">
              decrement
            </button>
            <button class="p-2 m-2 border add-counter" >
              Add Counter+
            </button>
          </span>
        </div>
      </div>`;
    console.log("clicked");
    console.log(rootDiv);

    // for(var i = 0; i < rootDiv.length; i++) {
    //     rootDiv[i].appendChild(childDiv);
    // }

    rootDiv[0].appendChild(childDiv);
    addNewCountBtn = document.querySelectorAll(".add-counter");
    console.log(addNewCountBtn);
  }
});
