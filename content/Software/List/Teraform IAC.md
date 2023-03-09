## Actually Use

``` bash
terraform init
terraform show
terraform plan
terraform plan -var-file ./dentropycloud.tfvars
terraform apply
terraform apply -var-file ./dentropycloud.tfvars
terraform apply -destroy
terraform apply -destroy -var-file ./dentropycloud.tfvars
```

## Install

* **REMEMBER ROOT**
* [Downloads | Terraform by HashiCorp](https://www.terraform.io/downloads)

## Awesome Resources

* [shuaibiyy/awesome-terraform: Curated list of resources on HashiCorp's Terraform](https://github.com/shuaibiyy/awesome-terraform)
* [futurice/terraform-examples: Terraform samples for all the major clouds you can copy and paste. The future, co-created.](https://github.com/futurice/terraform-examples)

## Sources to review

* [How To Structure a Terraform Project | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-structure-a-terraform-project)
* [7 Tips to Start Your Terraform Project the Right Way | by Simon So | Medium](https://medium.com/@simon.so/7-tips-to-start-your-terraform-project-the-right-way-93d9b890721a)

## Terraform Deep Dive

* [Terraform in 100 Seconds - YouTube](https://www.youtube.com/watch?v=tomUWcQ0P3k)
  * Cool I can deploy a VPS in google cloud
  * Where do I get the credentials
  * How do I access the VPS after
  * How do I install stuff on the VPS with cloudinit or Teraform
  * How do I do backups and restore
  * What about databases
  * What about object storage
* [Terraform explained in 15 mins | Terraform Tutorial for Beginners - YouTube](https://www.youtube.com/watch?v=l5k1ai_GBDE)
  * How is terraform different than [wiki.software.List.Ansible](Ansible.md)?
    * Terraform is about provisioning infrastructure while ansible is about configuration
    * Ansible is more mature than terraform
  * Terraform is all about version control management of your infrastructure, great for managing different environments such as development, testing, and production
  * Terraform takes two things into core
    * Terraform config, and terraform state
  * Providers are API plugins for Kubernetes, AWS, Azure Google Cloud etc....
  * Declarative vs Imperative
    * YOU DEFINE THE END STATE YOU DESIRE (Declarative)
    * Saying what to do would be an imperative approach
  * Terraform commands
    * refresh - get current state
    * plan - display changes required to get to desired state
    * apply - actually do the changes to get to the desired state
    * destroy - KILL EVERYTHING (Will also check what is running and make a plan)
* [8 Terraform Best Practices that will improve your TF workflow immediately - YouTube](https://www.youtube.com/watch?v=gxPykhPxRW0)
  1. NEVER EDIT THIS FILE terraform.tfstate
    * JSON file
    * This file is created by `terraform apply`
  2. The terraform.tfstate file should be managed using remote storage for teams
  3. To avoid two people editing the state file use state locking
    * Not all S3 storage backends support this
  4. When you lost terraform.tfstate, remember to use version control, S3 has this built in
  5. Use one state file per environment
  6. GitOps, host terraform code in git
  7. Who is allowed to make changes to the terraform code, MERGE REQUESTS
  8. Use continuos integration
* [A Comprehensive Guide to Terraform | by Yevgeniy Brikman | Gruntwork](https://blog.gruntwork.io/a-comprehensive-guide-to-terraform-b3d32832baca#.w9x897ywp)
  * You can buy IOC for $800 a MONTH [AWS Infrastructure as Code Library](https://gruntwork.io/infrastructure-as-code-library/)
  * Check hypothes

## Things you can do with Terraform

* Domain redirect HTTP 302
* Create a VM, install docker, and connect block storage
* Lambda CRON job
* SETUP A MAILGUN PROVIDER
* Setup a REVERSE PROXY
* Deploy a static site on S3 From SCRATCH
* Setup a site with HTTP BASIC AUTH
* Deploy an entire wordpress site

## Terraform Tutorials

* [Tutorials | Terraform | HashiCorp Developer](https://developer.hashicorp.com/terraform/tutorials)
* [Build Infrastructure - Terraform Docker Example | Terraform | HashiCorp Developer](https://developer.hashicorp.com/terraform/tutorials/docker-get-started/docker-build)
  * Let's try this one
  * 
* [An Introduction to Terraform. Learn the basics of Terraform in this… | by Yevgeniy Brikman | Gruntwork](https://blog.gruntwork.io/an-introduction-to-terraform-f17df9c6d180)
  * This is the tutorial I would start with, I really like the setting up AWS account steps

## Terraform example projects

* [futurice/terraform-examples: Terraform samples for all the major clouds you can copy and paste. The future, co-created.](https://github.com/futurice/terraform-examples)
* [brikis98/terraform-up-and-running-code: Code samples for the book "Terraform: Up & Running" by Yevgeniy Brikman](https://github.com/brikis98/terraform-up-and-running-code)

## Other Sources Judged

* [Hello, world: The Fargate/Terraform tutorial I wish I had – Section 411](https://section411.com/2019/07/hello-world/)
  * Waaay too complicated, I do need to setup a provider yet, I do not know Go yet
* [Using Terraform for Cloud Deployments - Part 1 - DEV Community 👩‍💻👨‍💻](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1)
  * Sucks, does not show how to setup AWS, too old