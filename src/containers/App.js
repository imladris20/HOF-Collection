import React, {useState, useEffect} from "react";
import Cardlist from "../components/Cardlist";
import Searchbar from "../components/Searchbar";
import {defaultPlayers} from "../players";
import Scroll from "../components/Scroll";
import Errorboundry from "../components/Errorboundry";
import './App.css';

/*  以下7-15行內容等同於18-51行的基底內容 */
// const App = () => {
//     return (
//         <div className="tc">
//             <h1>Your Hall-Of-Fame Collection</h1>
//             <Searchbar />
//             <Cardlist players = {players} />
//         </div>
//     );
// }

function App() {
// class App extends React.Component {
    
    //  以下的this都是指class APP 這個scope
    //  忘記constructor請去看筆記的instantiation part
/*     constructor() {
        //  透過super()，constructor才能取用this
        super();
        this.state = {
            //  通常不會把初始state設定有內容
            players: [],
            searchfield: ''
        }
        console.log("Part constructor runs.");
    } */

    const [players, setPlayers] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [counter, setCounter] = useState(0);

   /*  componentDidMount(){
        this.setState( { players: players } );
        console.log("Part componentDidMount runs.");
    } */

    useEffect(()=>{
        setPlayers(defaultPlayers);
        console.log(counter);
    },[counter]);

    const inputChange = (event) => {
        //  setState()是react的常用methods，在括號內你會執行對state的內容做什麼變更
        // this.setState({searchfield: event.target.value})
        setSearchfield(event.target.value);
        console.log("Part inputChange runs.");
    }
    
    // const {players, searchfield} = this.state;

    const filteredPlayers = players.filter( input => {
        return input.name.toLowerCase().includes(searchfield.toLowerCase());  
    })
    // console.log(filteredPlayers); --> 用來確認filter後是否沒問題，OK就可以把filteredPlayers反映到cardlist的props裡面

    console.log("Part render runs.");

    if (!players.length){
        return <h1>Loading...</h1>
    } else {
        return (
            <div className="tc">
                <h1 className="f1">Hall Of Fame Collection</h1>
                {/* Searchbar 加上inputchange這個props之後，Searchbar.js就能夠取用 */}
                <Searchbar inputchange={inputChange} />
                <Scroll>
                    <Errorboundry>
                        <Cardlist players = {filteredPlayers} />
                    </Errorboundry>
                </Scroll>
                <button onClick={()=>setCounter(counter+1)}>Practicing useState hook. If you click this, you should see the console adding counter</button>            
            </div>
        );
    }
}

export default App;