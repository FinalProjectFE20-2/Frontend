import { INCREMENT, DECREMENT } from "../action/counterAction";

const counter = (state = 1, action) => {
    switch (action.type) {

        case INCREMENT:
            console.log("+1");
            return state + 1;

        case DECREMENT:
            console.log("-1");
            return state - 1;

        default:
            return state;
    }
};

export default counter;