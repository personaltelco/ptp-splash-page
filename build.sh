#!/usr/bin/env bash

# Automated build script. Intended for continuous integration use.

set -ex

npm install --frozen-lockfile


rm -rf checkstyle-*.xml coverage-js htdocs/*.min.* junit.xml

npm -s run pkglint || true

npm -s run lint -- --format node_modules/eslint-formatter-checkstyle-* \
     > checkstyle-eslint.xml || true

npm -s run build

exit 0
