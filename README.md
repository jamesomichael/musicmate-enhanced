[![musicmate](https://mexhjsdibsoshbepazwt.supabase.co/storage/v1/object/public/musicmate-enhanced/musicmate.png)](https://musicmate.jamesmichael.dev)

[![Netlify Status](https://api.netlify.com/api/v1/badges/79adfa93-df1d-4af5-b139-664f90d05941/deploy-status)](https://musicmate.jamesmichael.dev)
[![Storybook](https://img.shields.io/badge/Storybook-View-ff4785?logo=storybook&logoColor=white)](https://jamesomichael.github.io/musicmate-enhanced)

musicmate is a web-based Spotify clone built with Next.js, Tailwind CSS, Redux Toolkit, and TypeScript. It leverages Spotify's [Web API](https://developer.spotify.com/documentation/web-api) and [Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk) to deliver a faithful, Spotify-like experience, with seamless playback for Spotify Premium users.

> **Please note**: Access to musicmate is currently by invitation only. Please [get in touch](mailto:musicmate@jamesmichael.dev?subject=Access%20Request) to request access.

![Artist](https://mexhjsdibsoshbepazwt.supabase.co/storage/v1/object/public/musicmate-enhanced/artist-fontaines-dc.jpg)

<p align="center">
  <img src="https://mexhjsdibsoshbepazwt.supabase.co/storage/v1/object/public/musicmate-enhanced/album-linkin-park_mob.jpg" width="22%" />
  <img src="https://mexhjsdibsoshbepazwt.supabase.co/storage/v1/object/public/musicmate-enhanced/artist-gorillaz_mob.jpg" width="22%" />
  <img src="https://mexhjsdibsoshbepazwt.supabase.co/storage/v1/object/public/musicmate-enhanced/library-1_mob.jpg" width="22%" />
  <img src="https://mexhjsdibsoshbepazwt.supabase.co/storage/v1/object/public/musicmate-enhanced/player-wolf-alice-2_mob.jpg" width="22%" />
</p>

## **Features**

-   View your Spotify library (with infinite scroll for pagination)
-   Search for playlists, artists, albums, and tracks
-   Enjoy full local playback **(requires Spotify Premium)**
-   Control active external devices **(requires Spotify Premium)**
-   Experience a fully responsive interface, optimised for both desktop and mobile

### **Playback Controls**

-   Play/pause
-   Seek
-   Skip forward/back
-   Toggle shuffle/repeat
-   Volume control

## **Tech Stack**

-   **TypeScript**
-   **Next.js (App Router)**
-   **Tailwind CSS**
-   **Redux Toolkit**
-   **Motion**
-   **Storybook**

## **Local Development**

### **Prerequisites**

-   Node.js (v20+ recommended)
-   npm
-   [A Spotify developer account](https://developer.spotify.com/)

### **Getting Started**

1. Install the required dependencies:

```bash
npm install
```

2. Create a `.env.local` file:

```bash
touch .env.local
```

3. Add the following environment variables to `.env.local`:

> Ensure you add your own _client ID_ and _secret_. These can be found in your app in the [developer dashboard](https://developer.spotify.com/dashboard).

```bash
NEXT_PUBLIC_CLIENT_ID="YOUR_SPOTIFY_CLIENT_ID"
NEXT_PUBLIC_CLIENT_SECRET="YOUR_SPOTIFY_CLIENT_SECRET"
NEXT_PUBLIC_REDIRECT_URI=http://127.0.0.1:3000/api/callback
NEXT_PUBLIC_SPOTIFY_AUTH_URL=https://accounts.spotify.com/authorize
NEXT_PUBLIC_API_URL=http://127.0.0.1:3000
```

4. Start the development server:

```bash
npm run dev
```
