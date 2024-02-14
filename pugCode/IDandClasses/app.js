//
// import { h, app } from 'hyperapp/dist/hyperapp.js';
//
//
// const AddTodo = (state) => ({
//     ...state,
//     value: "",
//     todos: state.todos.concat(state.value),
// })
//
// const NewValue = (state, event) => ({
//     ...state,
//     value: event.target.value,
// })
//
// app({
//     init: { todos: [], value: "" },
//     view: ({ todos, value }) =>
//         h("main", {}, [
//             h("h1", {}, text("To do list")),
//             h("input", { type: "text", oninput: NewValue, value }),
//             h("ul", {},
//                 todos.map((todo) => h("li", {}, text(todo)))
//             ),
//             h("button", { onclick: AddTodo }, text("New!")),
//         ]),
//     node: document.getElementById("app"),
// })
//
// //     // Your Hyperapp code here
// //     import pug from "pug";
// //
// //     const state = {
// //         count: 0
// //     };
// //
// // // Define actions
// //     const actions = {
// //         increment: () => state => ({count: state.count + 1}),
// //         decrement: () => state => ({count: state.count - 1})
// //     };
// //     const view = (state, actions) => (
// //         pug`
// //                         div
// //                             h1 Simple Hyperapp Example with Pug.js
// //                             p Count: ${state.count}
// //                             button(onclick=${actions.increment}) Increment
// //                             button(onclick=${actions.decrement}) Decrement
// //                           `
// //     );
// //
// // // Render function
// //     const render = () => {
// //         document.getElementById('main').innerHTML = view(state, actions);
// //     };
// //
// // // Initialize app
// //     render();
// //
