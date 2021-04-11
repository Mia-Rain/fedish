# fedish
Fedish is a POSIX sh client for Pleroma
  > There is not mastodon support... this is due to API issues...
# Setup

1. ```
$ git clone https://github.com/ThatGeekyWeeb/fedish.git
$ cd fedish
$ ./fedish gen "<INSTANCE URL (WITH HTTP(S)://)>"
{
  "client_id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "client_secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "id": "XXX",
  "name": "fedish",
  "redirect_uri": "https://thatgeekyweeb.is-dummy-thi.cc/fedish/callback",
  "website": null,
  "vapid_key": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```
2. Head to the [fedish webapp](https://www.thatgeekyweeb.is-dummy-thi.cc/fedish/)  
3. Press "start", and input the requested data from the info `./fedish gen <>` returned
4. Authorize fedish
5. Copy and paste the data on screen to `~/.cache/fedish/authkeys`
6. `./fedish` for usage!
