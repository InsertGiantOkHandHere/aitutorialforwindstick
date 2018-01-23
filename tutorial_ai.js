var top1 = 0
var top1name = ""
var id1 = 0
var top1bonus = 0
var top2 = 0
var top2name = ""
var id2 = 0
var top2bonus = 0
var top3 = 0
var top3name = ""
var id3 = 0
var top3bonus = 0 //all these variables are here just to make your life easier, don't send these vars to me when sending your code
//change these variable names according to what you want your ai to be called (This bot's name is ai_easy if ya can't tell)
var ai_easypoints = 0
var ai_easypps = 1
var ai_easyenergy = 0
var ai_easymaxenergy = 30
var ai_easyoneppscost = 250 //don't change this outside of the variable names
var ai_easyscore = 0 //don't change this outside of the variable names
var ai_easybuypps = 0 //don't change this outside of the variable names
var ai_easybuyppsamount = 0 //don't change this outside of the variable names
var ai_easychecktime = 15000 //how long it takes before it does the function easyaicheck
var ai_easyname = "pls (ai_easy)" //name that pops up on the leaderboard (If they can manage to make it to there)
var ai_easyisonbreak = false //saying whether the bot is in "break mode" or not
var ai_easyactiveness = 40  //'activeness' the ai has, which decreases as time goes on till it takes a break
function aipoips() {
    ai_easypoints += ai_easypps //don't change this outside of the variable names
    //resets every 1 second
    //you can reset counter here
    setTimeout(aipoips, 1000) //don't change this outside of the function names
    //LEADERBOARD SHIT (don't change this outside of the variable names)
    //Don't change these variables: top1, id1 and all others like those for leaderboard
    //Try and change the variable -1 everytime you see it to another negative number
    ai_easyscore = Math.round(ai_easypoints) + (ai_easypps * 3750 * 3 + ai_easypps * ai_easypps) //Do NOT change this formula, this is to track score, nothing else
    if(ai_easyscore > top1){
        if(id1 != -1){
            top1bonus = 0
        }
        else{}
        top1 = ai_easyscore
        top1name = ai_easyname
        id1 = -1
    }
    else{
    if(ai_easyscore > top2 && -1 != id1){
            if(id2 != -1){
                top2bonus = 0
            }
            else{}
            top2 = ai_easyscore
            top2name = ai_easyname
            id2 = -1
    }
    else{
        if(ai_easyscore > top3 && -1 != id1 && -1 != id2){
            if(ai_easyscore > top3){
                if(id3 != -1){
                    top3bonus = 0
                }
                else{}
                top3 = ai_easyscore
                top3name = ai_easyname
                id3 = -1
            }
        else{
        }
    }
}
    }
}
function easyaicheck() { //this is the most important, how the ai acts (very limited for now) feel free to change anything, but I might ask you to change some stuff
    var ai_easybuypps = Math.floor(Math.random() * 10 + 1)  //making the variable ai_easybuypps with a random number between 1 and 11
    console.log(`${ai_easybuypps}`)
    var breaktime = Math.floor(Math.random() * ai_easyactiveness + 1) //has a chance that basically means, the less activeness the bot has, the higher the chance it will go on break
    if(breaktime == 1){//only thing to not change (unless you make an alternative for it)
        console.log('Easy ai has just went on break!') //tells me through console that the bot has turned into break mode
        ai_easyactiveness = 40 //sets the activeness back to it's original variable
        ai_easychecktime = 1800000 //turns the timer for this function really high (30 minutes in this case), simulating the bot taking a break from the game
    }else{if(ai_easyactiveness > 1){ //if the activeness of the bot is more than 1, decrease it's activeness by 1, try not to change this too much if you do
        ai_easyactiveness--; //decreasing by 1
    }
    if(ai_easypoints >= ai_easyoneppscost){ //if the ai has enough points to buy pps
    if(ai_easybuypps == 3 || ai_easybuypps == 8){ //remember the variable that is at the top of this function? if it were to equal one of these numbers, it would continue to the next steps
        var ai_easybuyppsamount = Math.floor(Math.random() * 3 +1) //picks a random number of pps to buy, between 1 and 3
        if(ai_easypoints >= ai_easyoneppscost && ai_easybuyppsamount > 0){ //if the ai has enough points to buy pps AND the variable set above, is greater than 0
            easyailog2 = easyailog3 //setting all the logs (don't change this outside of the variable names)
            easyailog1 = easyailog2
            easyailog1 = `Easy ai has bought ${ai_easybuyppsamount} pps!` //what it says the bot did, feel free to change this, but have it still be informative enough to understand pls xd
            checkbuypps() //do the function we made (below)
        }
        function checkbuypps (){ //defining the function 'checkbuypps'
    if(ai_easypoints >= ai_easyoneppscost && ai_easybuyppsamount > 0){
    ai_easypps++; //increases pps by 1
    ai_easybuyppsamount--; //decreases the amount of pps the ai wants to buy by 1
    ai_easypoints -= ai_easyoneppscost //subtracts points from the cost
    if(ai_easypoints >= ai_easyoneppscost && ai_easybuyppsamount > 0){//repeat if all requirements are still met
        checkbuypps()
    }
    ai_easyoneppscost *= 1.05 //increases cost of pps
}
    ai_easyoneppscost = Math.floor(ai_easyoneppscost) //rounding the cost to the lowest whole number
    }
}
}
}
var subtracttimer = Math.floor(Math.random() * -500)
var addtimer = Math.floor(Math.random() * 500)
if(ai_easychecktime > 3000 && ai_easychecktime < 75000){
    ai_easychecktime += subtracttimer + addtimer //changes the amount of time of every loop slightly
}
console.log(`Easy ai's stats are ${ai_easypoints} points and ${ai_easypps} pps\npps costs ${ai_easyoneppscost} for easy ai`)//console logs stats, good for debugging and seeing how your ai acts
setTimeout(easyaicheck, ai_easychecktime) //repeat timer
}
setTimeout(aipoips, 1000)
setTimeout(easyaicheck, ai_easychecktime) //starting the timer with the amount of time being how much the variable ai_easychecktime is in milliseconds
//after making your ai, please send it to me through DMs in discord (Not telling my discord cause you can be in the windstick discord and easily tell who to send it to)
//discord server for the bot is: https://discord.gg/Uhvws5M
//EXTRA NOTES: If you play the bot, you could probably easily make your ai do more than just buy pps, such as the chest, or ws!click command
//rubies are made every 15 mins
//here is the full score formula so far - userData.submitscore = Math.round(userData.points + (userData.rubies * 3500) + (userData.pps * 3750 * 3 + userData.pps * userData.pps) + (userData.prestigebonus * 10000) + (userData.prestiges * 100000))
