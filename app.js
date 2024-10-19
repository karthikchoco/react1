const parent = React.createElement("div",{id:"parent"},
    [React.createElement("h1",{},"karthik"),React.createElement("h2",{},"prem")]
)
const Heading = React.createElement("h1",{id:"head"},"noob");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

