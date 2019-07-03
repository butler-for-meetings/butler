#!/bin/bash
sudo add-apt-repository ppa:deadsnakes/ppa  # repo for python3
sudo apt-get update

# install nodejs
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# install python env
sudo apt-get install -y python3.7 python3-pip python3-venv
mkdir .venv
python3 -m venv .venv/butler
source .venv/butler/bin/activate
sudo apt-get install -y build-essential libssl-dev libffi-dev python3.7-dev

# install pip requirements
pip3 install -r requirements.txt

# install npm dependencies
npm install


# install docker
sudo apt-get install docker.io

