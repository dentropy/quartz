---
title: Routing Research
description: 
published: true
date: 2021-04-05T02:49:10.048Z
tags: 
editor: markdown
dateCreated: 2021-04-03T19:52:30.022Z
---

* HTTPs / Routing

  * [[https://selfhosted.libhunt.com/traefik-alternatives]{.underline}](https://selfhosted.libhunt.com/traefik-alternatives)

  * [[https://nginxproxymanager.com/]{.underline}](https://nginxproxymanager.com/)

    * Can not set username and password as an environment variable

        * Read source code seems pretty simple to put in manually

    * DOES NOT USE HTTPS FOR ITSELF!!!???

* Trafik (USING THIS MOVING FORWARD)
  * [https://doc.traefik.io/traefik/getting-started/quick-start/](https://doc.traefik.io/traefik/getting-started/quick-start/)
  * [https://medium.com/\@containeroo/traefik-2-0-docker-a-simple-step-by-step-guide-e0be0c17cfa5](https://medium.com/@containeroo/traefik-2-0-docker-a-simple-step-by-step-guide-e0be0c17cfa5)
  * [https://medium.com/\@leandrobarral/traefik-2-setup-reverse-proxy-with-lets-encrypt-and-cloudflare-support-46d68b39ca71](https://medium.com/@leandrobarral/traefik-2-setup-reverse-proxy-with-lets-encrypt-and-cloudflare-support-46d68b39ca71)
  * [kubernetes - Force HTTPS with Traefik - Stack Overflow](https://stackoverflow.com/questions/53950074/force-https-with-traefik)
  * [Traefik as K8S Ingress Controller | by @dusansusic | Medium](https://medium.com/@dusansusic/traefik-ingress-controller-for-k8s-c1137c9c05c4)
  * [Rancher 2: Let's Encrypt with Ingress-Nginx & Cert-manager](https://blog.weareopensource.me/rancher-lets-encrypt-set-up-with-ingress-nginx-cert-manager/)
  * [Kubernetes: Automatic Let’s Encrypt Certificates for Services | by Sebastian | Medium](https://admantium.medium.com/kubernetes-automatic-lets-encrypt-certificates-for-services-2a5f4aa7f886)
  * [Make SSL certs easy with k3s | Opensource.com](https://opensource.com/article/20/3/ssl-letsencrypt-k3s)
  * [Add cert-manager annotations when using Traefik IngressController · Issue #6 · openfaas/ingress-operator](https://github.com/openfaas/ingress-operator/issues/6)

* Trafik HTTPS via LetsEncrypt

  * [[https://doc.traefik.io/traefik/v2.0/https/acme/]{.underline}](https://doc.traefik.io/traefik/v2.0/https/acme/)

  * [[https://www.2stacks.net/blog/rancher-2-and-letsencrypt/]{.underline}](https://www.2stacks.net/blog/rancher-2-and-letsencrypt/)

  * Cert Manager

    * [[https://cert-manager.io/docs/]{.underline}](https://cert-manager.io/docs/)

    * [[https://cert-manager.io/docs/installation/kubernetes/]{.underline}](https://cert-manager.io/docs/installation/kubernetes/)

    * \[Kubernetes -
            > Traefik\]([[https://doc.traefik.io/traefik/v1.7/user-guide/kubernetes/]{.underline}](https://doc.traefik.io/traefik/v1.7/user-guide/kubernetes/))

  * \[Letsencrypt with K3S guide? :
        > Traefik\]([[https://old.reddit.com/r/Traefik/comments/emadaf/letsencrypt\_with\_k3s\_guide/]{.underline}](https://old.reddit.com/r/Traefik/comments/emadaf/letsencrypt_with_k3s_guide/))

  * Tutorials

    * \[Setting up Traefik v2 and cert-manager on Kapsule -
            > Scaleway\]([[https://www.scaleway.com/en/docs/how-to-setup-traefikv2-and-cert-manager-on-kapsule/]{.underline}](https://www.scaleway.com/en/docs/how-to-setup-traefikv2-and-cert-manager-on-kapsule/))

    * \[Configure LetsEncrypt and cert-manager with Kubernetes \|
            > by Balkaran Brar \| Cloud Prodigy \|
            > Medium\]([[https://medium.com/cloud-prodigy/configure-letsencrypt-and-cert-manager-with-kubernetes-3156981960d9]{.underline}](https://medium.com/cloud-prodigy/configure-letsencrypt-and-cert-manager-with-kubernetes-3156981960d9))

    * \[How to expose your Kubernetes Dashboard with cert-manager
            > \| by Valerio Coltrè \|
            > ITNEXT\]([[https://itnext.io/how-to-expose-your-kubernetes-dashboard-with-cert-manager-422ab1e3bf30]{.underline}](https://itnext.io/how-to-expose-your-kubernetes-dashboard-with-cert-manager-422ab1e3bf30))

    * \[Rancher Docs: Kubernetes
            > Dashboard\]([[https://rancher.com/docs/k3s/latest/en/installation/kube-dashboard/]{.underline}](https://rancher.com/docs/k3s/latest/en/installation/kube-dashboard/))

    * \[Unobtrusive local development with kubernetes, k3s,
            > traefik2 \|
            > Codementor\]([[https://www.codementor.io/\@slavko/unobtrusive-local-development-with-kubernetes-k3s-traefik2-15uq596oja]{.underline}](https://www.codementor.io/@slavko/unobtrusive-local-development-with-kubernetes-k3s-traefik2-15uq596oja))

    * \[Custom clusters broken in k3s HA install · Issue \#25519 ·
            > rancher/rancher\]([[https://github.com/rancher/rancher/issues/25519]{.underline}](https://github.com/rancher/rancher/issues/25519))

    * \[Help understanding traefik k3s integration :
            > Traefik\]([[https://old.reddit.com/r/Traefik/comments/ej0m0x/help\_understanding\_traefik\_k3s\_integration/]{.underline}](https://old.reddit.com/r/Traefik/comments/ej0m0x/help_understanding_traefik_k3s_integration/))

    * \[Setting up Traefik v2 and cert-manager on Kapsule -
            > Scaleway\]([[https://www.scaleway.com/en/docs/how-to-setup-traefikv2-and-cert-manager-on-kapsule/]{.underline}](https://www.scaleway.com/en/docs/how-to-setup-traefikv2-and-cert-manager-on-kapsule/))

* Cert-Manager

  * \[ixoncloud/cert-manager-webhook-cloudns\]([[https://github.com/ixoncloud/cert-manager-webhook-cloudns]{.underline}](https://github.com/ixoncloud/cert-manager-webhook-cloudns))

  * \[Configure LetsEncrypt and cert-manager with Kubernetes \| by
        > Balkaran Brar \| Cloud Prodigy \|
        > Medium\]([[https://medium.com/cloud-prodigy/configure-letsencrypt-and-cert-manager-with-kubernetes-3156981960d9]{.underline}](https://medium.com/cloud-prodigy/configure-letsencrypt-and-cert-manager-with-kubernetes-3156981960d9))

  * \[(1) \[ Kube 37 \] Setup Lets Encrypt cert-manager in
        > Kubernetes Bare Metal -
        > YouTube\]([[https://www.youtube.com/watch?v=Hwqm1D2EfFU]{.underline}](https://www.youtube.com/watch?v=Hwqm1D2EfFU))

  * \[(1) Free SSL for Kubernetes with Cert-Manager -
        > YouTube\]([[https://www.youtube.com/watch?v=hoLUigg4V18]{.underline}](https://www.youtube.com/watch?v=hoLUigg4V18))

  * [[https://itnext.io/using-wildcard-certificates-with-cert-manager-in-kubernetes-and-replicating-across-all-namespaces-5ed1ea30bb93]{.underline}](https://itnext.io/using-wildcard-certificates-with-cert-manager-in-kubernetes-and-replicating-across-all-namespaces-5ed1ea30bb93)

  * [[https://medium.com/flant-com/cert-manager-lets-encrypt-ssl-certs-for-kubernetes-7642e463bbce]{.underline}](https://medium.com/flant-com/cert-manager-lets-encrypt-ssl-certs-for-kubernetes-7642e463bbce)

  * \[Using SSL certificates from Let's Encrypt in your Kubernetes
        > Ingress via cert-manager :
        > kubernetes\]([[https://old.reddit.com/r/kubernetes/comments/grktis/using\_ssl\_certificates\_from\_lets\_encrypt\_in\_your/]{.underline}](https://old.reddit.com/r/kubernetes/comments/grktis/using_ssl_certificates_from_lets_encrypt_in_your/))

* Open Other Ports on Kubernetes

  * \[Pi-hole on Kubernetes. If you've never heard of pi-hole,
        > it's... \| by Connor Demille \|
        > Medium\]([[https://medium.com/\@subtlepseudonym/pi-hole-on-kubernetes-87fc8cdeeb2e]{.underline}](https://medium.com/@subtlepseudonym/pi-hole-on-kubernetes-87fc8cdeeb2e))
