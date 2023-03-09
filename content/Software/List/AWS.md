## Redirect DNS using Route53 and S3

Setup a bucket with redirect.
Set A record to point at the bucket.
Voila.

* [Redirect one domain to another in Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/route-53-redirect-to-another-domain/)
* [amazon web services - RRSet of type CNAME with DNS name foo.com. is not permitted at apex in zone bar.com - Stack Overflow](https://stackoverflow.com/questions/20215729/rrset-of-type-cname-with-dns-name-foo-com-is-not-permitted-at-apex-in-zone-bar)


# AWS
Cloud Practioner Essentials
---------------------------

### Core Services

*   AMI - Amazon Machine Image
    
*   EBS - Elastic Block Store
    
    *   Volumes have to be in same availability zome
    *   Can attack volumes to running EC2 instances at any mount point
    *   `lsblk`
    *   Have to create your own file system
    *   `sudo !!` run last command as root
*   S3 - Amazon Simply Storage Service
    
    *   Buckets hold data
    *   Objets aka files have key's
    *   Buckets are attached to regions
    *   Optionally open to internet or VPC
*   [https://aws.amazon.com/about-aws/global-infrastructure/](https://aws.amazon.com/about-aws/global-infrastructure/)
    
*   VPCk
    
    *   Live within Regions and can go accross AZ (Availability Zones)
    *   All subnets can communicate with one another by default
    *   Subnets can seperately be exposed to the internet

AWS Integrated Services
-----------------------

*   Application Load Balancer
    
    *   Listeners
    *   Target
    *   Target Group
    *   Make one from EC2 Console, in side navigation pane
*   Auto Scalling
    
    *   Alaunch Config -> Auto Scaling Group -> Auto Scaling Policy
*   Route 53
    
    *   DNS service
    *   What is a hosted zone?
*   RDS - Relational Database Services
    
    *   Read Replica
*   AWS Lambda
    
    *   Serverless
    *   Event Driven Coding
    *   API Gateway
    *   React to S3 Bucket stuff
*   Elastic Beanstalk
    
    *   Does everything all in one, upload code and go
*   Simple Notification Service
    
    *   Pub Sub and mobile communications
*   Cloudwatch
    
    *   Monitoring service and applications in real time
    *   Set alarms
    *   Basically like mission control
    *   IAM - Identity Access Management
    *   CloudTrail is a thing
*   CloudFront
    
    *   CDN
    *   RTMP streaming
*   AWS Cloud Formation
    
    *   Automate resource prvisioning
    *   Stacks are a unit of deployment
    *   Infustructure as code
    *   There are templates and permissions
    *   THERE IS A GUI DESIGNER, crtl+shift
    *   Should be modular
