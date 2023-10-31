import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [shoppingItems, setShoppingItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function addItem(newItem) {
    setShoppingItems([...shoppingItems, newItem])
  }

  const itemsToDisplay = items
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
