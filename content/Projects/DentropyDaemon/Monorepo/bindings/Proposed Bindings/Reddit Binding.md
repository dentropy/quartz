Reddit is a wonderful social network that captures all sorts of our data. Users can post, comment, vote, and save posts. Users can subscribe, block, or create collections of subreddits. Plus users can direct message other users.


## Using Rexport to export a personal account

* [karlicoss/rexport: Reddit takeout: export your account data as JSON: comments, submissions, upvotes etc. 🦖](https://github.com/karlicoss/rexport)
* [HPI/reddit.py at master · karlicoss/HPI](https://github.com/karlicoss/HPI/blob/master/my/reddit.py)

*This is a summary of the [README](https://github.com/karlicoss/rexport)*

1. Go to [https://old.reddit.com/prefs/apps](https://old.reddit.com/prefs/apps) while logged into your reddit account, scroll to the bottom and select "are you a developer? create an app."
2. Add a name, select the "script" radio button and "redirect uri" put a random webstie such as "https://github.com/karlicoss/rexport" and select "create app"
3. After your app is created get the CLIENT_ID which is that random string of characters under the name of the applciation you just created and CLIENT_SECRET next to the keyword secret
4. Create secrets.py and fill it in with your account information plus the information gotten from step 3

``` python
username = "USERNAME"
password = "PASSWORD"
client_id = "CLIENT_ID"
client_secret = "CLIENT_SECRET"
```

5. Install rexport itself

``` bash
pip3 install --user git+https://github.com/karlicoss/rexport
pip3 install --user praw==7.2.0
```

6. Generate your export

``` bash
python3 -m rexport.export --secrets /path/to/secrets.py >"export-$(date -I).json"
```

*Additional Notes for rexport*

* [Bug Issue with praw](https://github.com/karlicoss/rexport/issues/15#issuecomment-889101866)

## Using pushshift comment export

* [seanbreckenridge/pushshift_comment_export: Exports all accessible reddit comments for an account using pushshift.](https://github.com/seanbreckenridge/pushshift_comment_export)

*How to use pushift comment export*

``` bash
pip3 install pushshift_comment_export
echo "Please enter a redit username"
read;
echo ${REPLY}
#ps_comments ${REPLY} --to-file ${REPLY}sComments.json
```

## Analisis of reddit data

**GET THIS DATA INTO ELASTICSEARCH**

Most saved subreddits in a graph:
* List of saved posts by subreddit as a web interface
* List of subreddits
* List of multireddits
* List of saved posts
  * Filter by time
  * Filter by subreddit
  * Graph activity over time
* List of submissions / comments
	* Most submitted to subreddit
  * Filter by time
  * Filter by subreddit
  * Graph activity over time
* Users
  * List friends
  * List every user responded to post / comment
  * See how many times user was interacted with
    * Inbox Messages
    * Response to posts / comments
    * Submitted posts saved

# reddit

[karlicoss/rexport: Reddit takeout: export your account data as JSON: comments, submissions, upvotes etc. 🦖](https://github.com/karlicoss/rexport)

[karlicoss/arctee: Atomic tee](https://github.com/karlicoss/arctee)

    #secrets.py
    username = "wh0_am_1"
    password = "Piepie123"
    client_id = "H85EKbNuNklqSg"
    client_secret = "9gatN85OEVbEvebPNrP4dalM8YY2HQ"
