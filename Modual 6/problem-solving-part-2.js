const friends = [
  "MD Emon Biswas",
  "Rifat Ahmed ",
  "Foisal mahmud Zihak",
  "Abdullah al Madus",
];

const checkfriend = (array) => {
  let biggestName = array[0];

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element.length > biggestName.length) 
        biggestName = element;
  }

  return biggestName;
};

let biggestFriend = checkfriend(friends);
console.log(biggestFriend);
