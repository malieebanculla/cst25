let player = {
    name: "cat",
    color: "green",
    number: "85",
    backpack: ['health potion', 'sword']
}; 

function changeColor(color) {
    player.color = color;
};

function addItem(item) {
    player.backpack.push(item);
}