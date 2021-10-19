---
path: 'exploring-pulumi-crosswalk-for-kubernetes '
date: 2021-10-19T21:11:57.011Z
title: 'Exploring Pulumi Crosswalk for Kubernetes '
description: Making Kubernetes Accessible to Everyone
---
Pulumi Crosswalk is a collection of libraries that use well-architected best practices to make common infrastructure-as-code tasks easier and more secure.

Pulumi exposes 100% of the Kubernetes API in `pulumi/kubernetes` which means you use modern programming practices to reduce YAML/JSON complexity, repetition, and encapsulate workloads effectively. Crosswalk revamps the Kubernetes API resource composition, but produces the exact semantic API output type. The ability to drop into and inject a given API type’s raw spec is maintained through out.

**Pulumi Kubernetes Extensions**

Many of the Kubernetes API fields are deeply nested and require users to specify the same values over and over across different resources. While this input is necessary for Kubernetes to operate, it’s not very friendly to the people writing it. Pulumi's Kubernetes Extensions `kx` library simplifies the declaration of Kubernetes resources.

**Sane Defaults**

Less boilerplate and easier to use. Common configurations require minimal code.

**Simplified syntax for declaring and composing Kubernetes resources**

Reference objects vs string references across resources.

**Idiomatic Kubernetes**

Don't reinvent the wheel; no new API resources to learn. Make the existing APIs easier to use while still providing the full API for production use cases.

The `kx` library takes full advantage of being defined in TypeScript, not in YAML. This enables the use of functions, overloading, type-checking, and many other API design tools.

**Pulumi Query**

`pulumi/query`

Exposes Kubernetes through a library of streaming queries to write apps that can tail API resources, discover distinct versions of a given Pod, or inform you of which micro-services are publicly exposed to the Internet.

**Pulumi Kubernetes Operator**
Use the Pulumi Kubernetes Operator to manage the deployment of stacks based on commits to specific Git branches.

The Pulumi Kubernetes Operator is an extension pattern that enables Kubernetes users to create a Stack as a first-class API resource, and use the StackController to drive the updates of the Stack until success.

Deploying Pulumi Stacks in Kubernetes provides the capability to build out CI/CD and automation systems into your clusters, creating native support to manage your infrastructure alongside your Kubernetes workloads.

To work with the operator, we’ll need to follow these steps.
