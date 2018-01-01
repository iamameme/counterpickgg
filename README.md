## Counterpick.GG — Rune Builds for Every Matchup and More

Counterpick.GG started out from two simple ideas. It started out as a counterpicking site. Every time I'd look up "Maokai Counter" in google, I'd get a site with user votes. I don't know who these users are. They could be just as bad as me, voting up the wrong things!

<div align="center"><b>Where's the data?</b></div>

The second idea came from the fact that, I'm just not that good at the game. Every game I play, I go to probuilds.com, look at some of the pro builds, and ask myself, "Well, Darshan went this build on Aatrox and he built a first item Spirit Visage, but I'm against a Gankplank. Should I still do that? What do I do?"

So I started making this! It's been my pet project. A LOT of work has gone into this and, it's weird to be getting so close to release. Thanks for visiting, and read below to see the details.


<b>TLDR:</b> Click on a champion, click on an enemy champion, get the most popular builds in Diamond+ for that specific matchup based off of real game data.

<br/>
<div align="center"><b>THIS IS IN ALPHA. IM SORRY FOR IT LOOKING BAD AND NOT HAVING ALL THE FEATURES I WANT TO INCLUDE YET :( THANK YOU <3</b></div>

## Getting Started

  * Option 1: Just go to www.counterpick.gg. It's already uploaded and ready to go.
  * Option 2: Go to the installation guide down below to find out how to run it on your local machine.

## How it Works

It's all running on React and Postgres. I specifically tried to design it not too complicated, but at the same time, this as my first experience working in React. This was my project I used to learn it (and I adore it).

<b>How the data is compiled:</b>
* There is a group of js files in server. There is going to be a scheduler that runs them automatically, but I haven't finished that small piece yet.
* The first file, loadallplayers.js, gets all master and challenger player IDs from all regions
* Then, loadallaccountids.js load all of the account IDs of the players gotten before
* matchesscheduler.js then gets all of the match IDs from all of the players with account IDs
* Then, the meat of it is done in matchdatascheduler.js, which calls all the game IDs that haven't been added to the database yet, and adds entries based on the champion played, the enemy champion, the lane, their build, if they won, and more. It also adds any diamond players to the player tables if found.
* Finally, with all of the data nice and structured, addjsontotable.js precompile all of the winrates, builds, and more, so nothing is done at runtime. A single JSON file is generated for each champion, with it's winrate against every champion in every lane and compiles the best builds for each.

<b>How are the builds made?:</b>
* Using all of the data, it finds all of the runes, summoners, and items taken in a specific match. For example, for Aatrox vs Maokai, it gets all of the games that Aatrox won against Maokai, and gets all of the builds that they took.
* With those runes and the rest of the builds, it compiles the three most popular builds taken based off of the three most popular keystones taken.
* TLDR: Click on a champion, click on an enemy champion, get the most popular builds in Diamond+ for that specific matchup based off of data. Not votes. Not someone telling me what they think is best. Data.

<b>Margin of Error:</b>
* I have come to terms with the fact that the data is not infallible. For example, sometimes you get a rogue Soraka jungle game because the guy who got queued as jungle ended up switching to support. From what I've seen, these outliers don't seem to skew the data much, but there definitely still is more to be done to perfect it. I just need more time :D
* Also, data won't show unless there are at least 15 games of that specific matchup. I know that's low, and that number will definitely go up as more data is entered. Right now there are about ~500,000 games. I'm aiming for MILLIONS

## How to Install

Unfortunately, there is a bit of a setup, which was why I chose to host it myself, but if you're like me and still want to host it locally, lemme walk ya through. (I never know how much detail I need to go into, so I just try to go into a lot xD)

(I'm a little tired from working so much on this so I may have missed something. Sorry :( )


Dependencies:
* Node
* NPM
* Postgres


Steps:
* Step 1: Git clone the project
* Step 2: CD in and run 'npm install'
* Step 3: Run 'psql -f league.sql' to add the database
* Step 4: Run 'gunzip -c filename.gz | psql stevenbarsam' to import the data I've already compiled to get it running instantly
* Step 5: Run 'PGUSER=postgres   PGHOST=localhost   PGPASSWORD=postgres   PGDATABASE=stevenbarsam   PGPORT=5432   npm start'. Change it with your credentials.
* Step 6: It should work!

Some Errors That Happen:
* Node-sass and Ubuntu don't get along well, so, for some reason, you may have to individually install that package after running 'npm install'


## Not Important: The Art!

If you've noticed on the front page, there's some beautiful Ornn art done by a friend of mine named Sky. I commissioned her, and other local artists for little pieces for the page. Links to their pages will be on the images!

## About Me

  * I'm just a 21 year old nerd from good ol' Texas. I'm in school at UTD for Software Engineering, and I work at a cool little company called S5 Stratos as a Software Engineer there. Between school, work, and this, I don't sleep.
  * It's been a very, very, VERY long month. Finals, working on this 2-10 hours a day. But it feels great to finally be able to sit down and just enjoy it, and I really hope you enjoy it too. <3

## License

Copyright © 2017-present. I don't know what a license is to be honest. I just write code.
Made with ♥ by Steven Barsam (Don't go to stevenbarsam.com. I don't own the domain. My coworker does.)

