**Overview**

This repo has my answers to a take-home coding challenge, for a developer interview. The back-end challenge is to analyze a text file representing lists of up to 50 favorite artists for each of 1000 Last.FM users. Return all pairs of artists who appear together on at least 50 user lists. 

**Technologies Used**

*Backend*
+ Node.js
+ Async.js
+ Underscore.js

*Frontend*
+ YUI
+ CSS3 animation

**Get Started**

To test the back-end code, do the following:

+ clone repo
+ install [Node.js](https://gist.github.com/isaacs/579814)
+ on command line: npm install
+ on command line: node findPairs Artist_lists_small.txt 50

To test the front-end code, just open the .html file in the browser.

**Optimization** 

I recognize that this code does not scale - there are nested loops and subsets, so run time is likely beteeen O (n ^ 2) and O(2 ^ n). My main optimization is deleting from memory any artists that appear in fewer than 50 user favorite lists. This step reduces the hash table from 11,290 artists (who appear on at least 1 user list) to 124 artists.  Although this optimization may not make much difference on a set of 1000 user lists, it could impact a much larger set of users and artists. 

**Fun Facts**

Below are the top artists by individual appearance on user favorite lists:

Artist | Count
-------| ------
Muse  | 294
The Beatles | 260
Radiohead | 251
Coldplay | 207
Lady Gaga | 191
Nirvana | 190
Arctic Monkeys | 182
Paramore  | 166
The Killers | 164
Placebo | 151

All artists that appear together on 100 or more lists:

Pair | Count
-------| ------
Radiohead, Muse | 128
Radiohead, The Beatles  | 113
Muse, Arctic Monkeys | 113
Muse, Coldplay | 113
The Beatles, Muse | 107
Muse, The Killers | 100



