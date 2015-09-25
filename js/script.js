// Object sorting algorithm
var sortObj = function (obj, type, caseSensitive) {
    var temp_array = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (!caseSensitive) {
                key = (key['toLowerCase'] ? key.toLowerCase() : key);
            }
            temp_array.push(key);
        }
    }
    if (typeof type === 'function') {
        temp_array.sort(type);
    } else if (type === 'value') {
        temp_array.sort(function (a, b) {
            var x = obj[a];
            var y = obj[b];
            if (!caseSensitive) {
                x = (x['toLowerCase'] ? x.toLowerCase() : x);
                y = (y['toLowerCase'] ? y.toLowerCase() : y);
            }
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    } else {
        temp_array.sort();
    }
    var temp_obj = {};
    for (var i = 0; i < temp_array.length; i++) {
        temp_obj[temp_array[i]] = obj[temp_array[i]];
    }
    return temp_obj;
};


// Team info
// @formatter:off
var team = {
    fnatic: { id: "1", team: "Fnatic", player: ["Olofmeister", "JW", "Pronax", "Krimz", "Flusha"], country: "Sweden", img: "images/fnatic logo dark.jpg"},
    titan: {id: "7", team: "Titan", player: ["Ex6Tenz", "shox", "RpK", "SmithZz", "ScreaM"], country: "France", img: "images/titan logo dark.jpg"},
    nip: {id: "5", team: "Ninjas in Pyjamas", player: ["GeT_RiGhT", "f0rest", "allu", "friberg", "XizT"], country: "Sweden"},
    nv: {id: "2", team: "EnVy Us", player: ["kennyS", "apeX", "NBK-", "Happy", "kioShiMa"], country: "France"},
    vp: {id: "4", team: "Virtus Pro", player: ["PashaBiceps", "Taz", "byali", "Snax", "Xx"], country: "Poland"},
    tsm: {id: "3", team: "Team SoloMid", player: ["Dupreeh", "cajun b", "device", "karrigan", "Xyp9x"], country: "Denmark"},
    sk: {id: "10", team: "SK Gaming", player: ["AcilioN", "Friis", "SandeN", "K0nfig", "CadiaN"], country: "Denmark"},
    penta: {id: "15", team: "PENTA", player: ["kRYSTAL", "strux1", "tabseN", "tahsiN", "Spiidi"], country: "Germany"},
    c9: {id: "8", team: "Cloud9", player: ["n0thing", "seangares", "shroud", "Skadoodle", "freakazoid"], country: "USA", img: "images/c9 logo dark.jpg"},
    navi: {id: "9", team: "Natus Vincere", player: ["seized", "Edward", "Zeus", "flamie", "GuardiaN"], country: "Russia"},
    efrag: {id: "14", team: "E-frag.net", player: ["spyleadeR", "bubble", "nkl", "v1c7oR", "dream3r"], country: "Italy"},
    roccat: {id: "18", team: "ROCCAT", player: ["stonde", "suNny", "juho", "j0elZ", "xartE", "naSu"], country: "Finland"},
    g2: {id: "20", team: "Gamers2", player: ["Maikelele", "xXx", "fox", "dennis", "rain"], country: "France, Portugal & Sweden"},
    luminosity: {id: "11", team: "Luminosity", player: ["coldzera", "steel", "FalleN", "fer", "boltz"], country: "Brazil"},
    f3: {id: "16", team: "FlipSid3", player: ["WorldEdit", "B1ad3", "markeloff", "bondik", "DavCost"], country: "Ukraine"},
    hr: {id: "17", team: "HellRaisers", player: ["ANGE1", "Dosia", "kucher", "AdreN", "MOU", "s1mple"], country: "Russia & Ukraine"},
    cph: {id: "14", team: "Copenhagen Wolves", player: ["RUBINO", "jkaem", "zEVES", "twist", "zende"], country: "Denmark"},
    dg: {id: "21", team: "Dobry&Gaming", player: ["Loord", "innocent", "minise", "szpero", "MICHU"], country: "Poland"}
    };
// @formatter:on

Object.keys(team).sort().forEach(function (a) {
    console.log(team[a], team[a].id, team[a].team, team[a].player);
});

// Simple sort from Team info list
/*console.log("**Simple team sort**");
sortObj(team);*/


// Sorting Teams
/*
var teamList = [];
for (var obj1 in team) {
    var c = 0;
    if (team.hasOwnProperty(obj1)) {
        teamList.push(team[obj1]);
        c++;
    }
}
teamList.sort();
console.log("**Team List sorted**");
console.log(teamList);
console.log("");
*/


// Sorting players
/*
console.log("**Sorting players**");
for (var obj2 in team) {
    if (team.hasOwnProperty(obj2)) {
        console.log(team[obj2], team[obj2].player);
        Object.keys(team).forEach(function (key) {
            team[key].player.sort();
        });
        console.log(team[obj2], team[obj2].player);
    }
}
console.log(team);
console.log("**Players sorted**");
*/


// Dropdown functionality
$(function () {
    var $dropdown = $("ul.dropdown li");

    $dropdown.hover(function () {
            $(this).addClass("hover");
            $('ul:first', this).css('visibility', 'visible');
        },
        function () {
            $(this).removeClass("hover");
            $('ul:first', this).css('visibility', 'hidden');
        });
    $($dropdown, "ul li:has(ul)").find("a:first").append(" &#8615; ");
});
$(function () {
    var $dropdownTwo = $("ul.sub_menu li");
    $dropdownTwo.hover(function () {
            $(this).addClass("hover");
            $('ul:first', this).css('visibility', 'visible');
        },

        function () {
            $(this).removeClass("hover");
            $('ul:first', this).css('visibility', 'hidden');

        });
    $($dropdownTwo, "ul li:has(ul)").find("a:first").append(" &raquo; ");
});

// Hover and expand picture
$(document).hover(function(){
    var $playersUL = $("ul.sub_menu ul.players li");
    $($playersUL).mouseover(function(){
        //$($playersIMG).animate({height:125,width:125},"fast");
        $("#pImg").effect("size", {to: { width: 125, height: 125 }}, 1000);
    });

    $($playersUL).mouseout(function(){
        $("#pImg").effect("size", {to: { width: 25, height: 25 }}, 1000);
    });
});

// Append alphabetically sorted teams to teams dropdown as list items
// Append alphabetically sorted players to specific team dropdown item as list items
$(function () {
    var $teamDropDown = $("li.teams ul.sub_menu");
    Object.keys(team).sort().forEach(function (a) {
        var $players = "<ul class=\"players\">";
        for (var i = 0; i < team[a].player.length; i++) {
            var $playerImg = "<img id =\"pImg\" src=images/" + team[a].player[i] + ".png />";
            $players += "<li><a id =\"player\" href=\"#\">" + $playerImg + team[a].player[i] + "</a></li>";
        }
        $players += "</ul>";
        var $teamImg = "<img src=\"" + team[a].img + "\" />";
        var $team = "<li><a href=asdf.html>"+ $teamImg + team[a].team + "</a>" + $players + "</li>";
        $($teamDropDown).append($team);
    });
});


// Append alphabet to players dropdown list as list items
$(function () {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var $playerDropDown = $("li.players ul.sub_menu");
    for (var i = 0; i < alphabet.length; i++) {
        var $letter = "<li><a href=\"#\">" + alphabet[i] + "</a></li>";
        $($playerDropDown).append($letter);
    }
});


// Append alphabetized players to appropriate team dropdown unordered list as a list item
/*$(function () {
    var $playerToAlphabet = $("li.players ul.sub_menu");
    $playerToAlphabet.append("<ul>");
    for (var obj in team) {
        if (team.hasOwnProperty(obj)) {
            Object.keys(team).forEach(function (key) {
                var $player = "<li><a href=\"#\">" + team[key].player + "</a></li>";
                $playerToAlphabet.append($player);
            });
        }
        $playerToAlphabet.append("</ul>");
    }
});*/














