import { serialize, parse } from 'cookie';

export function setCookie(res, name, value, options = {}) {
  const cookie = serialize(name, value, options);
  console.log('cookie',cookie);
  res.setHeader('Set-Cookie', cookie);
}

export function getCookie(req, name) {
  return parse(req.headers.cookie || '')[name];
}