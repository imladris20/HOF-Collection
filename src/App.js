import React from "react";
import Cardlist from "./Cardlist";
import Searchbar from "./Searchbar";
// import {players} from "./players";

/*  �H�U7-15�椺�e���P��18-51�檺�򩳤��e */
// const App = () => {
//     return (
//         <div className="tc">
//             <h1>Your Hall-Of-Fame Collection</h1>
//             <Searchbar />
//             <Cardlist players = {players} />
//         </div>
//     );
// }


class App extends React.Component {
    
    //  �H�U��this���O��class APP �o��scope
    //  �ѰOconstructor�Хh�ݵ��O��indantation part
    constructor() {
        //  �z�Lsuper()�Aconstructor�~�����this
        super();
        this.state = {
            //  �q�`���|���lstate�]�w�����e
            players: [],
            searchfield: ''
        }
        console.log("Part constructor runs.");
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({players: users}));
    
        // this.setState( { players: players } );
        console.log("Part componentDidMount runs.");
    }

    inputChange = (event) => {
        //  setState()�Oreact���`��methods�A�b�A�����A�|�����state�����e�������ܧ�
        this.setState({searchfield: event.target.value})
        console.log("Part inputChange runs.");
    }
    
    render(){

        const filteredPlayers = this.state.players.filter( input => {
            return input.name.toLowerCase().includes(this.state.searchfield.toLowerCase());  
        })
        // console.log(filteredPlayers); --> �ΨӽT�{filter��O�_�S���D�AOK�N�i�H��filteredPlayers�ϬM��cardlist��props�̭�

        console.log("Part render runs.");

        return (
            <div className="tc">
                <h1 className="f1">Cat Company's Staffs</h1>
                {/* Searchbar �[�Winputchange�o��props����ASearchbar.js�N������� */}
                <Searchbar inputchange={this.inputChange} />
                <Cardlist players = {filteredPlayers} />
            </div>
        );
    }
}

export default App;