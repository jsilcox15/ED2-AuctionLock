import React, { useState, useEffect } from 'react';
import DisplayProduct from "../pages/displayProduct.js";
import { Layout } from '../components/common';
import 'bootstrap/dist/css/bootstrap.min.css';




function Cars() {

    const [allCards, setAllCards] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
        let userData;
        try {
            const response = await fetch("http://"+window.location.hostname+"/auctions");
            userData = await response.json();
        } catch (error) {
            console.log(error);
            userData = [];
        }
        setAllCards(userData.message);
        setCards(userData.message.filter(e => e.category === "Cars & Parts"));
        //setCards(userData.message);
        })();
    }, []);
    

    return (
        <Layout>
        <div className="format">
                <div className="box_space">
                    {cards && cards.map((e, id) => (
                            <DisplayProduct key={id} userData={e} />
                    ))}
                </div>
        </div></Layout>
    );
}
export default Cars;
