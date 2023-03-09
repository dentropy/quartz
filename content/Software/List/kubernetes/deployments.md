---
id: 1l49X2WNbTdHJWG2JX5Ib
title: Deployments
desc: ''
updated: 1628449250320
created: 1628449250320
---
# deployments
Here is an example deployment
-----------------------------

    apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
    kind: Deployment
    metadata:
      name: nginx-deployment
    spec:
      selector:
        matchLabels:
          app: nginx
      replicas: 2 # tells deployment to run 2 pods matching the template
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.14.2
            ports:
            - containerPort: 80
    

TODO: write commands to actually deploy the deployment
