# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
        Context API helps solve the problems with prop drilling by sharing state down a component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        Actions are action-objects like add, toggle etc that combine with the current state and are passed to reducers which return a new state object. The store is a single immutable state tree in Redux where all state changes are handled by dispatch actions which are processed by reducers.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
        Redux-Thunk is a middleware library that allows us to return a function instead of an action-object from an action creator. The returned function receives the store's dispatch method, so synchronous actions dispatch only once the asynchronous operations are completed. So thunk uses the ability to return a function in order to delay the function's operation.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
        Context API!!!!! It is very clear, concise and readable code, much easier to wrangle.