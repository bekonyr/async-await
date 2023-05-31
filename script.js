// async await
const block = document.querySelector(".block")

const task = async () => {
    const res = await axios(`https://jsonplaceholder.typicode.com/users`)
    const {data}  = await res
    // const count  = await res.data
    console.log(data)
}
task()
// async function task1() {
//     const res = await axios(https://jsonplaceholder.typicode.com/users)
//     const {data}  = await res
//     console.log(data)
// }
// task1()
// function task() {
//     axios(https://jsonplaceholder.typicode.com/users)
//         .then((res) => {
//             res.data.map(el => (
//                 block.innerHTML += `<div>
//                 <h1>${el.name}</h1>
//                 <h1>${el.id * 3}</h1>

// </div>`
//             ))
//             console.log(res.data)

//         })
// }
// task()