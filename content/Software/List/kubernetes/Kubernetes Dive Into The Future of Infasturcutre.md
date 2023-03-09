---
id: uolnIWUHOR7ADhWCzp1at
title: Kubernetes Dive Into The Future of Infasturcutre
desc: ''
updated: 1628449250319
created: 1628449250319
---
# Kubernetes: Dive Into The Future of Infasturcutre
Learning Kubernetes
-------------------

Aditioanl Resources
-------------------

[https://github.com/kubernetes-up-and-running/examples](https://github.com/kubernetes-up-and-running/examples)  
[https://github.com/StephenGrider/multi-k8s](https://github.com/StephenGrider/multi-k8s)  
Linux Acadamy course is based on [https://github.com/kelseyhightower/kubernetes-the-hard-way](https://github.com/kelseyhightower/kubernetes-the-hard-way)  
[Docker file help](https://medium.com/bb-tutorials-and-thoughts/docker-a-beginners-guide-to-dockerfile-with-a-sample-project-6c1ac1f17490)

Dive Into the Future of Infrastructure/Kubernetes
-------------------------------------------------

Container the book uses [https://github.com/kubernetes-up-and-running/kuard](https://github.com/kubernetes-up-and-running/kuard)

    docker tag image-name registry-url/user/image-name
    docker push registry-url/user/image-name
    

What is cgroup technology provided by linux kernel?

*   Aditional tags in docker
    
    *   \--memory, limit mtmory
    *   \--memory-swap, limit swap
    *   \--cpu-share, limit CPU usage

There is a docker garbage collector tool `docker -gc`

Summary of first two chapters:

The benifits of container orchestration include velocity, scaling, abstraction of infustructure, and effeciency. The software people develop these days moves really fast and is really complicated and is done in the cloud. Instead of managing a huge git repo organizations can divide and concour building seperate parts of an application and haveing them all talk together using an API. Kubernetes is a great tool set for dealing with development in an environment like this.

Containers are imutible by design, one should not hop inside one and change something because that is an anti pattern. Since every image is imutable it means they are deployed the same on the developers machine, testing evnironemnt, and production. Trying to change something on a running container will brak this pattern of running the same container in each environment and having them behave the same way.

Container registries are required for scalable applications. Once a continer is deployed to a registry they they can be pulled by anyone with the right credentials and run on that kubernetes machine within a kubernetes cluster.

Chapter 3. Deploying a Kubernetes Cluster
-----------------------------------------

    kubectl get nodes
    kubectl describe node {nodename}}
    

All nodes require a paoxy and dns service set up.

    kubectl get daemonSets --namespace=kube-system kube-proxy
    kubectl get deployments --namespace=kube-system kube-dns
    kubectl get services --namespace=kube-system kube-dns
    kubectl get deployments --namespace=kube-system kubernetes-dashboard
    kubectl get services --namespace=kube-system kubernetes-dashboard
    

Chapter 4. Common kubectl Commands
----------------------------------

### Namespaces

Helps abstract stuff into groups  
What can something put in a namespace?

### Contexts

Sorta like how one can use an alias in .bashrc kubernetes uses contexts such as different default namespace. Contexts are stored in `$HOME/.kube/config`

    kubectl config set-context my-context --namespace=$WHATEVER
    kubectl config user-context my-context
    

### Viewing Kubernetes API Objects

*   Used when running `kubectl get ...` can also use `-o yaml` and `-o json`
*   One can also use `kubectl describe ...`

### Creating, Updateing, and Destroying Kubernetes Objects

    kubectl apply -f obj.yaml
    kubectl edit {resource-name}} {object-name}}
    kubectl delete -f obj.yaml
    kubectl delete {resource-name}} {object-name}}
    

### Labeling and Annotating Objects

Refer to chater 6 to learn more about annotating and labeling

    # --overwrite may be useful
    kubectl label pods bar color=red
    kubectl label pods bar -color # This removes label
    

### Debugging COmmands

    # -f to follow
    kubectl log {pod name}}
    kubectl exec -it {pod-name}} -- bash
    kubectl cp {pod-name}}:/path/to/remote/file /path/to/local/file # From Container
    kubectl cp /path/to/local/file {pod-name}}:/path/to/remote/file # To Container
    

