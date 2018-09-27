#!/bin/sh

sudo apt install -y ruby-dev
sudo gem install bundler jekyll

cd $(dirname $0)/..
bundle install
