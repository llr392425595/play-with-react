#!/bin/bash

set -e
BASEDIR=$(dirname "$0")

source ./scripts/common.sh

export HUB_PASS="${1:-hub_pass}"
export VERSION="${2:-local}"
DOCKER_COMPOSE_SERVICE=play-with-react
DOCKER_IMAGE=392425595/play-with-react

bold "INFO: Log in Docker hub..."
docker login -u 392425595 -p ${HUB_PASS}

bold "INFO: Trying to pull image to use its cache"
docker-compose pull --ignore-pull-failures ${DOCKER_COMPOSE_SERVICE}

bold "INFO: Building image"
docker-compose build ${DOCKER_COMPOSE_SERVICE}
