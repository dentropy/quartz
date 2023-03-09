---
id: n9q8wlVoxgivcpq6HJg3A
title: kubeapps
desc: ''
updated: 1628444413874
created: 1628444413874
---
# kubeapps
[Kubeapps](https://kubeapps.com/docs/access-control/)

    
    kubectl create -n default serviceaccount example-two
    
    kubectl get -n default secret $(kubectl get -n default serviceaccount example-two -o jsonpath='{.secrets[].name}') -o go-template='{{.data.token | base64decode}}' && echo
    
    kubectl create -n default rolebinding example-two-view \
      --clusterrole=view \
      --serviceaccount default:example-two
      
    kubectl create -n default rolebinding example-two-edit \
      --clusterrole=edit \
      --serviceaccount default:example-two
    
    export KUBEAPPS_NAMESPACE=kubeapps
    kubectl create -n ${KUBEAPPS_NAMESPACE} rolebinding example-two-kubeapps-repositories-write \
      --clusterrole=kubeapps:${KUBEAPPS_NAMESPACE}:apprepositories-write \
      --serviceaccount default:example-two
      
    export KUBEAPPS_NAMESPACE=kubeapps
    kubectl create -n ${KUBEAPPS_NAMESPACE} rolebinding example-two-kubeapps-repositories-read \
      --clusterrole=kubeapps:${KUBEAPPS_NAMESPACE}:apprepositories-read \
      --serviceaccount default:example-two
