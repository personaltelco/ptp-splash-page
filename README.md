ptp-splash-page
=============

The Personal Telco Project's splash page that user's see when they connect to a node and get redirected by the 'captive portal' 

Benjamin Foote  
2014-02-21   
ben@bnf.net  


## About the splash page

When a user connects to a node, usually via wifi, they cannot immediately
access the internet.  They are bound within a captive portal.  When they 
try to browse to any web pages in a browser (http only) they are redirected
by NoCatAuth to our splash page.  Once they have accepted the terms of service
they are then allowed to access the internet. 

In this way, the splash page is one of our most frequents points of interaction
with the users of the PTP network.

In addition to it's primary funciton it is an opportunity
    - to educate folks about PTP 
    - to acknowledge the node host
    - to ask for donations 
    - to acknowledge donors and contributors

The splash page loads from the router and then the loaded page makes calls
to http://static.personaltelco.net which are the static files from the
[ptp-splash-server repo](https://github.com/personaltelco/ptp-splash-server).  The js files at 'static' then make calls to api.personaltelco.net
which is in the [ptp-api repo](https://github.com/personaltelco/ptp-api).

By keeping the API separate from the router and server logic we hope to allow
folks to easily understand which piece of the puzzle should be worked on at each point.

##  Install and build

The splash page is a single page app built using Twitter Bootstrap.

Everything that gets loaded to the browser FROM THE ROUTER lives in ./htdocs

The ./src directory is built using 'grunt' a nodejs build tool

to setup the build environment

````bash
    git clone git@github.com:personaltelco/ptp-splash-page.git
    npm install
````
then run

````
    make
````

which will call 'grunt'.  It will minifiy and combine the javascript from ./src as 
configured in Gruntfile.js


## Getting it installed on a router and PTP_VARNAME_PTP variables

The ptp-splash-page htdocs directory is consumed as part of the FOOCAB.pl build process of the [ptp-openwrt-files repo](https://github.com/personaltelco/ptp-openwrt-files/)

Specifically these files are placed in the /www directory

The FOOCAB.pl script replaces all PTP_VARNAME_PTP values with information in this file:

https://github.com/personaltelco/openwrt-files/blob/master/nodedb.txt

TODO decide how to integrate the pages here into the ptp-open-wrt repo's www directory

https://github.com/personaltelco/ptp-openwrt-files/tree/master/www

I think it should be a git submodule of a sparse checkout like this:  
https://gist.github.com/johnhunter/3333533


The original requirements, which lays out just a bit of thought around the splashpage

https://personaltelco.net/wiki/NewCaptivePortalFeatures

more on captive portals....  

https://personaltelco.net/wiki/CaptivePortal

