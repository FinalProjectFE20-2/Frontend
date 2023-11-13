import { INCREMENT, DECREMENT, SET_VALUE } from "../action/counterAction";

const counter = (state = 1, action) => {
    switch (action.type) {

        case INCREMENT:
            if(state>100) {
                return state;
            } else {
                return state + 1;
            }

        case DECREMENT:
            if(state<=0) {
                return state;
            } else {
                return state - 1;
            }

        case SET_VALUE:
            alert(action.payload);
            console.log(`change ${action.type} ${action.payload}`);
            return state = action.payload;

        default:
            return state;
    }
};

export default counter;