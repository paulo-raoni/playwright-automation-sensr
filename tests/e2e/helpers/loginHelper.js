async function login(page, usuario, senha) {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[name="user"]', usuario);
  await page.fill('input[name="password"]', senha);
  await page.click('button[type="submit"]');
}
module.exports = { login };
