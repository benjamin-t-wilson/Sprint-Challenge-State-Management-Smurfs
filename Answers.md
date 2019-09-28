1. What problem does the context API help solve?

Context API eliminates the need for excessive prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that are passed through reducer functions to alter different parts of the store, which is the single source of truth becasue it can only be changed by actions.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is held universally over the entire app, and can be passed by various methods down to the necessary components. Component state is where state relative to that component is held internally. It can be beneficial to use component state in smaller apps because it is time effective. In larger apps where multiple components need the same state, it can be worth the time to set up application wide state to avoid problems later

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk allows us an additional check on any action where we can run another function, or stop the action entirely.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I definitely see the power in redux but it is an unwieldly pain to use on smaller things. The Context API is much easier to implement on smaller projects and is likely what I will use personally more than Redux.
