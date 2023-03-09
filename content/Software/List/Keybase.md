[Keybase website](https://keybase.io/)  [Keybase Binding](../../Projects/Keybase%20Binding.md)

``` bash
keybase chat api -m '{"method": "send", "params": {"options": {"channel": {"name": "dentropydaemon", "members_type": "team", "topic_name": "bot-testing"}, "message": {"body": "CLI TEST?"}}}}'

keybase chat api -m '{"method": "send", "params": {"options": {"channel": {"name": "dentropydaemon", "members_type": "team", "topic_name": "bot-testing"}, "message": {"body": "Wow it worked"}}}}'
```


``` json
{
  "content":{
    "type":"text",
    "text":{
      "body":"Awesome, are you still on the education/textbook analysis trail as well?",
      "payments":null,
      "userMentions":null,
      "teamMentions":null,
      "emojis":null
    }
  }
}
```