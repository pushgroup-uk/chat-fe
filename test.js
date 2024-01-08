const options = {
  method: 'POST',
  headers: {'X-API-Key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJsYW5ndGFpbC1hcGkiLCJzdWIiOiJjbHB3bjJ4M3AwMDAzbDcwODhzejdmZWZkIiwianRpIjoiY2xxMXlzN2xwMDAwMWpvMDhjNGxtbjV6ZCIsImlhdCI6MTcwMjM2MjY3Nn0.y9b6TeOseJYwO9aJKMKuXGP0yDi4yqerB9Xp5XfkTkhX1hBGnijFjG66JiZrlnmELuZRzpZ4XHb22SMq7FA0BQ', 'content-type': 'application/json'},
  body: '{"stream":false,"user_id":"user_123","seed":123,"doNotRecord":false,"messages":[{"role":"user","content":"Hello"}]}'
};

fetch('https://api.langtail.com/push-EiMrQa/langtail-playground/playground/staging', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
