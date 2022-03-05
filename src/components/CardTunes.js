import React from 'react';

const CardTunes = (props) => {
    

    return (
        <div className='card-container'>
            <div className='card'>
                <img src=''alt='album image'/>
                <h4>titre de la chanson</h4>
                <h5>nom de l'album</h5>
                <h5>nom du chanteur </h5>
            </div>
            <button>Ajouter au panier</button>
            
        </div>
    );
};

export default CardTunes;