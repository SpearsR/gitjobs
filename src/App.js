
function httpGet(theUrl)
{
    console.log('hi');
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://jobs.github.com/positions.json?search=node' , false ); // false for synchronous request
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin','http://localhost:3000');
    xmlHttp.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    xmlHttp.setRequestHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    xmlHttp.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    xmlHttp.send();
    console.log(xmlHttp.responseText)
}

httpGet()

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App; 
