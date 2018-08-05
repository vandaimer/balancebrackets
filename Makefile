D=docker
IMAGE=balancedbrackets
DIR=$(CURDIR)


build:
	$(D) build -t $(IMAGE) $(DIR)

run:
	$(D) run --rm $(IMAGE) '$(string)'
