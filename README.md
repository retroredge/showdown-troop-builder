Overview
====
This is a Web application for the [Savage Worlds Showdown](https://www.peginc.com/freebies/Showdown/Showdown.pdf) miniatures 
skirmish rules by [Pinnacle Entertainment Group](www.peginc.com). 

The application is a 'troop builder' for designing and costing units to use in the game. The application is based on the mechanics 
in the spreadsheet that accompanies the Showdown rules.
 
The application uses [https://angularjs.org/](AngularJS) and [http://getbootstrap.com/](Bootstrap).   

GitHub Pages deployment [here](http://retroredge.github.io/showdown-troop-builder)

Developer Notes
====

Tasks
-----
- Render unit card as printable PDF
- ~~~Add hindrances list~~~
- Expanded export / import data, including IE support


UI Improvements
----
- Multi-select lists with check boxes
- ~~~Button(s) to reset (i.e., remove) a selected skill~~~
- Multiple tabs for the various lists
- Some hindrances and abilities should affect more than one stat, but currently only one affect is captured.  


Local testing with node http server (OSX)
----
```
cd showdown-troop-builder
brew install node
npm install http-server -g
http-server
```

Then go to [http://0.0.0.0:8080/]()

There is also a [Protractor](http://www.protractortest.org/) test spec in the test subdirectory.
```
npm install -g protractor
webdriver-manager update
webdriver-manager start
protractor test/protractor/conf.js
```


Disclaimer
====
This game references the Savage Worlds game system, available from Pinnacle Entertainment Group at [www.peginc.com](www.peginc.com). 
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. 
Used with permission. Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

Licence
====
```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/.
```
