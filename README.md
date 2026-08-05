# Botkyrkas Ordfest – hemsida

Statisk hemsida för **Botkyrkas Ordfest**, ett läsfrämjande projekt som drivs av
föreningen **Banbrytarna**. Sajten är byggd i ren HTML/CSS/JS utan byggsteg –
lätt att hosta, lätt att redigera.

## Struktur

| Fil | Innehåll |
|---|---|
| `index.html` | Startsida – hero, siffror, "Så fungerar det", årets tema, nyheter, partners |
| `om.html` | Om Botkyrkas Ordfest & Banbrytarna |
| `for-skolor.html` | Info för skolor + intresseanmälan |
| `for-larare.html` | Lärarmaterial, viktiga datum, inlämning av bidrag, FAQ |
| `arets-forfattare.html` | Årets författare |
| `arets-jury.html` | Årets jury |
| `prisgalan.html` | Prisgalan + fotogalleri |
| `antologin.html` | Antologin (samarbete med Bokusgruppen) |
| `unga-roster.html` | Publicerade elevtexter |
| `tidigare-vinnare.html` | Vinnare år för år |
| `samarbeten.html` | För sponsorer och partners |
| `nyheter.html` | Nyheter |
| `kontakt.html` | Kontaktuppgifter + formulär |
| `css/` | `style.css` (all styling) och `fonts.css` (självhostade typsnitt) |
| `js/main.js` | Mobilmeny, dropdowns, scroll-animationer |
| `assets/img/` | Optimerade foton (+ `thumbs/` för galleriet) |
| `assets/fonts/` | Luckiest Guy (display) & Figtree (brödtext), självhostade |

## Grafisk profil

- **Vinröd/bordeaux** `#741c2b` (primär), mörkare toner för footer/text
- **Guld** `#c9a15e` (accent), **varm off-white** `#fdfaf4` (bakgrund)
- Logotypen är återskapad som inline-SVG (bågformad text i Luckiest Guy)
  direkt i sidhuvud/sidfot – byt gärna mot original-logotypen som SVG/PNG
  om ni har den som fil.
- Typsnitten hostas lokalt (bra för GDPR – inga anrop till Google Fonts).

## Formulären

Alla tre formulär (intresseanmälan, inlämning av bidrag, kontakt) postar till
[FormSubmit](https://formsubmit.co) som vidarebefordrar till
`botkyrkasordfest@gmail.com`.

**Viktigt första gången:** när det första formuläret skickas in mejlar
FormSubmit en aktiveringslänk till er adress – klicka på den, därefter
levereras alla svar. Vill ni hellre använda t.ex. Google Forms är det bara att
byta `action`-attributet i formulären.

Filuppladdningen för tävlingsbidrag har en storleksbegränsning hos FormSubmit.
För större volymer av bidrag rekommenderas på sikt en dedikerad
formulärtjänst eller delad inlämningsmapp.

## Att uppdatera innehåll

Sidorna är vanlig HTML – öppna filen och redigera texten. Platser som väntar
på riktigt innehåll är markerade med "Presenteras snart" / "publiceras här":

- Årets tema (index + för lärare)
- Årets författare och jury (namn, foton, beskrivningar)
- Viktiga datum (exakta datum)
- Vinnarlistor, antologier och elevtexter
- Partnerlogotyper (byt ut "Din logotyp här?"-rutorna)

Nya foton: lägg en webboptimerad kopia (max ~1800 px) i `assets/img/`.

## Hosting

Sajten är helt statisk och kan hostas var som helst – GitHub Pages, Netlify,
Vercel eller valfritt webbhotell. För GitHub Pages: aktivera Pages för
repot (Settings → Pages → Deploy from branch) så fungerar allt direkt
(`.nojekyll` ligger redan i roten).

## Bildrättigheter

Foton från prisgalan är tagna av fotografen "MV" (vattenstämpel i bild).
Flera bilder visar identifierbara personer, även minderåriga – säkerställ att
samtycke/bildtillstånd finns innan sajten publiceras offentligt.
