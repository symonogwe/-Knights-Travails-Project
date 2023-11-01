// Node class for each Board Square
class Node {
  constructor(data) {
    this.data = data;
    this.edgesList = [];
  }

  // connect method connects a node to another node
  connect(node) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }
}

// nodes array

// nodes creation
export let squareObj = {};

for (let i = 1; i <= 8; i++) {
  squareObj[`${i}A`] = new Node(`${i}A`);
  squareObj[`${i}B`] = new Node(`${i}B`);
  squareObj[`${i}C`] = new Node(`${i}C`);
  squareObj[`${i}D`] = new Node(`${i}D`);
  squareObj[`${i}E`] = new Node(`${i}E`);
  squareObj[`${i}F`] = new Node(`${i}F`);
  squareObj[`${i}G`] = new Node(`${i}G`);
  squareObj[`${i}H`] = new Node(`${i}H`);
}

// nodes array
export const nodesArray = Object.values(squareObj);

// Adjacency list assignment
//node 1A
nodesArray[0].connect(nodesArray[10]);
nodesArray[0].connect(nodesArray[17]);

//node 1B
nodesArray[1].connect(nodesArray[16]);
nodesArray[1].connect(nodesArray[18]);
nodesArray[1].connect(nodesArray[11]);

//node 1C
nodesArray[2].connect(nodesArray[8]);
nodesArray[2].connect(nodesArray[17]);
nodesArray[2].connect(nodesArray[19]);
nodesArray[2].connect(nodesArray[12]);

//node 1D
nodesArray[3].connect(nodesArray[9]);
nodesArray[3].connect(nodesArray[18]);
nodesArray[3].connect(nodesArray[20]);
nodesArray[3].connect(nodesArray[13]);

//node 1E
nodesArray[4].connect(nodesArray[10]);
nodesArray[4].connect(nodesArray[19]);
nodesArray[4].connect(nodesArray[21]);
nodesArray[4].connect(nodesArray[14]);

//node 1f
nodesArray[5].connect(nodesArray[11]);
nodesArray[5].connect(nodesArray[20]);
nodesArray[5].connect(nodesArray[22]);
nodesArray[5].connect(nodesArray[15]);

//node 1G
nodesArray[6].connect(nodesArray[12]);
nodesArray[6].connect(nodesArray[21]);
nodesArray[6].connect(nodesArray[23]);

//node 1H
nodesArray[7].connect(nodesArray[13]);
nodesArray[7].connect(nodesArray[22]);

//node 2A
nodesArray[8].connect(nodesArray[18]);
nodesArray[8].connect(nodesArray[25]);

//node 2B
nodesArray[9].connect(nodesArray[19]);
nodesArray[9].connect(nodesArray[24]);
nodesArray[9].connect(nodesArray[26]);

//node 2C
nodesArray[10].connect(nodesArray[16]);
nodesArray[10].connect(nodesArray[20]);
nodesArray[10].connect(nodesArray[25]);
nodesArray[10].connect(nodesArray[27]);

//node 2D
nodesArray[11].connect(nodesArray[17]);
nodesArray[11].connect(nodesArray[21]);
nodesArray[11].connect(nodesArray[26]);
nodesArray[11].connect(nodesArray[28]);

//node 2E
nodesArray[12].connect(nodesArray[18]);
nodesArray[12].connect(nodesArray[22]);
nodesArray[12].connect(nodesArray[27]);
nodesArray[12].connect(nodesArray[29]);

//node 2F
nodesArray[13].connect(nodesArray[19]);
nodesArray[13].connect(nodesArray[23]);
nodesArray[13].connect(nodesArray[28]);
nodesArray[13].connect(nodesArray[30]);

//node 2G
nodesArray[14].connect(nodesArray[20]);
nodesArray[14].connect(nodesArray[29]);
nodesArray[14].connect(nodesArray[31]);

//node 2H
nodesArray[15].connect(nodesArray[21]);
nodesArray[15].connect(nodesArray[30]);

//node 3A
nodesArray[16].connect(nodesArray[26]);
nodesArray[16].connect(nodesArray[33]);

//node 3B
nodesArray[17].connect(nodesArray[32]);
nodesArray[17].connect(nodesArray[34]);
nodesArray[17].connect(nodesArray[27]);

//node 3C
nodesArray[18].connect(nodesArray[24]);
nodesArray[18].connect(nodesArray[33]);
nodesArray[18].connect(nodesArray[35]);
nodesArray[18].connect(nodesArray[28]);

//node 3D
nodesArray[19].connect(nodesArray[25]);
nodesArray[19].connect(nodesArray[34]);
nodesArray[19].connect(nodesArray[36]);
nodesArray[19].connect(nodesArray[29]);

//node 3E
nodesArray[20].connect(nodesArray[26]);
nodesArray[20].connect(nodesArray[35]);
nodesArray[20].connect(nodesArray[37]);
nodesArray[20].connect(nodesArray[30]);

//node 3F
nodesArray[21].connect(nodesArray[27]);
nodesArray[21].connect(nodesArray[36]);
nodesArray[21].connect(nodesArray[38]);
nodesArray[21].connect(nodesArray[31]);

//node 3G
nodesArray[22].connect(nodesArray[28]);
nodesArray[22].connect(nodesArray[37]);
nodesArray[22].connect(nodesArray[39]);