Chapter 5. Pods
---------------

Kubernetes group multiple containers into a single, atomic unit called a Pod.

What is IPC namespace?

A Pod manifest is just a text-file representation of the Kubernetes API object.

*   One does not simply move a mod
*   `kubectl delete pod {pod-name}}`
*   `-o wide` tag for more informaiton

    kubectl apply -f kuard-pod.yam
    kubectl delete -f kuard-pod.yam
    

### Port Forwarding

One should use load balances to expose ports and stuff but port forwarding is easier to understand and use. The port is only kept open as long as the command is still running in terminal.

    kubectl port-forward kuard 8081:8080
    

### Logs

    kubectl log kuard # -f for consintous stream
    

*   \--previous will get logs from dead container
*   One should use a log agregation service sich as fluend and elasisearch

### Liveness

*   Check http response or otherwise kill server
*   Can check tcpSocket for a database or something else that does not use HTTP
*   There are also exec probes that run a script within a pod

### Readiness

### Resourse Management

*   Resourses are requested on a per container not per pod
*   Memory is managed in a funny way, check page 108

### Persisting Data with Volumes

*   Not all containers are required to mount all volumes in a pod
*   Two different containers in a pod can mount the same volume at different mount paths
*   hostDir can mount volume from device
*   Kubernetes supporrts NFS and iSCSI

Chapter 6 Labels and Annotations
--------------------------------

*   Labels deal with sets of objects. Labels deal with services being used across multiple applications.
*   One can use `--labels "ver=2,app=whatever,env=prof"` when deploying from CLI to label a deployment
*   One can relabel / modify labels from CLI as such

    kubectl label deployments {deployment name}} "canary=true"
    

*   Look up labels using the following

    kubectl get deployment -L canary
    

*   Remove a label with the folowing

    kubectl label deployments {deployment name}} "canary-" # The dash is important
    

*   Using a label selector

    kubectl get pods --show-labels
    kubectl get pods --selector="app=bandicoot,ver=2" # Uses AND
    kubectl get pods --selector="app in (alpaca,bandicoot)" # Uses OR
    

*   Check out Table 6-2 for how to use more selector options

### Label Selectors in API Objects

I did not understand that

### Annotations

*   Used to describe stuff rather than identify and group
*   Used to provide extra information to know where an object came from, how to use it, or some policy
*   Does not work with selectors
*   One can have base64 encoded images in annotations WTF
*   Can be added to any kubernetes object

    # Delete all deployments
    kubectl delete deployments --all
    # One can use the selector flag if they desire
    

Chapter 7. Service Discovery
----------------------------

*   Service discovery solve the problem of finding which processes are listening at which addresses for which services
    
*   DNS falls short in kubernetes?
    
    *   Kubernetes is dynamic and DNS is chached, see the problem
*   What is a SRV Record when it comes to DNS?
    
*   What is this `expose` argument?
    
*   wtf is a cluster IP?
    
    *   Special IP address the system will load-balance across all the pods taht are identified by the selector
*   The `edit` argument is pretty interesting
    
*   `kubectl get endpoints alpaca-prod --watch`
    

Chaoter 8. Replica Sets
-----------------------

How to you put redencency into your web application? Decoupled from hardware.

Chapter 9. Daemon Sets
----------------------

How to you run a pod on every node for logs and stuff? Coupled with hardware.

Chapter 10. Jobs
----------------

What about containers that need to exist for seconds or minutes? You have to know if the container did what it was supposed to before it should be terminated. Jobs can be set up as work queues performing job after job.

Chapter 11. ConfigMaps and Secrets
----------------------------------

How to manage information such as SSH keys and TLS certificates and shit.

Chapter 12. Deployments
-----------------------

How do I do rolling repeases please. Also what about AB testing. Continous Delivery much.... Also you just tell kubernetes what to do and kubernetes takes care of things not your personal computer.

Chapter 13. Storage solutions
-----------------------------

Same service name in two different namespaces can resolve to different services.
