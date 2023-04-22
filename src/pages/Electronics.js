import React, { useState, useEffect } from 'react';
import DisplayProduct from "../pages/displayProduct.js";
import { Layout } from '../components/common';
import 'bootstrap/dist/css/bootstrap.min.css';


function Electronics() {

    const [allCards, setAllCards] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
        let userData;
        try {
            const response = await fetch("http://localhost:9999/auctions");
            userData = await response.json();
        } catch (error) {
            console.log(error);
            userData = [];
        }
        setAllCards(userData.message);
        setCards(userData.message.filter(e => e.category === "Electronics & Parts"));
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
export default Electronics;