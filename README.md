# Deprecation
> ### Fedish is now considered deprecated.  
> ---
It my still work in most ways, however there are know issues with the web auth system.  
Additionally this is is not pure sh, and will not recieve futher work.  
> ### Replacements
> ---
* [fauth](https://miarain.xyz/mia/fauth) replaces the webapp auth service
	* In pure sh + curl
* [posh](https://miarain.xyz/mia/posh) offers a terminal based poster
	* In pure sh + curl

And there are plans for additional standalone modules  
The following are currently planned:  

* Timeline handler  
* Notif daemon  
* Interaction handler  
  * /with/ reply support  

These are planned to be pure sh + curl based  
A wrapper is /not/ planned.  

---
# fedish
Fedish is a POSIX sh client for the Fediverse!
# Setup

```
$ git clone https://github.com/ThatGeekyWeeb/fedish.git
$ cd fedish
$ ./fedish gen "<INSTANCE URL (WITH HTTP(S)://)>"
{
  "client_id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "client_secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "id": "XXX",
  "name": "fedish",
  "redirect_uri": "https://thatgeekyweeb.github.io/fedish/callback",
  "website": null,
  "vapid_key": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```
2. Head to the [fedish webapp](https://unix.lgbt/~mia/fedish/)  
3. Press "start", and input the requested data from the info `./fedish gen <>` returned
4. Authorize fedish
5. Copy and paste the data on screen to `~/.cache/fedish/authkeys`
6. `./fedish` for usage!
