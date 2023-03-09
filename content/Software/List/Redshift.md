---
id: 0t7n6p8zumymn5k77vnigdq
title: Redshift
desc: ''
updated: 1647011661834
created: 1647010265939
---

## 

aws redshift create-cluster \ 
  --cluster-identifier paulairflow \
  --node-type dc2.xlarge \
  --master-username pauludacity \ 
  --master-user-password pauludacity \
  --availability-zone us-west-2 \
  --cluster-type single-node \
  --publicly-accessible true \
  --profile udacity

aws redshift create-cluster --cluster-identifier paulairflow --node-type dc2.xlarge --master-username pauludacity --master-user-password pauludacity --availability-zone us-west-2 --cluster-type single-node --profile udacity ^o222a7rf8hwe

**Examples**

aws redshift create-cluster --node-type dw.hs1.xlarge --number-of-nodes 2 --master-username adminuser --master-user-password TopSecret1 --cluster-identifier mycluster

## psql

