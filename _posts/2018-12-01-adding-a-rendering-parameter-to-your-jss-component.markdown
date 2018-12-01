---
layout: post
title: 'Adding a rendering parameter to your JSS component'
date: 2018-12-01 10:00:00 +0200
categories: sitecore jss react
image: 2018-12-01/jss-rendering-final.jpg
---

Last time we created our first JSS component. It was a rather basic component which can be the start of a Sitecore JSS page. When you start creating more components you might come across the need to make small variations to some components. If these variations do not change the functionality of the component then they are called "rendering parameters". Or in JSS "params" for short.

## Using a rendering parameter

Defining and using your rendering param is pretty straight forward. The JSS SDK passes along your rendering parameters into the properties of the React component. You can access them in the following way:

```javascript
    this.props.params.<your-rendering-param>
```

In the hello world component of last time, an example of a rendering parameter could be the background color. To do this, a background color can be set as the rendering parameter, and afterwards used in style of the component. The usage would then look like this:

```javascript
    render() {
      let backgroundColorStyle = { backgroundColor: this.props.params.backgroundColor };
      return (
        <div style={backgroundColorStyle}>
          <Text tag="h1" field={this.props.fields.title} />
        </div>
      );
    }
```

I've left out the constructor in this example as nothing changed here. So no need to define your params in the constructor of the component first. If the param itself is not defined yet, it will plain simply not be outputted. If you don't believe me, try it yourself by running your app in disconnected mode like last time with the following command: `jss start`

## Updating the component definition

However before you actually use it, it also needs to be defined on the component definition. Otherwise Sitecore will later on not understand what this parameter is. Open up your definition file (`HelloWorld.sitecore.js` in the following path: `/sitecore/definitions/components/`

On the component definition you will need to add the params array. Where we will mentioned the expected params. In the following manner:

```javascript
addComponent(manifest, {
    name: 'Hello-World',
    displayName: 'Hello-World',
    fields: [{ name: 'title', type: CommonFieldTypes.SingleLineText }],
    params: ['backgroundColor']
});
```

## Setting a rendering parameter

Using the param is one thing, but setting the rendering parameter another. To do this, we hop on over to the `en.yml` route data. (`/data/routes/en.yml`). Here we have to add the params into the content of the component. You can do this in the following way:

```yml
placeholders:
    jss-main:
        - componentName: Hello-World
          fields:
              title: Hello World
          params:
              backgroundColor: green
```

## The final result

With this content data set, and running the app with the `jss start` command we get the following result:

![JSS Rendering Param Final]({{site.baseurl}}/design/img/2018-12-01/jss-rendering-final.jpg)

Congratulations on your first rendering parameter in JSS.

If you missed a turn during the steps don't hesitate to take a look into [the Github repository](https://github.com/stef-coenen/sitecore-jss-first-steps) containing the results of the steps we took. The specific steps you can see in [this](https://github.com/stef-coenen/sitecore-jss-first-steps/commit/183853d6b17be36aa04e5faf5b2b4e3ac1ba589f) commit.
