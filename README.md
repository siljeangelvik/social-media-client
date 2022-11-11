# Social Media Client

**Forked:** [NoroffFEU Project](https://github.com/NoroffFEU/social-media-client)  
**GitHub:** [Repo](https://github.com/siljeangelvik/social-media-client-angelvik/tree/workflow)  
**Course Assignment:** [Workflow](https://noroff-content.gitlab.io/feu/workflow/ca.html)

![Jest](https://github.com/siljeangelvik/social-media-client-angelvik/actions/workflows/jest.yml/badge.svg)
"description": "![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)",

## Issues:

- Login form modal closes on invalid input
- missing . in href
- console in browser gives feedback: warning  
  "Some cookies are misusing the recommended 'SameSite' attribute"

## Notes:

- cannot resolve directories/files
- sass/bootstrap is not installed/used

- after installing prettier and eslint: 3 high severity vulnerabilities  
  ran command: npm audit fix --force (4 low severity vulnerabilities)

#### Other:

- eslint is auto-activated in my editor, turn it off?
- eslint is configured manually
- Code Editor Setting: Tools / Languages & Framework / Actions on Save

- Cannot commit files from folders: jest and cypress

- Error feedback on commands:
  npm run dev
  npm run build-vite

![build-vite.png](./issues/img/build-vite.png)

---

## Resources:

- [Workflow Status Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)
- [Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)
- [Prettier Pre-Commit Hook](https://prettier.io/docs/en/precommit.html)
- [npm commands](https://docs.npmjs.com/cli/v7/commands)
- [ESLint JavaScript](https://eslint.org/docs/latest/developer-guide/working-with-rules)
- [Simple SASS Compiler Setup](https://sprucecss.com/blog/the-simplest-sass-compile-setup)
- [Vite Docs Guide](https://vitejs.dev/guide/)

### Tools

**Bundler:** Vite / Webpack
**Formatter:** Prettier
**Linting:** ESLint
**Unit Tester:** Jest / Cypress
**E2E Tester:** Cypress