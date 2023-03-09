---
id: RRjbiUSrZ2A913QKEaW9q
title: Kubernetes Questions
desc: ''
updated: 1628449250320
created: 1628449250320
---
# Kubernetes Questions
*   How do I deploy a pod to a specific host
*   How do I mount local storage
*   Learn how to use [ahmetb/kubectx: Faster way to switch between clusters and namespaces in kubectl](https://github.com/ahmetb/kubectx#installation)
*   What exactly is iSCI
*   How to expose specific ports on on a kubernetes cluster
*   If I mount NFS into a container how does that effect deployments
*   How to display install and display Kubernetes dashboard in k3s
*   How get access trafik dashboard inside k3s deployment
*   Should I use Rancher or k3s?

    ---
    apiVersion: v1
    kind: Service
    metadata:
      name: my-matrix-synapse-port-open
    spec:
      selector:
        app: trilium-pod
      ports:
      - port: 4000
        targetPort: 8080
        name: trilium-pod
      externalIPs:
        - 172.105.22.152
