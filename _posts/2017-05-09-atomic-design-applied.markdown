---
layout: post
title:  "Atomic design principles applied"
date:   2017-05-09 18:00:00 +0200
categories: atomic sass
---

Did you ever feel the need to give your Sass files a bit more meaning? Than this one is for you. You might have read the [book "Atomic Design"](http://bradfrost.com/blog/post/atomic-web-design/) from Brad Frost. All the credit of this approach ofcourse goes to him. In this blog post however I will go into detail of how to put this in practice on your day to day work in your Sass setup.

The approach I'm about to demonstrate you is created to give a meaningfull structure to your Sass files. So let's start with asking yourself how do I strucuture my Sass files? Do I just put them all in my Sass folder? Do I create a components folder for components? Or another approach? And why do you do this?

My guess would be that you do this to have an understandable architecture for your files. Let's take an example, you are finishing up the header and start work on the search inside of the header. You have some general button styling. But for the search component it should of course hold a specific icon. And that icon should match the size of the input box next to it. So you might ceate the following style rule:

{% highlight css %}
    .header .search .btn-search { line-height: 1.4rem; }
{% endhighlight %}

But where do you put it? If you don't have much structure, you might just put it into the header file and be done with it.

But as it goes later on you will of course need that same styling applied on the search. That is, for some crazy reason the search should also appear half-way the page (perhaps someone from the markting asked you?). So what do you do, you change the selector and create the following:

{% highlight css %}
    .search .btn-search { line-height: 1.4rem; }
{% endhighlight %}

After which your styling will be good. But your styling rule will (by accident) still remain in the header file. This shouldn't feel good of course as the search is not part of only the header anymore. So it might be a good idea to approach this differently from the start and put your search in a different file from the beginning.

So one way to approach this, would be to apply the atomic design principles from Brad Frost. More in detail information on how this done you can head over to his [blog](http://bradfrost.com/blog/post/atomic-web-design/) or buy his book "Atomic Design". In short a website can be split up in three styling components. Starting with the smallest one we have "Atoms", "Molecules" and "Organisms".

Let's take the search component in the header as an example. This component has a few elements, you have the header component around the search. The search component in whole which holds the input box and a search button. And the input box with next to it the button with the icon.

For these components the header would be an organism with the main goal to hold the components and possibly do adjustments to the grid system. In the header you would have the logo, the navigation and the search component. These would all be molecules. If we then zoom in further onto the search molecule the input and the button would both be atoms. As these are the smallest styled elements on the page.

