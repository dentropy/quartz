---
id: d7av3ZhVskYQW1XPfwJ0l
title: Data Warehouse
desc: ''
updated: 1644499023555
created: 1643818838162
---

## Definition

1. A data warehouse is a copy of transaction data specifically structured for query and analysis. - Kimball

2. A data warehouse is a subject-oriented, integrated, nonvolatile, and time-variant(gets updated) collection of data in support of management's decisions. - Inmon

3. A data warehouse is a system that retrieves and consolidates data periodically from the source systems into a dimensional or normalized data store. It usually keeps years of history and is queried for business intelligence or other analytical activities. It is typically updated in batches, not every time a transaction happens in the source system. - Rainard

![](/assets/images/2022-02-02-11-34-03.png)

## Characteristics of Data Warehouse

* Simple to uderstand
* Performant
* QUality Assured
* Handles new questions well
* Secure

## What Is A Data Warehouse? A Business Perspective
You are in charge of a retailer’s data infrastructure. Let’s look at some business activities.

Customers should be able to find goods & make orders
Inventory Staff should be able to stock, retrieve, and re-order goods
Delivery Staff should be able to pick up & deliver goods
HR should be able to assess the performance of sales staff
Marketing should be able to see the effect of different sales channels
Management should be able to monitor sales growth
Ask yourself: Can I build a database to support these activities? Are all of the above questions of the same nature?
Let's take a closer look at details that may affect your data infrastructure.

Retailer has a nation-wide presence → Scale?
Acquired smaller retailers, brick & mortar shops, online store → Single database? Complexity?
Has support call center & social media accounts → Tabular data?
Customers, Inventory Staff and Delivery staff expect the system to be fast & stable → Performance
HR, Marketing & Sales Reports want a lot information but have not decided yet on everything they need → Clear Requirements?
Ok, maybe one single relational database won’t suffice :)

Operational (Make it work!) vs Analytical Business Processes (What is going on)

Operational vs Analytical Business Processes
Operational Processes: Make it Work

Find goods & make orders (for customers)
Stock and find goods (for inventory staff)
Pick up & deliver goods (for delivery staff)
Analytical Processes: What is Going On?

Assess the performance of sales staff (for HR)
See the effect of different sales channels (for marketing)
Monitor sales growth (for management)

![](/assets/images/2022-02-02-11-27-03.png)

## Requirements for Implementation

* Requirements for Implementation of a Data Warehouse
  * Data Sources: Different types, skill sets, upgrades, locations, etc. (high heterogeneity)
  * ETL: Many processes - a “grid” of machines with different schedules and pipeline complexities
  * More resources need to be added as data increases. We have different workloads; some need one machine and some need many (scalability & elasticity)
  * Business Intelligence Apps & Visualizations: Also need a hybrid deployment of tools for interaction, reporting, visualizations, etc.

## Source 

* Udacity