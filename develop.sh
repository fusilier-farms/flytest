#!/bin/bash
medusa seed -f ./seed.json

#medusa migrations run

medusa $1
