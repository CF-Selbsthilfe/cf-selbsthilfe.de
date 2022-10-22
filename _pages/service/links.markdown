---
layout: with-title
title: Links
permalink: /service/links
---

Im Folgenden finden Sie Links zu weiteren Webseiten mit Informationen zu Mukoviszidose:

#### Mukoviszidose e.V.
\> <a href="https://www.muko.info" class="cf-a">https://www.muko.info</a>

#### Vereine und Regionalgruppen
{% for verein in site.data.vereine %}
<p><b>{{ verein.name }}</b><br>
{% if verein.info %}
{{ verein.info }}<br>
{% endif %}
> <a href="{{ verein.link }}" class="cf-a">{{ verein.link }}</a>
</p>
{% endfor %}

#### Landesverbände
{% for verband in site.data.landesverbaende %}
<p><b>{{ verband.name }}</b><br>
> <a href="{{ verband.link }}" class="cf-a">{{ verband.link }}</a>
<p>
{% endfor %}