hub_pass ?= xxx
version ?= local

build:
	./scripts/build.sh $(hub_pass) $(version)