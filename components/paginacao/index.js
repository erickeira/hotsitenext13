import React from "react";
import './paginacao.css';

const ItemList = ({ items }) => {
  return (
    <ul className="react-paginate">
      {items.map((item) => (        
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>    
  );
};

export default ItemList;