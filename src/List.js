import React from 'react'
import Item from './Item'

function List(props) {
    return (
        <div className="list">
            {
                props.items.map(item =>
                <Item 
                     key={item.id}
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     rating={item.rating}
                     onupdaterating={props.onupdaterating}
                     onremove={props.onremove} //estos son eventos
                     />
                 )
            }
        </div>
        
    );
}

//los eventos van de menor a mayor rango, de nietos, a padre, a abuelo, bisabuelo

export default List
