*Overview*
This repo has my answers to a take-home coding challenge, for a developer interview. The back-end challenge is to analyze a text file representing lists of up to 50 favorite artists for 1000 Last.FM users. Return all pairs of artists who appear together on at least 50 user lists. 

*Technologies Used*
**Backend** 
+ Node.js
+ Async.js
+ Underscore.js

**Frontend**
+ YUI
+ CSS3 animation

*Get Started*
To test the back-end code, do the following:

+ clone repo
+ install Node.js
+ on command line: npm install
+ on command line: node findPairs.js Artist_lists_small.txt 50


*Optimization* 
I recognize that this code runs in O(n^2) space. My main optimization is deleting from memory any artists that appear in fewer than 50 user favorite lists. This step reduces the hash table from 11,290 artists (who appear on at least 1 user list) to 124 artists.  This optimization may still not make much difference on a set of 1000 user lists. But it could impact a much larger set of users and artists. 

*Challenges*
+ I wrote a script that parses a text list into a hash table of musician keys, each with a value array.  The value array holds Ids (represented as line numbers) of the users who selected the musician as a favorite. This step works well. 
+ But the final step for finding pairs got very complicated. At best, it runs expensively.  For now, I wrote a script that returns one set of 50 matches per artists who have such matches, but not all sets of 50 matches. Here is that [script](http://repl.it/1rx/1); 
+ The next step is to integrate a revised version of above REPL script into my code. The steps are:
    + creates a global array to be returned
    + produces an array of the hash table's keys
    + creates a temp array for each key
    + iterates over the keys
    + for each key, iterates over the hash table's value array of user Ids
    + in a waterfall, loops over the value array of all other user Ids
    + for each key, stashes the name of any artist who shares a user Id with key
    + stashes matching artist name in temp array
    + iterates over temp array for any artist who appears at least 50 times
    + pushes into global array a two element array, containing key plus artist who appears at least 50 times
    + returns global array
+ As a separate exercise, I wrote a similar script that makes a hash Table showing the artists who appear in the greatest number of user lists. Muse is the winner, at 294 lists. 
