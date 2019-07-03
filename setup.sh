#!/bin/bash -e
set -e
sudo apt-get update
sudo apt-get install -y software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa  # repo for python3
sudo apt-get update

# install nodejs
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# install python env
sudo apt-get install -y python3 python3-pip python3-venv virtualenvwrapper
source "/home/$USER/.local/bin/virtualenvwrapper.sh"
grep -qxF 'source "/home/$USER/.local/bin/virtualenvwrapper.sh"' ~/.bashrc || echo 'source "/home/$USER/.local/bin/virtualenvwrapper.sh"' >> ~/.bashrc
source ~/.bashrc
mkvirtualenv butler
workon butler
sudo apt-get install -y build-essential libssl-dev libffi-dev python3-dev

# install pip requirements
pip3 install -r requirements.txt -e .

# install npm dependencies
npm install


# install docker
sudo apt-get install docker.io

