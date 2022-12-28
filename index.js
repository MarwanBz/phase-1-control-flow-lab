function scuberGreetingForFeet(dic) {
  // Write your code here!
  if (dic <= 400) {
    return "This one is on me!";
  } else if (dic >= 400 < 1999) {
    return "That will be twenty bucks.";
  }else if(dic > 2000) {
    return "I will gladly take your thirty bucks.";
  }else if (dic > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  // const city = "NYC"
  return city == "NYC" ? "Ok, sounds good."  : "No go." ;
  
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  const gen = "generous";
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case !"generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}
