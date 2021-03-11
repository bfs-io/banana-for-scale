---
path: dotnet-core-6-blazor-crud-app-tutorial
date: 2021-03-11T16:07:35.637Z
title: .Net Core 6 - Blazor Crud App Tutorial
description: >-
  In this tutorial I will show how to build a simple CRUD app using Blazor and
  .Net Core 6 Preview
---
# Install .Net Core 6 Preview

Let's start by reading [this Microsoft announcement](https://devblogs.microsoft.com/dotnet/announcing-net-6-preview-1/) on .Net Core 6 Preview

You can find the download [here](https://dotnet.microsoft.com/download/dotnet/6.0).

Once .Net Core 6 Preview is installed, we can verify the version

```
dotnet --veresion
```

We can also view more info as well:

```
dotnet --info
```

I'm using MacOS for this article, but your output should look something like this:

```
.NET SDK (reflecting any global.json):
 Version:   6.0.100-preview.1.21103.13
 Commit:    b8a03527b2

Runtime Environment:
 OS Name:     Mac OS X
 OS Version:  11.2
 OS Platform: Darwin
 RID:         osx.11.0-x64
 Base Path:   /usr/local/share/dotnet/sdk/6.0.100-preview.1.21103.13/

Host (useful for support):
  Version: 6.0.0-preview.1.21102.12
  Commit:  9b2776d481

.NET SDKs installed:
  6.0.100-preview.1.21103.13 [/usr/local/share/dotnet/sdk]

.NET runtimes installed:
  Microsoft.AspNetCore.App 6.0.0-preview.1.21103.6 [/usr/local/share/dotnet/shared/Microsoft.AspNetCore.App]
  Microsoft.NETCore.App 6.0.0-preview.1.21102.12 [/usr/local/share/dotnet/shared/Microsoft.NETCore.App]

To install additional .NET runtimes or SDKs:
  https://aka.ms/dotnet-download
```

# Create the Blazor App

```
dotnet new blazorserver -o MyBlazorApp --no-https
```
