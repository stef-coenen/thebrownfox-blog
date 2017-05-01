---
layout: page
title: Home
---

<section class="posts">
    {% for post in site.posts %}
        <article class="post">
            <h2 class="post-title">
                <a href="{{ site.baseurl }}{{ post.url }}">
                    {{ post.title }}
                </a>
            </h2>

            <p class="post-date">{{ post.date | date_to_string }}</p>

            <p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }} <a href="{{ site.baseurl }}{{ post.url }}">...</a></p>
        </article>
    {% endfor %}
</section>
