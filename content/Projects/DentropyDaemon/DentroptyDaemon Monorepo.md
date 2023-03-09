## ddaemon-monorepo

A collection of ETL(Extract Transform Load) tools for taking social media and quantified self data and generating visualizations so people can better understand themselves and others.

## Motivation

Why can't Google index all my data allowing me to search myself? The vision for Dentropy Daemon is to take all ones data into a single extendable API that the user and only the user has access and control over.

## Guide to Bindings and Apps

* Bindings are tools to get and transform data from different sources into a format that can be queried.
* Apps are tools that can be used to interact with the data once the bindings have it in the correct format

## Bindings

* [wiki.ddaemon.monorepo.bindings.keybase](Monorepo/bindings/Keybase%20Binding.md)
  * Export data from keybase and put it in Elasticsearch
* [wiki.ddaemon.monorepo.bindings.discord](Monorepo/bindings/Discord%20Binding.md)
  * Take exported data from discord and put it into Elasticsearch
* [wiki.ddaemon.monorepo.bindings.git](ddaemon%20git%20binding)
  * TODO

## Apps

* [wiki.ddaemon.monorepo.app.web](ddaemon%20web%20app)
  * Visualize the data from different bindings
