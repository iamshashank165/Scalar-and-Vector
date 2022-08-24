function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZoZH17dULt":
        Script1();
        break;
      case "6KI8hX8mxjZ":
        Script2();
        break;
      case "5c9FSQiidkp":
        Script3();
        break;
      case "5tlHyJ2lmRa":
        Script4();
        break;
      case "5d7Tjcp7P2v":
        Script5();
        break;
      case "5ivs0E2eD6O":
        Script6();
        break;
      case "6SLbFPoAuBk":
        Script7();
        break;
      case "6Gf4vfLMeev":
        Script8();
        break;
      case "5exPq5a86Gm":
        Script9();
        break;
      case "6o3TudPmJw3":
        Script10();
        break;
      case "6KZ7zN0a57S":
        Script11();
        break;
      case "6Tl1dtIH278":
        Script12();
        break;
      case "6ceQVQOAkcm":
        Script13();
        break;
      case "5u2PmHP5X4r":
        Script14();
        break;
      case "5pUbUOYejKb":
        Script15();
        break;
      case "5eUZQXLiTJF":
        Script16();
        break;
      case "6m8HxW7jPFE":
        Script17();
        break;
      case "5pQAjsTAICD":
        Script18();
        break;
      case "5gcVsS8mkjO":
        Script19();
        break;
      case "65QaH1k7q7O":
        Script20();
        break;
      case "6SuJzEFGUKV":
        Script21();
        break;
      case "6AtY1pFc03n":
        Script22();
        break;
      case "6VflODJ7zF2":
        Script23();
        break;
      case "6jEnP5gZ6Po":
        Script24();
        break;
      case "6S70mmrIO5A":
        Script25();
        break;
      case "6ZqR5rDj1JL":
        Script26();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script2()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script3()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script4()
{
  var player = GetPlayer();
var mainChar = "d";
var nameFill = player.GetVar("namefill");
var tries = player.GetVar("tries");
if (nameFill.length < 5 && tries > 0) {
    var charactersUsed = nameFill.split("");
    if (charactersUsed.includes(mainChar)) {
        return;
    }

    charactersUsed.push(mainChar);

    var finalWord = "speed";
    var finalCharArr = finalWord.split("");
    var newCharArr = Array(5);
    for (var i = 0; i < finalCharArr.length; i++) {
        for (let character of charactersUsed) {
            if (finalCharArr[i] == character) {
                newCharArr[i] = character
            }
        }
    }

    var finalNameFill = newCharArr.join("")
    player.SetVar("namefill", finalNameFill);

    if (finalNameFill == finalWord) {
        player.SetVar("ScoreQ", tries * 2);
    }
}
}

function Script5()
{
  var player = GetPlayer();
var mainChar = "e";
var nameFill = player.GetVar("namefill");
var tries = player.GetVar("tries");
if (nameFill.length < 5 && tries > 0) {
    var charactersUsed = nameFill.split("");
    if (charactersUsed.includes(mainChar)) {
        return;
    }

    charactersUsed.push(mainChar);

    var finalWord = "speed";
    var finalCharArr = finalWord.split("");
    var newCharArr = Array(5);
    for (var i = 0; i < finalCharArr.length; i++) {
        for (let character of charactersUsed) {
            if (finalCharArr[i] == character) {
                newCharArr[i] = character
            }
        }
    }

    var finalNameFill = newCharArr.join("")
    player.SetVar("namefill", finalNameFill);

    if (finalNameFill == finalWord) {
        player.SetVar("ScoreQ", tries * 2);
    }
}
}

function Script6()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script7()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script8()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script9()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script10()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script11()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script12()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script13()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script14()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script15()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script16()
{
  var player = GetPlayer();
var mainChar = "p";
var nameFill = player.GetVar("namefill");
var tries = player.GetVar("tries");
if (nameFill.length < 5 && tries > 0) {
    var charactersUsed = nameFill.split("");
    if (charactersUsed.includes(mainChar)) {
        return;
    }

    charactersUsed.push(mainChar);

    var finalWord = "speed";
    var finalCharArr = finalWord.split("");
    var newCharArr = Array(5);
    for (var i = 0; i < finalCharArr.length; i++) {
        for (let character of charactersUsed) {
            if (finalCharArr[i] == character) {
                newCharArr[i] = character
            }
        }
    }

    var finalNameFill = newCharArr.join("")
    player.SetVar("namefill", finalNameFill);

    if (finalNameFill == finalWord) {
        player.SetVar("ScoreQ", tries * 2);
    }
}
}

function Script17()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script18()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script19()
{
  var player = GetPlayer();
var mainChar = "s";
var nameFill = player.GetVar("namefill");
var tries = player.GetVar("tries");
if (nameFill.length < 5 && tries > 0) {
    var charactersUsed = nameFill.split("");
    if (charactersUsed.includes(mainChar)) {
        return;
    }

    charactersUsed.push(mainChar);

    var finalWord = "speed";
    var finalCharArr = finalWord.split("");
    var newCharArr = Array(5);
    for (var i = 0; i < finalCharArr.length; i++) {
        for (let character of charactersUsed) {
            if (finalCharArr[i] == character) {
                newCharArr[i] = character
            }
        }
    }

    var finalNameFill = newCharArr.join("")
    player.SetVar("namefill", finalNameFill);

    if (finalNameFill == finalWord) {
        player.SetVar("ScoreQ", tries * 2);
    }
}
}

function Script20()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script21()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script22()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script23()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script24()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script25()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

function Script26()
{
  var player = GetPlayer();
var tries = player.GetVar("tries");
if (tries>0) {
player.SetVar("tries", tries-1);
}

}

