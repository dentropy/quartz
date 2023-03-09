---
id: MGnYWbkMhOTWBKibk08in
title: Ingress
desc: ''
updated: 1628449250320
created: 1628449250320
---
# ingress
Ingress
-------

[Watching this video](https://www.youtube.com/watch?v=GhZi4DxaxxE)

    minikube addons enable ingress
    

*   Ingress is a layer 7 Load Balancer
*   Uses nginx, haprox, or traefik, Istio, Contour
*   Ingress controllers are not part of default kubernetes

Aditional Resources
-------------------

*   [https://medium.com/google-cloud/understanding-kubernetes-networking-ingress-1bc341c84078](https://medium.com/google-cloud/understanding-kubernetes-networking-ingress-1bc341c84078)

Ingress Tutorial
----------------

[Source](https://devopscube.com/setup-ingress-kubernetes-nginx-controller/)

    minikube addons enable ingress
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml
    kubectl get pods -n ingress-nginx
    

    # nginx-ingress.yaml
    kind: Service
    apiVersion: v1
    metadata:
      name: ingress-nginx
      namespace: ingress-nginx
      labels:
        app.kubernetes.io/name: ingress-nginx
        app.kubernetes.io/part-of: ingress-nginx
    spec:
      externalTrafficPolicy: Local
      type: LoadBalancer
      selector:
        app.kubernetes.io/name: ingress-nginx
        app.kubernetes.io/part-of: ingress-nginx
      ports:
        - name: http
          port: 80
          targetPort: http
        - name: https
          port: 443
          targetPort: https
    

    kubectl get svc -n ingress-nginx
    

    kubectl create namespace dev
    

    # hello-app.yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-app
      namespace: dev
    spec:
      selector:
        matchLabels:
          app: hello
      replicas: 3
      template:
        metadata:
          labels:
            app: hello
        spec:
          containers:
          - name: hello
            image: "gcr.io/google-samples/hello-app:2.0"
    

    kubectl create -f hello-app.yaml
    

    kubectl get deployments -n dev
