---
id: kq6SISgrdEnbkAt3yqEP1
title: examples Simplist Example
desc: ''
updated: 1639688437748
created: 1639688436668
---

``` cypher
CREATE (ee:Person {name: 'Emil', from: 'Sweden', kloutScore: 99})
```

``` cypher
MATCH (ee:Person) WHERE ee.name = 'Emil' RETURN ee;
```

``` cypher
MATCH (ee:Person) WHERE ee.name = 'Emil'
CREATE (js:Person { name: 'Johan', from: 'Sweden', learn: 'surfing' }),
(ir:Person { name: 'Ian', from: 'England', title: 'author' }),
(rvb:Person { name: 'Rik', from: 'Belgium', pet: 'Orval' }),
(ally:Person { name: 'Allison', from: 'California', hobby: 'surfing' }),
(ee)-[:KNOWS {since: 2001}]->(js),(ee)-[:KNOWS {rating: 5}]->(ir),
(js)-[:KNOWS]->(ir),(js)-[:KNOWS]->(rvb),
(ir)-[:KNOWS]->(js),(ir)-[:KNOWS]->(ally),
(rvb)-[:KNOWS]->(ally)
```

``` cypher
MATCH (ee:Person)-[:KNOWS]-(friends)
WHERE ee.name = 'Emil' RETURN ee, friends
```
