import { h, app } from "hyperapp";
import { withHyperload, Hyperload } from "hyperload";
// const state = {
//     todos: ["Learn Hyperapp", "New Tasks"], value: ""
// }
// // Define a TodoItem component
// const TodoItem = (todo) => h("li", {}, text(todo))
//
// // Define a TodoList component
// const TodoList = ({ todos }) => h("ul", {}, todos.map(TodoItem))
//
// // Define an InputSection component
// const InputSection = ({ value, oninput }) => h("section", {}, [
//     h("input", { type: "text", oninput, value }),
//     h("button", { onclick: AddTodo }, text("Add new")),
//     h("button", { onclick: () => console.log("Button 2 clicked") }, text("Button 2")),
//     h("button", { onclick: () => console.log("Button 3 clicked") }, text("Button 3")),
//     // Add more buttons or elements as needed
// ])
//
// const AddTodo = (state) => ({
//     ...state,
//     value: "",
//     todos: state.todos.concat(state.value)
// })
//
// const NewValue = (state, event) => ({
//     ...state,
//     value: event.target.value,
// })
//
// const view = (state) => h("main", {}, [
//     h("h1", {}, text("To-do list ✏️")),
//     TodoList({ todos: state.todos }),
//     InputSection({ value: state.value, oninput: NewValue })
// ])
//
// app({
//     init: state,
//     view,
//     node: document.getElementById("app"),
// })






// test
// const state = {
//     count: 0
// };
//
// const actions = {
//     increment: () => (state)=> (
//
//         { count: state.count + 1 }
//     ),
//     decrement: () => state => ({ count: state.count - 1 })
// };
//
// const view = (state, action) =>
//     h("div", {}, [
//         h("h1",{ class: { a: true, "study-of-ancient-runes": true }}, text("hello")),
//         h("button", {onclick:actions.increment('6') }, text(state.count)),
//
//     ]);
//
//
//
// app({init:state,
//     view,node: document.getElementById("app")  });
//
// // Call myApp() to render the application


// myself


const state ={
    value:"",
    books:[
        {author:"Diana Khanaghyan",
        title:"My Success Story"
        },
        {author:"Ann Khanaghyan",
            title:"My Success Story "
        }
    ]
}

const BooksView  =({books})=>
    h("div",{ }, books.map((item)=>{
        return h("div", {}, h("p", {}, [
                h("p", {}, text(item.author)),
                h("p", {}, text(item.title))
            ]
        ))

    }))


const AddBook =(state)=>{
   return {
       ...state,
       books: state.books.concat({
           author:"Lia",
           title:state.value
       })
   }
}
const InputVal = (state, e)=>({
    ...state,
    value: e.target.value,
}
)
const UserInteraction= ({value})=> h("div", {}, [
    h("input",{type:"text", placeholder:'Please Add books', onchange:InputVal, value,  } ),
    h("button", {onclick:AddBook}, text("ADD"))
    ])


const view  = (state, action) =>h("main", {}, [BooksView(state),
    UserInteraction(state.value)
])



//  const view = (state, action) =>
//     // h("div", {}, [
//
//         // h("button", {onclick:actions.increment('6') }, text(state.count)),
//
//     // ]
// );



app({init:state,
    view,node: document.getElementById("app")  });