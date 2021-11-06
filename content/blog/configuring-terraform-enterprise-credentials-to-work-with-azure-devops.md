---
path: config-terraform-enterprise-credentials-azure-devops
date: 2021-04-20T19:51:20.610Z
title: Configuring Terraform Enterprise Credentials for Azure DevOps
description: >-
  In this article I will share how to pass in the credentials block using Azure
  DevOps Pipeline YAML
---
Reference Materials:
[Terraform Enterprise Config with Azure Devops](https://cincycoder.wordpress.com/2019/10/15/terraform-enterprise-config-with-azure-devops/)\
[Understanding Azure Devops Variables](https://adamtheautomator.com/azure-devops-variables/)\
[TF CLI Configuration File](https://www.terraform.io/docs/cli/config/config-file.html)

## Terraform Cloud / Registry / Modules / module-name

The primary view for any given module will show provision instructions. Here you use these values or can open configuration designer.

## Provision Instructions

Copy and paste into your Terraform configuration and set values for the input variables. Or, design a configuration to easily use module and workspace outputs as inputs.

```
module "functionapp" {
  source  = "app.terraform.io/fairwayindependentmc/functionapp/az"
  version = "1.0.0"
  # insert required variables here
}
```

Furthermore, it will remind you that when running the CLI, you will need to configure credentials.

## Heads up

When running Terraform on the CLI, you must configure credentials in .terraformrc or terraform.rc  to access this module:

```
credentials "app.terraform.io" {

\# valid user API token:

\    token = "xxxxxx.atlasv1.zzzzzzzzzzzzz"

  }
```

## TF_CLI_CONFIG_FILE

These are the steps that we necessary to build the file, move it to the home directory, and export the file to TF_CLI_CONFIG_FILE, which is one place where Terraform will look for that value.

```
      - script: |
          RC_FILE=".terraformrc"
          cat > ${RC_FILE} << EOF
          credentials "app.terraform.io" {
            token = "$(terraform-api-token)"
          }
          EOF
          mv .terraformrc ~/.terraformrc
          export TF_CLI_CONFIG_FILE="~/.terraformrc"
        name: terraform_cloud_credentials
        displayName: Terraform Cloud Credentials
        workingDirectory: "$(Build.SourcesDirectory)/infra"
```
