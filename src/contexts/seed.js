// Testing data
window.seed = () => {
    window.localStorage.clear()
    window.localStorage.setItem("documents", JSON.stringify([
        {
            id: 1,
            dateUpdated: new Date("1/10/2010"),
            title: "Example title",
            content: "Content in here"
        },
        {
            id: 2,
            dateUpdated: new Date("1/5/2012"),
            title: "Example title 2",
            content: "Content in here"
        },
        {
            id: 3,
            dateUpdated: new Date("1/7/2019"),
            title: "Example title 3",
            content: "Content in here"
        }
    ]))
}