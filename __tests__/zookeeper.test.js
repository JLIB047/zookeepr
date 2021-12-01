const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
} = require("../lib/zookeepers");
const { zookeepers } = require("../data/zookeepers");

jest.mock('fs');

test ('creates zookeeper object', () => {
    const zookeeper = createNewZookeeper(
        { name: "Jay", id:"handsome"},
        zookeepers
    );

    expect (zookeeper.name).toBe("Jay");
    expect (zookeeper.id).toBe('handsome');
})

test('fiters by query', () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
          },
          {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
          },
    ];

    const updatedZookeepers = filterByQuery({ name: "Raksha"}, startingZookeepers);
    expect (updatedZookeepers.length).toEqual(1);
});

test ("finds by id", () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
          },
          {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
          },
    ];

    const result = findById("2", startingZookeepers);
    expect(result.name).toBe("Erica");
});

test ("validates age", () => {
    const zookeeper = {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
          },

    const invalidZookeeper ={
            id: " ",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
          },
   
    const result = validateZookeeper(zookeeper);
    const result = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result).toBe(false);
 });



