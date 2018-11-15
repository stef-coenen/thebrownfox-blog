---
layout: post
title: 'Atomic design principles applied'
date: 2017-05-09 18:00:00 +0200
categories: atomic sass
image: 2017-05-09/header-marked.png
---

Did you ever feel the need to give your sass files a bit more meaning? Then this one is for you. You might have read the [book "Atomic Design"](http://bradfrost.com/blog/post/atomic-web-design/) from Brad Frost. All the credit of this approach of course goes to him. In this blog post however, I will go into detail of how to put this in practice on your day to day work with your sass setup.

The approach I'm about to demonstrate you is created to give a meaningful structure to your sass files. So, let's start with asking yourself how do I structure my sass files? Do I just put them all in my sass folder? Do I create a components folder for components? Or another approach? And why do you do this?

My guess would be that you do this to have an understandable architecture for your files. Let's take an example, you are finishing up the header and start work on the search inside of the header. You have some general button styling. But for the search component it should of course hold a specific icon. And that icon should match the size of the input box next to it. So, you might create the following style rule:

```css
.header .search .btn-search {
    line-height: 1.4rem;
}
```

![Alignment of the search icon]({{ site.baseurl }}/design/img/2017-05-09/search-alignment.png)

But where do you put it? If you don't have much structure, you might just put it into the header file and be done with it.

But as it goes later on you will of course need that same styling applied on the search. That is, for some crazy reason the search should also appear half-way the page (perhaps someone from marketing asked you?). So, what do you do, you change the selector and create the following:

```css
.search .btn-search {
    line-height: 1.4rem;
}
```

After which your styling will be good. But your styling rule will (by accident) still remain in the header file. This shouldn't feel good of course as the search is not part of just the header anymore. So, it might be a good idea to approach this differently from the start and put your search in a different file from the beginning.

One way to approach this, would be to apply the atomic design principles from Brad Frost. More in detail information on how this done you can head over to his [blog](http://bradfrost.com/blog/post/atomic-web-design/) or buy his book "Atomic Design". In short, a website can be split up in three styling components. Starting with the smallest one we have: "Atoms", "Molecules" and "Organisms".

Let's take the search component in the header as an example. This component has a few elements, you have the header component around the search. The search component in whole which holds the input box and a search button. And the input box with next to it the button with the icon.

For these components the header would be an organism with the main goal to hold the components and possibly do adjustments to the grid system. In the header you would have the logo, the navigation and the search component. These would all be molecules. If we then zoom in further onto the search molecule the input and the button would both be atoms. As these are the smallest styled elements on the page.

![Header marked with the different types of components]({{ site.baseurl }}/design/img/2017-05-09/header-marked.png)

The folder/file structure of this approach would look like this:

![Folder structure]({{ site.baseurl }}/design/img/2017-05-09/folder-structure.png)

If we then hop over to the sass files. In my normal setup the main entry file for the sass setup would be the following:

```css
@import 'mixins/mixins';

@import 'globals/variables';

@import 'vendor/vendor';

@import 'globals/globals';

@import 'atoms/atoms';

@import 'molecules/molecules';

@import 'organisms/organisms';
```

I'd start by loading the mixins and variables as these can then be used further down.

The vendor is up next. It will be included this early as it helps for making adjustments later on so our styling possibly overrules the vendor.

Then we include the globals, the globals are common styling rules shared by all components. For example your grid system, the base font sizing, custom fonts, etc.

And then we load the atoms, molecules and organisms in that order so it all so bigger components overrule the smaller ones.

Inside the atoms folder we would then have a partial sass file called "\_atoms.scss". Which on his turn includes all the atoms, this causes the main entry file to be much more lightweight and more readable.

```css
@import 'body';

@import 'ul';

@import 'btn';

@import 'input';

@import 'nav';

@import 'img';
```

To conclude, the setup explained in this article could help you create a more manageable structure for your sass files. While also assisting in keeping your styling consistent across the site/app. As elements are likely to be styled twice.
