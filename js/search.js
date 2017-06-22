var searchLinks = {
    amazon: "http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=",
    chan: "http://boards.4chan.org/&/catalog#s=",
    duckduckgo: "https://duckduckgo.com/?q=",
    github: "https://github.com/search?utf8=✓&q=",
    reddit: "https://www.reddit.com/search?q=",
    stackoverflow: "https://stackoverflow.com/search?q=",
    wikipedia: "https://en.wikipedia.org/w/index.php?search=",
    youtube: "https://www.youtube.com/results?search_query="
};
 
function search(query){
    var queryString = query.split(" ",query.length+1);
    var param = queryString[0];
    queryString = queryString.slice(1);

    switch(param){ // All possible search cases so far.
        case "a":
            window.location.href = searchLinks.amazon + queryString.join("+");
            break;
        case "g":
            window.location.href = searchLinks.github + queryString.join("+");
            break;
        case "r":
            window.location.href = searchLinks.reddit + queryString.join("+");
            break;
        case "s":
            window.location.href = searchLinks.stackoverflow + queryString.join("+");
            break;
        case "y":
            window.location.href = searchLinks.youtube + queryString.join("+");
            break;
        case "w":
            window.location.href = searchLinks.wikipedia + queryString.join("%20");
            break;
        case "4a":
            window.location.href = searchLinks.chan.replace('&', 'a') + queryString.join("+");
            break;
        case "4ck":
            window.location.href = searchLinks.chan.replace('&', 'ck') + queryString.join("+");
            break;
        case "4g":
            window.location.href = searchLinks.chan.replace('&', 'g') + queryString.join("+");
            break;
        case "4w":
            window.location.href = searchLinks.chan.replace('&', 'w') + queryString.join("+");
            break;
        case "4wg":
            window.location.href = searchLinks.chan.replace('&', 'wg') + queryString.join("+");
            break;
        default:
            window.location.href = searchLinks.duckduckgo + param + " " + queryString.join("+"); // Hacky, but it works :D
    }
}

window.onload = function(){
    var searchInput = document.getElementById("searchbox");
    if(searchInput){
        searchInput.addEventListener("keypress", function(key){
            if(key.keyCode === 13) // If enter button pressed (I'm assuming)
                search(this.value);
        });
    }
};