//node 3H
nodesArray[23].connect(nodesArray[29]);
nodesArray[23].connect(nodesArray[38]);

//node 4A
nodesArray[24].connect(nodesArray[34]);
nodesArray[24].connect(nodesArray[41]);

//node 4B
nodesArray[25].connect(nodesArray[35]);
nodesArray[25].connect(nodesArray[40]);
nodesArray[25].connect(nodesArray[42]);

//node 4C
nodesArray[26].connect(nodesArray[32]);
nodesArray[26].connect(nodesArray[36]);
nodesArray[26].connect(nodesArray[41]);
nodesArray[26].connect(nodesArray[43]);

//node 4D
nodesArray[27].connect(nodesArray[33]);
nodesArray[27].connect(nodesArray[37]);
nodesArray[27].connect(nodesArray[42]);
nodesArray[27].connect(nodesArray[44]);

//node 4E
nodesArray[28].connect(nodesArray[34]);
nodesArray[28].connect(nodesArray[38]);
nodesArray[28].connect(nodesArray[43]);
nodesArray[28].connect(nodesArray[45]);

//node 4F
nodesArray[29].connect(nodesArray[35]);
nodesArray[29].connect(nodesArray[39]);
nodesArray[29].connect(nodesArray[44]);
nodesArray[29].connect(nodesArray[46]);

//node 4G
nodesArray[30].connect(nodesArray[36]);
nodesArray[30].connect(nodesArray[45]);
nodesArray[30].connect(nodesArray[47]);

//node 4H
nodesArray[31].connect(nodesArray[37]);
nodesArray[31].connect(nodesArray[46]);

//node 5A
nodesArray[32].connect(nodesArray[42]);
nodesArray[32].connect(nodesArray[49]);

//node 5B
nodesArray[33].connect(nodesArray[48]);
nodesArray[33].connect(nodesArray[50]);
nodesArray[33].connect(nodesArray[43]);

//node 5C
nodesArray[34].connect(nodesArray[40]);
nodesArray[34].connect(nodesArray[49]);
nodesArray[34].connect(nodesArray[51]);
nodesArray[34].connect(nodesArray[44]);

//node 5D
nodesArray[35].connect(nodesArray[41]);
nodesArray[35].connect(nodesArray[50]);
nodesArray[35].connect(nodesArray[52]);
nodesArray[35].connect(nodesArray[45]);

//node 5E
nodesArray[36].connect(nodesArray[42]);
nodesArray[36].connect(nodesArray[51]);
nodesArray[36].connect(nodesArray[53]);
nodesArray[36].connect(nodesArray[46]);

//node 5F
nodesArray[37].connect(nodesArray[43]);
nodesArray[37].connect(nodesArray[52]);
nodesArray[37].connect(nodesArray[54]);
nodesArray[37].connect(nodesArray[47]);

//node 5G
nodesArray[38].connect(nodesArray[44]);
nodesArray[38].connect(nodesArray[53]);
nodesArray[38].connect(nodesArray[55]);

//node 5H
nodesArray[39].connect(nodesArray[45]);
nodesArray[39].connect(nodesArray[54]);

//node 6A
nodesArray[40].connect(nodesArray[50]);
nodesArray[40].connect(nodesArray[57]);

//node 6B
nodesArray[41].connect(nodesArray[56]);
nodesArray[41].connect(nodesArray[58]);
nodesArray[41].connect(nodesArray[51]);

//node 6C
nodesArray[42].connect(nodesArray[48]);
nodesArray[42].connect(nodesArray[57]);
nodesArray[42].connect(nodesArray[59]);
nodesArray[42].connect(nodesArray[52]);

//node 6D
nodesArray[43].connect(nodesArray[49]);
nodesArray[43].connect(nodesArray[58]);
nodesArray[43].connect(nodesArray[60]);
nodesArray[43].connect(nodesArray[53]);

//node 6E
nodesArray[44].connect(nodesArray[50]);
nodesArray[44].connect(nodesArray[59]);
nodesArray[44].connect(nodesArray[61]);
nodesArray[44].connect(nodesArray[54]);

//node 6F
nodesArray[45].connect(nodesArray[51]);
nodesArray[45].connect(nodesArray[60]);
nodesArray[45].connect(nodesArray[62]);
nodesArray[45].connect(nodesArray[55]);

//node 6G
nodesArray[46].connect(nodesArray[52]);
nodesArray[46].connect(nodesArray[61]);
nodesArray[46].connect(nodesArray[63]);

//node 6H
nodesArray[47].connect(nodesArray[53]);
nodesArray[47].connect(nodesArray[62]);

//node 7A
nodesArray[48].connect(nodesArray[58]);

//node 7B
nodesArray[49].connect(nodesArray[59]);

//node 7C
nodesArray[50].connect(nodesArray[56]);
nodesArray[50].connect(nodesArray[60]);

//node 7D
nodesArray[51].connect(nodesArray[57]);
nodesArray[51].connect(nodesArray[61]);

//node 7E
nodesArray[52].connect(nodesArray[58]);
nodesArray[52].connect(nodesArray[62]);

//node 7F
nodesArray[53].connect(nodesArray[59]);
nodesArray[53].connect(nodesArray[63]);

//node 7G
nodesArray[54].connect(nodesArray[60]);

//node 7H
nodesArray[55].connect(nodesArray[61]);
