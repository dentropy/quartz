---
id: l9JsZcuj5C7fiQVPpfx1J
title: Class Documentation
desc: ''
updated: 1632875496329
created: 1632875496329
---

## Analysis Class Documentation ##

The Python analysis pipeline is object-oriented. Three `Python` classes run most of the methods:

* **[`ExportKeybase`](./docs/ExportKeybase.md)**: Python3 class to generate lists of information via direct interface to `Keybase`.

  * Lives in [`create_export.py`](create_export.py)

  * Import using:

    ```python
    from create_export import ExportKeybase
    ```

* **[`GenerateAnalytics`](./docs/GenerateAnalytics.md)**: Python3 class to organize different kinds of data from `Keybase` export.

  * Lives in [`generate_analytics.py`](generate_analytics.py)

  * Import using:

    ```python
    from generate_analytics import GeneratedAnalytics
    ```

* **[`Messages`](#messages-class)**: Python3 class that uses `sqlalchemy` to interface with `SQL` database.

  * Lives in [`database.py`](database.py)

  * Import using:

    ```python
    from database import Messages
    ```
    
* *Note: this is a simpler class that really only has a constructor and properties related to the variables of interest that are extracted from the `Keybase` data.*

---

## Notes ##

*Miscellaneous observations during development.*

### Regarding Implementation

- **We currently do not (but could):**
  - Import Pin Message type because unable to find refence to message being pinned.
  - Import additional metadata such as: 
    - `device ID` 
    - `device name` 
    - `reactions within a message` 
    - `team_mentions` 

### Regarding Data-Driven Models ###

* **Topic Modeling on channels and across channels**
  * *Can we train a simple Linear Discriminant Analysis (LDA) model on channel-based text messages in order to get "good" separation of channels that do not have much overlap based on what we know and understand about language already?*
    * *Based on the training data that we have available to perform such a task, do we expect there to be "good" separation of topics by channel from the Complexity Weekend Keybase text database?*
    * *Do we need a different dataset for **Topic Modeling** altogether?*
* **Sentiment Analysis**
  * *Why does the **VADER** algorithm think that **Jason's** `Keybase` profile has such a negative sentiment score? Are there other better algorithms? Is there a list of other algorithms and links to source documentation or (even better) related literature to cite?*
* ~~Machine Learning~~

---

## Links

*Assorted links to tools and readings.*

### Tools moving forward

* **[`NLTK`](https://www.nltk.org/)**: Open-source natural language toolkit.
* **[`spaCy`](https://spacy.io/)**: Natural language processing (NLP) API that still provides many useful free tools.
* **[`kumo.io`](https://kumo.io/)**: Interactive network graph visualization tool with easy Import/Export format (and supports export of embedded views).

### Relevant External Libraries

* [PyKeybase Library](https://pypi.org/project/pykeybase/)
* [PyKeybaseBot GitHub Repository](https://github.com/keybase/pykeybasebot)

### Other ###

* **[Dentropy Daemon Wiki](https://wiki.dentropydaemon.io/)**
  * [Dashboards](https://wiki.dentropydaemon.io/en/Dashboards)

