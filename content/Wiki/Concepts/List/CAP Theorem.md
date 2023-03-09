---
id: 87wHmOJ1SROCVDjSeNrvy
title: CAP Theorem
desc: ''
updated: 1643664880750
created: 1643664760578
---

* CAP Theorem
  * Consistency: Every read from the database gets the latest (and correct) piece of data or an error
  * Availability: Every request is received and a response is given -- without a guarantee that the data is the latest update
  * Partition Tolerance: The system continues to work regardless of losing network connectivity between nodes
You can only have Consistency and Partition Tolerance (CP) or Availability and Partition Tolerance (AP).

![](/assets/images/2022-01-31-16-34-39.png)

## Sources

* [Disambiguating ACID and CAP - VoltDB](https://www.voltdb.com/blog/2015/10/disambiguating-acid-cap/)