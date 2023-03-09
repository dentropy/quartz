---
id: C6X3mJKQfCcebo2inFDEc
title: Openshift
desc: ''
updated: 1628449250320
created: 1628449250320
---
# openshift
OpenShift Stuff
---------------

How to install OKD on a server
------------------------------

[https://docs.okd.io/3.11/install/prerequisites.html#install-config-install-prerequisites](https://docs.okd.io/3.11/install/prerequisites.html#install-config-install-prerequisites)

[https://docs.okd.io/3.11/getting\_started/administrators.html#downloading-the-binary](https://docs.okd.io/3.11/getting_started/administrators.html#downloading-the-binary)

So basically use Fedora
-----------------------

    sudo yum install docker
    sudo yum install oc
    oc cluster up
    

Install the shit
----------------

[https://medium.com/@craig\_robinson/openshift-4-4-okd-bare-metal-install-on-vmware-home-lab-6841ce2d37eb](https://medium.com/@craig_robinson/openshift-4-4-okd-bare-metal-install-on-vmware-home-lab-6841ce2d37eb)

[Project Basics](https://docs.openshift.com/container-platform/4.5/applications/projects/working-with-projects.html)
--------------------------------------------------------------------------------------------------------------------

Create a project
----------------

`oc new-project <project_name>`

Display projects
----------------

`oc get projects`

Delete a project
----------------

`oc delete project <project_name>`

Use a project
-------------

`oc project <project_name>`
