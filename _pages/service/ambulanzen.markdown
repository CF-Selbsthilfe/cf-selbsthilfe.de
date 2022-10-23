---
layout: with-title
title: CF Ambulanzen
permalink: /service/ambulanzen
---

Auf dieser Seite erhalten Sie einen Überblick der in der Region ansässigen Muko-Ambulanzen. Sollten Sie eine fehlende Spezialambulanz für Kinder und Erwachsene vermissen, so teilen Sie uns dies bitte direkt per Kontaktaufnahme mit.

{% for klinik in site.data.kliniken %}
### {{ klinik.name }}
{% if klinik.info %}
{{ klinik.info }}
{% endif %}

Adresse:
{{ klinik.adress }}

<table>
    <tr>
        <td class="contact-left"><i class="fa-solid fa-phone"></i> Telefon: </td>
        <td>{{ klinik.telefon }}</td>
    </tr>
    <tr>
        <td class="contact-left"><i class="fa-solid fa-fax"></i> Fax: </td>
        <td>{{ klinik.fax }}</td>
    </tr>
    <tr>
        <td class="contact-left"><i class="fa-solid fa-envelope"></i> Mail: </td>
        <td><a href="mailto:{{ klinik.mail }}" class="cf-a">{{ klinik.mail }}</a></td>
    </tr>
    <tr>
        <td class="contact-left"><i class="fa-regular fa-globe"></i> Webseite: </td>
        <td><a href="{{ klinik.web }}" class="cf-a">{{ klinik.web }}</a></td>
    </tr>
</table>
<br>
{% endfor %}