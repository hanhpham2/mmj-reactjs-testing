var defaultState = [{
    id: 1,
    text: "Hello! Please input some text to test..."
}];

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, action.payload];
            break;
    }
    return state;
}
