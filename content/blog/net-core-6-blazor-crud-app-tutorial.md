---
path: dotnet-core-6-blazor-crud-app-tutorial
date: 2021-03-11T16:07:35.637Z
title: .Net Core 6 - Blazor Crud App Tutorial
description: >-
  In this tutorial I will show how to build a simple CRUD app using Blazor and
  .Net Core 6 Preview
---
# Phase I

Preliminary tasks. Estimated time. 30 minutes.

## Install .Net Core 6 Preview

Let's start by reading [this Microsoft announcement](https://devblogs.microsoft.com/dotnet/announcing-net-6-preview-1/) on .Net Core 6 Preview

You can find the download [here](https://dotnet.microsoft.com/download/dotnet/6.0).

Once .Net Core 6 Preview is installed, we can verify the version

```
~$ dotnet --veresion
```

We can also view more info as well:

```
~$ dotnet --info
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

## Create the Blazor App

```
~$ dotnet new blazorserver -o BlazorApp --no-https
```

Let's inspect the directory `BlazorApp`

```
~$ cd BlazorApp
```

If successful, your directory contents should look something like this:

```
total 56
drwxr-xr-x  17 mike.hacker  staff   544 Mar 11 10:42 .
drwxr-xr-x   3 mike.hacker  staff    96 Mar 11 10:40 ..
drwxr-xr-x  12 mike.hacker  staff   384 Mar 11 10:43 .git
-rw-r--r--   1 mike.hacker  staff   387 Mar 11 10:40 App.razor
-rw-r--r--   1 mike.hacker  staff   141 Mar 11 10:40 BlazorApp.csproj
drwxr-xr-x   4 mike.hacker  staff   128 Mar 11 10:40 Data
drwxr-xr-x   8 mike.hacker  staff   256 Mar 11 10:40 Pages
-rw-r--r--   1 mike.hacker  staff   717 Mar 11 10:40 Program.cs
drwxr-xr-x   3 mike.hacker  staff    96 Mar 11 10:40 Properties
-rw-r--r--   1 mike.hacker  staff     0 Mar 11 10:42 READMD.md
drwxr-xr-x   7 mike.hacker  staff   224 Mar 11 10:40 Shared
-rw-r--r--   1 mike.hacker  staff  1753 Mar 11 10:40 Startup.cs
-rw-r--r--   1 mike.hacker  staff   392 Mar 11 10:40 _Imports.razor
-rw-r--r--   1 mike.hacker  staff   195 Mar 11 10:40 appsettings.Development.json
-rw-r--r--   1 mike.hacker  staff   192 Mar 11 10:40 appsettings.json
drwxr-xr-x   7 mike.hacker  staff   224 Mar 11 10:40 obj
drwxr-xr-x   4 mike.hacker  staff   128 Mar 11 10:40 wwwroot
```

Some of the key files are:

```
BlazorApp.csproj defines the app project and its dependencies.
Program.cs // the entry point for the app that starts the server.
Startup.cs // where you configure the app services and middleware.
App.razor // the root component for the app.
./Pages // contains some example web pages for the app.
```

## Run the App

```
~$ dotnet watch run
```

![Screenshot of Blazor running in the web browser.](/static/screenshot-blazor-tutorial-run.png "Initial Blazor Run")

Let's take a look at the contents of the page that we are viewing.

First let's view our code with VSCode. This makes sense since we are working with a Microsoft code-base, and it is logical to use a Microsoft supplied IDE such as VSCode. We could have used Visual Studio for MacOS alternativly, however while writing this article, I was mostly interested in specifically researching the progress of the recently released .Net Core 6 on MacOS and specifically what limitations exist when Visual Studio is not used. Before jumping immediatly to Visual Studio, I may even prefer to evaluate something like `OmniSharp/Kulture` on Sublime Text.

```
// Pages/Index.razor
@page "/"
<h1>Hello, world!</h1>
Welcome to your new app.
<SurveyPrompt Title="How is Blazor working for you?" />
```

Notice the first line above is prefixed with a double forward slash \`//\`. This is this C# comment syntax.

# Phase II

Add the CRUD functionality. Estimated time. 30 Minutes.
