// to test prob4.js
import {
    get_items,
    add_item,
    update_item_title_by_id,
    delete_item_by_id,
    get_item_title_by_id
  } from './prob4.js';
  
  console.log("Add item 1:", add_item({ id: 1, title: "Item 1" })); 
  console.log("Add item 2:", add_item({ id: 2, title: "Item 2" })); 
  console.log("adding item with an existing id:", add_item({ id: 1, title: "Exist" }));
  
  console.log("All items:", get_items());
  
  console.log("Update title for id 1:", update_item_title_by_id(1, "Updated Item 1")); 
  console.log("Update title for id 3 (doesn't exist):", update_item_title_by_id(3, "Doesn't Exist")); 
  
  console.log("Get title for id 1:", get_item_title_by_id(1)); 
  console.log("Get title for id 3 (doesn't exist):", get_item_title_by_id(3));
  
  console.log("Delete item with id 2:", delete_item_by_id(2)); 
  console.log("Delete again id 2:", delete_item_by_id(2));
  
  console.log("Final items:", get_items());
  