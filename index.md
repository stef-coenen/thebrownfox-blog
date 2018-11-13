---
layout: page
title: Home
---

<section class="posts">
    {% for post in site.posts %}
        <article class="post" data-href="{{ site.baseurl }}{{ post.url }}">
            <div class="post-heading">
                <h2 class="post-title">
                    {{ post.title }}
                </h2>

                <p class="post-date">{{ post.date | date_to_string }}</p>
                {% if post.image %}
                    <div class="post-media">
                        <img class="post-image" src="{{ site.baseurl }}/design/img/{{ post.image }}" />
                    </div>
                {% endif %}
            </div>
            <div class="post-body">
                <p>{{ post.excerpt | remove: '<p>' | remove: '</p>' }} <a href="{{ site.baseurl }}{{ post.url }}">...</a></p>
            </div>
        </article>
    {% endfor %}

</section>
