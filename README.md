# [SkyJack](http://samy.pl/skyjack)

SkyJack is a drone engineered to autonomously seek out, hack, and wirelessly take full control over any other drones within wireless or flying distance, creating an army of zombie drones under your control.

by [@SamyKamkar](https://twitter.com/samykamkar) // <code@samy.pl> // <http://samy.pl> // Dec 2, 2013

Code available on [github](https://github.com/samyk/skyjack)

----


<a href="http://www.youtube.com/watch?feature=player_embedded&v=EHKV01YQX_w
" target="_blank">Watch the video here<br><img src="http://img.youtube.com/vi/EHKV01YQX_w/0.jpg" 
alt="SkyJack - autonomous drone control" width="480" height="360" border="10" /></a>

## Overview

Today Amazon announced they're planning to use unmanned drones to deliver some packages to customers within five years. Cool! How fun would it be to take over drones, carrying Amazon packages…or take over any other drones, and make them my little zombie drones. Awesome.

Using a Parrot AR.Drone 2, a Raspberry Pi, a USB battery, an Alfa AWUS036H wireless transmitter, aircrack-ng, node-ar-drone, node.js, and my SkyJack software, I developed a drone that flies around, seeks the wireless signal of any other drone in the area, forcefully disconnects the wireless connection of the true owner of the target drone, then authenticates with the target drone pretending to be its owner, then feeds commands to it and all other possessed zombie drones at my will.

SkyJack also works when grounded as well, no drone is necessary on your end for it to work. You can simply run it from your own Linux machine/Raspberry Pi/laptop/etc and jack drones straight out of the sky.

![http://samy.pl/skyjack/drone-pwn.png](http://samy.pl/skyjack/drone-pwn-small.png)

------

## Download
You can acquire SkyJack from github: <https://github.com/samyk/skyjack>



### Software

#### SkyJack
[SkyJack](http://samy.pl/skyjack) (available from github) is primarily a perl application which runs off of a Linux machine, runs aircrack-ng in order to get its wifi card into monitor mode, detects all wireless networks and clients around, deactivates any clients connected to Parrot AR.drones, connects to the now free Parrot AR.Drone as its owner, then uses node.js with node-ar-drone to control zombie drones.

I detect drones by seeking out any wireless connections from MAC addresses owned by the Parrot company, which you can find defined in the [Registration Authority OUI](http://standards.ieee.org/develop/regauth/oui/oui.txt).

#### aircrack-ng

I use [aircrack-ng](http://www.aircrack-ng.org/) to put our wireless device into monitor mode to find our drones and drone owners. I then use aireplay-ng to [deauthenticate](http://www.aircrack-ng.org/doku.php?id=deauthentication) the true owner of the drone I'm targeting. Once deauthenticated, I can connect as the drone is waiting for its owner to reconnect.

#### node-ar-drone
I use [node-ar-drone](https://github.com/felixge/node-ar-drone) to control the newly enslaved drone via Javascript and [node.js](http://nodejs.org).


### Hardware

#### Parrot AR.Drone 2
The [Parrot AR.Drone 2](http://www.amazon.com/gp/product/B007HZLLOK/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B007HZLLOK&linkCode=as2&tag=samypl0c-20) is the drone that flies around seeking other drones, controlled from an iPhone, iPad or Android, and is also the type of drone SkyJack seeks out in order to control. SkyJack is also capable of seeking out Parrot AR.Drone version 1.

The Parrots actually launch their own wireless network which is how the owner of the drone connects. We take over by deauthenticating the owner, then connecting now that the drone is waiting for its owner to connect back in, exploiting the fact that we destroyed their wireless connection temporarily.

#### Raspberry Pi
I use a [Raspberry Pi](http://www.amazon.com/gp/product/B009SQQF9C/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B009SQQF9C&linkCode=as2&tag=samypl0c-20) to drive the project as it's inexpensive, reasonably light, has USB, and runs Linux.

#### Alfa AWUS036H wireless adapter

I use the [Alfa AWUS036H](http://www.amazon.com/gp/product/B000QYGNKQ/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000QYGNKQ&linkCode=as2&tag=samypl0c-20) wireless card which supports raw packet injection and monitor mode which allow me to deauthenticate users who are legitimately connected to their drones.

#### Edimax EW-7811Un wireless adapter

I also use the [Edimax EW-7811Un](http://www.amazon.com/gp/product/B003MTTJOY/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003MTTJOY&linkCode=as2&tag=samypl0c-20) wireless USB adapter in order for SkyJack to launch its own network. This allows me to connect to SkyJack from my laptop or iPad and watch all the other drones as they're being controlled.

#### USB Battery

I suggest any [USB battery](http://www.amazon.com/gp/product/B003IHV326/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003IHV326&linkCode=as2&tag=samypl0c-20) which is light (under 100 grams), and can output close to an amp (1000mAh). The Raspberry Pi + wifi will likely use about this much juice. You could also possibly hook up three AAA batteries together to get about 4.5V out which would be a bit lighter, though I'm not sure how much current it will be able to output.


## Questions?

Feel free to contact me with any questions!

You can reach me at <code@samy.pl>.

Follow [@SamyKamkar](https://twitter.com/samykamkar) on Twitter or check out <http://samy.pl> for my other projects.
