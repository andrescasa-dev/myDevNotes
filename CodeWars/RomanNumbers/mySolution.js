function solution(number){
  romanEquivalent = '';
  const romanDictionary = {
    1000: "M", 
    900: "CM", 
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  }
  const romNumbers = Object.keys(romanDictionary).map(number => Number(number)).reverse();
  while(number > 0){
    const equivalent = romNumbers.find(romNumber => number >= romNumber);
    romanEquivalent += romanDictionary[equivalent];
    number -= equivalent
  }
  return romanEquivalent;
}