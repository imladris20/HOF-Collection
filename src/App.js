import React from "react";
import Cardlist from "./Cardlist";
import Searchbar from "./Searchbar";
import {players} from "./players";

/*  �H�U7-15�椺�e���P��17-27�� */
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
            players: players,
            searchfield: ''
        }
    }

    inputChange = (event) => {

        //  setState()�Oreact���`��methods�A�b�A�����A�|�����state�����e�������ܧ�
        this.setState({searchfield: event.target.value})
    }
    
    render(){
        
        const filteredPlayers = this.state.players.filter( input => {
            return input.name.toLowerCase().includes(this.state.searchfield.toLowerCase());  
        })
        // console.log(filteredPlayers); --> �ΨӽT�{filter��O�_�S���D�AOK�N�i�H��filteredPlayers�ϬM��cardlist��props�̭�

        return (
            <div className="tc">
                <h1>Your Hall-Of-Fame Collection</h1>
                {/* Searchbar �[�Winputchange�o��props����ASearchbar.js�N������� */}
                <Searchbar inputchange={this.inputChange} />
                <Cardlist players = {filteredPlayers} />
            </div>
        );
    }
}

export default App;