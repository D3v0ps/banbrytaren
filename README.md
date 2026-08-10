# Banbrytarna – hemsida

Statisk hemsida för föreningen **Banbrytarna** – en läsfrämjande förening som
ger ordet till nästa generation. Här presenteras föreningen, ungdomsnätverket,
aktiviteterna och **Ordfesten**, Banbrytarnas årliga läs- och skrivfestival för
unga i Botkyrka. Byggd i ren HTML/CSS/JS utan byggsteg – lätt att hosta, lätt
att redigera.

## Struktur

| Fil | Innehåll |
|---|---|
| `index.html` | Startsida – vision, verksamhetsrutor, årets tema, siffror, media, partners |
| `om-oss.html` | Bakgrund (Nora Khalil & Yani) + teamet |
| `var-verksamhet.html` | Hur vi arbetar, ungdomsnätverket, media/nyheter |
| `ordfesten.html` | Ordfesten – om projektet |
| `ordfesten-2026.html` | Årets tema, författare, två jurygrupper, prisgalorna |
| `anmal-klass.html` | Intresseanmälan för klasser (2026 stängd, 2027 öppnar vårterminen) |
| `skicka-bidrag.html` | Instruktioner + formulär för tävlingsbidrag (flera filer) |
| `ordfesten-2025.html` | Arkiv – galleri och siffror från första upplagan |
| `aktiviteter.html` | Writing camp, poesikväll, författarmöten, skrivworkshops, läslov + anmälan |
| `for-foretag.html` | Boka oss, bli partner, samarbetspartners |
| `kontakt.html` | Kontaktuppgifter + formulär |
| `tack.html` | Tacksida efter formulärinskick |
| `css/` | `style.css` (all styling) och `fonts.css` (självhostade typsnitt) |
| `js/main.js` | Mobilmeny, dropdowns, scroll-animationer |
| `assets/img/` | Optimerade foton (+ `thumbs/` för galleriet) |
| `assets/fonts/` | Luckiest Guy (display) & Figtree (brödtext), självhostade |

## Grafisk profil

- **Vinröd/bordeaux** `#741c2b` (primär), mörkare toner för footer/text
- **Guld** `#c9a15e` (accent), **varm off-white** `#fdfaf4` (bakgrund)
- Två ordbilder som inline-SVG (bågformad text i Luckiest Guy):
  **Banbrytarna** i sidhuvud/sidfot och **Botkyrkas Ordfest** på Ordfest-sidorna.
  Byt gärna mot originallogotyper som SVG/PNG när de finns som filer.
- Typsnitten hostas lokalt (bra för GDPR – inga anrop till Google Fonts).

## Formulären

Alla formulär (klassanmälan, bidragsinlämning, aktivitetsanmälan, kontakt)
postar till [FormSubmit](https://formsubmit.co) som vidarebefordrar till
`botkyrkasordfest@gmail.com`, och skickar sedan besökaren till `tack.html`.

**Viktigt första gången:** när det första formuläret skickas in mejlar
FormSubmit en aktiveringslänk till er adress – klicka på den, därefter
levereras alla svar.

Bidragsformuläret tillåter flera bifogade filer (en fil per elev).
FormSubmit har en storleksgräns per inskick – vid stora klasser kan mejlvägen
(instruktionerna på sidan) användas som alternativ.

## Innehåll som väntar på material

- Teamfoton (`om-oss.html`) och jurybilder (`ordfesten-2026.html`)
- Filmen om Ordfesten (platshållare på `index.html` och `var-verksamhet.html`)
- Datum/tider för writing camp, poesikvällar m.m. (`aktiviteter.html`)
- Partnerlogotyper (idag text-chips på `index.html`/`for-foretag.html`)
- Styrelse och advisory board är medvetet utelämnade tills vidare

## Hosting

Sajten är helt statisk – GitHub Pages, Vercel, Netlify eller valfritt
webbhotell fungerar (`.nojekyll` ligger i roten). Domän: `banbrytarna.se`
(og-taggar och canonical pekar dit).

## Bildrättigheter

Foton från prisgalan är tagna av fotografen "MV" (vattenstämpel i bild).
Flera bilder visar identifierbara personer, även minderåriga – säkerställ att
samtycke/bildtillstånd finns innan sajten publiceras offentligt.
