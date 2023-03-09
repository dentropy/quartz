---
id: MvB4IkUyzZiei9Idk2UhL
title: Volumes
desc: ''
updated: 1628449250321
created: 1628449250321
---
# volumes
Storage and Kubernetes
----------------------

[Volumes by Example](https://kubernetesbyexample.com/volumes/)
--------------------------------------------------------------

    # sharevol.yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: sharevol
    spec:
      containers:
      - name: c1
        image: centos:7
        command:
          - "bin/bash"
          - "-c"
          - "sleep 10000"
        volumeMounts:
          - name: xchange
            mountPath: "/tmp/xchange"
      - name: c2
        image: centos:7
        command:
          - "bin/bash"
          - "-c"
          - "sleep 10000"
        volumeMounts:
          - name: xchange
            mountPath: "/tmp/data"
      volumes:
      - name: xchange
        emptyDir: {}
    

    kubectl apply -f sharevol.yaml
    
    kubectl describe pod sharevol
    
    kubectl exec -it sharevol -c c1 -- bash
    
    echo 'some data' > /tmp/xchange/data
    
    exit
    
    kubectl exec -it sharevol -c c2 -- bash
    
    cat /tmp/data/data
    
    exit
    
    kubectl delete pod/sharevol
