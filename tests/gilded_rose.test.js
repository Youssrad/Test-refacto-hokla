const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)
    ];

    const gildedRose = new Shop(items);
    const updatedItems = gildedRose.updateQuality();
    expect(updatedItems[0].name).toBe("+5 Dexterity Vest");
    expect(updatedItems[0].quality).toBe(19);
    expect(updatedItems[1].name).toBe("Aged Brie");
    expect(updatedItems[1].quality).toBe(1);
    expect(updatedItems[2].quality).toBe(6);
    expect(updatedItems[3].quality).toBe(80);
    expect(updatedItems[4].quality).toBe(80);
    expect(updatedItems[5].quality).toBe(21);
    expect(updatedItems[6].quality).toBe(51);
    expect(updatedItems[7].quality).toBe(52);
    expect(updatedItems[8].name).toBe("Conjured Mana Cake");
    expect(updatedItems[8].quality).toBe(4);


  });
});
