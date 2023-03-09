
*   Install a kubernetes cluster on your local machine
*   [minikube start | minikube](https://minikube.sigs.k8s.io/docs/start/)
*   [kubectl for Docker Users | Kubernetes](https://kubernetes.io/docs/reference/kubectl/docker-cli-to-kubectl/)
*   [Ingress Minikube](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)

Install Script
--------------

    # Make sure sudo can run
    # Install kubectl
    curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
    chmod +x ./kubectl
    sudo mv ./kubectl /usr/local/bin/kubectl
    # Install minikube
    curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
    sudo install minikube-linux-amd64 /usr/local/bin/minikube
    minikube start
    minikube addons enable ingress
    # Install HEML
    curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
    chmod 700 get_helm.sh
    ./get_helm.sh
