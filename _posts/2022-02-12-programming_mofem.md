---
layout: post
title: Programming C++ with MoFEM
date: 2022-02-12 15:00:00
description: Code practices and useful resources for learning to code with MoFEM
tags: programming
categories: MoFEM
img: assets/img/posts/coding_stock.jpg
---

An extensive list of C++ standards features can be found here [(Under this link)](https://github.com/AnthonyCalandra/modern-cpp-features#stdany). 

### Modern C++17 standard features used by MoFEM

* class template argument deduction
* inline variable
* initializers for `if` and `switch`
* lambda capture of `this`
* `constexpr` lambda


### Modern C++14 standard features used by MoFEM


* binary literals
* generic lambda expressions
* lambda capture initializers
* return type deduction

```cpp
    inline auto getBcEntsPtr() {
      return boost::shared_ptr<Range>(shared_from_this(), &bcEnts);
    }
```

{% highlight c++ linenos %}
    inline auto getBcEntsPtr() {
      return boost::shared_ptr<Range>(shared_from_this(), &bcEnts);
    }
{% endhighlight %}

* decltype(auto)

```cpp
     auto dit = p_miit->numeredColDofsPtr->lower_bound(uid);
     decltype(dit) hi_dit;
```

* relaxing constraints on constexpr functions
* variable templates
* [[deprecated]] attribute


user-defined literals for standard library types
compile-time integer sequences
std::make_unique


### MoFEM features that distinguish it from other software like dealii, mfem, fenics, moose

* flexibility
* higher order approximation
* ??? 