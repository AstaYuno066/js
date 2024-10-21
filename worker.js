
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Example: Fetching content from IPFS
  const ipfsHash = 'QmWYGVf2sa43s443YQ1JD57LFDCytYZvAM26We4h3DQ9iK';
  const ipfsUrl = `https://ipfs.io/ipfs/${ipfsHash}`;

  try {
    const response = await fetch(ipfsUrl);
    const content = await response.text();

    return new Response(content, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (err) {
    console.error('Error fetching content from IPFS:', err);
    return new Response('Internal Server Error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
