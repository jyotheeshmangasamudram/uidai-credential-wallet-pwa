const CACHE_NAME = "credential-wallet-v1";
const API_CACHE = "/api/credentials";

self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (
    request.method === "GET" &&
    new URL(request.url).pathname === API_CACHE
  ) {
    event.respondWith(handleCredentialRequest(request));
  }
});

async function handleCredentialRequest(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const networkResponse = await fetch(request);

    cache.put(request, networkResponse.clone());

    return networkResponse;
  } catch {
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
