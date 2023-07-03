import React from "react";
import Cardlist from "./Cardlist";
import Searchbar from "./Searchbar";
<<<<<<< HEAD
import {players} from "./players";
import Scroll from "./Scroll";
=======
// import {players} from "./players";
>>>>>>> 9bb45dd6dd7708bffb94653424efe8cd18dc9df0

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

<<<<<<< HEAD
        return (
            <div className="tc">
                <h1 className="f1">Hall Of Fame Collection</h1>
                {/* Searchbar �[�Winputchange�o��props����ASearchbar.js�N������� */}
                <Searchbar inputchange={this.inputChange} />
                <Scroll>
                    <Cardlist players = {filteredPlayers} />
                </Scroll>            
            </div>
        );
=======
        if (this.state.players.length === 0){
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Cat Company's Staffs</h1>
                    {/* Searchbar �[�Winputchange�o��props����ASearchbar.js�N������� */}
                    <Searchbar inputchange={this.inputChange} />
                    <Cardlist players = {filteredPlayers} />
                </div>
            );
        }
>>>>>>> 9bb45dd6dd7708bffb94653424efe8cd18dc9df0
    }
}

export default App;