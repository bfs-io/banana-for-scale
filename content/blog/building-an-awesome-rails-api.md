---
path: /awesome-rails-api
date: 2020-03-20T18:56:42.375Z
title: Building An Awesome Rails API
description: 'Using Ruby on Rails to build a RESTful JSON API '
---
Need an API? Ruby on Rails presents a strong argument for an API framework. True, there are some [Performance Considerations](https://www.mskog.com/posts/42-performance-tips-for-ruby-on-rails/) to take into account and we probably won't be seeing those [sub-millisecond](https://www.speedshop.co/2015/05/27/100-ms-to-glass-with-rails-and-turbolinks.html) performances that we might see if we were using something like [Elixr](https://thoughtbot.com/blog/testing-a-phoenix-elixir-json-api) - enter Haskell, but there are still plenty of valid reasons for choosing Ruby on Rails for an API.
- Active Record, despite its flaws, is still quite useful for a quick CRUD-based application where the Model is relatively flat (eg. not a lot of class hierarchies). There are [alternatives](https://github.com/TalentBox/sequel-rails) to AR that we won't discuss here and for this tutorial we will be working with AR.
- Ruby on Rails is written in Ruby, a dynamic, general-purpose programming language. Also RoR is a mature framework which means refined and stable code.
- Building applications in RoR is fast and easy, which is an excellent choice if you’re on a tight budget and/or under tight deadlines.

### Bonus
Ruby 3.0 is scheduled to release this December with claims of a 3x3 performance boost from [Matz](https://www.youtube.com/watch?v=2g9R7PUCEXo)

### So ...
Shall we explore this Rails API thing?

![Whale Jumping](https://media.giphy.com/media/T1wXTcV8KhVHq/giphy.gif)

### Getting Started

This tutorial will cover building the application on OS X using Rails 6 and Ruby 2.7.0

Apple bundles Ruby with OS X, however, for development purposes we should use RVM for managing our own builds and versions. Here is an [article](https://usabilityetc.com/articles/ruby-on-mac-os-x-with-rvm/) from Jeffrey Morgan explaining some of the setup with this configuration.

### Deploy Early and Often
Heroku is a great choice for RoR development and offers a service at no-cost to get started. We've named our application

```awesome-rails-api```
