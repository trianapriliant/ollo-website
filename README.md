# Ollo Profile — Official Website

Website resmi Ollo App (personal finance management) dibangun dengan Next.js.

## Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| **Framework** | Next.js | 16.1.1 |
| **UI Library** | React | 19.2.3 |
| **Language** | TypeScript | ^5 |
| **Styling** | CSS Modules | Built-in |
| **Icons** | Iconoir React | ^7.11.0 |
| **Deployment** | Vercel | — |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, features, voice quick record spotlight |
| `/features` | Feature categories (core, more, advanced) |
| `/pricing` | Subscription plans (Free, Monthly, 6-Month, Annual, Lifetime) |
| `/download` | Download page with Play Store & App Store links |
| `/about` | About Ollo, mission, values, developer info |
| `/roadmap` | Completed & upcoming features |
| `/faq` | Frequently asked questions |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/credits` | Tech stack credits |
| `/beta` | Beta tester registration |

## App Info (Update saat ada versi baru)

- **Current Version**: 1.4.3+140
- **Platforms**: Android, iOS
- **Min Android**: Android 5.0 (Lollipop)
- **Target Android**: Android 15
- **Size**: ~26 MB
- **Play Store**: https://play.google.com/store/apps/details?id=com.ollo.ollo
- **App Store**: https://apps.apple.com/us/app/ollo-budget-money-manager/id6763823803

## Localization

Website mendukung 2 bahasa: English, Indonesian.
Aplikasi mendukung 7 bahasa: English, Indonesian, Spanish, Hindi, Japanese, Mandarin, Korean.

## Development

```bash
npm run dev    # Development server di http://localhost:3000
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint
```

## Deployment

Deploy otomatis via Vercel saat push ke branch main.

## Related Projects

- **Ollo App**: `/Users/trian/Projects/Ollo` — Flutter mobile app
- **Ollo Backend**: `/Users/trian/Projects/Ollo/backend` — Node.js cloud sync API
- **Ollo Web Dashboard**: `/Users/trian/Projects/Ollo/web-dashboard` — Admin dashboard
