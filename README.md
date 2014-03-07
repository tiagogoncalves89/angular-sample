Create a page that requests JSON data from a preconfigured URL, and renders a sorted list of names, with links to their e-mails, and a heading title as received.

You can use the URLs below as references for the server response:
- Success: http://www.scup.com/outros/jobs/frontend-test-success.json
- Failure: http://www.scup.com/outros/jobs/frontend-test-failure.json

You can use up to one JavaScript library, as long as it is used to address cross-browser issues.

We expect a ZIP file with your resulting files.


Install
===============================

    npm install
    bower install

Up the server
================

    grunt

Run the tests
==================

    node_modules/protractor/bin/webdriver-manager update
    node_modules/protractor/bin/webdriver-manager start
    grunt test

Generate docs
=============

    grunt doc


See application
===============

    http://localhost:9876/
