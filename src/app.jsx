console.log("App.js is running");

const  app ={
    title: 'Indecision App',
    subtitle: 'My first React JS App',
    options: ['one','two']
}
const  user = {
    name: "Vishnu Pillai",
    age: 26,
    location: 'Little Rock'
};


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>} {/* conditional && operator */}
        <p>{(app.options.length>0 && app.options)?
            "Here are your options" :
            'No Options'}
        </p>
        <ul>
            <li>Name: {user.name}</li>
            <li>Age: {user.age}</li>
            <li>Location: {user.location}</li>
        </ul>
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);