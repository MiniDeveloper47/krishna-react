const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
        React.createElement("h2",{}, "I am an h1 tag"),
        React.createElement("h4",{}, "I am an h5 tag")
        ]
    )
);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);