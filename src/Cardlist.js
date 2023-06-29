import React from "react";
import Card from "./Card";

const Cardlist = ( {players} ) => {

    const playerArray = players.map((element, index) => {
        //  key attributes are import. They must be unique and be added to every tag.
        return <Card key={players[index].backnumber + players[index].name} backnumber = {players[index].backnumber} name = {players[index].name} team = {players[index].team} position = {players[index].position} />
    })
    
    return (

        <div>
            {playerArray}
        </div>
    );
}

export default Cardlist;

/* �o�O�����b<div>�����@���card�A�ܩ���H�U�@�w�i�H����loop�h²�� */
    /* <Card backnumber = {players[0].backnumber} name = {players[0].name} team = {players[0].team} position = {players[0].position} />
    <Card backnumber = {players[1].backnumber} name = {players[1].name} team = {players[1].team} position = {players[1].position} />
    <Card backnumber = {players[2].backnumber} name = {players[2].name} team = {players[2].team} position = {players[2].position} />
    <Card backnumber = {players[3].backnumber} name = {players[3].name} team = {players[3].team} position = {players[3].position} />
    <Card backnumber = {players[4].backnumber} name = {players[4].name} team = {players[4].team} position = {players[4].position} />
    <Card backnumber = {players[5].backnumber} name = {players[5].name} team = {players[5].team} position = {players[5].position} />
    <Card backnumber = {players[6].backnumber} name = {players[6].name} team = {players[6].team} position = {players[6].position} />
    <Card backnumber = {players[7].backnumber} name = {players[7].name} team = {players[7].team} position = {players[7].position} />
    <Card backnumber = {players[8].backnumber} name = {players[8].name} team = {players[8].team} position = {players[8].position} />
    <Card backnumber = {players[9].backnumber} name = {players[9].name} team = {players[9].team} position = {players[9].position} />
    <Card backnumber = {players[10].backnumber} name = {players[10].name} team = {players[10].team} position = {players[10].position} />
    <Card backnumber = {players[11].backnumber} name = {players[11].name} team = {players[11].team} position = {players[11].position} /> */