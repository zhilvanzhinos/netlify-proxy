export async function handler(event) {

  const target = "http://45.14.245.157:80";

  const path = event.path.replace("/.netlify/functions/proxy", "");

  const response = await fetch(target + path, {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body
  });

  const text = await response.text();

  return {
    statusCode: response.status,
    body: text
  };
}
