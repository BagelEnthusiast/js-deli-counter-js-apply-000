var katzLine = [];

function takeANumber(katzDeliLine, name) {
  katzLine = katzDeliLine;
  katzLine.push(name);
  var position = katzDeliLine.length;
  
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katsDeliLine) {
  var katsLine = katsDeliLine;  

  if (katsLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
  var currentPerson = katsLine.shift();
  return `Currently serving ${currentPerson}.`
  }
}

function currentLine(katsDeliLine) {
 katzLine = katsDeliLine;
  var line = [];
  
  for (let i = 0; i < katzLine.length; i++) {
    line.push(` `+[i+1]+`. `  + katzLine[i])
  }
  if (katzLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
