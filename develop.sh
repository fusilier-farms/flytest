#!/bin/bash
medusa seed -f ./data/seed.json

medusa migrations run

medusa $1
