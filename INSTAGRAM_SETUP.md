# Instagram API Setup voor Premium Car Works

## Stap 1: Instagram Basic Display API Setup

1. Ga naar [Facebook Developers](https://developers.facebook.com/)
2. Maak een nieuwe app aan of gebruik een bestaande
3. Voeg "Instagram Basic Display" toe aan je app
4. Configureer de OAuth Redirect URI's

## Stap 2: Instagram Account Koppelen

1. Ga naar je Instagram account instellingen
2. Klik op "Apps and Websites" > "Tester Invites"
3. Accepteer de uitnodiging van je Facebook app
4. Ga naar "Apps and Websites" > "Authorized Apps"
5. Autoriseer je app

## Stap 3: Access Token Genereren

1. Ga naar [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)
2. Volg de stappen om een access token te genereren
3. Kopieer de access token

## Stap 4: Environment Variables

Maak een `.env` bestand aan in de root van je project:

```env
REACT_APP_INSTAGRAM_ACCESS_TOKEN=jouw_access_token_hier
```

## Stap 5: Testen

1. Start de development server: `npm start`
2. Ga naar de Gallery pagina
3. De echte Instagram posts zouden nu moeten laden

## Troubleshooting

- **Geen posts zichtbaar**: Controleer of je access token geldig is
- **CORS errors**: Zorg ervoor dat je app correct is geconfigureerd
- **Rate limiting**: Instagram heeft limieten op API calls

## Fallback

Als de Instagram API niet werkt, wordt automatisch mock data gebruikt zodat de website altijd functioneel blijft.

## Belangrijke Links

- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Facebook Developers](https://developers.facebook.com/)
- [Instagram API Permissions](https://developers.facebook.com/docs/instagram-basic-display-api/permissions) 