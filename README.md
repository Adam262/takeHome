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
+ install Node.js
+ on command line: npm install
+ on command line: node findPairs.js Artist_lists_small.txt 50

To view the front-end code, just open the .html file in the browser.

**Optimization** 

I recognize that this code runs in O(n^2) space. My main optimization is deleting from memory any artists that appear in fewer than 50 user favorite lists. This step reduces the hash table from 11,290 artists (who appear on at least 1 user list) to 124 artists.  Although this optimization may not make much difference on a set of 1000 user lists, it could impact a much larger set of users and artists. 

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

And all artists that appear together on 50 or more lists:
[ [ 'Lady Gaga', 'The Beatles' ],
  [ 'Lady Gaga', 'Ke$ha' ],
  [ 'Lady Gaga', 'Muse' ],
  [ 'Lady Gaga', 'Rihanna' ],
  [ 'Lady Gaga', 'Coldplay' ],
  [ 'Lady Gaga', 'Paramore' ],
  [ 'Lady Gaga', 'Britney Spears' ],
  [ 'Lady Gaga', 'Lily Allen' ],
  [ 'Radiohead', 'Red Hot Chili Peppers' ],
  [ 'Radiohead', 'The Beatles' ],
  [ 'Radiohead', 'Oasis' ],
  [ 'Radiohead', 'The Cure' ],
  [ 'Radiohead', 'The Smiths' ],
  [ 'Radiohead', 'Muse' ],
  [ 'Radiohead', 'Placebo' ],
  [ 'Radiohead', 'Foo Fighters' ],
  [ 'Radiohead', 'Franz Ferdinand' ],
  [ 'Radiohead', 'Nirvana' ],
  [ 'Radiohead', 'Pink Floyd' ],
  [ 'Radiohead', 'Kings of Leon' ],
  [ 'Radiohead', 'Pearl Jam' ],
  [ 'Radiohead', 'Arctic Monkeys' ],
  [ 'Radiohead', 'The Strokes' ],
  [ 'Radiohead', 'Coldplay' ],
  [ 'Radiohead', 'The Killers' ],
  [ 'Radiohead', 'David Bowie' ],
  [ 'Radiohead', 'Death Cab for Cutie' ],
  [ 'Red Hot Chili Peppers', 'The Beatles' ],
  [ 'Red Hot Chili Peppers', 'Muse' ],
  [ 'Red Hot Chili Peppers', 'Foo Fighters' ],
  [ 'Red Hot Chili Peppers', 'Nirvana' ],
  [ 'Red Hot Chili Peppers', 'Coldplay' ],
  [ 'Red Hot Chili Peppers', 'The Killers' ],
  [ 'The Beatles', 'Oasis' ],
  [ 'The Beatles', 'The Smiths' ],
  [ 'The Beatles', 'Muse' ],
  [ 'The Beatles', 'Led Zeppelin' ],
  [ 'The Beatles', 'The Rolling Stones' ],
  [ 'The Beatles', 'Franz Ferdinand' ],
  [ 'The Beatles', 'Nirvana' ],
  [ 'The Beatles', 'Pink Floyd' ],
  [ 'The Beatles', 'Arctic Monkeys' ],
  [ 'The Beatles', 'The Strokes' ],
  [ 'The Beatles', 'Coldplay' ],
  [ 'The Beatles', 'The Killers' ],
  [ 'The Beatles', 'MGMT' ],
  [ 'The Beatles', 'David Bowie' ],
  [ 'The Beatles', 'Death Cab for Cutie' ],
  [ 'The Beatles', 'Queen' ],
  [ 'The Kooks', 'Muse' ],
  [ 'The Kooks', 'Arctic Monkeys' ],
  [ 'Oasis', 'Muse' ],
  [ 'Oasis', 'Nirvana' ],
  [ 'Oasis', 'Arctic Monkeys' ],
  [ 'Oasis', 'Coldplay' ],
  [ 'Oasis', 'The Killers' ],
  [ 'The Cure', 'The Smiths' ],
  [ 'The Cure', 'Muse' ],
  [ '30 Seconds to Mars', 'Muse' ],
  [ 'Incubus', 'Muse' ],
  [ 'Muse', 'Placebo' ],
  [ 'Muse', 'Linkin Park' ],
  [ 'Muse', 'Foo Fighters' ],
  [ 'Muse', 'Franz Ferdinand' ],
  [ 'Muse', 'Nirvana' ],
  [ 'Muse', 'Pink Floyd' ],
  [ 'Muse', 'Kings of Leon' ],
  [ 'Muse', 'Arctic Monkeys' ],
  [ 'Muse', 'Metallica' ],
  [ 'Muse', 'Green Day' ],
  [ 'Muse', 'The Strokes' ],
  [ 'Muse', 'Coldplay' ],
  [ 'Muse', 'The Killers' ],
  [ 'Muse', 'Paramore' ],
  [ 'Muse', 'Kasabian' ],
  [ 'Muse', 'MGMT' ],
  [ 'Muse', 'Death Cab for Cutie' ],
  [ 'Muse', 'System of a Down' ],
  [ 'Muse', 'Queen' ],
  [ 'Muse', 'Snow Patrol' ],
  [ 'Placebo', 'Nirvana' ],
  [ 'Placebo', 'Arctic Monkeys' ],
  [ 'Placebo', 'Coldplay' ],
  [ 'Placebo', 'The Killers' ],
  [ 'Foo Fighters', 'Nirvana' ],
  [ 'Iron Maiden', 'Metallica' ],
  [ 'Led Zeppelin', 'Pink Floyd' ],
  [ 'Franz Ferdinand', 'Arctic Monkeys' ],
  [ 'Nirvana', 'Pearl Jam' ],
  [ 'Nirvana', 'Arctic Monkeys' ],
  [ 'Nirvana', 'Coldplay' ],
  [ 'Kings of Leon', 'Arctic Monkeys' ],
  [ 'Kings of Leon', 'Coldplay' ],
  [ 'Kings of Leon', 'The Killers' ],
  [ 'Arctic Monkeys', 'The Strokes' ],
  [ 'Arctic Monkeys', 'Coldplay' ],
  [ 'Arctic Monkeys', 'The Killers' ],
  [ 'Arctic Monkeys', 'MGMT' ],
  [ 'Metallica', 'System of a Down' ],
  [ 'The Strokes', 'The Killers' ],
  [ 'Coldplay', 'The Killers' ] ]

