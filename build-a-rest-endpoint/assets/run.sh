#!/usr/bin/bash

nohup java \
  -Dmanagement.endpoints.web.exposure.include=* \
  -Xmx1G \
  -Xms1G \
  -Duser.timezone="UTC" \
  -jar build-a-rest-endpoint-0.1-SNAPSHOT-exec.jar 2>&1 &