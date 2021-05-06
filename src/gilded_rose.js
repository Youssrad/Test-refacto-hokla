class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

 
  // I  used a ForEach loop instead of a For loop, to avoid creating unecessary incremental variable
  // Switch case for clarity and lisibility instead of a succession of if/else statement 

  updateQuality() {
    // Loop Through the Items array to affect action on quality for each item
    this.items.forEach(item => {
      // First check if the items is conjured or not, if it is and it's quality is currently supperior to 0, we decrease the quality by 2,
      // else it is 0 and can go to waste
      if(item.name.includes("Conjured")) {
        item.quality > 0 ?  item.quality = item.quality - 2 : item.quality = 0
      } 
      // Check if sulfuras
      else if (item.name === "Sulfuras, Hand of Ragnaros") item.quality = 80;
      
      // check if Aged Brie
      else if (item.name === "Aged Brie") item.quality < 50 ? item.quality = item.quality + 1 : item.quality = 50;
      

      // Check for Backstage pass
      else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
            item.sellIn > 10 ?  item.quality = item.quality + 1 
            : item.sellIn < 11 && item.sellIn > 5 ? item.quality = item.quality + 2
            : item.sellIn <= 5 && item.sellIn > 0 ?  item.quality = item.quality + 3 
            : item.quality = 0;
         
       } 
       // Default case
       else {
         item.quality > 0  ? item.quality = item.quality - 1: item.quality = 0;}
    });
    return this.items;
  }
}


module.exports = {
  Item,
  Shop
};
