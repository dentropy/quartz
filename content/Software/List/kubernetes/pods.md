---
id: ZOTd1mg8i0QzoSBzCcxUM
title: Pods
desc: ''
updated: 1628449250321
created: 1628449250321
---
# pods
Kubernetes PodBasics
--------------------

Here are are all the yaml files
-------------------------------

    # HelloPod.yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      labels:
        app: hello-world
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
          - containerPort: 80
    

    # HelloService.yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: hello-world
    spec:
      type: NodePort
      selector:
        app: hello-world
      ports:
        - protocol: TCP
          port: 8080
          targetPort: 80
          nodePort: 30036
    

    # HelloIngress.yaml
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: name-virtual-host-ingress
    spec:
      rules:
      - host: first.bar.com
        http:
          paths:
          - backend:
              serviceName: hello-world
              servicePort: 80
    

[Great Tutorial](https://www.bmc.com/blogs/kubernetes-port-targetport-nodeport/)
--------------------------------------------------------------------------------

First you need service so kuberneties knows where to send traffic, look above at HelloPod.yaml

Then you need a pod for the network traffic to go to, look above at HelloService.yaml

    kubectl apply -f HelloService.yaml
    kubectl apply -f HelloPod.yaml
    kubectl describe pod nginx
    kubectl describe pod nginx | grep Node:
    kubectl describe service hello-world
    kubectl run --image=dentropy/ubuntu --restart=Never -- dentropyubuntu
    kubectl exec -it dentropyubuntu sh
    # Exit container
    kubectl delete pod dentropyubuntu
